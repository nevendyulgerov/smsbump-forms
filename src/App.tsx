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
import { IntlProvider } from 'react-intl';

const App: FC = () => (
  <IntlProvider
    locale="en"
    messages={{}}
  >
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
