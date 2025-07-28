import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    leaderboard_loading: false,
    leaderboard_data: []
};

export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,

    reducers: {
        setLeaderboardLoading: (state, action) => {
            state.leaderboard_loading = action.payload;
        },
        setLeaderboardData: (state, action) => {
            state.leaderboard_data = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { setLeaderboardLoading, setLeaderboardData } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
