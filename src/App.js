import "./App.css";
import React, { useEffect,useRef } from "react";
import galaxy from "./assets/galaxy1.mp4"

import calender from "./assets/icons/calendar.svg"
import cart from "./assets/icons/cart.svg"
import cloud from "./assets/icons/cloud.svg"
import gear from "./assets/icons/gear.svg"
import globe  from "./assets/icons/globe.svg"
import house from "./assets/icons/house.svg"
import trash from "./assets/icons/trash.svg"
import user from "./assets/icons/user.svg"

import { useState } from "react";
function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Function to update the index value
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        // Check if index is less than 8 before incrementing
        if (prevIndex < 8) {
          return prevIndex + 1;
        } else {
          prevIndex=0; // Stop the interval when index reaches 8
          return prevIndex;
        }
      });
    }, 10000); // 5000ms = 5 seconds

   
    return () => clearInterval(intervalId);
  }, []);

  // Log the index to the console whenever it changes
  useEffect(() => {
    console.log('Index value:', index);
  }, [index]); 

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Set the default playback rate to 2.0 and start playing
      video.defaultPlaybackRate = 2.0;
      video.play();

      // Set playback rate to 3.0 after starting
      video.playbackRate = 6.0;
    }
  }, []);
  return (
    <div className="body">
       <div class="text">Cosmos Animation</div>
       <div class="main">
      <video  autoPlay loop muted playsInline className="background-video" >
        <source src={galaxy} type="video/mp4" />
      </video>
      
      <div class="feature">
        <div class="orbit">
          <ul>
            <li className={`${index>=1?'motion':'initial'}`}>
              <img src={calender}  style={{ width: '40px', height: '40px' }}/>
            </li>
            <li className={`${index>=2?'motion':'initial'}`}>
              <img src={cart} style={{ width: '40px', height: '40px' }}/>
            </li>
            <li className={`${index>=3?'motion':'initial'}`}>
              <img  src={cloud}style={{ width: '40px', height: '40px' }}/>
            </li>
            <li className={`${index>=4?'motion':'initial'}`}>
              <img src={gear}style={{ width: '40px', height: '40px' }}/>
            </li>
            <li className={`${index>=5?'motion':'initial'}`}>
              <img src={globe} style={{ width: '40px', height: '40px' }}/>
            </li>
            <li className={`${index>=6?'motion':'initial'}`}>
              <img src={house} style={{ width: '40px', height: '40px' }}/>
            </li>
            <li className={`${index>=7?'motion':'initial'}`}>
              <img src={trash} style={{ width: '40px', height: '40px' }}/>
            </li>
            <li className={`${index>=8?'motion':'initial'}`}>
              <img src={user} style={{ width: '40px', height: '40px' }}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
