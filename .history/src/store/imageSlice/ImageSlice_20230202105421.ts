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