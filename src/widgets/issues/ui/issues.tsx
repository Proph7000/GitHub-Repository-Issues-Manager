import { DragDropContext } from 'react-beautiful-dnd'

import './issues.css'

import { TIssueType } from '@entities/model'

import { useDragDropIssues } from '../model'
import { DroppableIssuesList } from './components'

const issuesColumns: TIssueType[] = ['open', 'inProgress', 'closed']

export const Issues = () => {
  const { onDragEnd } = useDragDropIssues()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="issues-container">
        {issuesColumns.map((issuesColumn) => (
          <DroppableIssuesList type={issuesColumn} key={issuesColumn} />
        ))}
      </div>
    </DragDropContext>
  )
}
