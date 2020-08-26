import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import Building from '../photo/school.png'
import Boy from '../photo/boy.png'
import Stepper from 'react-js-stepper'
import Phone from '../photo/phone.png'
import Countdown from "react-countdown";
const steps = [{title: 'ورود اطلاعات'}, {title: 'تایید کد'}, {title: 'رمز عبور'},]
class Sms extends Component{
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
            fname:'',
            lname:'',
            email:'',
            phone:'',
            bdate:''
        }
    }
    handleOnClickNext = () => {
        if(this.state.activeStep==1){

        }
        let nextStep = this.state.activeStep + 1;
        this.setState({activeStep: nextStep})
    }
    changetext=(event)=>{
        if (event.target.name === "fname") {
            this.setState({
                fname: event.target.value
            })
        }
        if (event.target.name === "lname") {
          this.setState({
              lname: event.target.value
          })
      }
        else if (event.target.name === "phone") {
          this.setState({
            phone: event.target.value
          })
          window.localStorage.setItem('phone_number', event.target.value)
      }
      else if (event.target.name === "email") {
        this.setState({
          email: event.target.value
        })
    }
    else if (event.target.name === "bdate") {
        this.setState({
          bdate: event.target.value
        })
    }
    }

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



                <div className='col-6 '>
                <div className='col-12 txt_signup' >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>TEACH &nbsp;</h1>
                            <h1 style={{ fontSize: '60px', fontWeight: 'bold', color: 'blue' }}>ME</h1>
                        </div>
           <div className='stepper_cont'>
         
                <Stepper 
                    steps={steps} 
                    activeStep={this.state.activeStep}
                    onSelect={this.handleOnClickStepper}
                    showNumber={false} 
                />

                <div style={{marginTop: '40px'}}>
                {this.state.activeStep === 1 ? <div className='col-12 enter_data'> 
                <h1 style={{fontWeight:'bold',textAlign:'center' , paddingTop:'30px', fontSize:'30px'}}>ورود اطلاعات</h1>
                <div style={{display:'flex', flexDirection:'row'}}>
                <div className='col-6' style={{textAlign:'right'}}>
                <h6 style={{paddingTop:'40px', fontWeight:'bold'}}>نام خانوادگی</h6>
                <input name='lname' autoComplete='off' className='inputStyleSignup1' onChange={this.changetext}></input>
                <h6 style={{paddingTop:'10px', fontWeight:'bold'}}>شماره موبایل </h6>
                <input name='phone' autoComplete='off' className='inputStyleSignup1'onChange={this.changetext}></input>
          
                </div>
                <div className='col-6'style={{textAlign:'right'}}>
                <h6 style={{paddingRight:'50px',paddingTop:'40px', fontWeight:'bold'}}>نام</h6>
                <input name='fname' autoComplete='off' className='inputStyleSignup' onChange={this.changetext}></input>
                <h6 style={{paddingRight:'50px',paddingTop:'10px', fontWeight:'bold'}}>تاریخ تولد</h6>
                <input name='bdate' autoComplete='off' className='inputStyleSignup' onChange={this.changetext}></input>
                <div style={{display:'flex' , flexDirection:'row' , float:'right' }}>
                <h6 style={{paddingRight:'5px',paddingTop:'15px', fontWeight:'bold' , fontSize:'10px'}}>(اختیاری)</h6>
                    <h6 style={{paddingRight:'50px',paddingTop:'10px', fontWeight:'bold'}} >ایمیل</h6>
                
                </div>
                
                <input name='email' autoComplete='off' className='inputStyleSignup' onChange={this.changetext}></input>

                </div>
                </div>
                 </div> : 
                 this.state.activeStep === 2 ? 
                 <div className='col-12 enter_data'> 
                <div style={{textAlign:'center' , paddingTop:'50px'}}><img style={{height:'140px' , width:'140px'}} src={Phone}></img> </div>
                <h5 style={{textAlign:'center' , fontWeight:'bold' , paddingTop:'20px'}}>{this.state.phone}</h5>
                <h5 style={{textAlign:'center' , fontWeight:'bold' , paddingTop:'15px'}}>کد ارسال شده را وارد کنید</h5>
                <div style={{display:'flex', flexDirection:'row' , textAlign:'center', justifyContent:'center',justifyItems:'center' , paddingTop:'15px'}}>
   <input className='inputCode' style={{marginRight:'10px'}}></input>
   <input className='inputCode' style={{marginRight:'10px'}}></input>
   <input className='inputCode' style={{marginRight:'10px'}}></input>
   <input className='inputCode' style={{marginRight:'10px'}}></input>
                </div>
                <div style={{ textAlign:'center', justifyContent:'center',justifyItems:'center' , paddingTop:'20px'}}>
                    <Countdown date={Date.now() + 120000} />
                </div>
                
                 </div> :
                 <div> You are in Stage {this.state.activeStep} </div>
                }
              <div style={{ textAlign:'center'}}>
                    <input style={{width:'150px', height:'50px', borderRadius:'10px' , backgroundColor:'#17a2b8' , borderColor:'transparent'}} type="button" value={this.state.activeStep === steps.length ? 'ورود' : 'مرحله بعد'} 
                            onClick={this.state.activeStep === steps.length ? null : this.handleOnClickNext}/>
                   
                </div>
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
                                <h6 style={{ fontSize: '15px', color: 'blue', cursor: 'pointer' }}> ثبت نام </h6>
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
export default Sms