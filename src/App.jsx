import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './component/Banner'
import ProductList from './component/ProductList'
import ProductCard from './component/ProductCard'

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <ProductList />
      <ProductCard />
      <Footer />
      
    </div>
  )
}
