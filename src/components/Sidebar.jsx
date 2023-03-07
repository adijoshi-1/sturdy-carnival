import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Sidebar = () => {
  const [opened, setOpened] = useState(true)
  return (
    <div className="sidebar open">
      <div className="title">Tools</div>
      <ul>
        <li>
          <Link to="/dropbox" className="sidebar-active">
            <i className="fa-brands fa-dropbox"></i>&nbsp;Dropbox
          </Link>
        </li>
        <li>
          <Link to="/chatbox">
            <i className="fa-solid fa-comments"></i>&nbsp;Chatbox
          </Link>
        </li>
        <li>
          <Link to="/contactbox">
            <i className="fa-solid fa-address-book"></i>&nbsp;Contactbox
          </Link>
        </li>
        <li>
          <Link to="/personal">
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
