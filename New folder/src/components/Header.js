import React from "react";

export default function Header({ headerData }) {
  const { firstName, lastName, profileImage, profileBackgroundImage, themeColorHard, themeColorSoft } = headerData;
  
  return (
    <header>
      <div className="userName" style={{backgroundColor:themeColorHard,}} >{firstName +" "+ lastName}</div>
        <div className="user-image">
          <div className="profileImage" style={{backgroundImage: `url("${profileImage}")` }}></div>
          <div className="backgroundProfileImage" style={{backgroundImage: `url("${profileBackgroundImage}")` }}>
              
            </div>
        </div>
       
    </header>
  );
}
