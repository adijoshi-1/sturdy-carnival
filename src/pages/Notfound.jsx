import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const NotFound = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'update_path', payload: '/dropbox' })
    navigate('/dropbox')
  }, [])
  return ''
}
