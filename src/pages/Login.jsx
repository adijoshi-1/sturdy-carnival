import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Toast } from '../components'
import token from './token.json'
import background from '../assets/images/background.jpg'

export const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!username || !password) {
      return Toast({
        title: 'Username/Password Empty',
        icon: 'error',
        timer: '5000',
        position: 'top-right',
      })
    }

    localStorage.setItem('userToken', token.token)
    localStorage.setItem('username', username)

    dispatch({
      type: 'update_loggedIn',
      payload: true,
    })

    dispatch({
      type: 'update_path',
      payload: '/dropbox',
    })

    navigate('/dropbox')
  }
  return (
    <>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome back</h1>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              e.preventDefault()
              setUsername(e.target.value)
            }}
          />
          <input
            type="password"
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              e.preventDefault()
              setPassword(e.target.value)
            }}
          />
          <button
            onMouseOver={(e) => {
              e.preventDefault()
              const selected = document.getElementById('login-button')
              selected.style.background = '#439A97'
              selected.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.preventDefault()
              const selected = document.getElementById('login-button')
              selected.style.background = 'white'
              selected.style.color = 'black'
            }}
            onClick={(e) => {
              handleSubmit()
            }}
            id="login-button"
            style={styles.button}
          >
            Login
          </button>
        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    background: `url(${background})`,
    color: 'white',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '40%',
    borderRadius: '5px',
  },
  title: {
    textAlign: 'center',
  },
  input: {
    width: '60%',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
  },
  button: {
    margin: '10px',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    background: 'white',
    cursor: 'pointer',
    padding: '10px 16px',
    width: '25%',
    transition: '0.3s ease-in all',
    fontWeight: 'bold',
  },
}
