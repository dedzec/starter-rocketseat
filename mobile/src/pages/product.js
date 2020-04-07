import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation, route}) => {
  navigation.setOptions({
    title: route.params.product.title,
  });
  return <WebView source={{uri: route.params.product.url}} />;
};

export default Product;
