import React, { Component } from 'react'

export default class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: "",
        }
    }


    componentDidMount() {
        fetch("https://capstonemarkup.herokuapp.com/userData", {
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
                        Name<h1>{this.state.userData.fname}</h1>
                        Email<h1>{this.state.userData.email}</h1>


                        <a href="/markup" className='ab'> <b>React MarkDown Viewer</b></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/rules" className='ab'> <b>Syntax</b></a>

                    </div>
                </div>
            </div>
        )
    }
}