export const saveInStorage = (key, element) => {

    //Conseguir los elementos que ya tenemos en localstorage

    let items = JSON.parse(localStorage.getItem(key))

    //Comprobar si es un array. Añadirun nuevo elemento o crear el array

    if (Array.isArray(items)) {
        items.push(element)
    } else {
        items = [element]
    }

    //Guardar en localstorage

    localStorage.setItem(key, JSON.stringify(items))

    //Devolver el objeto guardado

    return element
}