import React, { useState } from "react";
import Progressbar from "../components/Progressbar.jsx";
import Invitations from "../components/Invitations.jsx";

import closeWhite from "../assets/images/close-white.png";

export default function Referral(props){
    const [progress, setProgress] = useState(0)

    const getProgress = () =>{
        chrome.storage.local.get('progress', res=>{
            if(res.progress === undefined) return;
            setProgress(res.progress);
        })
    }

    getProgress();

    return(
        <div className="referral-container">
            <img src={closeWhite} className="close-white" onClick={()=> props.referral()}/>
            <div className="top-section">
                <span className="cation-text">Referral</span>
                <span className="highlight">Invite more friends {'&'} Earn 10 Funky points per verified invite</span>
                <div className="dark-box">
                    <div className="left">Completed?: <span className="yellow">3</span></div>
                    <div className="right">Invited: <span className="yellow">86</span></div>
                </div>
                <div className="invitations-wrapper">
                    <Invitations />
                </div>
            </div>
            <div className="bottom-section">
                <Progressbar progress={progress} nextReward={20} style={{position: 'absolute'}}/>
                <span className="almost-there">
                    You're almost there!
                </span>
                <button className="submit-button">
                    Invite More People
                </button>
            </div>
        </div>
    )
}