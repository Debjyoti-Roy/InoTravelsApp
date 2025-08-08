
import React from 'react';
import LoginPage from "../components/Login/LoginPage"
import Mainpage from "../components/MainComponents/Mainpage"
import BottomTabs from "../components/Tab/BottomTabs"
import { Provider as PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  

  return (
    // <LoginPage />
    // <Mainpage />
    <PaperProvider>
      {/* <Mainpage /> */}
      <BottomTabs />
    </PaperProvider>
  );
}
