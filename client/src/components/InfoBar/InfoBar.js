import React from 'react';
import onlineIcon from '../Icons/online.png';
import closeIcon from '../Icons/close.png';
import './InfoBar.css';

const InfoBar = ({room}) => (
     <div className="infoBar">
          <div className="leftInnerContainer">
               <img className="onlineIcon" src={onlineIcon} alt="Online image" />
               <h3>{room}</h3>
          </div>
          <div className="rightInnerContainer">
               <a href="/"> <img src={closeIcon} alt="Close image" /> </a>
          </div>
     </div>
)

export default InfoBar;
