import React from 'react'
import PlayImg from './../images/music.svg'
import NomusicSvg from './../images/no-music.svg'
import best from './best.mp3';
import './Play.css'
import useSound from 'use-sound';



const Pause = ({ stop }) => {
    return (
      <div class="wrap">
      <button className="nomusic " onClick={()=>stop()}>
      <img src={NomusicSvg} />
      </button>
      </div>
    );
  };
  
  const Play = ({ play }) => {
    return (
      <button className="play btn btn-white btn-animate"  onClick={play}>
   <img src={PlayImg} />
      </button>
    );
  };
  
  const Player = () => {
    const [play, { stop, isPlaying }] = useSound(best);
    return (

      <div > 
        {isPlaying ? <Pause stop={stop} /> : <Play play={play} />}
      </div>
    );
  };

export default Player;
