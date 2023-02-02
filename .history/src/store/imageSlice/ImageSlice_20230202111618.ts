import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
    images: number[]
    page: number;
    reference: any
}

const initialState: ImageState = {
    images: [],
    page: 0, 
    reference: null
}

export const ImageSlice = createSlice({
    name: 'image', initialState, reducers: {
        setPage: (state, action: PayloadAction<number>) => { state.page += action.payload },
        setImages: (state, action: PayloadAction<number[]>) => { state.images = [...state.images, ...action.payload] },
        setRef : (state, action: PayloadAction<any>) => {state.reference = action.payload}
    }
})

export const { setPage, setImages } = ImageSlice.actions

export default ImageSlice.reducer