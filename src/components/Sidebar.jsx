import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Sidebar = () => {
  const [opened, setOpened] = useState(true)
  const currentPath = useSelector((state) => state.currentPath)
  const dispatch = useDispatch()
  const updatePath = (path) => {
    dispatch({
      type: 'update_path',
      payload: path,
    })
  }
  return (
    <div className="sidebar open">
      <div className="title">Tools</div>
      <ul>
        <li>
          <Link
            to="/dropbox"
            className={currentPath === '/dropbox' ? 'sidebar-active' : ''}
            onClick={() => updatePath('/dropbox')}
          >
            <i className="fa-brands fa-dropbox"></i>&nbsp;Dropbox
          </Link>
        </li>
        <li>
          <Link
            to="/chatbox"
            className={currentPath === '/chatbox' ? 'sidebar-active' : ''}
            onClick={() => updatePath('/chatbox')}
          >
            <i className="fa-solid fa-comments"></i>&nbsp;Chatbox
          </Link>
        </li>
        <li>
          <Link
            to="/contactbox"
            className={currentPath === '/contactbox' ? 'sidebar-active' : ''}
            onClick={() => updatePath('/contactbox')}
          >
            <i className="fa-solid fa-address-book"></i>&nbsp;Contactbox
          </Link>
        </li>
        <li>
          <Link
            to="/personal"
            className={currentPath === '/personal' ? 'sidebar-active' : ''}
            onClick={() => updatePath('/personal')}
          >
            <i className="fa-solid fa-user"></i>&nbsp;Personal
          </Link>
        </li>
      </ul>
      <div
        className="close-button"
        id="close_open"
        onClick={(e) => {
          e.preventDefault()
          document.getElementsByClassName('sidebar').item(0).className = opened
            ? 'sidebar'
            : 'sidebar open'

          document.getElementById('close_open').className = opened
            ? 'close-button close-button-collapsed'
            : 'close-button'

          document.getElementById('open_close_icon').className = opened
            ? 'fa-solid fa-caret-right'
            : 'fa-solid fa-caret-left'
          setOpened(opened ? false : true)
        }}
      >
        <i className="fa-solid fa-caret-left" id="open_close_icon"></i>
      </div>
    </div>
  )
}
