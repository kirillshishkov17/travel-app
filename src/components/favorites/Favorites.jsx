import React from 'react';
import axios from 'axios';
import style from './favorites.module.css';
import FavoritesItem from './item/FavoritesItem.jsx';

const Favorites = (props) => {

    const onAddOverlay = (obj) => {
        axios.post('https://63d7bba8afbba6b7c94312f2.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, obj]);
    }

    const onDeleteFav = (id) => {
        console.log(id)
        axios.delete(`https://63dcfb51df83d549ce97d40d.mockapi.io/favorites/${id}`)
        props.setFavorites((fav) => fav.filter(item => item.id !== id))
    }

    return(
        <div className={style.cart_section}>
            <div className={style.search}>
                <h1>Избранные туры</h1>
            </div>
            
            <div className={style.cart}>
                {
                    props.favorites.map(
                        obj => {
                            return(
                                <FavoritesItem
                                    id={obj.id}
                                    key={obj.id}
                                    title={obj.title} 
                                    price={obj.price} img={obj.img}
                                    onDeleteFav = {(id) => {onDeleteFav(id)}}
                                    onPlus={(cartObj) => {onAddOverlay(cartObj)}}/>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Favorites;