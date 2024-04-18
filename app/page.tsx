"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./page.module.css";

export interface productModel {
  id: string;
  title: string;
  category: string;
  image: string;
  price: string;
  rating: { rate: string; count: number };
}

export default function Home() {
  const [products, setProducts] = useState<productModel[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<any>([])
  const [seletedPrice, setSelectedPrice] = useState<any>([])

  const handleCategorie = (event: any) => {
    const category = event.target.value
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((catg: any) => catg !== category))
    }


  }
  console.log("categ selec", selectedCategories)

  const handlePriceChange = (event: any) => {
    const price = event.target.value
    if (event.target.checked) {
      setSelectedPrice([...seletedPrice, price])
    }
    else {

      setSelectedPrice(seletedPrice.filter((pric: any) => pric !== price))
    }


  }

  console.log("price", seletedPrice)

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const categoryType = getUniqueCat(products, 'category');
  const rangeType = getUniqueCat(products, 'price');
  const ratings = getUniqueCat(products, 'rating');


  function getUniqueCat(data: productModel[], field: string) {
    let newElement = data.map((currentEle: any) => {
      if (field === 'rating') {

        return currentEle[field].rate;
      } else {
        return currentEle[field];

      }

    });

    return (newElement = [...new Set(newElement)])
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h4> There are many variations of passages of Lorem Ipsum available,<br></br> but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h4>
      </div>
      <div className={styles.fg}>
        <div className={styles.categoryContainer}>
          <div className={styles.category}>
            <div className={styles.categoryTitle}>Available Products</div>
            <ul className={styles.productList}>
              {categoryType.map((item, idx) => (
                <li key={idx} className={styles.productItem}>
                  <div>
                    <input className={styles.productCheckbox}
                      type="checkbox"
                      value={item}
                      checked={selectedCategories.includes(item)}
                      onChange={handleCategorie}


                    />
                  </div>
                  <div className={styles.productName}>{item}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.category}>
            <div className={styles.categoryTitle}>Price Range</div>
            <ul className={styles.productList}>
              {[500, 400, 300, 'below'].map((item, idx) => (
                <li key={idx} className={styles.productItem}>
                  <div>
                    <input className={styles.productCheckbox} type="checkbox"
                      value={item}
                      checked={seletedPrice.includes(item)}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div className={styles.productName}>{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.productGrid}>
          <ul className={styles.grid}>
            {products?.map((item, idx) => (
              <li key={idx} className={styles.productCard}>
                <div className={styles.aspectSquare}>
                  <img src={item.image} alt="product" className={styles.productImage} />
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.productTitle}>{item.title}</div>
                  <div className={styles.productPrice}>Price: <b>{item.price}</b></div>

                </div>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
