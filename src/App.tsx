import React, { FC } from 'react';
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
);

export default App;
