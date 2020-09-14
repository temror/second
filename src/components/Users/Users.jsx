import React from "react";
import c from "./Users.module.scss"
import userPhoto from "../../images/liv.jpg";
import {NavLink} from "react-router-dom";

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
                        onClick={() => {props.unfollow(u)}}>Unfollow</button>
                    : <button
                        disabled={props.followInProgress.some(id => id === u.id)}
                        onClick={() => {props.follow(u)}}>Follow</button>}
            </div>
        </span>
                    <span>
            <div>{u.name}</div>
        </span>
                </div>
            ))}</div>
    )
}

export default Users