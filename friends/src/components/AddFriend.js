import React from 'react'

import {axiosWithAuth} from '../utils/axiosWithAuth'

class AddFriend extends React.Component {
    state={
        friend:{
            name:'',
            age:'',
            email:''
        }
    }

    handleChange = (e) =>{
        this.setState({
            friend:{
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    postFriend = (e) =>{
        axiosWithAuth()
        .post("/api/friends", this.state.friend)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    render(){
        return(
        <div>
            <h4>Add New Friend</h4>
            <form onSubmit={this.postFriend}>
                <input 
                name="name"
                type="text"
                placeholder="Name"
                value={this.state.friend.name}
                onChange={this.handleChange}
                />
                <input 
                name="age"
                type="text"
                placeholder="Age"
                value={this.state.friend.age}
                onChange={this.handleChange}
                />
                <input 
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.friend.email}
                onChange={this.handleChange}
                />
                <button>Add Friend</button>
            </form>
        </div>
    )}

}

export default AddFriend