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
import { getUser } from './services/users';

import * as VKID from '@vkid/sdk';

function App() {
  const navigate = useNavigate();

  const container = document.getElementById('VkIdSdkOneTap');

  VKID.Config.init({
  app:  52910357, // Идентификатор приложения.
  redirectUrl: 'https://mulinehub.ru', // Адрес для перехода после авторизации.
  state: crypto.randomUUID(), // Произвольная строка состояния приложения.
  codeVerifier: crypto.randomUUID(), // Параметр в виде случайной строки. Обеспечивает защиту передаваемых данных.
  scope: 'email phone', // Список прав доступа, которые нужны приложению.
});

const oneTap = new VKID.OneTap();

if (container) {
  // Отрисовка кнопки в контейнере с именем приложения APP_NAME, светлой темой и на русском языке.
  oneTap.render({ container: container, scheme: VKID.Scheme.LIGHT, lang: VKID.Languages.RUS })
        .on(VKID.WidgetEvents.ERROR, (e: any) => {console.log(e)}); // handleError — какой-либо обработчик ошибки.
}
  

  oneTap.on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload: {code: string, device_id: string}) {
    const code = payload.code;
    const deviceId = payload.device_id;
  
    VKID.Auth.exchangeCode(code, deviceId)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  });

  const { store } = useContext(Context);

  const isShow = localStorage.getItem('token') && store.user.id;

  useEffect(() => {
    if (!store.user.id) {
      getUser().then((res) => {
        store.setUser(res.data)
      }).catch(() => {
        navigate('/');
      });
    }
  }, [store.user.id]);

  console.log(store)

  return (
    <div className="App">
      <Header hideMenu={!isShow} />
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
