import React from "react";
import c from "./Time.module.scss";

const Time = () =>
{
    let bull = true
    let getTime = () => {
        bull = true
        let date = new Date();
        let minutesDate = date.getMinutes()
        let hoursDate = date.getHours()
        let secondsDate = date.getSeconds()
        let zeroth = {
            0: "ноль",
            1: "одна",
            2: "две",
            3: "три",
            4: "четыре",
            5: "пять",
            6: "шесть",
            7: "семь",
            8: "восемь",
            9: "девять"
        }
        let teenth = {
            10: "десять",
            11: "одиннадцать",
            12: "двенадцать",
            13: "тринадцать",
            14: "четырнадцать",
            15: "пятнадцать",
            16: "шестнадцать",
            17: "семнадцать",
            18: "восемнадцать",
            19: "девятнадцать"
        }
        let tenth = {
            2: "двадцать",
            3: "тридцать",
            4: "сорок",
            5: "пятьдесят"
        }
        let twentyth = {}
        for (let j = 2; j < 6; j++) {
            for (let x = 0; x <= 9; x++) {
                twentyth[`${j}${x}`] = `${tenth[j]} ${zeroth[x]}`
            }
        }

        let hours = {
            ...zeroth, ...teenth,
            1: 'один',
            2: 'два',
            3: 'три',
            20: 'двадцать',
            21: 'двадцать один',
            22: 'двадцать два',
            23: 'двадцать три'
        }

        let minutes = {
            ...zeroth, ...teenth, ...twentyth,
            20: 'двадцать',
            30: 'тридцать',
            40: 'сорок',
            50: 'пятьдесят'
        }
        let hoursForm = (hour) => {
            if (hour == 1 || hour == 21) {
                return hours[hour] + ' час '
            } else if (hour >= 2 && hour <= 4 || hour >= 22 && hour <= 24) {
                return hours[hour] + ' часа '
            } else {
                return hours[hour] + ' часов '
            }
        }


        let minutesForm = (minute) => {
            if (minute == 1 || minute == 21 || minute == 31 || minute == 41 || minute == 51) {
                return minutes[minute] + ' минута '
            } else if (minute >= 2 && minute <= 4 || minute >= 22 && minute <= 24 || minute >= 32 && minute <= 34 || minute >= 42 && minute <= 44 || minute >= 52 && minute <= 54) {
                return minutes[minute] + ' минуты '
            } else {
                return minutes[minute] + ' минут '
            }
        }

        let secondsForm = (second) => {
            if (second == 1 || second == 21 || second == 31 || second == 41 || second == 51) {
                return minutes[second] + ' секунда'
            } else if (second >= 2 && second <= 4 || second >= 22 && second <= 24 || second >= 32 && second <= 34 || second >= 42 && second <= 44 || second >= 52 && second <= 54) {
                return minutes[second] + ' секунды'
            } else {
                return minutes[second] + ' секунд'
            }
        }
        document.getElementById('timedisplay').innerHTML = hoursForm(hoursDate) + minutesForm(minutesDate)/* + secondsForm(secondsDate)*/
        document.getElementById('btn').innerHTML = 'en'
    }
    let getEngTime = () => {
        bull = false
        let date = new Date()
        let minutesDate = date.getMinutes()
        let hoursDate = date.getHours()
        let secondsDate = date.getSeconds()
        let firsts = {
            0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
        }
        let teens = {
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen'
        }
        let tens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty'}
        let twentyth = {}
        for (let j = 2; j < 6; j++) {
            for (let x = 0; x <= 9; x++) {
                twentyth[`${j}${x}`] = `${tens[j]} ${firsts[x]}`
            }
        }
        let minutes = {...firsts, ...teens, ...twentyth, 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty'}
        let hours = {
            ...firsts, ...teens,
            20: minutes[20], 21: minutes[21], 22: minutes[22], 23: minutes[23]
        }
        let getHours = (hour) => {
            switch (hour) {
                case 1:
                    return hours[hour] + ' hour '
                default:
                    return hours[hour] + ' hours '
            }
        }
        let getMinutes = (minute) => {
            switch (minute) {
                case 1:
                    return minutes[minute] + ' minute '
                default:
                    return minutes[minute] + ' minutes '
            }
        }
        let getSeconds = (second) => {
            switch (second) {
                case 1:
                    return minutes[second] + ' second'
                default:
                    return minutes[second] + ' seconds'
            }
        }
        document.getElementById('timedisplay').innerHTML = getHours(hoursDate) + getMinutes(minutesDate)/* + getSeconds(secondsDate)*/
        document.getElementById('btn').innerHTML = 'ру'
    }
    setInterval(getEngTime, 0);
    return(
        <div className={c.time}>
        {bull
        ? <p className={c.btn} id='btn' onClick={setInterval(getTime, 0)}>en</p>
        : <p className={c.btn} id='btn' onClick={setInterval(getEngTime, 0)}>ру</p>}
    <p id='timedisplay'></p>
        </div>
    )
}

export default Time