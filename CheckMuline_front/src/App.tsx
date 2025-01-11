import React, { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import sha256 from 'crypto-js/sha256';
import * as VKID from '@vkid/sdk';

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
import { IAuthVkResponse } from './types/users';


function App() {

  const container = document.getElementById('VkIdSdkOneTap');

  const navigate = useNavigate();

  const codeVerifier = generateRandomString(45);

  VKID.Config.init({
    app: 52910357,
    redirectUrl: 'https://mulinehub.ru',
    responseMode: VKID.ConfigResponseMode.Callback,
    source: VKID.ConfigSource.LOWCODE,
    codeVerifier: codeVerifier,
    state: generateRandomString(10),
    scope: '', // Заполните нужными доступами по необходимости
  });

  const oneTap = new VKID.OneTap();
  
if (container) {
  // Отрисовка кнопки в контейнере с именем приложения APP_NAME, светлой темой и на русском языке.
  oneTap.render({ container: container, scheme: VKID.Scheme.LIGHT, lang: VKID.Languages.RUS, })
    .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload: IAuthVkResponse) {

      store.login({...payload, codeVerifier});
  
   
  })
  .on(VKID.WidgetEvents.ERROR, (e: any) => {console.log('Ошибка аутентификации',e)}); // handleError — какой-либо обработчик ошибки.
  };
  const { store } = useContext(Context);

  // useEffect(() => {
  //   if (!store.user.id) {
  //     navigate('/')
  //   }
  //   else {
  //     navigate('/colors')
  //   }
  // }, [store.user.id])

  const isShow = localStorage.getItem('token') && store.user.id;

  return (
    <div className="App">
      <Header  hideMenu={!isShow} />
      {!store.user.id && <div style={{ position: 'absolute', right: 0 }} id="VkIdSdkOneTap"></div>}
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
