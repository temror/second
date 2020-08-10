import React from "react";
import {connect} from "react-redux";
import {changeCount, follow, setFollowInProgress, setIsFetching, setUsers, unfollow} from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {userApi} from "../../api/Api";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        userApi.getUsers(this.props.currentPage,this.props.pageSize).then(
            data => {
                debugger
                this.props.setIsFetching(false)
                this.props.setUsers(
                    data.items,
                    data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.changeCount(pageNumber)
        userApi.getUsers(pageNumber,this.props.pageSize).then(
            data => {
                this.props.setIsFetching(false)
                this.props.setUsers(
                    data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followInProgress={this.props.followInProgress}
                    setFollowInProgress={this.props.setFollowInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followInProgress: state.users.followInProgress
    }
}

const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, changeCount, setIsFetching, setFollowInProgress})
(UsersAPI)

export default UsersContainer