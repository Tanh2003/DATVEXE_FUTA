import axios from "./axios"

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUser = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUseService = (data) => {
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)

}




const getAllXe = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-xe?id=${inputId}`)
}
const createNewXe = (data) => {
    return axios.post('/api/create-new-xe', data)
}
const deleteXe = (userId) => {
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-xe', {
        data: {
            id: userId
        }
    })
}
const editXe = (inputData) => {
    return axios.put('/api/edit-xe', inputData)

}










export {
    handleLoginApi,
    getAllUser,
    createNewUseService,
    deleteUserService,
    editUserService,
    getAllXe,
    createNewXe,
    deleteXe,
    editXe

}