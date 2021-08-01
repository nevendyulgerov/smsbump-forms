import React, { FC } from 'react';
import { IntlProvider } from 'react-intl';
import {
  Body,
  Container,
  DeviceMenu,
  Header,
  MainMenu,
  NextFormButton,
  Preview,
  SideDrawer,
  SideMenu,
  SubHeader,
  ThemeMenu
} from './components/Layout';

const App: FC = () => (
  <IntlProvider locale="en">
    <Container>
      <Header />
      <SubHeader />

      <Body>
        <SideMenu>
          <DeviceMenu />
          <MainMenu />

          <SideDrawer>
            <ThemeMenu />
          </SideDrawer>

          <NextFormButton />
        </SideMenu>

        <Preview />
      </Body>
    </Container>
  </IntlProvider>
);

export default App;
