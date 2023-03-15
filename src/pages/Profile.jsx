import { Sidebar, Navbar, MainContent } from '../components'

export const Profile = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <MainContent>
        <div className="upload">
          <h1>Profile Page</h1>
          {/* OuterDiv */}
          <div>
            {/* InnerDiv / Column */}
            <div>
              {/*  */}
              <div>
                <label>First Name</label>
                <input
                  disabled={true}
                  value={localStorage.getItem('username')}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  disabled={true}
                  value={localStorage.getItem('username')}
                />
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </>
  )
}
