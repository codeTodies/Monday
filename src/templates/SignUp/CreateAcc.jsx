import React from 'react'
import {Input, Button} from 'antd';
import { RightOutlined } from '@ant-design/icons';
import logo from './../../assets/Monday_logo.png'
import bg from './../../assets/CreateAcc.png'
function CreateAcc() {
  return (
    <div className='d-grid signup'>
        <div className='layout d-flex flex-column align-items-center'>
            <div className='d-flex flex-column justify-content-center align-item-center'>
                <div>
                    <img src={logo} height={50} />
                </div>
                <div className='mt-5 mb-3'>
                    <h4>Create your account </h4>
                </div>
                <div className='mb-3'>
                    <p>Full name</p>
                    <Input placeholder='Enter your full name' style={{width:'30rem',height:'3rem'}} />
                </div>
                <div className='mb-3'>
                    <p>Password</p>
                    <Input placeholder='Enter at least 8 characters' style={{width:'30rem',height:'3rem'}} />
                </div>
                <div className='mb-3'>
                    <p>Account name</p>
                    <Input placeholder="For example, company's or department's name " style={{width:'30rem',height:'3rem'}} />
                </div>
                <div className='continue d-flex ms-auto mt-5'>
                     <Button className='d-flex align-items-center text-center' type='primary' style={{height: '3rem' }}>
                        Continue <RightOutlined style={{ marginLeft: '5px' }} />
                    </Button>
                </div>
            </div>
        </div>
         <div className='bg d-flex justify-content-end overflow-hidden'>
            <img src={bg} alt="signup" />
        </div>
    </div>
  )
}

export default CreateAcc