import React from 'react';
import axios from 'axios';
import style from './favorites.module.css';
import FavoritesItem from './item/FavoritesItem.jsx';
import { AppContext } from '../../App';

const Favorites = (props) => {

    const context = React.useContext(AppContext)

    const onAddOverlay = async (obj) => {
        try {
            const findOverlay = props.overlayItems.find(objOver => objOver.myId === obj.myId);

            if (findOverlay) {
                axios.delete(`https://63d7bba8afbba6b7c94312f2.mockapi.io/cart/${findOverlay.id}`)
                props.setOverlayItems((over) => over.filter(item => item.myId !== obj.myId))
            } else {
                const {data} = await axios.post('https://63d7bba8afbba6b7c94312f2.mockapi.io/cart', obj)
                props.setOverlayItems([...props.overlayItems, data]);
            }
        } catch {
            alert('Произошла ошибка')
        }
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

            {
                props.favorites.length > 0 ?

                <div className={style.cart}>
                    {
                        props.favorites.map(
                            obj => {
                                return(
                                    <FavoritesItem
                                        id={obj.id}
                                        myId={obj.myId}
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
            :
            <h2>Нет избранных туров</h2>
            }
        </div>
    )
}

export default Favorites;