import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  name: string | null
  role: string | null
}

const initialState: UserState = {
  name: null,
  role: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      Object.assign(state, action.payload)
    },
    removeUser(state) {
      Object.assign(state, initialState)
    },
  },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
