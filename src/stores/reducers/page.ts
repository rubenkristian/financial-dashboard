import { faker } from "@faker-js/faker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
    pageLabel: string | null;
}

const initialState: ImageState = {
    pageLabel: '',
};

const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setPageLabel: (state, action: PayloadAction<string | null>) => {
            state.pageLabel = action.payload;
        },
    },
});

export const { setPageLabel } = imageSlice.actions;
export default imageSlice.reducer;