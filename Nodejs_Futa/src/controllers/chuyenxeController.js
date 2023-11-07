import Xeservices from "../services/chuyenxeservices";

let handleGetallChuyenXe = async(req, res) => {
    let id = req.query.id; //all, id
    if (!id) {
        return res.status(200).json({
            errcode: 1,
            errMessage: 'Missing require parameters',
            chuyenxe: []
        })

    }
    let chuyenxe = await chuyenxeservices.getAllXe(id);
    console.log(chuyenxe);
    return res.status(200).json({
        errcode: 0,
        errMessage: 'OKe',
        chuyenxe

    })
}
let handleCreateNewChuyenXe = async(req, res) => {
    let message = await chuyenxeservices.CreateChuyenXe(req.body);
    console.log(message);
    return res.status(200).json(message);

}




let handleDeleteChuyenXe = async(req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errcode: 1,
            errMessage: "Missing required parameters !"

        })
    }

    let message = await chuyenxeservices.deleteChuyenXe(req.body.id);
    console.log(message);
    return res.status(200).json(message);
}
let handleEditChuyenXe = async(req, res) => {
    let data = req.body;
    let message = await chuyenxeservices.updateChuyenXe(data);
    return res.status(200).json(message)

}

module.exports = {
    handleGetallChuyeXe: handleGetallChuyenXe,
    handleCreateNewChuyenXe: handleCreateNewChuyenXe,
    handleDeleteChuyenXe: handleDeleteChuyenXe,
    handleEditChuyenXe: handleEditChuyenXe
}