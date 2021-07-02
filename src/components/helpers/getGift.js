

export const getGift = async (category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=dT0JpDc0dB2TmP0KjZ0oDoXTCAACk8mg`
        const resp = await fetch(url);
        const { data } = await resp.json();

        // console.log(data);

        const gifts = data.map(img => {
            return {
                id: img.id,
                titulo: img.title,
                url: img.images?.downsized_medium.url,

            }
        })
        // console.log(gifts);
        return gifts;
    }