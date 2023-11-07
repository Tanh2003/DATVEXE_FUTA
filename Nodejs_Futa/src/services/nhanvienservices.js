import db from "../models/index";
let checkSdt = (input) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sdtnv = await db.nhanvien.findOne({

                where: { sdtnv: input },

            });
            if (sdtnv) {
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

let getAllNhanVien = (nhanvienid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let nhanvien = '';
            if (nhanvienid == 'ALL') {
                nhanvien = db.nhanvien.findAll({
                    // ẩn mật khẩu
                    order: [
                        ["createdAt", "DESC"]
                    ],


                })

            }
            if (nhanvienid && nhanvienid !== 'ALL') {
                nhanvien = await db.nhanvien.findOne({
                    where: { id: nhanvienid }, //  userId laf cais tham so truyen vao
                    // ẩn mật khẩu

                });
            }
            resolve(nhanvien)
        } catch (e) {
            reject(e);
        }
    })

}

let CreateNhanVien = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check tenchuyen is exist??
            let check = await checkSdt(data.sdtnv);
            if (check == true) {
                resolve({
                    errcode: 1,
                    errMessage: "Số điện thoại đã tồn tại!"
                })
            } else {

                await db.nhanvien.create({
                    sdtnv: data.sdtnv,
                    gioitinh: data.gioitinh,
                    ngaysinh: data.ngaysinh,
                    hoten: data.hoten,
                    diachi: data.diachi,
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
let deleteNhanVien = (nhanvienid) => {
    return new Promise(async (resolve, reject) => {
        let nhanvien = await db.nhanvien.findOne({
            where: { id: nhanvienid }
        })
        if (!nhanvien) {
            resolve({
                errcode: 2,
                errMessage: "xe isn't exist !"
            })
        }
        await db.nhanvien.destroy({
            where: { id: nhanvienid }
        });
        resolve({
            errcode: 0,
            errMessage: "Chuyến xe đã xóa thành công !"

        });
    })
}
let updateNhanVien = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data.id) {
                resolve({
                    errcode: 2,
                    errMessage: "Missing required parameter"
                })
            }
            let nhanvien = await db.nhanvien.findOne({
                where: { id: data.id },
                raw: false
            })
            if (nhanvien) {
                nhanvien.sdtnv = data.sdtnv;
                nhanvien.gioitinh = data.gioitinh;
                nhanvien.ngaysinh = data.ngaysinh;
                nhanvien.hoten = data.hoten;
                nhanvien.diachi = data.diachi;
                await nhanvien.save();

                resolve({
                    errcode: 0,
                    errMessage: "update nhan vien succeeds !"
                });
            } else {
                resolve({
                    errcode: 1,
                    errMessage: "nhan vien not found !"
                });
            }
        } catch (e) {
            reject(e)

        }
    })
}


module.exports = {
    getAllNhanVien: getAllNhanVien,
    CreateNhanVien: CreateNhanVien,
    deleteNhanVien: deleteNhanVien,
    updateNhanVien: updateNhanVien
}