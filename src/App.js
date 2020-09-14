import React from 'react';
import "./App.css";
import Header from"./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import { updateNewPostText } from './redux/state';

const App = (props) => {
  // App - компонента, App-компонента 

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={ () => <Profile 
          profilePage={props.state.profilePage} 
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText} />}/>
        <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage} />}/>
      </div>
    </div>
  );
}

export default App;
