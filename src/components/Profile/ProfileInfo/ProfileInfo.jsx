import React from 'react';
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.wallpaperflare.com/static/282/432/28/nature-landscape-mountains-road-wallpaper.jpg"/>
      </div>
      <div className={s.descriptonBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;