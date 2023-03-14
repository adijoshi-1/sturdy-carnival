import { useState, useRef, useEffect } from 'react'
import { Sidebar, Navbar, MainContent } from '../components'
import structure from './structure.json'

const base64 = structure

export const Dropbox = () => {
  const [data, setData] = useState(structure)
  const [dragOver, setDragOver] = useState(false)
  const timer = useRef()
  const uploadRef = useRef()

  const handleUpload = (e) => {
    e.preventDefault()
    console.log(e.target.files[0])
  }

  const onDoubleClick = () => {
    uploadRef.current.click()
  }

  useEffect(() => {
    setData((data) => {
      return data.sort((a, b) => {
        return a.timeStamp - b.timeStamp
      })
    })
  })
  return (
    <>
      <input
        type="file"
        onChange={handleUpload}
        style={{ display: 'none' }}
        ref={uploadRef}
      />
      <Sidebar />
      <Navbar />
      <MainContent>
        <div
          onClick={(e) => {
            clearTimeout(timer.current)
            if (e.detail === 1) {
              timer.current = setTimeout(onclick, 200)
            } else if (e.detail === 2) {
              onDoubleClick()
            }
          }}
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
            const file = e.dataTransfer.files[0]
            // Do something with the dropped files (e.g. upload them to a server)
            console.log(file)
          }}
        >
          {!dragOver ? (
            <div className="upload">
              <div className="upload-header">
                <h2>Upload Files</h2>
                <p>Drag and drop files here, or double click to select files</p>
              </div>
              <div className="upload-list">
                {data.map((data) => {
                  return data.type === 'image' ? (
                    <div className="upload-item" key={data.id}>
                      <img
                        src={`data:image;base64,${data.imageString}`}
                        alt="wolf"
                      />
                      <p>{data.title}</p>
                      <button className="delete-btn">Delete</button>
                      <button className="download-btn">
                        <a
                          download="image.png"
                          href={`data:image;base64,${data.imageString}`}
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  ) : (
                    ''
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="drop-zone drag-over">
              <div className="default-message">Drop the file to upload</div>
            </div>
          )}
        </div>
      </MainContent>
    </>
  )
}
