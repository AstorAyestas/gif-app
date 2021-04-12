import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            // console.log("URL: ", url)
            fetch(url)
                .then(res => res.json())
                .then(({ data }) => { setData(data); setLoading(false) })
                .catch(err => { console.error(err) })
        }, 1000)
    }, [url])
    return { data, loading }
}

export default useFetch
