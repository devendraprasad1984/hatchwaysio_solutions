import {useEffect, useState} from "react";
import {get} from "../helper/api";


const useFetchApi = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchFromURL = () => {
        get(url, res => {
            if (res.error !== undefined) {
                setError(res.error)
                return
            }
            setData(res)
            setLoading(false)
        })
    }
    useEffect(() => {
        setLoading(true)
        fetchFromURL()
    }, [])

    return {data, loading, error}
}

export default useFetchApi
