import React from 'react'
import {Input, Button} from 'antd';
import { RightOutlined } from '@ant-design/icons';
import logo from './../assets/Monday_logo.png';
function CreateAcc() {
  return (
    <div className='d-flex justify-content-between signup'>
        <div className='createAcc d-flex flex-column flex-6 mt-5'>
           <div>
                <img src={logo} height={50} />
           </div>
            <div className='mb-3'>
                <p>Full name</p>
                <Input placeholder='Enter your full name' style={{width:'70%',height:'3rem'}} />
            </div>
            <div className='mb-3'>
                <p>Password</p>
                <Input placeholder='Enter at least 8 characters' style={{width:'70%',height:'3rem'}} />
            </div>
            <div className='mb-3'>
                <p>Account name</p>
                <Input placeholder="For example, company's or department's name " style={{width:'70%',height:'3rem'}} />
            </div>
            <div className='continue d-flex'>
                <Button type='primary' style={{ width: '20%', height: '3rem' }}>Continue<RightOutlined style={{ marginLeft: '5px',paddingTop:'5px' }} /></Button>
            </div>
        </div>
        <div className='right1'></div>
    </div>
  )
}

export default CreateAcc