import React from 'react'
import logo from './../../assets/googleLogo.png'
import bg from './../../assets/signup.png'
import {Input, Button} from 'antd';
function SignupLayout() {
  return (
    <div className='d-grid signup'>
        <div className='containers d-flex flex-column align-items-center'>
           <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='welcome font-weight-bold '>Welcome to monday.com</div>
                <div className='started text-center'>Get started - it's free. No credit card needed.</div>
                <div className="mt-5"  >
                    <Button style={{width:'25rem',height:'2.6rem'}}><img width="20px" alt="Google sign-in" src={logo} />
                    Continue with Google</Button>
                </div>
                <div className='or'>
                    <div className="line"></div>
                    Or
                    <div className="line"></div>
                </div>
                <div className='mb-3'>
                    <Input placeholder='example@gmail.com' style={{width:'25rem',height:'3rem'}} />
                </div>
                <div>
                    <Button type='primary' style={{width:'25rem',height:'2.6rem'}}>Continue</Button>
                </div>
                <div className='d-flex flex-column mt-3 text-center'>
                    <div>By proceeding, you agree to the</div>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <a style={{ textDecoration: 'none' }} className='px-1' href="#">Terms of Service</a>
                        and
                        <a className='px-1' style={{ textDecoration: 'none' }} href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className='login'>Already have an account? <a style={{textDecoration:'none'}} href="#">Log in</a></div>
           </div>
        </div>
        <div className='bg d-flex justify-content-end overflow-hidden'>
            <img src={bg} alt="signup" />
        </div>
    </div>
  )
}

export default SignupLayout