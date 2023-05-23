
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Lister from './Lister';

async function getProducts(setter) {
  const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.etsy.com/shop/RundquistDesigns/rss");
  let jsonData = await response.json();
  setter(jsonData.items.map(item => {
    let title = item.title;
    title = title.slice(0, title.indexOf("by")-1);
    let parser = new DOMParser();
    let description = parser.parseFromString(item.description, "text/html");
    let image = description.children[0].children[1].children[0].children[0].getAttribute("src");
    return {
      image,
      title,
      "description": "",
      "link": item.link
    };
  }));
}

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  console.log(products);

  return (
    <section id="products">
      <h2>Products</h2>
      <div className='CardHolder'>{Lister(Card, products)}</div>
    </section>
  );
}

export default Products;
