import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { observer } from 'mobx-react-lite';
import * as VKID from '@vkid/sdk';

import styles from './Header.module.scss';
import { FlexBlock } from '../../components/FlexBlock/FlexBlock';
import { Context } from '../..';
import { Button } from '../../components/Button/Button';
import { IconButton } from '../../components/IconButton/IconButton';

VKID.Config.init({
  app:  51778213, // Идентификатор приложения.
  redirectUrl: '/colors/', // Адрес для перехода после авторизации.
  state: crypto.randomUUID(), // Произвольная строка состояния приложения.
  codeVerifier: crypto.randomUUID(), // Параметр в виде случайной строки. Обеспечивает защиту передаваемых данных.
  scope: 'email phone', // Список прав доступа, которые нужны приложению.
});

export const Header = observer(({ children, hideMenu }: { children?: JSX.Element | null; hideMenu: boolean }) => {
  const { store } = useContext(Context);

  const oneTap = new VKID.OneTap();

// Получение контейнера из разметки.
  const container = document.getElementById('VkIdSdkOneTap');
  
  console.log(container)

// Проверка наличия кнопки в разметке.
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

  return (
    <FlexBlock className={styles.headerWrapper}>
      <>
        <FlexBlock className={styles.header}>
          {!hideMenu ? (
            <IconButton onClick={() => store.setIsOpenMenu()}>
              <MenuIcon />
            </IconButton>
          ) : (
            <></>
          )}
          <div>Сундучок сокровищ</div>
          <div id="VkIdSdkOneTap"></div>
        </FlexBlock>
        {children}
        {store.user.id ? (
          <Button className={styles.exitButton} onClick={() => store.logout()}>
            Выйти из профиля
          </Button>
        ) : null}
      </>
    </FlexBlock>
  );
});
