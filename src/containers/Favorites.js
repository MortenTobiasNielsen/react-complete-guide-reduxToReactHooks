import React from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import {useStore} from "../hooks-store/store";
import './Products.css';

const Favorites = props => {
  const state = useStore()[0];
  const favoriteProducts = state.products.filter(p => p.isFavorite);

  const content = favoriteProducts.length > 0
    ? 
      (
        <ul className="products-list">
          {favoriteProducts.map(prod => (
            <FavoriteItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
            />
          ))}
        </ul>
      )
    : <p className="placeholder">Got no favorites yet!</p>;

  return content;
};

export default Favorites;
