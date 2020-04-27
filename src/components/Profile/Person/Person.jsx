import React from 'react';
import c from './Person.module.scss'
const Person = (props) =>
{
    return (
        <div className = {c.person}>
        <div className = {c.ava}>
        <img src = 'https://cs11.pikabu.ru/post_img/2019/03/24/1/1553379308166070482.jpg'></img>
        </div>
        <div className = {c.description}>
          <div className = {c.surname}>
           Фамилия: {props.surname}
          </div>
          <div className = {c.name}>
            Имя: {props.name}
          </div>
          <div className = {c.male}>
            Пол: {props.male}
          </div>
          <div className = {c.age}>
            Возраст: {props.age}
          </div>
          <div className = {c.city}>
            Город: {props.city}
          </div>
        </div></div>
    );
}

export default Person;
