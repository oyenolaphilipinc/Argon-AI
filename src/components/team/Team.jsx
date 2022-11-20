import React from 'react'
import Navbar from '../navbar/Navbar';
import './Team.css'
import Logo from '../../assets/possibility.png'
import Todd from '../../assets/todd.png'
import Ariel from '../../assets/ariel.png'
import Erez from '../../assets/erez.png'

function Team(){
    return(
        <>
        <Navbar />
        <div>
        <div className="team-class">
            <div className="text">
                <h2 className="font">We think big.</h2>
                <h2 className="font">We think different.</h2>
                <h2 className="font">We are Smart.</h2>
            </div>
            <div>
                <img src={Logo} height={500} width={500} alt="Possible" />
            </div>
        </div>
        <div className="meet">
            <h1 className="meet-text">Meet The Team</h1>
        </div>
        <div className='team-flex'>
            <div className="border-solid">
                <img src={Todd} height={250} width={250} className="todd-img" alt={"todd"} />
                <h2 className="text-center ceo mb-2">Suraga Devraj</h2>
                <p className="text-center text-white">Co-Founder and CEO</p>
            </div>
            <div className="ariel">
                <img src={Ariel} height={250} width={250} className="ariel-img" alt={"Ariel"} />
                <h2 className="text-center ceo mb-2">Oyenola Philip</h2>
                <p className="text-center text-white">Co-Founder and CTO</p>
            </div>
            <div className="erez">
                <img src={Erez} height={250} width={250} className="erez-img" alt={"Erez"} />
                <h2 className="text-center ceo mb-2">Sunil Pumar</h2>
                <p className="text-center text-white">Senior Engineer</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Team;