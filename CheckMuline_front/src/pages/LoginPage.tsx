import React from 'react';
import { observer } from 'mobx-react-lite';

import { FlexBlock } from '../components/FlexBlock/FlexBlock';
import styles from './styles.module.scss';

export const LoginPage = observer(() => {


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
