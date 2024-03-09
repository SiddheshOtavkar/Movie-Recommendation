import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';

function App() {

    const { url } = useSelector((state) => state.home)
    const dispatch = useDispatch()

    useEffect(() => {
        apiTesting();
    }, [])

    const apiTesting = () => {
        fetchDataFromApi('/movie/popular')
            .then((res) => {
                console.log(res);
                dispatch(getApiConfiguration(res))
            })
    }

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:mediaType/:id' element={<Details />} />
                <Route path='/search/:query' element={<SearchResult />} />
                <Route path='/explore/:mediaType' element={<Explore />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
    )
}

export default App
