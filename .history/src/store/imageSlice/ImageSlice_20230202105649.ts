import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
    value: number[]
    page: number;
}

const initialState: ImageState = {
    value: [],
    page: 0,
}

export const ImageSlice = createSlice({
    name: 'image', initialState, reducers: {
        pageIncrement: (state, action: PayloadAction<number>) => { state.page += action.payload }
    }
})