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



// call api cua chuyen xe

const getAllChuyenxe = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-chuyenxe?id=${inputId}`)
}
const createNewChuyenxe = (data) => {
    return axios.post('/api/create-new-chuyenxe', data)
}
const deleteChuyenxe = (userId) => {
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-chuyenxe', {
        data: {
            id: userId
        }
    })
}
const editChuyenxe = (inputData) => {
    return axios.put('/api/edit-chuyenxe', inputData)

}

// call api cua vexxe

const getAllVexe = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-vexe?id=${inputId}`)
}
const createNewVexe = (data) => {
    return axios.post('/api/create-new-vexe', data)
}
const deleteVexe = (userId) => {
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-vexe', {
        data: {
            id: userId
        }
    })
}
const editVexe = (inputData) => {
    return axios.put('/api/edit-vexe', inputData)

}












// all api taikhoan 
const handleLoginFuta = (sdtne, matkhaune) => {
    return axios.post('/api/login/futa',{ sdt:sdtne, matkhau:matkhaune });
}
const getAllTaikhoan = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-taikhoan?id=${inputId}`)
}





const getAllTaikhoannhanvien = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-taikhoannhanvien?id=${inputId}`)
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


///call api cua khachhang


const getAllKhachhang = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-khachhang?id=${inputId}`)
}
const createNewKhachhang = (data) => {
    return axios.post('/api/create-new-khachhang', data)
}
const deleteKhachhang = (userId) => {
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-khachhang', {
        data: {
            id: userId
        }
    })
}
const editKhachhang = (inputData) => {
    return axios.put('/api/edit-khachhang', inputData)

}


//all api nhan vien 

const getAllNhanvien = (inputId) => {
    //teamplate String
    return axios.get(`/api/get-all-nhanvien?id=${inputId}`)
}
const createNewNhanvien = (data) => {
    return axios.post('/api/create-new-nhanvien', data)
}
const deleteNhanvien = (userId) => {
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-nhanvien', {
        data: {
            id: userId
        }
    })
}
const editNhanvien = (inputData) => {
    return axios.put('/api/edit-nhanvien', inputData)

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
    editQuyenhan,
    handleLoginFuta,
    getAllKhachhang,
    deleteKhachhang,
    createNewKhachhang,
    editKhachhang,
    getAllNhanvien,
    createNewNhanvien,
    deleteNhanvien,
    editNhanvien,
    getAllTaikhoannhanvien,
    getAllChuyenxe,
    createNewChuyenxe,
    deleteChuyenxe,
    editChuyenxe,
    getAllVexe,
    createNewVexe,
    deleteVexe,
    editVexe

}