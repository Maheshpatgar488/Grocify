import React from 'react';
import CategoryPage from './CategoryPage';
import BgSeafood from '../assets/images/seafood-banner.jpg';

const Seafood = () => {
  return (
    <CategoryPage
      title="Meat & Seafood"
      bgImage={BgSeafood}
      categories={['Seafood']}
      titleColor="text-white" // ✅ Title color for this section
    />
  );
};

export default Seafood;
