import React from 'react';
import { ProductCategory } from '../../../../components';

// ONLY CHANGE INPUT.JS
import input from './input';

const Tops = () => {
  return (
    <div className="bg-white">
       
      <ProductCategory
        name={input.name}
        sortOptions={input.sortOptions}
        subCategories={input.subCategories}
        filters={input.filters}
        products={input.products} />
        
    </div>
  )
}

export default Tops