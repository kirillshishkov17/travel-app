import Product from "./item/Product";
import style from './cart.module.css'

const Cart = (props) => {
    
    const onAddOverlay = (obj) => {
        props.setOverlayItems([...props.overlayItems, obj]);
    }

    const onClickSearch = (inputValue) => {
        props.setSearch(inputValue.target.value)
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
                                <Product key={obj.id} title={obj.title} 
                                    price={obj.price} img={obj.img} 
                                    favBtn = {() => {alert("Добавить в избранное")}}
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