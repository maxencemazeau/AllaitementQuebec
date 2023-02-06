import React, { Component, Fragment } from 'react'

export class Body extends Component {
  render() {
    return (
        <React.Fragment>
        <main className="main">
          <div className="container h-100">
            <div className="d-flex flex-column h-100 justify-content-center text-center">
              <div className="mb-6">
                <span className="icon icon-xl text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </span>
              </div>
              <p className="text-muted">Choisissez une personne dans le menu de gauche, <br /> et commencez votre conversation.</p>
            </div>
          </div>
        </main>
        <div className="modal fade" id="modal-invite" tabIndex={-1} aria-labelledby="modal-invite" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down">
            <div className="modal-content">
              <div className="modal-body py-0">
                <div className="profile modal-gx-n">
                  <div className="profile-img text-primary rounded-top-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 140.74"><defs><style dangerouslySetInnerHTML={{__html: ".cls-2{fill:#fff;opacity:0.1;}" }} /></defs><g><g><path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z" /><path className="cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z" /><path className="cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z" /><circle className="cls-2" cx="94.5" cy="57.5" r="22.5" /><path className="cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z" /></g></g></svg>
                    <div className="position-absolute top-0 start-0 p-5">
                      <button type="button" className="btn-close btn-close-white btn-close-arrow opacity-100" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                  </div>
                  <div className="profile-body">
                    <div className="avatar avatar-lg">
                      <span className="avatar-text bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={20} y1={8} x2={20} y2={14} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                      </span>
                    </div>
                    <h4 className="fw-bold mb-1">Invite your friends</h4>
                    <p style={{fontSize: '16px'}}>Send invitation links to your friends</p>
                  </div>
                </div>
                <hr className="hr-bold modal-gx-n my-0" />
                <div className="modal-py">
                  <form className="row gy-6">
                    <div className="col-12">
                      <label htmlFor="invite-email" className="form-label text-muted">E-mail</label>
                      <input type="email" className="form-control form-control-lg" id="invite-email" placeholder="name@example.com" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="invite-message" className="form-label text-muted">Message</label>
                      <textarea className="form-control form-control-lg" id="invite-message" rows={3} placeholder="Custom message" defaultValue={""} />
                    </div>
                  </form>
                </div>
                <hr className="hr-bold modal-gx-n my-0" />
                <div className="modal-py">
                  <a href="#" className="btn btn-lg btn-primary w-100 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#invite-modal">
                    Send
                    <span className="icon ms-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modal-profile" tabIndex={-1} aria-labelledby="modal-profile" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down">
            <div className="modal-content">
              <div className="modal-body py-0">
                <div className="profile modal-gx-n">
                  <div className="profile-img text-primary rounded-top-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 140.74"><defs><style dangerouslySetInnerHTML={{__html: ".cls-2{fill:#fff;opacity:0.1;}" }} /></defs><g><g><path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z" /><path className="cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z" /><path className="cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z" /><circle className="cls-2" cx="94.5" cy="57.5" r="22.5" /><path className="cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z" /></g></g></svg>
                    <div className="position-absolute top-0 start-0 py-6 px-5">
                      <button type="button" className="btn-close btn-close-white btn-close-arrow opacity-100" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                  </div>
                  <div className="profile-body">
                    <div className="avatar avatar-xl">
                      <img className="avatar-img" src="./assets/img/avatars/1.jpg" alt="#" />
                    </div>
                    <h4 className="mb-1">William Wright</h4>
                    <p>last seen 5 minutes ago</p>
                  </div>
                </div>
                <hr className="hr-bold modal-gx-n my-0" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row align-items-center gx-6">
                      <div className="col">
                        <h5>Location</h5>
                        <p>USA, Houston</p>
                      </div>
                      <div className="col-auto">
                        <div className="btn btn-sm btn-icon btn-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row align-items-center gx-6">
                      <div className="col">
                        <h5>E-mail</h5>
                        <p>william@studio.com</p>
                      </div>
                      <div className="col-auto">
                        <div className="btn btn-sm btn-icon btn-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row align-items-center gx-6">
                      <div className="col">
                        <h5>Phone</h5>
                        <p>1-800-275-2273</p>
                      </div>
                      <div className="col-auto">
                        <div className="btn btn-sm btn-icon btn-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr className="hr-bold modal-gx-n my-0" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row align-items-center gx-6">
                      <div className="col">
                        <h5>Active status</h5>
                        <p>Show when you're active.</p>
                      </div>
                      <div className="col-auto">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="profile-status" defaultChecked />
                          <label className="form-check-label" htmlFor="profile-status" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr className="hr-bold modal-gx-n my-0" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#" className="text-danger">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modal-user-profile" tabIndex={-1} aria-labelledby="modal-user-profile" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down">
            <div className="modal-content">
              <div className="modal-body py-0">
                <div className="profile modal-gx-n">
                  <div className="profile-img text-primary rounded-top-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 140.74"><defs><style dangerouslySetInnerHTML={{__html: ".cls-2{fill:#fff;opacity:0.1;}" }} /></defs><g><g><path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z" /><path className="cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z" /><path className="cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z" /><circle className="cls-2" cx="94.5" cy="57.5" r="22.5" /><path className="cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z" /></g></g></svg>
                    <div className="position-absolute top-0 start-0 p-5">
                      <button type="button" className="btn-close btn-close-white btn-close-arrow opacity-100" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                  </div>
                  <div className="profile-body">
                    <div className="avatar avatar-xl">
                      <img className="avatar-img" src="./assets/img/avatars/9.jpg" alt="#" />
                      <a href="#" className="badge badge-lg badge-circle bg-primary text-white border-outline position-absolute bottom-0 end-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
                      </a>
                    </div>
                    <h4 className="mb-1">William Wright</h4>
                    <p>last seen 5 minutes ago</p>
                  </div>
                </div>
                <hr className="hr-bold modal-gx-n my-0" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row align-items-center gx-6">
                      <div className="col">
                        <h5>Location</h5>
                        <p>USA, Houston</p>
                      </div>
                      <div className="col-auto">
                        <div className="btn btn-sm btn-icon btn-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row align-items-center gx-6">
                      <div className="col">
                        <h5>E-mail</h5>
                        <p>william@studio.com</p>
                      </div>
                      <div className="col-auto">
                        <div className="btn btn-sm btn-icon btn-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row align-items-center gx-6">
                      <div className="col">
                        <h5>Phone</h5>
                        <p>1-800-275-2273</p>
                      </div>
                      <div className="col-auto">
                        <div className="btn btn-sm btn-icon btn-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr className="hr-bold modal-gx-n my-0" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row align-items-center gx-6">
                      <div className="col">
                        <h5>Notifications</h5>
                        <p>Enable sound notifications</p>
                      </div>
                      <div className="col-auto">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="user-notification-check" />
                          <label className="form-check-label" htmlFor="user-notification-check" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr className="hr-bold modal-gx-n my-0" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#" className="text-reset">Send Message</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-danger">Block User</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modal-media-preview" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-xl-down">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close btn-close-arrow" data-bs-dismiss="modal" aria-label="Close" />
                <div>
                  <div className="dropdown">
                    <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          Download
                          <div className="icon ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-download-cloud"><polyline points="8 17 12 21 16 17" /><line x1={12} y1={12} x2={12} y2={21} /><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          Share
                          <div className="icon ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                          </div>
                        </a>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center text-danger" href="#">
                          <span className="me-auto">Delete</span>
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-body p-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <img className="img-fluid modal-preview-url" src="#" alt="#" />
                </div>
              </div>
              <div className="modal-footer">
                <div className="w-100 text-center">
                  <h6><a href="#">Marshall Wallaker</a></h6>
                  <p className="small">Today at 14:43</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
    )
  }
}

export default Body