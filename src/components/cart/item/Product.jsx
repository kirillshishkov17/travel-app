import style from './product.module.css'
import React from 'react';
import { AppContext } from '../../../App';

const Product = (props) => {

    const context = React.useContext(AppContext)

    const [added, setAdded] = React.useState(context.isAdded);
    const [fav, setFav] = React.useState(false);

    const onClickAdd = () => {
        setAdded(!added);
        let id = props.id
        let myId = props.myId
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img

        props.onPlus({id, myId, title, description, price, img});
    }

    const onClickFav = () => {
        setFav(!fav);
        let id = props.id
        let myId = props.myId
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img

        props.favBtn({id, myId, title, description, price, img});
    }

    return(
        <div className={style.cart_item}>

            {
                context.isFav(props.myId) === false ?
                <button className={style.fav_btn} onClick={onClickFav}>Добавить в избранное</button>
                :
                <button className={style.fav_btn_add} onClick={onClickFav}>Добавлено в избранное</button>
            }

            <img className={style.cart_img} src={props.img} alt="File not found" />
            <p className={style.cart_title}>{props.title}</p>
            <p className={style.cart_description}>
                Сочи Из Москва - 7 Ночей
                <br />05.12.22 - 2 взрослых</p>
            <p className={style.price}>Цена:</p>
            <div className={style.cart_price}>
                <span>{props.price} руб.</span>
                <button className={style.add_cart} 
                    onClick={onClickAdd}>{context.isAdded(props.myId) ? 
                        <img width={15} src={"/img/icon.png"} alt="File not found" /> 
                        : "Оставить заявку"}
                </button>
            </div>
        </div>
    )
}

export default Product;