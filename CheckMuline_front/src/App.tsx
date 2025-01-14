import React, { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { LoginPage } from './pages/LoginPage';
import { PageColors } from './pages/PageColors';
import { PageCheckColors } from './pages/PageCheckColors';
import { PageNeedBuyColors } from './pages/PageNeedBuyColors';
import { Context } from '.';
import { Header } from './fragments/Header/Header';
import { Alert } from './components/Alert/Alert';
import './index.scss';
import { Menu } from './fragments/Menu/Menu';
import { FlexBlock } from './components/FlexBlock/FlexBlock';
import {generateRandomString} from './utils'
import axios from 'axios';
import { SHA256, enc } from 'crypto-js';
import { getUser } from './services/users';

 
  
 function App() {

  const navigate = useNavigate();


  const { store } = useContext(Context);

  // useEffect(() => {
  //   if (!store.user.user_id) {
  //    getUser()
  //   }
  //   else {
  //     navigate('/colors')
  //   }
  // }, [store.user.user_id])
   let codeVerifier = localStorage.getItem('codeVerifier')
   if (!codeVerifier) {
     codeVerifier = generateRandomString(45);
     localStorage.setItem('codeVerifier', codeVerifier)
   }

   const codeChallenge = enc.Base64.stringify(SHA256(codeVerifier)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  const isShow = localStorage.getItem('token') && store.user.user_id;

  const conver = () => {
    const obj: any = {}
    for (const [label, value] of new URLSearchParams(document.location.search)) {
      obj[label] = value
    }
    return obj
  }

   const obj = conver();
   
   console.log(obj)

   Object.values(obj).length > 0 && store.login({ ...obj, codeVerifier: String(codeVerifier) });

   const onClick = () => {
    location.assign(`https://id.vk.com/authorize?response_type=code&client_id=52910357&redirect_uri=https://mulinehub.ru&state=${generateRandomString(10)}&code_challenge=${String(codeChallenge)}&code_challenge_method=S256`);
   }

   

  return (
    <div className="App">
      <Header hideMenu={!isShow} />
      {!store.user.user_id  && <button onClick={onClick}>Войти</button>}
      {!store.user.user_id && <div style={{ position: 'absolute', right: 0 }} id="VkIdSdkOneTap"></div>}
      <Alert />
      <FlexBlock className="WrapperContent">
        <Menu hide={!isShow} />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/registration/"
            element={
              <div>
                Вам на почту было отправлено письмо о регистрации, после клика на ссылку, вам откроется приложение
              </div>
            }
          />
          <Route path="/check" element={<PageCheckColors />} />
          <Route path="/colors/" element={<PageColors />} />
          <Route path="/need-buy/" element={<PageNeedBuyColors />} />
        </Routes>
      </FlexBlock>
    </div>
  );
}

export default observer(App);
