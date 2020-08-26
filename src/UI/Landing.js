import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Building from '../photo/school.png'
import Boy from '../photo/boy.png'
import Search from '../photo/search.png'
import './Main.css'
class Landing extends Component {
    render() {
        return (
            <div className='row '>

                <div className='col-3 '>
                    <div className='d-flex align-items-center flex-column' style={{ height: '100vh' }}>
                        <div className='row building_icon'>
                            <img src={Building} style={{ width: '150px', height: '150px' }}></img>
                            <h6 style={{ paddingTop: '20px', fontWeight: 'bold' }}>ورود آموزشگاه/مدرس</h6>
                        </div>
                        <div className='row inputbox'>
                            <h6 style={{ fontWeight: 'bold' }}>نام کاربری</h6>
                            <input autoComplete='off' className='inputStyle'></input>
                            <h6 style={{ fontWeight: 'bold', paddingTop: '10px' }}>رمز عبور</h6>
                            <input autoComplete='off' className='inputStyle'></input>


                        </div>
                        <div className='row' style={{ paddingTop: '50px' }}>
                            <Button variant="info" style={{ width: '130px', height: '50px', color: 'black' }}>ورود</Button>
                        </div>
                    </div>
                </div>



                <div className='col-6 firstpage'>
                    <div className='txt_first' >
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>TEACH &nbsp;</h1>
                            <h1 style={{ fontSize: '60px', fontWeight: 'bold', color: 'blue' }}>ME</h1>
                        </div>
                        <div class="input-group">

                            <input autoComplete='off' class="form-control input_search" aria-label="With textarea"></input>
                            <div class="input-group-prepend">
                                <span class="input-group-text" style={{ width: '60px' }}><img src={Search} style={{ width: '35px', height: '35px' }}></img></span>
                            </div>
                        </div>


                    </div>
                </div>



                <div className='col-3'>
                    <div className='d-flex align-items-center flex-column' style={{ height: '100vh' }}>
                        <div className='row boy_icon'>
                            <img src={Boy} style={{ width: '130px', height: '130px' }}></img>
                            <h6 style={{ paddingTop: '20px', fontWeight: 'bold' }}>ورود دانش آموز</h6>
                        </div>
                        <div className='row inputbox' style={{ float: 'right' }}>
                            <h6 style={{ fontWeight: 'bold' }}>شماره موبایل</h6>
                            <input autoComplete='off' className='inputStyle1' ></input>
                            <h6 style={{ fontWeight: 'bold', paddingTop: '10px' }}>رمز عبور</h6>
                            <input autoComplete='off' className='inputStyle1'></input>
                            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '10px', textAlign: "center" }}>
                                <h6 style={{ fontSize: '15px', color: 'blue', cursor: 'pointer' }}><a href='/signup'> ثبت نام</a> </h6>
                                <h6 style={{ fontSize: '13px' }}>  / رمز عبور خود را فراموش کردید؟</h6>

                            </div>


                        </div>
                        <div className='row' style={{ paddingTop: '30px' }}>
                            <Button variant="info" style={{ width: '130px', height: '50px', color: 'black' }}>ورود</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing