import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RepositoryFactory } from "../repository/RepositoryFactory";
const subredditsRepository = RepositoryFactory.get("subreddits");

export const fetchHotList = createAsyncThunk(
  "subreddits/fetchHotList",
  async (params) => {
    try {
      const res = await subredditsRepository.getHotSubreddits(params);
      const { status, data } = res;
      if (status === 200) {
        return data.data.children;
      }
    } catch (e) {
      return [];
    }
  }
);

export const fetchNewList = createAsyncThunk(
  "subreddits/fetchNewList",
  async (params) => {
    try {
      const res = await subredditsRepository.getNewSubreddits(params);
      const { status, data } = res;
      if (status === 200) {
        return data.data.children;
      }
    } catch (e) {
      return [];
    }
  }
);

export const fetchTopList = createAsyncThunk(
  "subreddits/fetchTopList",
  async (params) => {
    try {
      const res = await subredditsRepository.getTopSubreddits(params);
      const { status, data } = res;
      if (status === 200) {
        return data.data.children;
      }
    } catch (e) {
      return [];
    }
  }
);

const initialState = {
  subredditsList: [],
  status: "idle",
};

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotList.fulfilled, (state, action) => {
        state.subredditsList = action.payload;
      })
      .addCase(fetchNewList.fulfilled, (state, action) => {
        state.subredditsList = action.payload;
      })
      .addCase(fetchTopList.fulfilled, (state, action) => {
        state.subredditsList = action.payload;
      });
  },
});

export const {} = subredditsSlice.actions;

export default subredditsSlice.reducer;
