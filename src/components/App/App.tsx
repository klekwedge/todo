import { MantineProvider, ColorSchemeProvider, Flex, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import './App.scss';
import CustomNavBar from '../CustomNavBar/CustomNavBar';
import MainPage from '../pages/MainPage';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Router>
          <Flex className="app">
            <CustomNavBar />
            <Flex direction="column" w="100%">
              <Header/>
              <Routes>
                <Route path="/" element={<MainPage />} />
                {/* <Route path="/habits" element={<HabitsPage />} /> */}
              </Routes>
            </Flex>
          </Flex>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
