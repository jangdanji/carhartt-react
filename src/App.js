/* eslint-disable */

import './App.css';

import {Routes,Route,Link,useNavigate} from 'react-router-dom';

import Home from './pages/Home'
import ProductImport from './pages/ProductImport';
import Cart from './pages/Cart'
import Detail from './pages/Detail';
import Lookbook from './pages/Lookbook';

import { useSelector } from 'react-redux';

function App() {

  const navigate = useNavigate()
  const cartState = useSelector(state => state.cart.list.length)

  return (
    <div className="App">
      <header className='header'>
          <div className='header-wrap'>
              <div className='logo' onClick={ ()=> { navigate('/') } }>
                  <img src={process.env.PUBLIC_URL + '/img/logo.png'}></img>
              </div>
              <div className='category'>
                  <ul>
                      <li onClick={ ()=> {
                          navigate('/products/top')
                          }}>TOP</li>
                      <li onClick={ ()=> {
                          navigate('/products/bottom')
                          } }>BOTTOM</li>
                      <li onClick={ ()=> {
                          navigate('/products/acc')
                          } }>ACC</li>
                      <li onClick={ ()=> {
                          navigate('/lookbook')
                          } }>LOOKBOOK</li>
                  </ul>
              </div>
              <div className='user-menu'>
                  <ul>
                      <li>로그인</li>
                      <li>회원가입</li>
                      <li className='cart' onClick={ ()=> { navigate('/cart') } }>장바구니 {cartState == 0 ? '' : <div className='cart-state'>{cartState}</div>}</li>
                      <li className='search'>
                          <input type='text'></input>
                      </li>
                  </ul>
              </div>
          </div>
      </header>

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products'>
            <Route path='top' element={<ProductImport category="top"/>}></Route>
            <Route path='bottom' element={<ProductImport category="bottom"/>}></Route>
            <Route path='acc' element={<ProductImport category="acc"/>}></Route>
          </Route>
          <Route path='/detail/:id' element={<Detail></Detail>}></Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/lookbook' element={<Lookbook/>} />
      </Routes>

      <footer className="footer">
          <div className="footer-wrap">
              <div className='about'>
                  <ul>
                      <li>칼하트윕에 대하여</li>
                      <li>칼하트윕 라디오</li>
                      <li>기업의 사회적 책임</li>
                      <li>채용 안내</li>
                      <li>일반 적합 인증</li>
                  </ul>
              </div>
              <div className="footer-head">
                  <ul className="service">
                      <li>고객지원</li>
                      <li>비즈니스 문의</li>
                      <li>배송 안내</li>
                      <li>나의 계정</li>
                      <li>자주하는 질문</li>
                  </ul>
                  <ul className="sns">
                      <li><i className="fab fa-facebook-square"></i></li>
                      <li><i className="fab fa-twitter-square"></i></li>
                      <li><i className="fab fa-youtube"></i></li>
                  </ul>
              </div>
              <div className="footer-main">
                  <ul className="about">
                      <li>주식회사 웍스아웃</li>
                      <li>사업자 등록번호 : 106-86-85373</li>
                      <li>주소 : 서울시 마포구 월드컵북로23길 24</li>
                      <li>통신판매업 신고 : 2014-서울마포-0219</li>
                      <li>호스팅 사업자 : 아마존 웹 서비스</li>
                  </ul>
                  <ul className="company">
                      <li><b>대표전화</b> <p>02-541-0854</p></li>
                      <li><b>운영시간</b> <p>10:00~17:00</p></li>
                      <li><b>휴무일</b> <p>토,일,공휴일</p></li>
                      <li><b>이메일</b> <p>customer@carhartt-wip.co.kr</p></li>
                  </ul>
              </div>
              <div className="footer-end">
                  <ul>
                      <li>© 칼하트윕 코리아 2023</li>
                      <li>이용약관</li>
                      <li>개인정보취급 방침</li>
                      <li>구매안전(에스크로) 서비스 가입사실 확인</li>
                  </ul>
              </div>
          </div>
      </footer>



    </div>
  );
}

export default App;
