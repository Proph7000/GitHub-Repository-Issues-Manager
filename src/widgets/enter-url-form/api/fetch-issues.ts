import { api } from '@shared/api-instance'

export async function fetchIssues(link: string) {
  const linkToGitHubApi = link.replace('https://github.com/', '')

  return await api.request(`GET /repos/${linkToGitHubApi}`, {
    owner: 'Proph7000',
    repo: 'GitHub-Repository-Issues-Manager',
  })
}
