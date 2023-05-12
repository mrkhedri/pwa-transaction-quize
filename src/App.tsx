import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import router from 'src/router';
import { lightTheme, darkTheme } from 'src/styles/theme';
import GlobalStyle from 'src/styles/global';
import useStore from 'src/store/useStore';

function App() {
  const mode = useStore(state => state.mode);

  const theme = mode === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="mobile-container">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  )
}

export default App;
