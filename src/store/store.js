import { configureStore } from '@reduxjs/toolkit'

import homeSlice from './homeSlice'

// export default configureStore({
//   reducer: {
//     home: homeSlice
//   }
// })

export const store = configureStore({
    reducer:{
        home: homeSlice
    },
});