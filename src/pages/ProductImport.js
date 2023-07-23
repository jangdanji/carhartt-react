/* eslint-disable */

import React, { useEffect, useState } from 'react'

import { products } from './data'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { setData, addItem } from './store'

export default function ProductImport( {category} ) {

    const data = useSelector((state) => state.sort.database)

    const dispatch = useDispatch()

    /* 필터 */
    const [selected, setSelected] = useState('newest')
    const filterSelect = (event) => setSelected(event.target.value)

    useEffect(() => {
        dispatch( setData([products, category, selected]) )
    }, [category, selected] )

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
                        {`총 ${data.length}건`}
                    </div>
                    <select onChange={filterSelect}>
                        <option value="newest">최신 순</option>
                        <option value="hot">인기 순</option>
                        <option value="high-price">가격 높은 순</option>
                        <option value="low-price">가격 낮은 순</option>
                    </select>
                </div>
                

                {
                    data.map((pd) => {
                            return(
                                <div className='product-box' key={pd.id}>
                                    <Link to={`/detail/${pd.id}`}>
                                        <img src={process.env.PUBLIC_URL + pd.image[0]} alt='product'></img>
                                        <img className='hover-img' src={process.env.PUBLIC_URL + pd.image[1]} alt='product'></img>
                                    </Link>
                                    <div className='detail'>
                                        <h3 className='name-kor'>{pd.kor}</h3>
                                        <p className='name-eng'>{pd.eng}</p>
                                        <b className='price'>{pd.price.toLocaleString()}</b>
                                    <button className='add-to-cart' onClick={ () => {

                                        dispatch(addItem({img: pd.image, id: pd.id, title: pd.kor, count:1, price:pd.price}))

                                        alert('장바구니에 등록되었습니다.')
                                        
                                        } }>장바구니</button>
                                    </div>
                                </div>
                            )
                    })
                }
            </div>
        </section>

  )
}
