import { useEffect,useState } from "react"
import { MenuLinks } from "./Data/data"
const useRestuarantMenu = (resid)=>{
 const[resinfo,setresinfo] = useState(null)
    useEffect(()=>{
        const fetchData= async()=>{
            const data=await fetch(MenuLinks+resid)
            const json=await data.json()
            setresinfo(json.data)
        }
        fetchData()
    },[])
 return resinfo   
}

export default useRestuarantMenu