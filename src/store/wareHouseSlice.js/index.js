import { createSlice } from "@reduxjs/toolkit";
import { employee_data } from "../../constant/EmployeesData";

export const wareHouseSlice = createSlice({
  name: "wareHouse",
  initialState: {
    data: employee_data,
  },
  reducers: {
    AddNewData: (state, action) => {
      state?.data.push(action.payload);
    },
    DeleteEmployee: (state, action) => {
      state.data = state?.data?.filter((info) => info.id !== action.payload.id);
    },
    Update: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.code === action.payload.code
      );
      if (index >= 0) {
        const data = state.data;
        data[index] = action.payload;
        state.data = data;
      }
    },
  },
});

export const { AddNewData, Update, DeleteEmployee } = wareHouseSlice?.actions;

export default wareHouseSlice?.reducer;
