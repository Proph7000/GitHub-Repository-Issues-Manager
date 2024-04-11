export const getItemStyle = (
  isDragging: boolean,
  draggableStyle: React.CSSProperties | undefined
): React.CSSProperties => ({
  userSelect: 'none',
  padding: '8px',
  margin: '0 0 8px 0',
  background: isDragging ? 'lightgreen' : '#a6bec7',
  ...draggableStyle,
});
