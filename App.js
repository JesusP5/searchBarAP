import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import SearchBar from "./Componets/SearchBar";
import ProductsList from "./Componets/ProductsList";
import products from "./data";

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    const filtered = products.filter((product) => {
      product.name.toLowerCase().includes(text.toLowerCase());
      setFilteredProducts(filtered);
      setSearch(text);
    });
  }

    return(
        <View>
          <SearchBar value={search} onChangeText={handleSearch} />
            <ProductsList products={filteredProducts} />
        </View>
    )
}
