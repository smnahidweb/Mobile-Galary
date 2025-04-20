
export const getItem = () => {
    const favorites = localStorage.getItem('Favorites')
    if(favorites){
        const data = JSON.parse(favorites)
        return data;
    }
    else{
        return []
    }
}



export const AddPhone =  (phone) =>{
    const Favorites = getItem()
    const isExist = Favorites.find(p=> p.id==phone.id)
    if(isExist){
        alert("Already this is exist")
    }
    else{
        Favorites.push(phone);
    }
   

    localStorage.setItem('Favorites',JSON.stringify(Favorites));
}
export const Removefavourites = (id) =>{
    const favorites = getItem();
    const remainingFavourites = favorites.filter(phone=> phone.id !==id)
    localStorage.setItem('Favorites', JSON.stringify(remainingFavourites))
}