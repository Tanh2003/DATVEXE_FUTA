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

// all api taikhoan 

const getAllTaikhoan = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-taikhoan?id=${inputId}`)
}
const createNewTaikhoan = (data) => {
    return axios.post('/api/create-new-taikhoan', data)
}
const deleteTaikhoan = (userId) => {
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-taikhoan', {
        data: {
            id: userId
        }
    })
}
const editTaikhoan = (inputData) => {
    return axios.put('/api/rePassword-taikhoan', inputData)

}


const getAllQuyenhan = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-quyenhan?id=${inputId}`)
}
const createNewQuyenhan = (data) => {
    return axios.post('/api/create-new-quyenhan', data)
}
const deleteQuyenhan = (userId) => {
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-quyenhan', {
        data: {
            id: userId
        }
    })
}
const editQuyenhan = (inputData) => {
    return axios.put('/api/edit-quyenhan', inputData)

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
    editXe,
    getAllTaikhoan,
    createNewTaikhoan,
    deleteTaikhoan,
    editTaikhoan,
    getAllQuyenhan,
    createNewQuyenhan,
    deleteQuyenhan,
    editQuyenhan

}