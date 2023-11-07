import db from "../models/index";
let checkTenChuyen = (input) => {
    return new Promise(async(resolve, reject) => {
        try {
            let tenchuyen = await db.chuyenxe.findOne({

                where: { tenchuyen: input },

            });
            if (tenchuyen) {
                resolve(true);
            } else {
                resolve(false);
            }

        } catch (e) {
            reject(e);

        }
    })
}

//userId là tham số truyền vào ví dụ id =1 hay  la 2 3 ......

let getAllChuyenXe = (chuyenxeid) => {
    return new Promise(async(resolve, reject) => {
        try {
            let chuyenxe = '';
            if (chuyenxeid == 'ALL') {
                chuyenxe = db.chuyenxe.findAll({
                    // ẩn mật khẩu
                    order: [
                        ["createdAt", "DESC"]
                    ],


                })

            }
            if (chuyenxeid && chuyenxeid !== 'ALL') {
                chuyenxe = await db.chuyenxe.findOne({
                    where: { id: chuyenxeid }, //  userId laf cais tham so truyen vao
                    // ẩn mật khẩu

                });

            }
            resolve(chuyenxe)
        } catch (e) {
            reject(e);
        }
    })

}

let CreateChuyenXe = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            // check tenchuyen is exist??
            let check = await checkTenChuyen(data.tenchuyen);
            if (check == true) {
                resolve({
                    errcode: 1,
                    errMessage: "Chuyến xe đã tồn tại vui lòng nhập chuyến xe khác"
                })
            } else {

                await db.chuyenxe.create({
                    tenchuyen: data.tenchuyen,
                    dodai: data.dodai,
                    diemdi: data.diemdi,
                    diemden: data.diemden,
                    gia: data.gia,
                });

                resolve({
                    errcode: 0,
                    data: data
                })

                resolve({
                    errcode: 0,
                    message: 'OK'
                })
            }



        } catch (e) {
            reject(e);

        }
    })
}
let deleteChuyenXe = (chuyenxeId) => {
    return new Promise(async(resolve, reject) => {
        let chuyenxe = await db.chuyenxe.findOne({
            where: { id: chuyenxeId }
        })
        if (!chuyenxe) {
            resolve({
                errcode: 2,
                errMessage: "xe isn't exist !"
            })
        }
        await db.chuyenxe.destroy({
            where: { id: chuyenxeId }
        });
        resolve({
            errcode: 0,
            errMessage: "Chuyến xe đã xóa thành công !"

        });
    })
}
let updateChuyenXe = (data) => {
    return new Promise(async(resolve, reject) => {
        try {

            if (!data.id) {
                resolve({
                    errcode: 2,
                    errMessage: "Missing required parameter"
                })
            }
            let chuyenxe = await db.chuyenxe.findOne({
                where: { id: data.id },
                raw: false
            })
            if (chuyenxe) {
                chuyenxe.tenchuyen = data.tenchuyen;
                chuyenxe.dodai = data.dodai;
                chuyenxe.diemdi = data.diemdi;
                chuyenxe.diemden = data.diemden;
                chuyenxe.gia = data.gia;
                await chuyenxe.save();

                resolve({
                    errcode: 0,
                    errMessage: "update xe succeeds !"
                });
            } else {
                resolve({
                    errcode: 1,
                    errMessage: "xe not found !"
                });
            }
        } catch (e) {
            reject(e)

        }
    })
}


module.exports = {
    getAllChuyenXe: getAllChuyenXe,
    CreateChuyenXe: CreateChuyenXe,
    deleteChuyenXe: deleteChuyenXe,
    updateChuyenXe: updateChuyenXe
}