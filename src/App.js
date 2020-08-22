import React from 'react';
import "./App.css";

const App = () => {
  // App - компонента, App-компонента 
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/ee/91/eb/ee91ebc6-f7e6-2fa2-356e-d5930900691b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
        
      </nav>
      <div className="content">
        <div>
          <img src="https://www.wallpaperflare.com/static/282/432/28/nature-landscape-mountains-road-wallpaper.jpg"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New posts
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
