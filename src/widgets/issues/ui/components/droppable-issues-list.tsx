import { Col, Typography } from 'antd'
import { memo } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { TIssueType, useIssuesStore } from '@entities/model'

import { IssuesListItem } from './issues-list-item'
import { getListStyle, getItemStyle } from './styles'

import './droppable-issues-list.css'

interface IProps {
  type: TIssueType
}

const { Title } = Typography

const title: Record<TIssueType, string> = {
  closed: 'Done',
  inProgress: 'In progress',
  open: 'To Do',
}

export const DroppableIssuesList = memo(function DroppableIssuesList({
  type,
}: IProps) {
  const issues = useIssuesStore((state) => {
    if (type === 'closed') {
      return state.issuesDone
    }

    if (type === 'inProgress') {
      return state.issuesInProgress
    }

    return state.issuesToDo
  })

  return (
    <Droppable droppableId={type}>
      {(provided, snapshot) => (
        <Col className="issue-column">
          <Title level={3} style={{ textAlign: 'center' }}>
            {title[type]}
          </Title>

          <ul
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {issues.map((issue, index) => (
              <Draggable key={issue.id} draggableId={issue.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps?.style
                    )}
                  >
                    <IssuesListItem
                      number={issue.number}
                      url={issue.html_url}
                      title={issue.title}
                      created_at={issue.created_at}
                      assignee={issue.assignee}
                      comments={issue.comments}
                    />
                  </li>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </ul>
        </Col>
      )}
    </Droppable>
  )
})
