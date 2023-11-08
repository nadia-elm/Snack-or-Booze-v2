import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SnackOrBoozeApi from '../Api';

export const ItemInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);
  const { id, type } = useParams();

  useEffect(() => {
    const getItem = async () => {
      try {
        let item = await SnackOrBoozeApi.getItemById(type, id);
        console.log(item);
        if (!item) {
          setIsLoading(false);
          return;
        }
        setItem(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getItem();
  }, [id, type]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>item not found</p>;
  }

  return (
    <Wrapper>
      <div>
        <img src={item.image} alt={item.name}></img>
      </div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>
        <span>Ingredients :</span>
        <br />
        {item.recipe}
      </p>
      <p>
        <span>How to serve :</span>
        <br /> {item.serve}
      </p>
      <Link to={`/${type}`} className='btn btn-link'>
        {' '}
        back to {type === 'drinks' ? 'Drinks' : 'Snacks'}
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
    display: inline-block;
    width: 7rem;
    background-color: #6bbbd8;
  }
`;
