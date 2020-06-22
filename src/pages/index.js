import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { 
  Banner,
  Grid,
  Footer,
  Header
} from '../components';

import * as UtilService from '../services/utils';

function HomePage() {
  const [productList, setProductList] = useState([]);
  const [isMobile, setIsMobile] = useState();
  const [countCart, setCountCart] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setIsMobile(UtilService.deviceIsMobile());

    const headers = {
      'Content-Type': 'application/json',
      'secret-key': '$2b$10$eST7pCHzgmfC3.IEH.rnluPcF0Y..d.0UWqhJREvK1vcAWUtXk3ji'
    };

    const fetchData = async () => {
      const responseData = await axios(
        'https://api.jsonbin.io/b/5eef7171e2ce6e3b2c76ce2e', { headers: headers }
      );
  
      setProductList(responseData.data.catalog);
      setImageList(responseData.data.banner);
    };

    fetchData();

    const searchItem = productList.filter(item =>
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
      <Banner imageList={imageList} />
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
