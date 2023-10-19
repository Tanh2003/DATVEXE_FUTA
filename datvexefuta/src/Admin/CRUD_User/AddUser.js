import React, { Component } from 'react';
import "./AddUser.scss"
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

class AddUser extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

   async componentDidMount() {
   
    }


    componentDidUpdate(prevProps,prevState,snapshot){
       
    }
   


    render() {

        return (
            <>
             <Navbar/>
             <div className="container-fluid" id="main">
               <div className="row row-offcanvas row-offcanvas-left">
               <Sidebar/>
            <div className="col main pt-5 mt-3">

                <div className='title'>
                Quản lý Tài khoản


            </div >
         
            <div className="user-redux-body" >

               <div className='container center'>
                <div className='row-12'>
              
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label>Số Điện thoại</label>
                                <input  className="form-control" placeholder="0399121048"                                
                                />
                                </div>
                                <div className="form-group col-md-6">
                                <label >Mật khẩu</label>
                                <input type="password" className="form-control" placeholder="********"
                                
                                />
                                </div>
                            </div>
                         <div className="form-row">

                            <div className="form-group col-md-12">
                                <label>Họ và Tên</label>
                                <input type="text" className="form-control"  placeholder="Anh"
                                
                                />

                            </div>

                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Địa chỉ</label>
                                <input type="text" className="form-control"  placeholder="1234 Main St"
                              
                              />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Công việc</label>
                                <input type="text" className="form-control"  placeholder="0123456789"
                                />
                            </div>

                        </div>
                            <div className="form-row">
                            <div className="form-group col-md-3">
                                <label >Giới Tính</label>
                                <select  className="form-control"
                                 
                                >
                                </select>
                                <div className='row-12'>
                            <button  className="btn btn-primary mt-3 px-3">
Thêm mới
                                </button>

                            </div>
                                </div>
                                <div className="form-group col-md-3">
                                <label >Ngày sinh</label>
                                <select  className="form-control"
                                >
                    
                                </select>
                                </div>
                                
                               
                                <div className="form-group col-md-3">
                                <label >Quyền</label>
                                <select  className="form-control"
                                >

                                </select>
                                </div>
                                
                                
                                <div className="form-group col-md-3">
                                    
                                <label >Hình ảnh</label>
                                <div className='lamdep'>
                                <input type='file' id='previewImg' hidden
                              
                                
                                ></input>
                                <label className='label-upload' htmlFor='previewImg'>tải ảnh <i className="fas fa-upload"></i></label>
                                <div className='preview-image'
                               
                               >
                                
                              
                                </div>
                                
                                </div>
                                
                                </div>
                               
                            </div>
                           

        
                           
                

                </div>
            </div>
           
            

          
           
           
            
            </div>
            
            </div>
            </div>
          </div>  
            </>
            
        )
    }

}



export default (AddUser);
