import React, { useState, useEffect } from 'react';

import { 
  Grid,
} from '../components';

import * as UtilService from '../services/utils';
import * as Product from '../services/mock'

function HomePage() {

  const [productList, setProductList] = useState(Product.itens);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(UtilService.deviceIsMobile());
  }, []);

  return (
    <Grid 
      list={productList}
      isMobile={isMobile}
    />
  )
}

export default HomePage;
