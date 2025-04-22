import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data).catch(error => console.log(`[getAll] Error fetching persons data: ${error}`))
}

const create = (newObject) => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data).catch(error => console.log(`[create] Error creating new person: ${error}`))
}

const update = (id, newObject) => {
    const request = axios.put(`${baseURL}/${id}`, newObject)
    return request.then(response => response.data).catch(error => console.log(`[update] Error updating object with id ${id}: ${error}`))
}

const remove = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data).catch(error => console.log(`[remove] Error deleting object with ud ${id}: ${error}`))
}

export default {
    getAll,
    create,
    update,
    remove
}