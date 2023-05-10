import { createSlice } from "@reduxjs/toolkit";
import { IAppStoorage } from "../../utils/types";

const initialState:IAppStoorage = {
   cityIsChosen: false,
   chosenCity: "City",
   cityList: []
}

const appStoorage = createSlice({
    name: "appStoorage",
    initialState: initialState,
    reducers: {
           setCityIsChosen (state, action) {
            state.cityIsChosen = action.payload;
           },
           setChosenCity (state, action) {
            state.chosenCity = action.payload;
           },
            setCityList (state, action) {
            state.cityList = action.payload;
           }
        }
})

export const { setCityIsChosen, setChosenCity, setCityList } = appStoorage.actions;

export default appStoorage.reducer;