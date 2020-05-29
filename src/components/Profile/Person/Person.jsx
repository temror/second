import React from 'react';
import c from './Person.module.scss'
const Person = (props) =>
{
    return (
        <div className = {c.person}>
        <div className = {c.ava}>
        <img src = {props.avatar}></img>
        </div>
        <div className = {c.desc}>
          <div className = {c.surname}>
           Фамилия:
          </div>
          <div className = {c.name}>
            Имя:
          </div>
          <div className = {c.male}>
            Пол:
          </div>
          <div className = {c.age}>
            Возраст:
          </div>
          <div className = {c.city}>
            Город:
          </div>
        </div>
            <div className = {c.ription}>
                <div className = {c.surname}>
                    {props.surname}
                </div>
                <div className = {c.name}>
                    {props.name}
                </div>
                <div className = {c.male}>
                    {props.male}
                </div>
                <div className = {c.age}>
                    {props.age}
                </div>
                <div className = {c.city}>
                    {props.city}
                </div>
            </div>
        </div>
    );
}

export default Person;
