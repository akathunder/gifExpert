
export const getGifts = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=3&api_key=9XdfacpJfFJFcMuXW7EkwEhydj1mX2VI`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs =  data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}

// getGifts();
