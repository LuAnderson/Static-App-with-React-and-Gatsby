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

  const [productList, setProductList] = useState(Product.mock.catalog);
  const [isMobile, setIsMobile] = useState();
  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    setIsMobile(UtilService.deviceIsMobile());
  }, []);

  const addCount = () => setCountCart(countCart + 1);

  return (
    <>
      <Header countCart={countCart} />
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
