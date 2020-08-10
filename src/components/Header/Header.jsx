import React from 'react';
import c from './Header.module.scss'
import Time from "../../common/Time/Time";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={c.header}>
           {/* <Time/>*/}
            <div className={c.login_block_container}>
                {props.isLog ?
                    <span>{props.login} </span>
                :<div className={c.login_block}>
                        <textarea/>
                        <div className={c.buttons}>
                            <a href='#'>Sign In</a>
                            <NavLink to={'/login'}>Sign Up</NavLink>
                        </div>
                    </div>
                }
              {/*  <div className={c.login_block}>
                    <textarea/>
                    <div className={c.buttons}>
                        <a href='#'>Sign In</a>
                        <NavLink to={'/login'}>Sign Up</NavLink>
                        <span>{props.login} </span>
                    </div>
                </div>*/}
            </div>
        </header>
    );
}

export default Header;
