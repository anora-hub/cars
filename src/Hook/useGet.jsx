import axios from "axios"
import { useEffect, useState } from "react"

const useGet = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
             
                                                 
    const getData = async () => {
        try {
            const res = await axios.get("http://192.168.0.193:5000/api/cars")
            setData(res.data)  
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return { data, loading }   
}

export default useGet
