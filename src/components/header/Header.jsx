import style from './header.module.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return(
        <header>
            <Link to={'/'}>
                <h1 className={style.logo}>LIVE-TYR</h1>
            </Link>
            
            
            <nav>
                <Link to='/favorites'>
                    <h2 className={style.nav_item} href="#">Избранное</h2>
                </Link>
                
                <h2 className={style.nav_item} href="#" onClick={props.openOverlay}>Заявки:
                    <span>
                        {props.overlayItems.length}
                    </span>
                </h2>
            </nav>
        </header>
    )
}

export default Header;