import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('username')

    dispatch({
      type: 'update_loggedIn',
      payload: false,
    })

    dispatch({
      type: 'update_path',
      payload: '/login',
    })

    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Pear Apps</a>
      </div>
      <div className="navbar-links">
        <a
          onClick={(e) => {
            e.preventDefault()
            handleLogout()
          }}
        >
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </a>
      </div>
    </nav>
  )
}
