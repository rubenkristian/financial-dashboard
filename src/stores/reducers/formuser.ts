import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  errors: {
    email?: string;
    password?: string;
  };
}

const initialState: FormState = {
  errors: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<FormState["errors"]>) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {};
    },
  },
});

export const { setError, clearErrors } = formSlice.actions;
export default formSlice.reducer;