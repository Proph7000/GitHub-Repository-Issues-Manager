export interface IIssue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: string
  node_id: string
  number: number
  title: string
  user: IUser
  state: TIssueType
  locked: boolean
  assignee: IAssignee
  assignees: IAssignee2[]
  milestone: unknown
  comments: number
  created_at: string
  updated_at: string
  closed_at: string
  author_association: string
  active_lock_reason: unknown
  draft: boolean
  pull_request: IPullRequest
  body: string
  reactions: IReactions
  timeline_url: string
  performed_via_github_app: unknown
  state_reason: unknown
  labels: ILabel[]
}

interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

interface ILabel {
  id: number
  node_id: string
  url: string
  name: string
  color: string
  default: boolean
  description: string
}

interface IAssignee {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

interface IAssignee2 {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

interface IPullRequest {
  url: string
  html_url: string
  diff_url: string
  patch_url: string
  merged_at: unknown
}

interface IReactions {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export type TIssueType = 'open' | 'inProgress' | 'closed'
