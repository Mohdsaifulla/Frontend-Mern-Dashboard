import React, { useEffect, useState } from 'react'
import fetchData from '../data/fetchData'
import HashLoader from "react-spinners/HashLoader";
import Content from './Content';


const Environment = () => {
  const [newData,setNewData]=useState([])
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const fetchNewData=async()=>{
   const result=await fetchData()
   setNewData(result)
   setLoading(false)
    }
    fetchNewData()

  },[])

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
        <HashLoader
          color="#36d7b7"
          className="flex items-center justify-center h-screen m-auto"
        />
        </div>
      ) : (
     <Content data={newData}/>
      )}
    </div>
  )
}

export default Environment