import React from 'react';
import useSound from 'use-sound';
import { useState } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useEffect } from 'react';

import '../styles/PlayerStyle.css';

var a;

export default function Player({ soundData }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(URL.createObjectURL(soundData));

    const playingButton = () => {
        if (isPlaying) {
            a.pause();
            setIsPlaying(false);
        } else {
            a.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        if (a) {
            a.pause();
            a = null;
            setIsPlaying(false);
        }
        if (audio) {
            a = new Audio(audio);
            a.onended = () => {
                setIsPlaying(false);
            };
        }
    }, [audio]);

    return (
        <div className="playerDiv">
            <div className="component">
                <div className='div1'>
                    <img
                        className="musicCover"
                        src="https://picsum.photos/100/100"
                    />
                    <h3 className="title">{soundData.name}</h3>
                    
                </div>
                <div>
                    <button className="playButton">
                        <IconContext.Provider value={{ size: "3em", color: "#656565" }}>
                            <BiSkipPrevious />
                        </IconContext.Provider>
                    </button>
                    {!isPlaying ? (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: "3em", color: "#ffffff" }}>
                                <AiFillPlayCircle />
                            </IconContext.Provider>
                        </button>
                    ) : (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: "3em", color: "#656565" }}>
                                <AiFillPauseCircle />
                            </IconContext.Provider>
                        </button>
                    )}
                    <button className="playButton">
                        <IconContext.Provider value={{ size: "3em", color: "#656565" }}>
                            <BiSkipNext />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        </div>
    )
}