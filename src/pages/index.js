import React, { useState, useEffect } from 'react';

import { 
  Banner,
  Grid,
  Footer,
  Header
} from '../components';

import * as ProductService from '../services/product';
import * as UtilService from '../services/utils';

function HomePage() {
  const [productList, setProductList] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [isMobile, setIsMobile] = useState(UtilService.deviceIsMobile());
  const [countCart, setCountCart] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    _getDataProduct();
  }, []);

  const _getDataProduct = async () => {
    const response = await ProductService.getProduct();

    setProductList(response.catalog);
    setFilteredProduct(response.catalog);
    setImageList(response.banner)
  };

  const addCount = () => setCountCart(countCart + 1);

  const handleChange = (event) => {
    const term = event.target.value.toLowerCase();
    const foundItem = productList.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchTerm(term);
    setFilteredProduct(foundItem);
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
        list={filteredProduct}
        title='Produtos mais vendidos'
      />
      <Footer />
    </>
  )
}

export default HomePage;
