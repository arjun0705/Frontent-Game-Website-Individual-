import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from "react-redux";


function Preview() {
    const [state, setstate] = useState({})

    const{data}=useParams()
    console.log(data)
    const apidata = useSelector(state => state.APIapp)
    useEffect(() => {
      // setstate(apidata.data[data])
       setstate(
        (apidata.searching===''
        ?
        apidata.data
        :
        (apidata.data.filter(ele=>ele.title.toLowerCase().includes(apidata.searching.toLowerCase()))))[data]
        
       )
    }, )
    return (
        <div className='preview'>
            
            <img className='image' src={state.thumbnail}/>
            <h1 className='heading'> {state.title} </h1>
            <ul className='lists'> 
            <li>Developer: {state.developer}</li>
            <li>Generation: {state.genre}</li>
            <li>Platform: {state.platform}</li>
            <li>Publisher: {state.publisher}</li>
            <li>Release Date: {state.release_date}</li>
            <li>About: {state.short_description}</li>
            </ul>
            { 
       console.log(state)

            }
        </div>

        
    )
}

export default Preview
