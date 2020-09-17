import React from "react";
import Loader from "react-loader-spinner"
import Friend from './Friend'
import AddFriend from './AddFriend'

import {axiosWithAuth} from '../utils/axiosWithAuth';


class Friends extends React.Component{
    state = {
        friends: []
    };

    componentDidMount(){
        this.getFriends()
    }

    getFriends = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then((res) =>{
            // console.log(res)
            this.setState({
                friends: res.data
            })
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h3>Friends</h3>
                {this.state.friends.map((friend) =>{
                    return<Friend key={friend.id} friend={friend} />;
                 })}
                {this.props.fetchingData && (
                    <div className="key spinner">
                      <Loader type="Puff" color="#204963" height="60" width="60" />
                      <p>Loading Data</p>
                    </div>
                )}
                <AddFriend />
            </div>
        )
    }
}

export default Friends