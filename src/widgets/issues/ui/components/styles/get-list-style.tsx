export const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? 'lightblue' : '#e7e7e7',
  padding: '8px',
  flex: 1,
});
