import { faker } from "@faker-js/faker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
    imageUrl: string | null;
}

const initialState: ImageState = {
    imageUrl: faker.image.avatar(),
};

const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<string | null>) => {
            state.imageUrl = action.payload;
        },
        clearImage: (state) => {
            state.imageUrl = null;
        },
    },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;