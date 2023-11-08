import React from 'react';
import styled from 'styled-components';

export const Home = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #6bbbd8;
  height: 100vh;
  @media (min-width: 700px) {
    background-image: url("https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3120&q=80'");

    background-size: cover;
    background-repeat: no repeat;
    background-position: center center;
  }
`;
