import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './store';

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const swiperProps = {
  modules: [Navigation, Pagination], slidesPerView: 1,
  navigation: true, loop: true,
  pagination: {
    clickable: true,}
}

export default function Detail() {

    const {id} = useParams()
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(1)
    console.log(amount)

  return(
    <section className="detail-view">
      <div className='detail-view-wrap'>
        
        {products.map((data) => { if(data.id === id) {
          
            return(
              <>
                <div className='detail-visual'>
                  <Swiper {...swiperProps}>
                    {
                        data.image.map((image, i) => {
                        return (
                            <SwiperSlide key={i}>
                              <img src={process.env.PUBLIC_URL + image} alt={'swiper-img-' + i}></img>
                            </SwiperSlide>
                        )
                        })
                    }
                  </Swiper>
                </div>
                <div className='detail-info'>
                    <div className='title'>
                      <p className='title-id'><b>{data.id}</b></p>
                      <p className='title-kor'>{data.kor}</p>
                      <p className='title-eng'>{data.eng}</p>
                      <p className='price'>₩ {data.price.toLocaleString()}</p>
                    </div>
                    <div className='user-btn'>
                      <div className='amount-btn'>
                        <div className='minus' onClick={() => amount == 1 ? setAmount(1) : setAmount(amount - 1)}><FontAwesomeIcon icon={faMinus} /></div>
                        <div className='prompt'>{amount}</div>
                        <div className='plus' onClick={() => setAmount(amount + 1)}><FontAwesomeIcon icon={faPlus} /></div>
                      </div>
                      <button className='cart' onClick={() => {
                        dispatch(addItem({img: data.image, id: data.id, title: data.kor, count:amount, price:data.price}))
                        alert('장바구니에 등록되었습니다.')
                      }}>장바구니 담기</button>
                    </div>
                    <div className='notice'>
                      <p className='notice-title'>배송 안내</p>
                      <p className='desc'>
                      CJ대한통운 (1588-1255)<br />
                      배송 지역 : 전국 (일부 지역 제외)<br />
                      배송비 : 10만원 이상 구매 시 무료 배송<br />
                      배송 기간 : 평일 오후 2시 이전 결제 완료 된 주문건은 당일 출고되며 배송은 1~3일 정도 소요됩니다.<br />
                      </p>
                      <p className='notice-title'>반품 안내</p>
                      <p className='desc'>
                      교환/환불의 경우 모든 상품은 상품을 공급받으신 날로부터<br />
                      7일 이내 신청하시면 기사님께서 빠른 시일 내에 수거하실 예정입니다.<br />
                      고객님의 단순 변심으로 인한 상품의 교환/반품을 요청하시는 경우,<br />
                      택배비용은 고객님 부담이오니 이점 양해 바랍니다.<br />
                      칼하트 (마이페이지 - 주문 내역 - 주문서 상세 페이지 조회 - 교환/환불 신청)<br />
                      </p>
                      <p className='notice-title'>A/S 안내</p>
                      <p className='desc'>
                      칼하트윕 한국 공식 판매처를 통하여 구입한 모든 제품은 A/S를 받으실 수 있습니다.<br />
                      </p>
                    </div>
                </div>
              </>
            )
          }
          
          })}

      </div>

    </section>
  )
}