import { useEffect, useState } from "react";

const cache = {};

const useImagesList = (key, loading) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (cache[key]) {
            setImages(cache[key]);
        } else {
            getApi(key);
        }

        async function getApi(key = "mountain") {
            loading(true);
            const fetchData =
                await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${key}&per_page=24&format=json&nojsoncallback=1
            `);
            const datas = await fetchData.json();

            cache[key] = datas.photos.photo || [];
            loading(false);
            setImages(cache[key]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    return images;
};

export default useImagesList;
