import {useEffect, useState} from "react";
import {get} from "../helper/api";
import config from "../helper/config";


const useFetchApi = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchFromURL = () => {
        get(url, res => {
            if (res.error !== undefined) {
                setError(res.error || '')
                return
            }
            setData(res)
            setLoading(false)
        })
    }
    useEffect(() => {
        if (config.mode_offline)
            return
        setLoading(true)
        fetchFromURL()
    }, [])

    return {data, loading, error}
}

export default useFetchApi
