
import React ,{ useEffect, useState} from "react"

export const AppContext=React.createContext()

export const url='http://www.omdbapi.com/?apikey=2d5657fe'

export const AppProvider=({children})=>{
  
  const [movies,setMovies]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [isError,setIsError]=useState({show:false,msg:''})
  const [query,setQuery]=useState('titanic')
  const getMovies=async(url)=>{
    setIsLoading(true)
      try{
          const res =await fetch(url)
          const data=await res.json()
          console.log(data)
          if(data.Response==="True"){
              setMovies(data.Search)
              setIsError({show:false,msg:""})
              setIsLoading(false)
          }
          else{
            setIsError({show:true,msg:data.Error})
          }
      }
      catch(e){
        console.log(e)
      }
  }
  useEffect(()=>{
    var timeOut=setTimeout(()=>{
      getMovies(`${url}&s=${query}`)
    },500)
    return ()=>clearTimeout(timeOut)
  },[query])

  return <AppContext.Provider value={{movies,isLoading,isError,query,setQuery}}>{children}</AppContext.Provider>
}




