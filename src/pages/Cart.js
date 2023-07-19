/* eslint-disable */ 

import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { cartBtn } from './store'

export default function Cart() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    if (state.cart.list.length !== 0) {
        return (
                <div className='my-cart'>
                    <div className='my-cart-wrap'>
                        <ul>
                            <li className='sort'>
                                <div className='image'></div>
                                <div className='name'>상품명</div>
                                <div className='price'>가격</div>
                                <div className='count'>갯수</div>
                                <div className='cart-btn'></div>
                            </li>

                            {state.cart.list.map((item, i) => {
                                return(
                                    <li key={i}>
                                        <div className='image'>
                                            <img src={item.img} alt='cart-img'/>
                                        </div>
                                        <div className='name'>{item.title}</div>
                                        <div className='price'>{item.price}</div>
                                        <div className='count'>{item.count}</div>
                                        <div className='cart-btn'>
                                            <button className='plus' onClick={ () => {
                                                dispatch(cartBtn([item, 'plus']))
                                            }}>+</button>
                                            <button className='minus' onClick={ () => {
                                                dispatch(cartBtn([item, 'minus']))
                                            }}>-</button>
                                            <button className='delete' onClick={ () => {
                                                dispatch(cartBtn([item, 'delete']))
                                            }}>삭제</button>
                                        </div>
                                    </li>
                                )
                                
                            })}

                            
                        </ul>
                        <h2 className='cart-result'>
                            {'총 가격 : ' + state.cart.totalPrice}
                        </h2>
                    </div>
                </div>
        )}
    
    else {
        return(
        <div className='my-cart'>
            <div className='my-cart-wrap'>
                <h2 className='cart-result'>장바구니가 비었습니다.</h2>
            </div>
        </div>
        )
    }
}
