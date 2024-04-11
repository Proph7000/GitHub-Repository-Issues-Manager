import { api } from '@shared/api-instance'

export async function fetchRepo(link: string) {
  const linkToGitHubApi = link
    .replace('https://github.com/', '')
    .replace('/issues', '')

  return await api.request(`GET /repos/${linkToGitHubApi}`, {
    owner: 'Proph7000',
    repo: 'test-task5',
  })
}
