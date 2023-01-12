import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://127.0.0.1:3000/greeting';

const FETCH = 'http://127.0.0.1:3000/greeting/FETCH';

const initialState = {
  greeting: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.greet;
});

// const GET_MESSEGE = '/greetings';

// export default function getMessege(state = [], action) {
//   switch (action.type) {
//     case GET_MESSEGE: return action.payload;
//     default: return state;
//   }
// }

// export const fetchMessege = (messege) => ({
//   type: GET_MESSEGE,
//   payload: messege,
// });