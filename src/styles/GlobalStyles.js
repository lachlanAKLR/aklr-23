import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/ArtCompanyMono-Light.woff';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  padding: 0px;
  -ms-overflow-style: none; 
  scrollbar-width: none;  
}

*::-webkit-scrollbar {
  display: none;
}


a, button {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
}

.arrow-left, .arrow-right {
  cursor: none;
}

body {
  padding: 0;
  margin: 0;
}

/* .nav, .image__caption {
    color: #fff;
    mix-blend-mode: difference;
} */

/* @font-face {
    font-family: Art-Company-Mono;
    src: url(${font});
  } */

a, p, li, ul, h1, h2, button, * {
  font-family: 'Art-Company-Mono', Courier New;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  font-weight: normal;
  list-style: none;
  margin: 0;
  padding: 0;
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

  .image__caption {
    position: relative;
    bottom: 40px;
    left: 20px;
  }


  .site__grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 30px;
    }




    /* Carousel */


    .indicators {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin: auto;
      position: fixed;
      width: 100%;
      height: 40px;
      bottom: 5px;
      /* display: none; */
    }

  .indicators > button { 
    /* margin: 5px; */
  }


   .active-number {
    line-height: 0px;
    /* background-color: #e8ebe4; */
    /* border-radius: 5px; */
    border-bottom: .5px solid black;

  } 

  .arrow-ind {
    font-size: 23px;
    font-weight: normal;
    font-family: Lausanne-500, Arial, Helvetica, sans-serif;
  }

  .number {
    height: 25px;
    margin: 0 7px;
    padding: 5px 5px 7px 5px;
    line-height: 0px;
  } 

  .numbers {
    position: fixed;
    left: 20px;
  }

  /* **** Cursor **** */

  .cursor {
    text-transform: uppercase;
    width: 30px;
    height: 30px;
    /* backdrop-filter: blur(5px); */
    /* background-color: black; */
    /* border: 0.5px solid black;  */
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%); 
    transition-property: opacity;
    /* transition: all 100ms ease;  */
    transition-property: opacity, background-color, transform;
    z-index: 10000;
    pointer-events: none;
    /* transition: width 300ms ease, height 0s ease, border-radius 500ms ease, background-color 0s ease; */
    }

    .c--small {
      cursor: pointer;
    }

    .c--click {
      /* transform: translate(-50%, -50%) scale(0.5);
      background-color: #121212; */
    }
  .c--hover, .l--hover {
    /* width: 75px;
    height: 25px; */
    background: none;
    border-radius: 15px;
    transition: width 500ms ease, height 500ms ease, background-color 500ms ease;
    text-align: center;
    /* transform: translate(-50%, -50%) scale(1.25); */
  }

  /* .cursor p  {
    opacity: 0;
  } */

  .c--arrow {
    opacity: 0;
  }

  .c--right-hover {
    opacity: 1;
    position: absolute;
    top: 10px;
    left: 8px;
    transform: rotate(0deg);
    transition: all .5s ease;
  }

  .c--left-hover {
    opacity: 1;
    position: absolute;
    top: 8px;
    left: 8px;
    transform: rotate(180deg);
    transition: all .5s ease;
  }


  
  @media screen and (max-width: 599px) {
    .image__caption {
    bottom: 55px;
    left: 15px;
  }

  .cursor {
    display: none;
  }

  .home__layouts {
      min-height: -webkit-fill-available;
      overflow: hidden;
    }

}
`;
export default GlobalStyles;
