import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://www.wallpaperflare.com/static/282/432/28/nature-landscape-mountains-road-wallpaper.jpg"/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;