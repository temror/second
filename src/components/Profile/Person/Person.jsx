import React from 'react';
import c from './Person.module.scss'
const Person = () =>
{
    return (
        <div className = {c.person}>
        <div className = {c.ava}>
        <img src = 'https://cs11.pikabu.ru/post_img/2019/03/24/1/1553379308166070482.jpg'></img>
        </div>
        <div className = {c.description}>
          <div className = {c.surname}>
           Фамилия: Дунаева
          </div>
          <div className = {c.name}>
            Имя: Леся
          </div>
          <div className = {c.male}>
            Пол: женский
          </div>
          <div className = {c.age}>
            Возраст: 24
          </div>
          <div className = {c.city}>
            Город: село Большая Алешня
          </div>
        </div></div>
    );
}

export default Person;
