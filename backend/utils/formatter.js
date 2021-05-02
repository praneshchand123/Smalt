exports.formatSearchResponse = function (response) {
    var formattedResponse = [];
    response.forEach(function (item) {
        var currentArtists = [];
        item.artists.forEach(function (artist) {
            currentArtists.push(artist.name);
        });

        formattedResponse.push(
            {
                name: item.name,
                id: item.id,
                imageURL: item.album.images[2].url,
                artists: currentArtists,
            }
        );
    });
    
    return formattedResponse;
}