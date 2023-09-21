import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const PopUpStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  overflow: hidden;
  text-align: left;
  padding: 15px;
  ${(props) =>
    props.isActive
      ? css`
          opacity: 0%;
          z-index: -10002;
        `
      : css`
          opacity: 100%;
          z-index: 10002;
        `};

  .popup__wrapper {
    p {
      width: 50%;
      max-width: 590px;
    }
  }

  .ack__text {
    padding-bottom: 25px;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  button {
    width: fit-content;
    opacity: 0;
    animation: appear 2s;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  button p {
    text-transform: uppercase;
    border: 0.5px solid black;
    padding: 5px 10px;
    width: 100% !important;
    border-radius: 50px;
    backdrop-filter: blur(5px);
    background-color: rgba(220, 220, 220, 0.2);
    transition: all 1s ease;
  }

  button p:hover {
    background-color: rgba(220, 220, 220, 0.5);
  }

  @media screen and (max-width: 599px) {
    .popup__wrapper {
      p {
        width: 100%;
      }
    }
  }
`;

export default function PopUp() {
  const [isActive, setIsActive] = useState(null);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <PopUpStyles isActive={isActive}>
      <div className="popup__wrapper">
        <p className="ack__text">
          The land we live and work on always was, and always will be,
          Aboriginal land. We pay our respects to the traditional custodians of
          country past, present & emerging, on Wurundjeri land, and throughout
          Australia. We acknowledge sovereignty was never ceded. We acknowledge
          the contribution and influence of Indigenous culture to the past,
          current and future presiding visual culture that exists in Australia
          and internationally, and any influence on our work.
        </p>
        <button onClick={handleClick} type="button" className="close__popup">
          <p>Enter</p>
        </button>
      </div>
    </PopUpStyles>
  );
}
