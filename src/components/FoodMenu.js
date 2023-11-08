import React, { useEffect, useState } from 'react';
import { MenuItem } from './MenuItem';
import SnackOrBoozeApi from '../Api';
import styled from 'styled-components';
import AddItem from './AddItem';

export const FoodMenu = () => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    async function fetchSnacks() {
      try {
        const res = await SnackOrBoozeApi.getSnacks();
        setFoodList(res.snacks);
        console.log(res.snacks);
      } catch (error) {
        console.error('Error fetching snacks', error);
      }
    }
    fetchSnacks();
  }, []);
  return (
    <Wrapper>
      {foodList.map((item) => {
        return (
          <div key={item.id}>
            <MenuItem {...item} type='snacks' />
          </div>
        );
      })}
      <AddItem type='snacks' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 90vw;
  padding: 2rem 0 0 2rem;
`;
