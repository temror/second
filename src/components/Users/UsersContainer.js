import React from "react";
import {connect} from "react-redux";
import {
    acceptFollow, acceptUnfollow,
    follow,
    getUsers,
    onPageChanged,
    setFollowInProgress,
    unfollow
} from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(pageNumber, this.props.pageSize)
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
                    followInProgress={this.props.followInProgress}
                    follow={this.props.follow}
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
    {
        acceptFollow, acceptUnfollow,
        follow, unfollow, setFollowInProgress,
        getUsers, onPageChanged
    })
(UsersAPI)

export default UsersContainer