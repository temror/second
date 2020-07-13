import React from "react";
import c from "./Users.module.scss"
import userPhoto from "../../images/liv.jpg";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 15; i++) {
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
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={c.ava}/>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        props.unfollowContainer(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.followContainer(u.id)
                    }}>Follow</button>}
            </div>
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