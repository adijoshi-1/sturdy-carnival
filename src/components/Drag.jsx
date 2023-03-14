import { useState } from 'react'

export const Drag = () => {
  const [dragOver, setDragOver] = useState(false)
  return (
    <div
      className={dragOver ? 'drop-zone drag-over' : 'drop-zone'}
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        setDragOver(false)
      }}
      onDrop={(e) => {
        e.preventDefault()
        setDragOver(false)
        const files = Array.from(e.dataTransfer.files)
        // Do something with the dropped files (e.g. upload them to a server)
      }}
    >
      {dragOver ? (
        <div className="drop-message">Drop files to upload</div>
      ) : (
        <div className="default-message">Drag and drop files here</div>
      )}
    </div>
  )
}
