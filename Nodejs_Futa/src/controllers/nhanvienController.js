import Xeservices from "../services/nhanvienservices";

let handleGetallNhanVien = async(req, res) => {
    let id = req.query.id; //all, id
    if (!id) {
        return res.status(200).json({
            errcode: 1,
            errMessage: 'Missing require parameters',
            nhanvien: []
        })

    }
    let nhanvien = await nhanvienservices.getAllNhanVien(id);
    console.log(nhanvien);
    return res.status(200).json({
        errcode: 0,
        errMessage: 'OKe',
        nhanvien

    })
}
let handleCreateNewNhanVien = async(req, res) => {
    let message = await nhanvienservices.CreateNhanVien(req.body);
    console.log(message);
    return res.status(200).json(message);

}

let handleDeleteNhanVien = async(req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errcode: 1,
            errMessage: "Missing required parameters !"

        })
    }

    let message = await nhanvienservices.deleteNhanVien(req.body.id);
    console.log(message);
    return res.status(200).json(message);
}
let handleEditNhanVien = async(req, res) => {
    let data = req.body;
    let message = await nhanvienservices.updateNhanVien(data);
    return res.status(200).json(message)

}

module.exports = {
    handleGetallNhanVien: handleGetallNhanVien,
    handleCreateNewNhanVien: handleCreateNewNhanVien,
    handleDeleteNhanVien: handleDeleteNhanVien,
    handleEditNhanVien: handleEditNhanVien
}