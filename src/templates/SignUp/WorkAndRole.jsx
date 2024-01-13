import React, {useState} from 'react'
import bg from './../../assets/workAndRole.png'
import { RightOutlined } from '@ant-design/icons';
import {Radio, Button} from 'antd';
import logo from './../../assets/Monday_logo.png';
function WorkAndRole() {
        const [value,setValue]=useState(0);
        const onChange=(e)=>{
            console.log('radio checked', e.target.value);
            setValue(e.target.value);
        }
        const [valueW,setValueW]=useState(0);
        const onChangeW=(e)=>{
            console.log('radio op checked', e.target.value);
            setValueW(e.target.value);
        }
       const Work = () => {
    return (
        <div>
            {(() => {
                if (value === 1) {
                    return (
                        <div>
                            <div className='mt-5 mb-3'>
                                <h3>What best describes your current role?</h3>
                            </div>
                            <div className='mt-2'>
                                <Radio.Group onChange={onChangeW} value={valueW}>
                                    <Radio value={1}>Business owner</Radio>
                                    <Radio value={2}>Team leader</Radio>
                                    <Radio value={3}>Team member</Radio>
                                    <Radio value={4}>Freelancer</Radio>
                                     <div className='mt-2'>
                                        <Radio value={5}>Director</Radio>
                                        <Radio value={6}>C-Level</Radio>
                                        <Radio value={7}>VP</Radio>
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>
                    );
                }
                if (value === 3) {
                    return (
                        <div>
                            <div className='mt-5 mb-3'>
                                <h3>What best describes your current role?</h3>
                            </div>
                            <div className='mt-2'>
                                <Radio.Group onChange={onChangeW} value={valueW}>
                                    <Radio value={1}>Undergraduate student</Radio>
                                    <Radio value={2}>Graduate student</Radio>
                                    <Radio value={3}>Faculty member</Radio>
                                    <Radio value={4}>Other</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                    );
                }
                if (value === 4) {
                    return (
                        <div>
                            <div className='mt-5 mb-3'>
                                <h3>What best describes your current role?</h3>
                            </div>
                            <div className='mt-2'>
                                <Radio.Group onChange={onChangeW} value={valueW}>
                                    <Radio value={1}>Board member</Radio>
                                    <Radio value={2}>Executive</Radio>
                                    <Radio value={3}>Employee</Radio>
                                    <Radio value={4}>Volunteer</Radio>
                                     <div className='mt-2'>
                                        <Radio value={5}>IT staff</Radio>
                                        <Radio value={6}>Other</Radio>
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>
                    );
                }
                return null; 
            })()}
        </div>
    );
};

  return (
     <div className='d-grid signup'>
        <div className='layout d-flex flex-column align-items-center'>
            <div className='d-flex flex-column justify-content-center align-item-center'>
                <div>
                    <img src={logo} height={50} alt='logo' />
                </div>
                <div className='mt-5 mb-3'>
                    <h3>Hey there, what bring you here today? </h3>
                </div>
                <div className='mt-2'>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>Work</Radio>
                        <Radio value={2}>Personal</Radio>
                        <Radio value={3}>School</Radio>
                        <Radio value={4}>Nonprofits</Radio>
                    </Radio.Group>
                </div>
                <div>
                    <Work value={value} onChangeW={onChangeW}/>
                </div>
                <div className='continue d-flex ms-auto mt-4'>
                     <Button disabled={((value===0 || value===1|| value===3 || value===4)&&valueW===0) } className='d-flex align-items-center text-center' type='primary' style={{height: '3rem' }}>
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

export default WorkAndRole