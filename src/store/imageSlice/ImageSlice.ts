import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
    reference: any
}

const initialState: ImageState = { 
    reference: null
}

export const ImageSlice = createSlice({
    name: 'image', initialState, reducers: {
        setRef : (state, action: PayloadAction<any>) => {state.reference = action.payload}
    }
})

export const { setRef } = ImageSlice.actions

export default ImageSlice.reducer