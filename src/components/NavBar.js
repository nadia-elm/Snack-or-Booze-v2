import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>Closure Cafe</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/snacks' className='nav-link'>
            Snacks
          </NavLink>
          <NavLink to='/Drinks' className='nav-link'>
            Beverages
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: white;
  .nav-center {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 2rem;
    width: 90vw;
    max-width: 1120px;
  }
  .logo {
    color: #6bbbd8;
    font-weight: 700;
    letter-spacing: 1.5px;
    font-size: clamp(1.5rem, 3vw, 3rem);
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: #1a0818;
    padding: 0.5rem 0.5rem 0.5rem 0;
    letter-spacing: 2px;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 600;
  }
  .nav-link:hover {
    color: #6bbbd8;
  }
  .active {
    color: #1a0818;
  }
  @media (min-width: 768px) {
    .nav-center {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      flex-direction: row;
    }
    .nav-link {
      padding: 2rem;
      margin: 0 1rem 1rem 0;
    }
  }
`;
