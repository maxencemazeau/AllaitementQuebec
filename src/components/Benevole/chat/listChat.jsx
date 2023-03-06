import React, { Component } from "react";
import axios from "axios";

export default class ListChat extends Component {
    state = {
        chats: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/obtenirChat')
            .then(res => {
                this.setState({
                    chats: res.data
                })
                console.log("listchat did mount", res.data);

            })
    }


    render() {
        const { chats } = this.state
        return (
            <React.Fragment>
                <div className="main">
                    <table>
                        <h2>liste des chats:</h2>
                        <tr>
                            <th>id:</th>
                            <th>date:</th>
                        </tr>

                        {chats.map(chat => <tr>
                            <td><button onClick={() => this.props.changerId(chat.id)}>{chat.id}</button></td>

                            <td>{chat.dateDebut}</td>
                        </tr>)}
                    </table>

                </div>
            </React.Fragment>
        );
    }
}


