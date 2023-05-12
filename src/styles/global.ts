import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Vazirmatn, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  direction: ${props => props.theme.direction};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  background-color: ${props => props.theme.palette.background.main};
}

button {
  font-family: Vazirmatn, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.mobile-container {
  margin: auto;
  max-width: ${props => props.theme.sizes.mobileLarge};
  min-height: 100vh;
  color: ${props => props.theme.palette.text.main};
  padding-top: 51px;
  display: flex;
  flex-direction: column;;
}

[type="radio"] {
  visibility: hidden;
}

[type="radio"]::before {
  border: 1px solid ${props => props.theme.palette.primary.main};
  height: 14px;
  width: 14px;
  border-radius: 50%;
  display: block;
  content: " ";
  cursor: pointer;
  visibility: visible;
}

[type="radio"]:checked::before {
  background: radial-gradient(${props => props.theme.palette.primary.main} 50%, transparent 65%);
}

.bottom-drawer {
  background: ${props => props.theme.palette.background.paper} !important;
}
`

export default GlobalStyle;