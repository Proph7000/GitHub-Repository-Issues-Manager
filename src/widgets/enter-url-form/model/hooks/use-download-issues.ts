import { toast } from 'react-toastify'

import { IIssue, useIssuesStore, IRepo } from '@entities/model'

import { fetchIssues, fetchRepo } from '../../api'

export function useDownloadIssues(getLink: () => string) {
  const setIssues = useIssuesStore((state) => state.setIssues)
  const setRepoInfo = useIssuesStore((state) => state.setRepoInfo)
  const reset = useIssuesStore((state) => state.reset)
  const getNoIssues = useIssuesStore((state) => state.getNoIssues)

  const handleDownloadIssues = async () => {
    try {
      const link = getLink()

      useIssuesStore.persist.setOptions({
        name: link,
      })

      if (localStorage.getItem(link)) {
        useIssuesStore.persist.rehydrate()
      }

      if (!localStorage.getItem(link)) {
        reset()
      }

      if (!getNoIssues()) {
        return
      }

      let issuesResponse
      let repoInfo

      const responses = await Promise.allSettled([
        fetchIssues(link),
        fetchRepo(link),
      ])

      if (responses[0].status === 'fulfilled') {
        issuesResponse = responses[0].value.data as IIssue[]
      }

      if (responses[1].status === 'fulfilled') {
        repoInfo = responses[1].value.data as IRepo
      }

      if (responses[0].status === 'rejected') {
        toast.error('Oops...')

        return
      }

      if (repoInfo) {
        setRepoInfo({
          ownerLink: repoInfo.owner.html_url,
          ownerName: repoInfo.owner.login,
          repoLink: repoInfo.html_url,
          repoName: repoInfo.name,
          stars: repoInfo.stargazers_count,
        })
      }

      const issues = issuesResponse?.map((item) => ({
        ...item,
        id: item.id.toString(),
      }))

      const closedIssues: IIssue[] = []
      const openedIssues: IIssue[] = []

      issues?.forEach((issue) => {
        switch (issue.state) {
          case 'closed':
            closedIssues.push(issue)

            break
          case 'open':
          default:
            openedIssues.push(issue)

            break
        }
      })

      setIssues(closedIssues, 'closed')

      setIssues(openedIssues, 'open')
    } catch (error) {
      toast.error('Oops... Something went wrong...')
    }
  }

  const handleResetStore = () => {
    reset()

    useIssuesStore.persist.clearStorage()
  }

  return { handleDownloadIssues, handleResetStore }
}
