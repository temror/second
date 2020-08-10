import React from 'react';
import c from './Music.module.scss'

const Music = () => {
    return (
        <div className={c.music}>
            <span></span>Command + Shift + V - буфер обмена
            Command + Option + C - консоль
        </div>
    );
}

export default Music;
