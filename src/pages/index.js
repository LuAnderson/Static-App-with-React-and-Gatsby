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

  useEffect(() => {
    setIsMobile(UtilService.deviceIsMobile());
  }, []);

  return (
    <>
      <Header />
      <Banner urls={Product.mock.banner} />
      <Grid 
        list={productList}
        isMobile={isMobile}
      />
      <Footer />
    </>
  )
}

export default HomePage;
