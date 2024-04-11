import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { IIssue, TIssueType } from '../types'

interface IRepoInfo {
  ownerName: string
  ownerLink: string
  repoName: string
  repoLink: string
  stars: number
}

interface IIssuesState {
  issuesToDo: IIssue[]
  issuesInProgress: IIssue[]
  issuesDone: IIssue[]
  noIssues: boolean
  repoInfo?: IRepoInfo
}

interface IIssuesStore extends IIssuesState {
  setRepoInfo: (payload: IRepoInfo) => void
  setIssues: (payload: IIssue[], type: TIssueType) => void
  addIssue: (issue: IIssue, type: TIssueType, index?: number) => void
  deleteIssue: (issueId: IIssue['id'], type: TIssueType) => void
  reset: () => void
}

const initialState: IIssuesState = {
  issuesToDo: [],
  issuesInProgress: [],
  issuesDone: [],
  noIssues: true,
  repoInfo: undefined,
}

export const useIssuesStore = create<IIssuesStore>()(
  persist(
    immer((set) => ({
      ...initialState,
      reset: () => set(initialState),

      setRepoInfo: (repoInfo) => set({ repoInfo }),

      setIssues: (issues, type) =>
        set((state) => {
          switch (type) {
            case 'closed':
              state.issuesDone = issues

              break
            case 'inProgress':
              state.issuesInProgress = issues

              break
            case 'open':
            default:
              state.issuesToDo = issues
          }

          state.noIssues =
            !state.issuesDone.length &&
            !state.issuesInProgress.length &&
            !state.issuesToDo.length
        }),

      addIssue: (issue, type, index) =>
        set((state) => {
          switch (type) {
            case 'closed':
              index
                ? state.issuesDone.splice(index, 0, issue)
                : state.issuesDone.push(issue)

              break
            case 'inProgress':
              index
                ? state.issuesInProgress.splice(index, 0, issue)
                : state.issuesInProgress.push(issue)

              break
            case 'open':
            default:
              index
                ? state.issuesToDo.splice(index, 0, issue)
                : state.issuesToDo.push(issue)
          }

          state.noIssues =
            !state.issuesDone.length &&
            !state.issuesInProgress.length &&
            !state.issuesToDo.length
        }),

      deleteIssue: (id, type) =>
        set((state) => {
          switch (type) {
            case 'closed':
              state.issuesDone = state.issuesDone.filter(
                (issue) => issue.id !== id
              )

              break
            case 'inProgress':
              state.issuesInProgress = state.issuesInProgress.filter(
                (issue) => issue.id !== id
              )

              break
            case 'open':
            default:
              state.issuesToDo = state.issuesToDo.filter(
                (issue) => issue.id !== id
              )
          }

          state.noIssues =
            !state.issuesDone.length &&
            !state.issuesInProgress.length &&
            !state.issuesToDo.length
        }),
    })),
    { name: 'issues-store' }
  )
)
