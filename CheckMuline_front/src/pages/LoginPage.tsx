import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { FlexBlock } from '../components/FlexBlock/FlexBlock';
import styles from './styles.module.scss';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';

export const LoginPage = observer(() => {

  const { store } = useContext(Context);

  const navigate = useNavigate();
  if (store.user) {
    navigate('/colors')
  }


  return (
    <FlexBlock className={styles.loginPageWrapper}>
      <FlexBlock className={styles.loginPage}>
        <div>
          Эта страница отображается когда пользователь не залогинен.
        </div>
      </FlexBlock>
    </FlexBlock>
  );
});
