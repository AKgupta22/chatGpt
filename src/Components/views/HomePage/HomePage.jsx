import React from 'react'
import HomePageTabs from './HomePageTabs'
import logo from '../../../../src/assets/media/hypnoscript_logo.png'
import Search from 'antd/es/input/Search'
import RadioSelect from './RadioSelect'
import audioMusic from '../../../assets/media/music.MP3'
import { Button } from 'antd'
import { useNavigate } from 'react-router'

export default function HomePage() {

    const navigate = useNavigate()

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                <h5 style={{ fontSize: "1.4em", fontWeight: '700', fontStyle: "oblique" }}>Welcome to the Hypnobot</h5>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={logo} alt="logo" height={"100px"} width={"100px"} />
                    <div className='home-action-btn'>
                        <Button onClick={() => navigate('/login')} type='primary'>Login</Button>
                        <Button onClick={() => navigate('/register')} type='primary' style={{ marginLeft: ".5rem" }}>Register</Button>
                    </div>
                </div>
            </div>
            <HomePageTabs />
            <div className='text-container'>
                <Search
                    placeholder="Get Random Hypnosis!!"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={(values) => console.log(values)}
                />
                <p className='hypnoText'>Hypno Bot App : AI Generated Hypnosis Scripts!</p>
                <p className='patient-text'>Note: Please Be Patient! The Hypnobot takes 1-2 Minutes to Generate Your Script. Please pause, breathe, and enjoy the present moment.</p>
                <RadioSelect />
                <p style={{ fontSize: "1.5em", fontWeight: '700' }}>Play Lilly Pond while your hypnosis script is generating...</p>
                <audio id="player" autoplay controls><source src={audioMusic} type="audio/mp3" /></audio>
                <p style={{ fontSize: "1.5em", fontWeight: '700' }}>Thank you for using the Happy Hypno Bot You Are Deeply Deeply Loved</p>
            </div>
        </div>
    )
}
