import React,{useState} from 'react'
import logo from './../../assets/Monday_logo.png';
import {Radio,Button,Input} from 'antd';
import { RightOutlined,LeftOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUser as regularUser} from '@fortawesome/free-regular-svg-icons'
import './../../css/createTask.css'

function CreateTask() {
   const [value,setValue]=useState("");
        const onChange=(e)=>{
          setValue(e.target.value);
        }
    const [value1,setValue1]=useState("");
        const onChange1=(e)=>{
          setValue1(e.target.value);
        }
    const [value2,setValue2]=useState("");
        const onChange2=(e)=>{
            setValue2(e.target.value);
        }


    
    let code;
  return (
   <div className='container-fluid'>
    <div style={{width:'100vw',height:'100vh'}} className='d-flex row'>
        <div className="d-flex justify-content-center col-lg-6 col-md-12">
            <div className="d-flex flex-column justify-content-between m-auto content">
              <div className='pb-4'>
                <img style={{height:'3.375rem'}} src={logo} alt="" />
              </div>
              <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
                <div className='align-baseline'>
                  <div className='mt-5'>
                    <h5>List your task</h5>
                  </div>
                  <div className='title' >
                         <Input onChange={onChange} placeholder='Enter name' style={{width:'30rem',height:'3rem'}} />
                         <Input onChange={onChange1} placeholder='Enter name' style={{width:'30rem',height:'3rem'}} />
                         <Input onChange={onChange2} placeholder='Enter name' style={{width:'30rem',height:'3rem'}} />
                  </div>
                </div>
              </div>
               <div className='d-flex'>
                    <div className='d-flex'>
                        <Button icon={<LeftOutlined/>} className='d-flex align-items-center text-center'  style={{height: '2.5rem' }}>
                            Back
                        </Button>
                    </div>
                    <div className=' d-flex ms-auto'>
                        <Button className='d-flex align-items-center text-center' type='primary' style={{height: '2.5rem' }}>
                            Continue <RightOutlined style={{ marginLeft: '5px' }} />
                        </Button>
                    </div>
               </div>
            </div>
        </div>
        <div className='table-bg p-1 col-lg-6 d-lg-block d-md-none'>
          <div className='d-flex justify-content-center  ms-5 mt-5 flex-column'>
            <div>
                <h2>Demo</h2>
            </div>
            <div className='mt-5'>
              <div className='title btn btn-primary' style={{width:'5rem', height:'0.3rem',cursor:'not-allowed'}}></div>
              <div className="mt-4">
                <table className='table table-bordered'>
                  <tbody>
                    <tr className='center-data'>
                      <td className='marked-column'>Task</td>
                      <td>Owner</td>
                      <td>Status</td>
                      <td>Priority</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>{value}</td>
                      <td><FontAwesomeIcon icon={faUser}/></td>
                      <td style={{backgroundColor:'#f1af54'}}>Working on it</td>
                      <td style={{backgroundColor:'#6799f5'}}>Low</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>{value1}</td>
                      <td><FontAwesomeIcon icon={regularUser}/></td>
                      <td style={{backgroundColor:'#5ac57d'}}>Done</td>
                      <td style={{backgroundColor:'#3b198e'}}>High</td>
                    </tr>
                   <tr className='center-data'>
                      <td className='marked-column'>{value2}</td>
                      <td><FontAwesomeIcon icon={regularUser}/></td>
                      <td style={{backgroundColor:'red'}}>Stuck</td>
                      <td style={{backgroundColor:'#5659d7'}}>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mt-5'>
              <div className='title btn btn-success mb-4' style={{width:'5rem', height:'0.3rem',cursor:'not-allowed'}}></div>
              <table className='table table-bordered'>
                <tbody>
                  <tr className='center-data'>
                      <td className='marked-column'>Task</td>
                      <td>Owner</td>
                      <td>Status</td>
                      <td>Priority</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>Task 1</td>
                      <td><FontAwesomeIcon icon={faUser}/></td>
                      <td style={{backgroundColor:'#f1af54'}}>Working on it</td>
                      <td style={{backgroundColor:'#6799f5'}}>Low</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default CreateTask