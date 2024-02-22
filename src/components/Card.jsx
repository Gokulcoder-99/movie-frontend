import React from 'react';
import styled from 'styled-components';

const Card = ({ imageUrl, title }) => {
  return (
    <Container>
      <Image src={imageUrl} alt={title} />
      <Button>View More</Button>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 120px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
