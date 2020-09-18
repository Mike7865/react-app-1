import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: "1", message: "Hi, how are you?", likesCount: "34"},
        {id: "2", message: "It`s my first post.", likesCount: "23"}
      ],
      newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
      dialogs: [
        {id: "1", name: "Alexei"},
        {id: "2", name: "Steven"},
        {id: "3", name: "Jose"},
        {id: "4", name: "Mario"},
        {id: "5", name: "Gustav"},
        {id: "6", name: "Jean"}
      ],
      messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "Hello"},
        {id: "3", message: "What are you doing?"},
        {id: "4", message: "Hey"},
        {id: "5", message: "Yo"}
      ],
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
    
  }
}

export default store;

window.store = store;