import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.darkblue}; 
    color: white;
  }
  html {
    font-family: 'Lora', serif, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', serif;
  }
  p,span,a,button {
   font-family: 'Lora', serif; 
  }
`;

export { GlobalStyles };
