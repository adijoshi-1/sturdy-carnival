import '../assets/styles/chatbox.css'
import { useState, useRef, useEffect } from 'react'
import { v4 } from 'uuid'
import moment from 'moment'
import { Sidebar, Navbar, MainContent } from '../components'
import avatar1 from '../assets/images/avatar1.gif'
import structure from './structure.json'

export const Chatbox = () => {
  const [data, setData] = useState(structure)
  const [message, setMessage] = useState('')
  const lastMessageRef = useRef()

  const formatDate = (date) => {
    console.log(Date.now())
    const d = new Date(parseInt(date))
    const year = d.getFullYear()
    const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
    const day = d.getDate() < 9 ? `0${d.getDate()}` : d.getDate()
    const hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()
    const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
    const relativeTime = moment(
      `${year}${month}${day}${hours}${minutes}`,
      'YYYYMMDDHHmm'
    ).fromNow()

    return relativeTime
  }

  const appendMessage = () => {
    const messageInstance = {
      id: v4(),
      type: 'message',
      messageString: message,
      timeStamp: Date.now(),
      from: 'Aditya',
      publicKey: '32bytespublickey',
    }

    setData((data) => [...data, messageInstance])
    setMessage('')
  }

  useEffect(() => {
    if (lastMessageRef.current !== null) {
      lastMessageRef.current.scrollIntoView({ behaviour: 'smooth' })
    }
  })

  return (
    <>
      <Sidebar />
      <Navbar />
      <MainContent>
        <div className="outer">
          <section className="msger">
            <main className="msger-chat">
              {data.map((data) => {
                return data.type === 'message' ? (
                  <div
                    className={`msg ${
                      data.publicKey === '32bytespublickey'
                        ? 'right-msg'
                        : 'left-msg'
                    }`}
                    ref={lastMessageRef}
                    key={data.id}
                  >
                    <img className="msg-img" src={avatar1} />
                    <div className="msg-bubble">
                      <div className="msg-info">
                        <div className="msg-info-name">
                          {data.publicKey === '32bytespublickey'
                            ? 'You'
                            : data.from}
                        </div>
                        <div className="msg-info-time">
                          {formatDate(data.timeStamp) === 'a few seconds ago'
                            ? 'Just now'
                            : formatDate(data.timeStamp)}
                        </div>
                      </div>

                      <div className="msg-text">{data.messageString}</div>
                    </div>
                  </div>
                ) : (
                  ''
                )
              })}
            </main>

            <form className="msger-inputarea">
              <input
                type="text"
                className="msger-input"
                placeholder="Enter your message..."
                value={message}
                onChange={(e) => {
                  e.preventDefault()
                  setMessage(e.target.value)
                }}
              />
              <button
                type="submit"
                className="msger-send-btn"
                onClick={(e) => {
                  e.preventDefault()
                  appendMessage()
                }}
              >
                Send
              </button>
            </form>
          </section>
        </div>
      </MainContent>
    </>
  )
}
