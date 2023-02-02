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
        pageIncrement: (state, action: PayloadAction<number>) => { state.page += action.payload },
        imagesIncrement: (state, action: PayloadAction<number[]>) => { state.images = [...state.images, ...action.payload] }
    }
})