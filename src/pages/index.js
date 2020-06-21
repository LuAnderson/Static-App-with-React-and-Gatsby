import React, { useState, useEffect } from 'react';

import { 
  Banner,
  Grid,
  Footer,
  Header
} from '../components';

import * as UtilService from '../services/utils';
import * as Product from '../services/mock'

function HomePage() {

  const [productList, setProductList] = useState([]);
  const [isMobile, setIsMobile] = useState();
  const [countCart, setCountCart] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsMobile(UtilService.deviceIsMobile());

    const searchItem = Product.mock.catalog.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setProductList(searchItem);
  }, [searchTerm]);

  const addCount = () => setCountCart(countCart + 1);

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <>
      <Header 
        countCart={countCart} 
        handleChange={handleChange} 
        searchTerm={searchTerm} 
      />
      <Banner urls={Product.mock.banner} />
      <Grid 
        addCart={addCount}
        isMobile={isMobile}
        list={productList}
        title='Produtos mais vendidos'
      />
      <Footer />
    </>
  )
}

export default HomePage;
