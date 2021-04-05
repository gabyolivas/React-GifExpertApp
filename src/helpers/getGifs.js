const getGifs = async( category ) => {

    const url      = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=jy7RSfZf5f5J63l6kVNmv2V717v3lzfF`;
    const response = await fetch( url );

    const { data } = await response.json();

    const gifs = data.map( datos => {
        return {
            id: datos.id,
            title: datos.title,
            url: datos.images?.downsized_medium.url
        }
    })

    return gifs;
}

export default getGifs;