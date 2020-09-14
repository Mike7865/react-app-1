let rerenderEntireTree = () => {
  console.log("State changed");
}

let state = {
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
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = " ";
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;