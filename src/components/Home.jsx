import React from "react"
import Banner from "./banner/Banner"
import Cart from "./cart/Cart"
import PicSlider from "./slider/PicSlider"
const Home = (props) => {
    return(
        <>
            <PicSlider />
            <Banner />
            <div className="text_section">
                <h2>ТУРЫ ОТ LIVE-TYR</h2>
                <p>
                    Сотрудничество более чем с 20 международными и национальными компаниями, 
                    работающими на отправку и прием туристов, позволяет нам качественно предоставлять
                    услуги туристам из России, Болгарии, Румынии, Украины, Латвии, Литвы, Белоруссии, 
                    Эстонии, Молдавии и Казахстана.
                </p>
                <p>
                    Международный туристический оператор является одной из международных компаний,
                    организующих туры для туристов из России, стран бывшего СССР и Восточной
                    Европы. TEZ TOUR основан в 1994 году.
                </p>
            </div>
            <Cart 
                favorites={props.favorites} 
                setFavorites={props.setFavorites} 
                item={props.item} 
                overlayItems={props.overlayItems} 
                setOverlayItems={props.setOverlayItems} 
                search={props.search} 
                setSearch={props.setSearch}/>
        </>
    )
}

export default Home