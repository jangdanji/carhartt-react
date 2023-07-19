/* eslint-disable */ 

import { configureStore, createSlice } from '@reduxjs/toolkit'
import { products } from './data'

const category = createSlice({
    name: 'category',
    initialState:'',
    reducers:{

    }
})

const cart = createSlice({
    name:'cart',
    initialState:{
        list:[],
        totalPrice: 0
    },

    reducers:{
        addItem(state,action) {

            const index = state.list.findIndex((findID) => {
                return findID.id === action.payload.id 
            })

            if (index !== -1) {
                state.list[index].count++
                state.totalPrice += state.list[index].price
            }
            else {
                state.list.push(action.payload)
                state.totalPrice += action.payload.price
            }
        },
        cartBtn(state, action) {

            let index

            state.list.findIndex((find, i) => {
                if (find.id === action.payload[0].id) {
                    console.log('index : ' + i)
                    return index = i
                }
            })

            const product = state.list[index]

            if (index === -1) {
                state.list.push(action.payload[0])
                state.totalPrice += product.price
            }

            else if (action.payload[1] === 'plus') {
                product.count++
                state.totalPrice += product.price
            }

            else if (action.payload[1] === 'minus') {

                if (product.count === 1) {
                    console.log('1개')
                } else {
                    product.count--
                    state.totalPrice -= product.price
                }
            }
            
            else if (action.payload[1] === 'delete') {
                
                state.list.splice(index, 1)
                state.totalPrice -= (product.count * product.price)
            }
        }
    }
})

// const dataImport = createSlice({
//     name: 'data',
//     initialState: products,
//     reducers: {
//         sortProducts(state, action){
//             if (action.payload === '최신순 정렬'){
//                 const newset = products.slice().sort((pd1, pd2) => pd2.sales - pd1.sales)
//                 // const newest = state
//                 return newest
//             }
//         }
//     }
// })

export const { addItem, cartBtn } = cart.actions
// export const { sortProducts } = dataImport.actions


export default configureStore({
    reducer:{
        cart:cart.reducer,
        // dataImport:dataImport.reducer
    }
})