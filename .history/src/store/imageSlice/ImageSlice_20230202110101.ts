import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
    images: number[]
    page: number;
}

const initialState: ImageState = {
    images: [],
    page: 0,
}

export const ImageSlice = createSlice({
    name: 'image', initialState, reducers: {
        setPage: (state, action: PayloadAction<number>) => { state.page += action.payload },
        setIncrement: (state, action: PayloadAction<number[]>) => { state.images = [...state.images, ...action.payload] }
    }
})

export const { pageIncrement, imagesIncrement } = ImageSlice.actions

export default ImageSlice.reducer