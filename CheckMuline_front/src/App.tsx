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

function App() {
  const navigate = useNavigate();

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
