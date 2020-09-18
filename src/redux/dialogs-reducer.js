const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE= "SEND_MESSAGE";

let initialState = {
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
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = " ";
      state.messages.push({id: 6, message: body});
      return state;
    
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;