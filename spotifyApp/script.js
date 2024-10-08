const searchValue = document.getElementById('searchValue')
const searchType = document.getElementById('searchType')
const searchResult = document.getElementById('searchResult')


async function seachTracks(prompt) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${prompt}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a4e0177fdcmsh003acdd5b629c54p194069jsne7b0ddc29092',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        result.tracks.items.forEach((track) => {
            searchResult.innerHTML += `
            <div>
                <img src="${track.data.albumOfTrack.coverArt.sources[0].url}" alt="" >
                <p>${track.data.artists.items[0].profile.name}</p>
                <p>${track.data.name}</p>
                <p>${Math.floor(track.data.duration.totalMilliseconds / 60000)}:${(track.data.duration.totalMilliseconds / 1000 % 60).toFixed(0)}</p>
            </div>
            `
        })


    } catch (error) {
        console.error(error);
    }
}

searchValue.addEventListener('change', (e) => {
    if (searchType.value === 'tracks')
        seachTracks(e.target.value)

})


async function seachAlbums(prompt) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${prompt}&type=albums&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a4e0177fdcmsh003acdd5b629c54p194069jsne7b0ddc29092',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        result.albums.items.forEach((album) => {
            searchResult.innerHTML += `
            <div>
            <img src="${album.data.coverArt.sources[0].url}" alt"" >
            <p>${album.data.name}</p>
            </div>
            `
        })
    } catch (error) {
        console.error(error);
    }

}

searchValue.addEventListener('change', (e) => {
    if (searchType.value === 'albums')
        seachAlbums(e.target.value)
})

async function seachArtists(prompt) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${prompt}&type=artists&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a4e0177fdcmsh003acdd5b629c54p194069jsne7b0ddc29092',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        result.artists.items.forEach((album) => {
            searchResult.innerHTML += `
            <div>
            <img src="${artists.data.visuals.avatarImage.sources[0].url}" alt"" >
            <p>${artists.data.profile.name}</p>
            </div>
            `
        })
    } catch (error) {
        console.error(error);
    }

}

searchValue.addEventListener('change', (e) => {
    if (searchType.value === 'artists')
        seachAlbums(e.target.value)
})