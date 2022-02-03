
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
            .then(res => res.json())
            .then(
                data => {
                    setData(data)
                    setisLoading(false)
                }
            ).catch(err => {
                console.log(err.message);
            });
        }, 500);
    }, [url]);

    return { data, isLoading };
}
 
export default useFetch;