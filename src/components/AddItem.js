import React, { useState } from 'react';
import styled from 'styled-components';
import SnackOrBoozeApi from '../Api';

const AddItem = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    recipe: '',
    serve: '',
    image: '',
    type: type,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'snacks') {
        const response = await SnackOrBoozeApi.addFoodItem(formData);
        console.log(response);
      }
      if (type === 'drinks') {
        const response = await SnackOrBoozeApi.addDrinkItem(formData);
        console.log(response);
      }

      // reset the form
      setFormData({
        name: '',
        description: '',
        recipe: '',
        serve: '',
        image: '',
        type: type,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Wrapper onSubmit={handleSubmit} className='form'>
      <labe>
        Name :
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='form-input'
          required
        ></input>
      </labe>
      <labe>
        Description :
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
          className='form-input'
        ></input>
      </labe>
      <labe>
        recipe :
        <input
          type='text'
          name='recipe'
          value={formData.recipe}
          onChange={handleChange}
          className='form-input'
        ></input>
      </labe>
      <labe>
        Image :
        <input
          type='text'
          name='image'
          value={formData.image}
          onChange={handleChange}
          className='form-input'
        ></input>
      </labe>
      <button className='btn'>add item</button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #6bbbd8;
  }
`;

export default AddItem;
