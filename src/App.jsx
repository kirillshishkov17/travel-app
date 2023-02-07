import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Overlay from './components/overlay/Overlay';
import Favorites from './components/favorites/Favorites';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

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

        axios.get('https://63dcfb51df83d549ce97d40d.mockapi.io/favorites')
            .then((res) => setFavorites(res.data))

    }, [])

    const deleteItems = (id) => {
        console.log(id);
        axios.delete(`https://63d7bba8afbba6b7c94312f2.mockapi.io/cart/${id}`)
        setOverlayItems((objDelete) => objDelete.filter(item => item.id !== id))
    }

    return(
        <div className="app">
            {overlayOpen ? <Overlay deleteItems={deleteItems} overlayProp={overlayItems} closeItem = {() => setOverlayOpen(false)}/>: null}
            
            <Header openOverlay = {() => setOverlayOpen(true)}/>

            <Routes>
                <Route path='/favorites' 
                    element={
                        <Favorites
                            item={tyrs} 
                            favorites={favorites}
                            setFavorites={setFavorites}
                            overlayItems={overlayItems} 
                            setOverlayItems={setOverlayItems}
                        />
                    }
                />
            

                <Route path='/' 
                    element={
                        <Home 
                            item={tyrs} 
                            search={search} 
                            setSearch={setSearch}    
                            favorites={favorites} 
                            setFavorites={setFavorites} 
                            overlayItems={overlayItems} 
                            setOverlayItems={setOverlayItems}x
                        />
                    }
                />
            </Routes>

            <Footer />
        </div>
    )
}

export default App;