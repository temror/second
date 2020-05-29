import React from 'react';
import css from './Message.module.scss'

const Message = (props) => {
    return (
            <div className={css.message}>
                {props.text}
            </div>

    );
}

export default Message;
