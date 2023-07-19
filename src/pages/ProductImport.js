/* eslint-disable */

import React from 'react'

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
    // const [a, setA] = useState(false);

    // if(!a) {

    // }
  return (
        <section className='products'>
            <div className='pruducts-wrap'>
                {
                    products.map((pd) => {
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
