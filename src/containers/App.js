import React, { useEffect, useRef, useState } from 'react';
import '../style/App.css';
import stars from '../img/bg-stars.svg'
import pattern from '../img/pattern-hills.svg'
import facebook from '../img/icon-facebook.svg'
import insta from'../img/icon-instagram.svg'
import pinterest from '../img/icon-pinterest.svg'

const App = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('Apr 14, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 *24));
            const hours = Math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                // stop time
                clearInterval(interval.current)
            } else {
                // update time
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    return (
        <div>
            <div className='container'>
                <div className='stars'>
                    <img src={stars} alt='' />
                </div>

                    <h1>We're launching soon</h1>
                    <div className='countdown'>
                        <div>
                            <p>{timerDays}</p>
                            <h3>Days</h3>
                        </div>

                        <div>
                            <p>{timerHours}</p>
                            <h3>Hours</h3>
                        </div>

                        <div>
                            <p>{timerMinutes}</p>
                            <h3>Minutes</h3>
                        </div>

                        <div>
                            <p>{timerSeconds}</p>
                            <h3>Seconds</h3>
                        </div>
                    </div>
                    <div className='socials'>
                        <ul>
                            <li><img src={facebook} alt='' /></li>
                            <li><img src={insta} alt='' /></li>
                            <li><img src={pinterest} alt='' /></li>
                        </ul>

                    </div>

                    <div className='hills'>
                        <img src={pattern} alt='' />
                    </div>

                </div>
                

        </div>
    )
}

export default App