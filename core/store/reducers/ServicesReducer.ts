import {createSlice} from "@reduxjs/toolkit";
import {SERVICES} from "@common/database";
import {ServicesSliceModel} from "@models/interfaces/reducers";

const initialState: ServicesSliceModel = {
    services: SERVICES
};

const ServicesSlice = createSlice({
    name: "services-slice",
    initialState,
    reducers: {}
});

export default ServicesSlice.reducer;