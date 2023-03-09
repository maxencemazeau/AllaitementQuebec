import React, { Component, Fragment } from 'react'

export class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="main">
          <a href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" class="avatar avatar-responsive">
            {/* <img class="avatar-img" src="assets/img/avatars/2.jpg" alt=""> */}
          </a>

          <div className="message-inner">
            <div className="message-body">
              <div className="message-content">
                <div className="message-text">
                  <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                </div>

                {/* <!-- Dropdown --> */}
                <div className="message-action">
                  {/* @@include("partials/components/message-dropdown.html") */}
                </div>
              </div>
            </div>

            <div className="message-footer">
              <span className="extra-small text-muted">08:45 PM</span>
            </div>
          </div>
        
        {/* <!-- Chat: Footer --> */}
        <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
          {/* <!-- Chat: Files --> */}
          <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
          </div>
          {/* <!-- Chat: Files --> */}
          
            {/* <!-- Chat: Form --> */}
            <form className="chat-form rounded-pill bg-dark" data-emoji-form="">
              <div className="row align-items-center gx-0">
                <div className="col-auto">
                  <a href="#" class="btn btn-icon btn-link text-body rounded-circle" id="dz-btn">
                    {/* @@include("assets/img/icons/paperclip.svg") */}
                  </a>
                </div>

                <div className="col">
                  <div className="input-group">
                    <textarea className="form-control px-0" placeholder="Type your message..." rows="1" data-emoji-input="" data-autosize="true"></textarea>

                    <a href="#" className="input-group-text text-body pe-0" data-emoji-btn="">
                      <span className="icon icon-lg">
                        {/* @@include("assets/img/icons/smile.svg") */}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="col-auto">
                  <button className="btn btn-icon btn-primary rounded-circle ms-5">
                    {/* @@include("assets/img/icons/send.svg") */}
                  </button>
                </div>
              </div>
            </form>
            {/* <!-- Chat: Form --> */}
        </div>
      </main>
        {/* <!-- Chat: Footer --> */ }
      </React.Fragment >
    )
  }
}

export default Body