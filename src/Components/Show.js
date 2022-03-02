import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
function Show() {
    const apidata = useSelector(state =>state.APIapp)
    useEffect(() => {
    console.log(apidata.searching)
    }, [apidata.searching])
    return (
        <div className='show'>
            {(apidata.searching===''
            ?
            apidata.data
            :
            (apidata.data.filter(ele=>ele.title.toLowerCase().includes(apidata.searching.toLowerCase()))))
            .map((ele,i)=>(
              
              <Link to={`Preview/${i}`} >
               <div key={i+1}>
                    <img src={ele.thumbnail}/>
                   <p> Title: {ele.title}</p>

                </div>
                </Link> 
            ))}
        </div>
    )
}

export default Show