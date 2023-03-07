import { Sidebar, Navbar, MainContent } from '../components'

export const Dropbox = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <MainContent>
        <div className="upload">
          <div className="upload-header">
            <h2>Upload Files</h2>
            <p>Drag and drop files here, or click to select files</p>
          </div>
          <div className="upload-list">
            <div className="upload-item">
              <img
                src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="wolf"
              />
              <p>Title</p>
              <button className="delete-btn">Delete</button>
            </div>

            <div className="upload-item">
              <img
                src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="wolf"
              />
              <p>Title of image</p>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </MainContent>
    </>
  )
}
