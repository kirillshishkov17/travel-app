import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Overlay from './components/overlay/Overlay';
import React from 'react';

function App() {
    // Состояние оверлея (корзины)
    const [overlayOpen, setOverlayOpen] = React.useState(false)
    // Хранение данных туров (связь с Backend, БД)
    const [tyrs, setTyrs] = React.useState([])
    // Хранение объектов корзины
    const [overlayItems, setOverlayItems] = React.useState([])
    // Для поиска
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        fetch('https://63d7bba8afbba6b7c94312f2.mockapi.io/tyrs')
        .then((response) => {return response.json()})
        .then((myJson) => {setTyrs(myJson)})
    }, [])

    return(
        <div className="app">
            {overlayOpen ? <Overlay overlayProp={overlayItems} closeItem = {() => setOverlayOpen(false)}/>: null}
            <Header openOverlay = {() => setOverlayOpen(true)}/>
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

            <Cart item={tyrs} overlayItems={overlayItems} setOverlayItems={setOverlayItems} search={search} setSearch={setSearch}/>
            <Footer />
        </div>
    )
}

export default App;