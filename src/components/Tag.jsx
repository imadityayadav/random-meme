import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';
import Spinner  from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [tag,setTag] = useState('');

  // const [gif,setGif] = useState('');
  // const [loading,setLoading] = useState('false');

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false); 
  // }

  // useEffect( ()=>{
  //   fetchData();
  // },[])

  const {gif , loading , fetchData } = useGif(tag);

  function clickHandler(){
    fetchData(tag);
  }

  function changeHanlder(event){
    setTag(event.target.value);
  }
  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'> 

      <h1 className='text-3xl font-bold underline mt-[15px]'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : ( <img src={gif} alt="" width="450px" />)
      }

     
      <input
       type="text"
       className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
       onChange={changeHanlder} 
       value={tag}
        />

      <button onClick={clickHandler} className='w-10/12 bg-yellow-100 opacity-90 text-lg rounded-lg py-2 mb-[20px] '>Generate</button>
    </div>
  )
}

export default Tag;
