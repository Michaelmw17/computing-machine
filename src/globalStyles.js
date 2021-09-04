import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
    body,
    html,
    a {
        font-family: 'Open Sans';
        font-family: 'Ubuntu', sans-serif;
        font-display: swap;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
      
        
    }
.Span {
	color: red[500],
	fontSize: 20, fontSize: 20,
	position: "static"
}
        
    a:hover {
        color: rgb(209, 29, 50);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6
    {
        font-family: 'Poppins', sans-serif;
        padding: 3.7rem  0.5rem 0.5rem 0.3rem ;
        font-size: 3.255rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.925rem;
        }
        h1,h2,h3,h4,h5,h6::first-letter {
  text-transform: uppercase;
}
   h6 {
       font-family: 'Poppins', sans-serif;
        color: red;
        font-size: 2.975rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.925rem;
           color: red;
        }
    p {
		font-weight: 200;
        font-size: 1.625rem;
    }
   
    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: rgb(209, 29, 50);

        :hover {
            color: rgb(209, 29, 50)
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        padding-top: 2.5rem;
        padding-right: 2rem;
        text-align: center;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(209, 29, 50);
        
    }
    Span:hover {
        color: #000
    }
    

`;

export default Styles;
// export const GlobalStyles = createGlobalStyle`
//   body {
//     background: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};
    
//     transition: all 0.50s linear;
//   }
//   `