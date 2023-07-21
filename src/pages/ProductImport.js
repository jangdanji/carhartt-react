/* eslint-disable */

import React, { useState } from 'react'

import { products } from './data'
import { useDispatch } from 'react-redux';
import { addItem } from './store';
import { Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function ProductImport( {category} ) {

    const dispatch = useDispatch();
    const code = () => {
        if (category == 'bottom') return 'PA'
        else if (category == 'acc') return 'AC'
        else if (category == 'top') return 'TS JA KN SH'
    }

    
    
    // const priceHigh = () => {
    //     return products.slice().sort((a, b) => b.price - a.price);
    // }
    // const priceLow = () => {
    //     return products.slice().sort((a, b) => a.price - b.price);
    // }
    // const newest = () => {
    //     return products.slice().sort((a, b) => b.number - a.number);
    // }
    // const hot = () => {
    //     return products.slice().sort((a, b) => b.sales - a.sales);
    // }

    // const [selected, setFilter] = useState('')

    // const filter = (selected) => {
    //     switch (selected) {
    //         case 'newest': return console.log('new')
    //         case 'hot': return console.log('hot')
    //         case 'priceHigh': return console.log('high')
    //         case 'priceLow': return console.log('low')
    //     }
    // }

    // const filterSelect = (event) => {
    //     const selectedValue = event.target.value;
    //     setFilter(selectedValue);
    //   };

  return (
        <section className='products'>
            <div className='products-wrap'>
                <div className='sub-banner'>
                    {   
                        <>
                        <img src={process.env.PUBLIC_URL + `/img/category-${category}.jpg`} alt='sub-banner'></img>
                        <h1>{category.toUpperCase()}</h1>
                        </>
                    }
                </div>
                <div className='filter'>
                    <div className='stat'>
                        {'총 ?건'}
                    </div>
                    <select onChange={filterSelect}>
                        <option value="newest">최신 순</option>
                        <option value="hot">인기 순</option>
                        <option value="high-price">가격 높은 순</option>
                        <option value="low-price">가격 낮은 순</option>
                    </select>
                </div>
                

                {
                    // products.slice().sort((a, b) => b.price - a.price) /* 가격 높은 순 */
                    // products.slice().sort((a, b) => a.price - b.price) /* 가격 낮은 순 */
                    // products.slice().sort((a, b) => b.number - a.number) /* 최신 순 */
                    // products.slice().sort((a, b) => b.sales - a.sales) /* 인기 순 */

                    products.slice().sort((a, b) => a.price - b.price).map((pd) => {
                        if ( code().includes(pd.id[6] + pd.id[7]) ) {
                            
                            return(
                                <div className='product-box' key={pd.id}>
                                    <Link to={`/detail/${pd.id}`}>
                                        <img src={pd.image[0]} alt='product'></img>
                                        <img className='hover-img' src={pd.image[2]} alt='product'></img>
                                    </Link>
                                    <div className='detail'>
                                        <h3 className='name-kor'>{pd.kor}</h3>
                                        <p className='name-eng'>{pd.eng}</p>
                                        <b className='price'>{pd.price}</b>
                                    <button className='add-to-cart' onClick={ () => {

                                        dispatch(addItem({img: pd.image, id: pd.id, title: pd.kor, count:1, price:pd.price, pricetotal: pd.price}))

                                        alert('장바구니에 등록되었습니다.')
                                        
                                        } }>장바구니</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </section>

  )
}
