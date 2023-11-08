import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const MenuItem = ({ id, image, name, type }) => {
  const itemPath = `/${type}/${id}`;
  return (
    <Wrapper>
      <div>
        <img src={image} alt={name}></img>
      </div>
      <h4>{name}</h4>

      <Link to={itemPath} className='btn btn-link'>
        details
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: white;
  width: 90vw;
  margin: auto 0;

  display: grid;
  grid-template-rows: auto 1fr;

  border-radius: 5px;
  padding: 1rem;

  img {
    height: 17rem;
    max-width: 22rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  p {
    color: #1e293b;
    max-width: 200px;
  }
  span {
    font-weight: 800;

    padding-bottom: 0.3rem;
    display: block;
  }
  .btn-link {
    display: block;
    width: 5rem;
    background-color: #6bbbd8;
  }
`;
