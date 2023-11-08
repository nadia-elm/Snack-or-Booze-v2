import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const NotFound = () => {
  return (
    <Wrapper>
      <img
        className='img'
        src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/browser-error-404-icon.svg'
        alt='not found'
      ></img>
      <div className='container'>
        <h4>We don't seem to find the page you are looking for </h4>
        <Link to={'/'} className='back-btn'>
          Back home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .img {
    width: 30vw;
    margin: 6rem auto;
  }
  .container {
    margin: 0 auto;
    max-width: 50vw;
    padding: 3rem;
  }
  .back-btn {
    padding: 1rem;
    margin: 1.5rem auto;
    display: block;
    width: 8rem;
    color: white;
    background-color: #0f1b20;
    border-radius: 8%;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
