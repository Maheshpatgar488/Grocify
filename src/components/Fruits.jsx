import React from 'react';
import CategoryPage from './CategoryPage';
import BgFruits from '../assets/images/fruits-banner.jpg';

const Fruits = () => {
  return (
    <CategoryPage
      title="Fruits & Veggies"
      bgImage={BgFruits}
      categories={['Fruits', 'Vegetables']}
    />
  );
};

export default Fruits;
