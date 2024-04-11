import { useMemo } from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { IIssue, TIssueType, useIssuesStore } from '@entities/model'

export interface IReorderIssuesArgs {
  sourceDroppableId: string
  startIndex: number
  endIndex: number
}

export interface IMoveIssueToAnotherColumnArgs extends IReorderIssuesArgs {
  destinationDroppableId: string
}

export function useDragDropIssues() {
  const issuesToDo = useIssuesStore((state) => state.issuesToDo)
  const issuesDone = useIssuesStore((state) => state.issuesDone)
  const issuesInProgress = useIssuesStore((state) => state.issuesInProgress)
  const setIssues = useIssuesStore((state) => state.setIssues)
  const deleteIssue = useIssuesStore((state) => state.deleteIssue)
  const addIssue = useIssuesStore((state) => state.addIssue)

  const issues: Record<TIssueType, IIssue[]> = useMemo(
    () => ({
      open: issuesToDo,
      closed: issuesDone,
      inProgress: issuesInProgress,
    }),
    [issuesToDo, issuesDone, issuesInProgress]
  )

  const reorderIssues = ({
    sourceDroppableId,
    startIndex,
    endIndex,
  }: IReorderIssuesArgs) => {
    const movedIssueType = sourceDroppableId as TIssueType
    let currentIssues = issues[movedIssueType]
    const movedIssue = currentIssues[startIndex]

    currentIssues = currentIssues.filter((_, index) => index !== startIndex)

    currentIssues.splice(endIndex, 0, movedIssue)

    setIssues(currentIssues, movedIssueType)
  }

  const moveIssueToAnotherColumn = ({
    destinationDroppableId,
    sourceDroppableId,
    endIndex,
    startIndex,
  }: IMoveIssueToAnotherColumnArgs) => {
    const movedIssueType = sourceDroppableId as TIssueType
    const movedIssue = issues[movedIssueType][startIndex]
    const destinationIssueType = destinationDroppableId as TIssueType

    deleteIssue(movedIssue.id, movedIssueType)

    addIssue(
      { ...movedIssue, state: destinationIssueType },
      destinationIssueType,
      endIndex
    )
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    const canNotMove =
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)

    const canMove = source.droppableId && destination?.droppableId

    if (canNotMove || !canMove) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      reorderIssues({
        sourceDroppableId: source.droppableId,
        startIndex: source.index,
        endIndex: destination.index,
      })
    }

    if (source.droppableId !== destination.droppableId) {
      moveIssueToAnotherColumn({
        destinationDroppableId: destination.droppableId,
        sourceDroppableId: source.droppableId,
        endIndex: destination.index,
        startIndex: source.index,
      })
    }
  }

  return { onDragEnd }
}
