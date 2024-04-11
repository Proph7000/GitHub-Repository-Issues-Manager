import { Octokit } from 'octokit'

import { GIT_HUB_TOKEN } from '@shared/constants'

export const api = new Octokit({
  auth: GIT_HUB_TOKEN,
})
