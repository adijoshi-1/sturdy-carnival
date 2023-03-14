import '../assets/styles/chatbox.css'
import { useRef, useEffect } from 'react'
import { Sidebar, Navbar, MainContent } from '../components'

export const Chatbox = () => {
  const lastMessageRef = useRef()
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
              <div className="msg left-msg">
                <div className="msg-img"></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Server</div>
                    <div className="msg-info-time">12:45</div>
                  </div>

                  <div className="msg-text">
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                </div>
              </div>

              <div className="msg left-msg">
                <div className="msg-img"></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Server</div>
                    <div className="msg-info-time">12:45</div>
                  </div>

                  <div className="msg-text">
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                </div>
              </div>

              <div className="msg left-msg">
                <div className="msg-img"></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Server</div>
                    <div className="msg-info-time">12:45</div>
                  </div>

                  <div className="msg-text">
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                </div>
              </div>

              <div className="msg left-msg">
                <div className="msg-img"></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Server</div>
                    <div className="msg-info-time">12:45</div>
                  </div>

                  <div className="msg-text">
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                </div>
              </div>

              <div className="msg left-msg">
                <div className="msg-img"></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Server</div>
                    <div className="msg-info-time">12:45</div>
                  </div>

                  <div className="msg-text">
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                </div>
              </div>

              <div className="msg left-msg">
                <div className="msg-img"></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Server</div>
                    <div className="msg-info-time">12:45</div>
                  </div>

                  <div className="msg-text">
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                </div>
              </div>

              <div className="msg left-msg">
                <div className="msg-img"></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Server</div>
                    <div className="msg-info-time">12:45</div>
                  </div>

                  <div className="msg-text">
                    Hi, welcome to SimpleChat! Go ahead and send me a message.
                    😄
                  </div>
                </div>
              </div>

              <div className="msg right-msg">
                <div className="msg-img"></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Aditya</div>
                    <div className="msg-info-time">12:46</div>
                  </div>

                  <div className="msg-text" ref={lastMessageRef}>
                    You can change your name in JS section!
                  </div>
                </div>
              </div>
            </main>

            <form className="msger-inputarea">
              <input
                type="text"
                className="msger-input"
                placeholder="Enter your message..."
              />
              <button type="submit" className="msger-send-btn">
                Send
              </button>
            </form>
          </section>
        </div>
      </MainContent>
    </>
  )
}
