import { Flex, Divider, Typography } from 'antd'
import { differenceInDays, parseISO } from 'date-fns'
import { useMemo } from 'react'

import { IIssue } from '@entities/model'

import './issue-list-item.css'

const { Title, Text } = Typography

export function IssuesListItem({
  title,
  url,
  assignee,
  comments,
  created_at,
  number,
}: Pick<
  IIssue,
  'url' | 'title' | 'number' | 'created_at' | 'assignee' | 'comments'
>) {
  const currentDate = new Date()

  const opened = useMemo(
    () =>
      ` opened ${differenceInDays(currentDate, parseISO(created_at))} days ago`,
    [currentDate, created_at]
  )

  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <Title level={5} className="link issue-link">
          {title}
        </Title>
      </a>

      <div style={{ marginBottom: 4 }}>
        <Text>{`#${number}`}</Text>
        <Text>{opened}</Text>
      </div>

      <Flex gap="middle">
        {assignee?.login && (
          <>
            <a
              href={assignee?.html_url}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {assignee?.login}
            </a>

            <Divider type="vertical" className="divider" />
          </>
        )}

        <Text>{`Comments: ${comments}`}</Text>
      </Flex>
    </>
  )
}
