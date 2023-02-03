import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Overlay from './components/overlay/Overlay';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
    // Состояние оверлея (корзины)
    const [overlayOpen, setOverlayOpen] = React.useState(false)
    // Хранение данных туров (связь с Backend, БД)
    const [tyrs, setTyrs] = React.useState([])
    // Хранение объектов корзины
    const [overlayItems, setOverlayItems] = React.useState([])
    // Для поиска
    const [search, setSearch] = React.useState('')
    // Для хранения избранных заявок
    const [favorites, setFavorites] = React.useState([])

    React.useEffect(() => {
        axios.get('https://63d7bba8afbba6b7c94312f2.mockapi.io/tyrs')
            .then((resJson) => {setTyrs(resJson.data)})

        axios.get('https://63d7bba8afbba6b7c94312f2.mockapi.io/cart')
            .then((res) => {setOverlayItems(res.data)})
    }, [])

    const deleteItems = (id) => {
        console.log(id);
        axios.delete(`https://63d7bba8afbba6b7c94312f2.mockapi.io/cart/${id}`)
        setOverlayItems((objDelete) => objDelete.filter(item => item.id !== id))
    }

    return(
        <div className="app">
            {overlayOpen ? <Overlay deleteItems={deleteItems} overlayProp={overlayItems} closeItem = {() => setOverlayOpen(false)}/>: null}
            
            <Routes>
                <Route path='/favorites' element={<h2>Избранное</h2>}/>
            </Routes>
            
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

            <Cart 
                favorites={favorites} 
                setFavorites={setFavorites} 
                item={tyrs} 
                overlayItems={overlayItems} 
                setOverlayItems={setOverlayItems} 
                search={search} 
                setSearch={setSearch}/>
            <Footer />
        </div>
    )
}

export default App;