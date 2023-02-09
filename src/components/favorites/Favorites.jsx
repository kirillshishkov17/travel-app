import React from 'react';
import axios from 'axios';
import style from './favorites.module.css';
import FavoritesItem from './item/FavoritesItem.jsx';
import { AppContext } from '../../App';

const Favorites = (props) => {

    const context = React.useContext(AppContext)

    const onAddOverlay = (obj) => {
        axios.post('https://63d7bba8afbba6b7c94312f2.mockapi.io/cart', obj)
        context.setOverlayItems([...props.overlayItems, obj]);
    }

    const onDeleteFav = (id) => {
        console.log(id)
        axios.delete(`https://63e53e18c04baebbcdb6b161.mockapi.io/favorites/${id}`)
        context.setFavorites((fav) => fav.filter(item => item.id !== id))
    }

    return(
        <div className={style.cart_section}>
            <div className={style.search}>
                <h1>Избранные туры:</h1>
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