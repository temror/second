import React from "react";
import {connect} from "react-redux";
import {changeCount, followAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
import * as axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsersContainer(
                    response.data.items,
                    response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) =>{
        this.props.changeCountContainer(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsersContainer(
                    response.data.items)
            })
    }

    render() {
        return (
            <Users
                onPageChanged = {this.onPageChanged}
                totalUsersCount = {this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users = {this.props.users}
                currentPage = {this.props.currentPage}
                unfollowContainer = {this.props.unfollowContainer}
                followContainer = {this.props.followContainer}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followContainer: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowContainer: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsersContainer: (users,totalCount) => {
            dispatch(setUsersAC(users,totalCount))
        },
        changeCountContainer: (currentPage) =>{
            dispatch(changeCount(currentPage))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer