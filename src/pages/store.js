/* eslint-disable */ 

import { configureStore, createSlice } from '@reduxjs/toolkit'

import { products } from './data'

const sort = createSlice({
    name: 'sort',
    initialState:{
        database: products
    },
    reducers:{
        setData(state, action) {

            const data = action.payload[0]
            let category = action.payload[1]

            let resultData
            
            /* 카테고리 분류 */
            switch (category) {
                case 'bottom': category = 'PA'; break;
                case 'acc': category = 'AC'; break;
                case 'top': category = 'TS JA KN SH'; break;
            }
            resultData = data.filter((pd) => {
                return category.includes(pd.id.slice(6,8))
            })

            /* 필터 분류 */

            const filter = action.payload[2]

            switch (filter) {

                case 'newest': 
                    resultData = resultData.slice().sort((a, b) => b.number - a.number)
                    state.database = resultData; break;
                case 'hot':
                    resultData = resultData.slice().sort((a, b) => b.sales - a.sales)
                    state.database = resultData; break;
                case 'high-price':
                    resultData = resultData.slice().sort((a, b) => b.price - a.price)
                    state.database = resultData; break;
                case 'low-price':
                    resultData = resultData.slice().sort((a, b) => a.price - b.price)
                    state.database = resultData; break;
            }
            

            
        }
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
                state.list[index].count += action.payload.count
                state.totalPrice += action.payload.price * action.payload.count
            }
            else {
                state.list.push(action.payload)
                state.totalPrice += action.payload.price * action.payload.count
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
export const { setData } = sort.actions

export default configureStore({
    reducer:{
        cart:cart.reducer,
        sort:sort.reducer
    }
})