import React from 'react'
import logo from './../assets/googleLogo.png'
import {Input, Button} from 'antd';
function SignupLayout() {
  return (
    <div className='d-flex justify-content-between signup'>
        <div className='containers d-flex flex-column text-center mx-auto '>
            <div className='welcome font-weight-bold '>Welcome to monday.com</div>
            <div className='started text-center'>Get started - it's free. No credit card needed.</div>
            <div className="mt-3"  >
                <Button style={{width:'50%',height:'2rem'}}><img width="20px" alt="Google sign-in" src={logo} />
                Continue with Google</Button>
            </div>
            <div className='or'>
                <div className="line"></div>
                Or
                <div className="line2"></div>
            </div>
            <div className='mb-3'>
                <Input placeholder='example@gmail.com' style={{width:'50%',height:'3rem'}} />
            </div>
            <div>
                <Button type='primary' style={{width:'50%',height:'3rem'}}>Continue</Button>
            </div>
            <div className='d-flex flex-column mt-3'>
                <div>By proceeding, you agree to the</div>
                <div><a style={{textDecoration:'none'}} href="#">Terms of Service</a> and <a style={{textDecoration:'none'}} href="#">Privacy Policy</a></div>
            </div>
             <div className='login'>Already have an account? <a style={{textDecoration:'none'}} href="#">Log in</a></div>
        </div>
        <div className='right'></div>
    </div>
  )
}

export default SignupLayout