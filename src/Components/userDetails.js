import React, { Component } from 'react'

export default class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: "",
        }
    }


    componentDidMount() {
        fetch("https://markdown-backend.vercel.app/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Orgin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            })

        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "UserData")
                this.setState({ userData: data.data })
            })
    }

    render() {
        return (
            <div className='auth-wrapper'>
                <div className='auth-inner'>
                    <div className='center'>
                        <i><h1><b>React Markdown Viewer</b></h1></i>


                        <a href="/markup" className='ab'> <b>React MarkDown Viewer</b></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/rules" className='ab'> <b>Syntax</b></a>

                    </div>
                </div>
            </div>
        )
    }
}