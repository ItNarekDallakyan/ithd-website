import {createSlice} from "@reduxjs/toolkit";
import {WORKS} from "@common/database";
import {WorksSliceModel} from "@models/interfaces/reducers";

const initialState: WorksSliceModel = {
    works: WORKS
};

const WorksReducer = createSlice({
    name: "works-slice",
    initialState,
    reducers: {}
});

export default WorksReducer.reducer;