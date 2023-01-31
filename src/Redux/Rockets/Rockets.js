import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const rocketsData = createAsyncThunk('get/rocketsData', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  if (data) {
    return data;
  }
  return [];
});

const initialState = [];

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },
    cancelReservation(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(rocketsData.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((e) => {
        newState.push({
          id: e[1].id,
          name: e[1].rocket_name,
          description: e[1].description,
          flickr_images: e[1].flickr_images[0],
          reserved: false,
        });
      });
      return newState;
    });
    builder.addCase(rocketsData.rejected, (state, action) => {
      const newState = state;
      newState.push('Rejected');
      return newState;
    });
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;

export default rocketSlice.reducer;
