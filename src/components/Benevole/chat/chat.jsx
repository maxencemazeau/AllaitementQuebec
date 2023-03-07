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
            <React.Fragment>
                <div className="main">
                    <table>
                        <h2>detail du chat:</h2>
                        <tr>
                            <th>message:</th>
                        </tr>
                        {discussion.map(message => <tr>
                            <td>{message.message}</td>
                        </tr>)}
                    </table>
                </div>
                <div className="main">
                    <form action="http://localhost:8080/api/benevole/envoiMessage" method="post">
                        <input type="hidden" name="idBenevole" value="null"></input>
                        <input type="hidden" name="idChat" value={this.props.idChatSelectionne}></input>
                        <input type="text" name='message' placeholder="Entrez Votre message" className="input" />
                        <input type='submit' value='envoyerMessage' />

                    </form>
                </div>
            </React.Fragment>
        );
    }
}
