import style from './banner.module.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return(
        <div className={style.banner_section}>
            <div className={style.banner}>
                <p className={style.text_banner}>
                    Покупайте туры он-лайн
                    <br />
                    <span>без комиссии!</span>
                    <br />
                    <Link to={'/form'}>
                        <button className={style.banner_btn}>Оставить заявку</button>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Banner;