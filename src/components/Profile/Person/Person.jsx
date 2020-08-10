import React from 'react';
import c from './Person.module.scss'

const Person = (props) =>
{
    return (
        <div>
            {props.person.map(p => (
            <div className = {c.person}>
                <div className = {c.ava}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className = {c.desc}>
                    <div>Фамилия</div>
                    <div>Имя</div>
                    <div>Пол</div>
                    <div>Возраст</div>
                    <div>Город</div>
                </div>
                <div className = {c.ription}>
                    <div>{p.surname}</div>
                    <div>{p.name}</div>
                    <div>{p.male}</div>
                    <div>{p.age}</div>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.contacts.vk}</div>
                </div>
            </div>
                ))}
        </div>)
}

export default Person;
