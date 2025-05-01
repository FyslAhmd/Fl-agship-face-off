const addFavourite = phone => {
    const favourites = getFavourites()
    const isAlreadyFavourite = favourites.find(favourite => favourite.id === phone.id)
    if (!isAlreadyFavourite) {
        favourites.push(phone)
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }
}

const getFavourites = () => {
    const favourites = localStorage.getItem('favourites')
    if (favourites) {
        return JSON.parse(favourites)
    }
    return []
}

const removeFavourite = (id) => {
    const favourites = getFavourites()
    const updatedFavourites = favourites.filter(favourite => favourite.id !== id)
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites))
}

export { addFavourite, getFavourites , removeFavourite }