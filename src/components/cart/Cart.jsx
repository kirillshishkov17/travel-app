import Product from "./item/Product";
import style from './cart.module.css'
import axios from "axios";

const Cart = (props) => {
    
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

    const onClickSearch = (inputValue) => {
        props.setSearch(inputValue.target.value)
    }

    const onAddFav = async (obj) => {
        try {
            const findFavorites = props.favorites.find(objFav => objFav.myId === obj.myId);

            if (findFavorites) {
                axios.delete(`https://63dcfb51df83d549ce97d40d.mockapi.io/favorites/${findFavorites.id}`)
            } else {
                const {data} = await axios.post('https://63dcfb51df83d549ce97d40d.mockapi.io/favorites', obj)
                props.setFavorites([...props.favorites, data])
            }
        } catch {
            alert('Произошла ошибка')
        }  
    }

    return(
        <div className={style.cart_section}>
            <div className={style.search}>
                <h1>Туры:</h1>
                <div className={style.search_block}>
                    <img src="/img/search.png" alt="File not found" />
                    <input onChange={onClickSearch} placeholder="Поиск"></input>
                </div>
            </div>
            
            <div className={style.cart}>
                {
                    props.item.filter((item) => item.title.toLowerCase().includes(props.search.toLowerCase()))
                    .map(
                        obj => {
                            return(
                                <Product 
                                    key={obj.id}
                                    id={obj.id}
                                    myId={obj.myId}
                                    title={obj.title}
                                    price={obj.price}
                                    img={obj.img}
                                    
                                    favBtn = {(favObj) => {onAddFav(favObj)}}
                                    onPlus={(cartObj) => {onAddOverlay(cartObj)}}/>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Cart;