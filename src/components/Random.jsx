import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';
import Spinner  from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  // const [gif,setGif] = useState('');
  // const [loading,setLoading] = useState('false');

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false); 
  // }
  // useEffect( ()=>{
  //   fetchData();
  // },[])

  const {gif , loading , fetchData} = useGif();

  function clickHandler(){
    fetchData();
  }

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'> 

      <h1 className='text-3xl font-bold underline mt-[15px]'>A Random Gif</h1>

      {
        loading ? (<Spinner/>) : ( <img src={gif} alt="" width="450px" />)
      }

     

      <button onClick={clickHandler} className='w-10/12 bg-yellow-100 opacity-90 text-lg rounded-lg py-2 mb-[20px] '>Generate</button>
    </div>
  )
}

export default Random
