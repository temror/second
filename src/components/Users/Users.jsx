import React from "react";
import c from "./Users.module.scss"
import userPhoto from "../../images/liv.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userApi} from "../../api/Api";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages[i - 1] = i
    }
    return (
        <div className={c.users}>
            <div className={c.pages}>
                {pages.map(p => (<span
                    className={props.currentPage === p && c.selectedPage}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>)
                )}
            </div>
            {props.users.map(u => (
                <div className={c.user} key={u.id}>
        <span>
            <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={c.ava}/>
            </NavLink>
            <div>
                {u.followed
                    ? <button
                        disabled={props.followInProgress.some(id => id === u.id)}
                        onClick={() => {
                            props.setFollowInProgress(true, u.id)
                            userApi.apiUnfollow(u).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.setFollowInProgress(false, u.id)
                            })
                        }}
                    >Unfollow</button>
                    : <button
                        disabled={props.followInProgress.some(id => id === u.id)}
                        onClick={() => {
                            props.setFollowInProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {'API-KEY': '0160ca7c-6b5d-4f52-9db3-b0ccd36c63fc'}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.setFollowInProgress(false, u.id)
                                })
                        }}>Follow</button>}</div>
        </span>
                    <span>
        <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
                        {/*<span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
        </span>*/}
            </span>
                </div>
            ))}</div>
    )
}

export default Users