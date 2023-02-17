import { useState, useEffect } from 'react';

const useApi = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data.recipes);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [url]);

    return data;
};

export default useApi;