/**
 * @param id - Id of photo
 * @param size - Index of photo size in sizes array
 */
export const getImage = (id, size) => {
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=7a7c97c421273876876a777b4fbc141d&photo_id=${id}&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(({sizes}) => sizes.size[size].source)
    .catch(error => console.error('Get image failed!', error));
}

export const getInfo = (id) => {
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&secret=148b2d4e02fb72e5&api_key=7a7c97c421273876876a777b4fbc141d&photo_id=${id}&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(({photo}) => photo)
    .catch(error => console.error('Get image info failed!', error));
}

export const getResults = (text) => {
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7a7c97c421273876876a777b4fbc141d&text=${text}&per_page=10&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(({photos}) => photos.photo)
    .catch(error => console.error('Get search results failed!', error));
}
