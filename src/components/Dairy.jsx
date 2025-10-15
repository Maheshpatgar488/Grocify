import React from 'react';
import CategoryPage from './CategoryPage';
import BgDairy from '../assets/images/dairy-banner.jpg';

const Dairy = () => {
  return (
    <CategoryPage
      title="Dairy & Eggs"
      bgImage={BgDairy}
      categories={['Dairy']}
    />
  );
};

export default Dairy;
