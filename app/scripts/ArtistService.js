angular.module('app').factory('ArtistService', function() {
    var artists = [{
        "Name":"Beyonce",
        "ImageUrl":"images/beyonce.jpg",
        "Genres": ['pop','rnb'],
        "NumberOfAlbums":"5",
    },
    {
        "Name":"Led Zepplin",
        "ImageUrl":"images/led-zepplin.jpg",
        "Genres":['rock'],
        "NumberOfAlbums":"5",
    },
    {
        "Name":"Kanye West",
        "ImageUrl":"images/kanye-west.jpg",
        "Genres":['hip hop','rap'],
        "NumberOfAlbums":"7",
    },
    {
        "Name":"Katy Perry",
        "ImageUrl":"images/katy-perry.jpg",
        "Genres":['pop'],
        "NumberOfAlbums":"5",
    },
    {
        "Name":"Taylor Swift",
        "ImageUrl":"images/taylor-swift.jpg",
        "Genres":['pop','country'],
        "NumberOfAlbums":"5",
    }];

    return {
        GetArtists : function(name) {
            return artists;
        }
    }
})