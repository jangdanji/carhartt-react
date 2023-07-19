/* eslint-disable */ 

import React, { useEffect, useState } from 'react'
import { Link, Routes, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { useDispatch, useSelector } from 'react-redux';

import { best_data, new_data, visual_data, lookbook_data, mds_data, insta_data, products } from './data'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperProps = {
  modules: [Navigation, Pagination], slidesPerView: 1,
  navigation: true, loop: true,
  pagination: {
    clickable: true,
    renderBullet: function (index) {
      return `<span class="swiper-pagination-bullet"> ${visual_data[index].name} </span>`;
      } }, 
}

const swiperProps2 = {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
  }

const newest = products.slice().sort((pd1, pd2) => pd2.number - pd1.number)
const best = products.slice().sort((pd1, pd2) => pd2.sales - pd1.sales)



export default function Home() {

    const navigate = useNavigate()

  return (
    <>
        <section className='visual-main'>
        <div className='visual-main-wrap'>
            <Swiper {...swiperProps}>
            {
                visual_data.map((data, i) => {
                return (
                    <SwiperSlide key={i}>
                    <img src={process.env.PUBLIC_URL + data.src} alt={'swiper-img-' + i}></img>
                    </SwiperSlide>
                )
                })
            }
            </Swiper>
        </div>
        </section>
        <section className='best-products'>
            <div className='best-products-wrap'>
            <h1>Best Products</h1>
            <Swiper {...swiperProps2}>
                {
                    
                    best.slice(0, 8).map((data) => {
                    return(
                        <SwiperSlide>
                            <Link to={`/detail/${data.id}`}>
                                <div className='slide-wrap'>
                                    <img src={data.image[0]}></img>
                                    <img src={data.image[2]} className='hover-img'></img>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )

                    })
                }
            </Swiper>
            </div>
        </section>
        <section className='new-products'>
            <div className='new-products-wrap'>
            <h1>New Products</h1>
            <Swiper {...swiperProps2}>
                {
                    newest.slice(0, 8).map((data) => {
                    return(
                        <SwiperSlide>
                            <Link to={`/detail/${data.id}`}>
                                <div className='slide-wrap'>
                                    <img src={data.image[0]}></img>
                                    <img src={data.image[1]} className='hover-img'></img>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )

                    })
                }
            </Swiper>
            </div>
        </section>
        <section className='lookbook'>
            <h2>Lookbook</h2>
            <div className='lookbook-wrap'>
                <div className='accordion a1'>
                    <img src={lookbook_data[0].src} alt='lookbook-1'></img>
                </div>
                <div className='accordion a2'>
                    <img src={lookbook_data[1].src} alt='lookbook-2'></img>
                </div>
                <div className='accordion a3'>
                    <img src={lookbook_data[2].src} alt='lookbook-3'></img>
                </div>
            </div>
        </section>
        <section className='mds-pick'>
            <h2>MD's Pick</h2>
            <div className='mds-pick-wrap'>
                {
                    mds_data.map((data, i) => {
                        return(
                            
                                <div className='pick-product' key={i}>
                                        <Link to={`detail/${data.id}`}>
                                            <img src={data.src} alt='mds-pick-img'></img>
                                        </Link>
                                        <div className='hover-content'>
                                            <p className='title-eng'>{data.eng}</p>
                                            <p className='title-kor'>{data.kor}</p>
                                            <p className='price'>{data.price}</p>
                                            <button className='view-more' onClick={ () => navigate(`detail/${data.id}`)}>자세히 보기</button>
                                        </div>
                                    
                                </div>
                            
                        )
                    })
                }
            </div>
        </section>
        <section className='instagram'>
            <h2>Instagram</h2>
            <div className='instagram-wrap'>
                {
                    insta_data.map((data) => {
                        return(
                            <div className='insta-post'>
                                <img src={data.src} alt='instagram-link-img'></img>
                                <div className='link'>인스타그램 방문하기</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}
