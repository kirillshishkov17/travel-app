import ProductItem from "./item/ProductItem"
import style from "./overlay.module.css"

const Overlay = (props) => {
    return(        
        <div className={style.overlay}>
            <div className={style.product}>
                <div className={style.title_block}>
                    <h2>Заявки</h2>
                    <button className={style.close_btn} onClick={props.closeItem}>X</button>
                </div>

                <div className={style.product_list}>
                    {
                        props.overlayProp.map(obj => {
                            return(
                                <ProductItem title={obj.title} 
                                             price={obj.price} 
                                             img={obj.img}
                                             key={obj.id}>
                                </ProductItem>
                            )
                        })
                    }
                </div>

                <div className={style.total_price}>
                    <p className={style.total_price_text}>Итог:</p>
                    <p className={style.total_price_sum}>36 000</p>
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}

export default Overlay;