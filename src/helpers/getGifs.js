export const getGifs = async(category) => {

    const url    = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=eDNgk2mG5wSXFmHo22hDV8xnbAi2NpIy`;
    const resp   = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //console.log(gifs);

    return gifs; //El resultado es una promesa que devuelve la coleccion de las imagenes
               

}