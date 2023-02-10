import ProductItem from "./item/ProductItem"
import style from "./overlay.module.css"
import { Link } from "react-router-dom"

const Overlay = (props) => {

    const closeOverlay = () => {
        props.setOverlayOpen(false)
    }

    return(        
        <div className={style.overlay}>
            <div className={style.product}>
                <div className={style.title_block}>
                    <h2>Заявки</h2>
                    <button className={style.close_btn} onClick={props.closeItem}>X</button>
                </div>

                {
                    props.overlayProp.length > 0 ?
                
                <div className={style.product_list}>
                    {
                        props.overlayProp.map(obj => {
                            return(
                                <ProductItem title={obj.title} 
                                             price={obj.price} 
                                             img={obj.img}
                                             key={obj.id}
                                             id={obj.id}
                                             deleteItems={props.deleteItems}>
                                </ProductItem>
                            )
                        })
                    }
                </div>

                : <h1>Заявок нет</h1>
                }

                <div className={style.total_price}>
                    <p className={style.total_price_text}>Итог:</p>
                    <p className={style.total_price_sum}>{props.totalPrice} руб.</p>
                    <Link to="/form" onClick={closeOverlay}>Оставить заявку</Link>
                </div>
            </div>
        </div>
    )
}

export default Overlay;