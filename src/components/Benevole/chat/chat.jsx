import React, { Component } from "react";
import axios from "axios";

export default class Chat extends Component {
    state = {
        discussion: []
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/discussionBenevole/' + this.props.idChatSelectionne)
            .then(res => {
                this.setState({
                    discussion: res.data
                })
                console.log("chat did mount", res.data);
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.idChatSelectionne !== prevProps.idChatSelectionne) {
            console.log("will update")
            axios.get('http://localhost:8080/discussionBenevole/' + this.props.idChatSelectionne)
                .then(res => {
                    this.setState({
                        discussion: res.data
                    })
                    console.log("chat did mount", res.data);
                })
        }
    }


    render() {
        const { discussion } = this.state
        return (
            // <React.Fragment>
            //     <div className="main">

            //         <table>
            //             <h2>detail du chat:</h2><br />
            //             <p>Contenu du message:</p>
            //             {discussion.map(message =>
            //                 <p>{message.message}</p>
            //             )}
            //         </table>

            //     </div>
            //     <div className="main">

            //         <form action="http://localhost:8080/envoiMessage" method="post">
            //             <input type="hidden" name="idBenevole" value="null"></input>
            //             <input type="hidden" name="idChat" value={this.props.idChatSelectionne}></input>
            //             <input type="text" name='message' placeholder="Entrez le message a envoyer" className="input" />
            //             <input type='submit' value='envoyerMessage' />

            //         </form>

            //     </div> 



            // </React.Fragment>

            <React.Fragment>
                <main className="main">
                    <div class="chat-body hide-scrollbar flex-1 h-100">
                        <div class="chat-body-inner">
                            <div class="py-6 py-lg-12">


                                <div class="message">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" class="avatar avatar-responsive">

                                    </a>

                                    <div class="message-inner">
                                        <div class="message-body">
                                            <div class="message-content">
                                                <div class="message-text">
                                                    {/* <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p> */}

                                                    <blockquote class="blockquote overflow-hidden">
                                                        <h6 class="text-reset text-truncate">William Wright</h6>
                                                        <p class="small text-truncate">Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </blockquote>
                                                    <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                </div>

                                                <div class="message-action">
                                                </div>
                                            </div>

                                            <div class="message-content">
                                                <div class="message-text">
                                                    <p>Send me the files please.</p>
                                                </div>
                                                <div class="message-action">

                                                </div>
                                            </div>
                                        </div>

                                        <div class="message-footer">
                                            <span class="extra-small text-muted">08:45 PM</span>
                                        </div>
                                    </div>
                                </div>

                                {discussion.map(message =>
                                    <div class="message message-out">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">

                                        </a>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <blockquote class="blockquote overflow-hidden">
                                                            <h6 class="text-reset text-truncate">William Wright</h6>
                                                            <p class="small text-truncate">{message.message}</p>
                                                        </blockquote>
                                                        <p> Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                        {/* <p>{message.message} </p> */}
                                                    </div>


                                                    <div class="message-action">

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div class="message-divider">
                                    <small class="text-muted">Monday, Sep 16</small>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Chat: Footer --> */}
                    <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
                        {/* <!-- Chat: Files --> */}
                        <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
                        </div>
                        {/* <!-- Chat: Files --> */}

                        {/* <!-- Chat: Form --> */}
                        <form className="chat-form rounded-pill bg-dark" data-emoji-form="" action="http://localhost:8080/envoiMessage" method="post" >
                            <div className="row align-items-center gx-0">
                                <div className="col-auto">
                                    <a href="#" class="btn btn-icon btn-link text-body rounded-circle" id="dz-btn">
                                        {/* @@include("assets/img/icons/paperclip.svg") */}
                                    </a>
                                </div>

                                <div className="col">
                                    <div className="input-group">
                                        <input type="text" name='message' placeholder="Entrez le message a envoyer" className="form-control px-0" rows="1" data-emoji-input="" data-autosize="true"></input>
                                        {/* <input type="text" name='message' placeholder="Entrez le message a envoyer" className="input" /> */}

                                        <a href="#" className="input-group-text text-body pe-0" data-emoji-btn="">
                                            <span className="icon icon-lg">
                                                {/* @@include("assets/img/icons/smile.svg") */}
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <input type="hidden" name="idBenevole" value="null"></input>
                                    <input type="hidden" name="idChat" value={this.props.idChatSelectionne}></input>
                                    <input type='submit' value='envoyerMessage' className="btn btn-icon btn-primary ms-5">
                                        {/* @@include("assets/img/icons/send.svg") */}
                                    </input>

                                </div>
                            </div>
                        </form>
                        {/* <!-- Chat: Form --> */}
                    </div>
                </main>
                {/* <!-- Chat: Footer --> */}
            </React.Fragment >
        );
    }
}
