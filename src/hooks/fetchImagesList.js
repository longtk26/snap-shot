const fetchImagesList = async ({ queryKey }) => {
    const location = queryKey[1];

    const apiRes = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${location}&per_page=24&format=json&nojsoncallback=1`
    );

    if (!apiRes.ok) {
        throw new Error(`Fetch images failed`);
    }

    return apiRes.json();
};

export default fetchImagesList;
