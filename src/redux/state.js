const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
      ]
    }
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
    if (action.type === ADD_POST) { // { type: "ADD-POST" }
      
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = " ";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;

window.store = store;