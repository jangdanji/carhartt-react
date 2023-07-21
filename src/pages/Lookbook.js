import React from 'react'

import { lookbook_page_data as lookbook_data } from './data'
import { Link } from 'react-router-dom';

export default function Lookbook() {
  return (
    <section className='lookbook-page'>
        <div className='lookbook-page-wrap'>
            <div className='lookbook-title'>
                <h1>CARHARTT LOOKBOOK SS23 STYLE GUIDE</h1>
                <p>
                앞으로 다가오는 더운 여름날에 활용할 수 있는 스타일 가이드를 준비했습니다.<br />
                TRAIL 컬렉션은 자연에서 영감을 얻어 야외 활동에 초점을 맞추었으며, 자연과 어우러지는 아웃도어 무드를 즐기실 수 있습니다.<br />
                또한 썸머 시즌 테마인 MARINA 컬렉션은 바다의 보트와 돛, 그리고 해양 깃발 등에 영감을 얻어<br />
                시원한 소재로 바캉스를 기대하는 이들에게 반가운 아이템들을 만나보실 수 있습니다.<br />
                지금 칼하트윕 온라인 스토어와 오프라인 스토어에서 확인해 보세요.<br />
                </p>
                <video src='./video/lookbook-video.mp4' muted autoPlay controls loop></video>
            </div>
            <div className='contents'>
                <h2 className='title'>CARHARTT LOOKBOOK SS23 STYLE GUIDE</h2>
                {
                    lookbook_data.map((data, index) => {
                        return(
                            <>
                            <div className={`content-${index + 1} content`}>
                                {data.src_thumb.map((thumb) => {
                                    return(<img src={process.env.PUBLIC_URL + thumb} alt='lookbook-image'></img>)
                                })}
                                <div className='wearing'>
                                    <h2>Feature Products : </h2>
                                    {data.detail_info.map((detail) => {
                                        return (
                                        <>
                                            <div className={'wearing-product'}>
                                                <img src={process.env.PUBLIC_URL + detail.src} alt='lookbook-image'></img>
                                                <Link to={`/detail/${detail.id}`}>
                                                    <div className='hover-content'>
                                                        <p>{detail.title}<br /> <b>￦ {detail.price}</b></p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </>
                                        )
                                    })}
                                </div>
                            </div>

                            </>

                        )
                    })

                }
            </div>
        </div>
    </section>
  )
}
