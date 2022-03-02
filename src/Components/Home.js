import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getdata } from '../Reducers/reducer';
import Show from './Show';
import Header from './Header';
import Contact from './Contact';
import Product from './Product';
import Services from './Services';
import Help from './Help';
import { Routes, Route } from 'react-router-dom'
import Preview from './Preview';
function Home() {
    const apidata = useSelector(state => state.APIapp)
    const [state, setstate] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                'x-rapidapi-key': '5baf34210emsh096c3a17f79c757p11917ejsna7b744c1f1f9'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);

            setstate(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        dispatch(getdata(state))
    }, [state])
    return (
        <div className='home'>

            {<Header/>}
            <Routes>
            <Route path='/'element={<Show />}/>
            <Route path='Contact'element={<Contact/>}/>
            <Route path='Product'element={<Product/>}/>
            <Route path='Services'element={<Services/>}/>
            <Route path='Help'element={<Help/>}/>
            <Route path='preview/:data' element={<Preview/>}/>
            </Routes>

        </div>
    )
}

export default Home