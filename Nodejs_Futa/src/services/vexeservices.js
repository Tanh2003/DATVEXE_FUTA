import db from "../models/index";
let getAllvexe = (vexeid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let vexe = "";
      if (vexeid == "ALL") {
        vexe = db.vexe.findAll({
          // ẩn mật khẩu
          order: [["createdAt", "DESC"]],
        });
      }
      if (vexeid && vexeid !== "ALL") {
        vexe = await db.vexe.findOne({
          where: { id: vexeid }, //  userId laf cais tham so truyen vao
          // ẩn mật khẩu
        });
      }
      resolve(vexe);
    } catch (e) {
      reject(e);
    }
  });
};

let Createvexe = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.vexe.create({
        makh: data.makh,
        giave: data.giave,
    
        soghe: data.soghe,
        manv: data.manv,
        machuyen: data.machuyen,
        maxe: data.maxe,
      });

      resolve({
        errcode: 0,
        data: data,
      });

      resolve({
        errcode: 0,
        message: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};
let deletevexe = (vexeId) => {
  return new Promise(async (resolve, reject) => {
    let vexe = await db.vexe.findOne({
      where: { id: vexeId },
    });
    if (!vexe) {
      resolve({
        errcode: 2,
        errMessage: "vexe isn't exist !",
      });
    }
    await db.vexe.destroy({
      where: { id: vexeId },
    });
    resolve({
      errcode: 0,
      errMessage: "vexe is deleted !",
    });
  });
};
let updatevexeData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errcode: 2,
          errMessage: "Missing required parameter",
        });
      }
      let vexe = await db.vexe.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (vexe) {
        vexe.makh = data.makh;
        vexe.giave = data.giave;
        vexe.soghe = data.soghe;
       
        vexe.manv = data.manv;
        vexe.machuyen = data.machuyen;
        vexe.thoigianbatdau = data.thoigianbatdau;
        vexe.thoigianmua = data.thoigianmua;
        vexe.maxe = data.maxe;

        await vexe.save();

        resolve({
          errcode: 0,
          errMessage: "update vexe succeeds !",
        });
      } else {
        resolve({
          errcode: 1,
          errMessage: "vexe not found !",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllvexe: getAllvexe,
  Createvexe: Createvexe,
  deletevexe: deletevexe,
  updatevexeData: updatevexeData,
};
