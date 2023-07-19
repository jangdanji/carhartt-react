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


export const { addItem, cartBtn } = cart.actions

export default configureStore({
    reducer:{
        cart:cart.reducer,
    }
})