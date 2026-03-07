import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Music() {

  const[songs, setSongs] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api")
    setSongs(response.data.fruits)
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section id='Music' className=' flex items-center justify-center h-[calc(100dvh-4rem)] w-full bg-yellow-50'>




    {songs}



    </section>
  )
}

export default Music
