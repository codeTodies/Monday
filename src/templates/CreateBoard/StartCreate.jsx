import React,{useState} from 'react'
import logo from './../../assets/Monday_logo.png';
import {Input,Button} from 'antd';
import { RightOutlined } from '@ant-design/icons';
function StartCreate() {
  const [title,setTitle]=useState("");
  const handleChangeInput=(event)=>{
    setTitle(event.target.value);
  }
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
                    <h3>Let's start working together</h3>
                  </div>
                  <div className='mt-3'>
                    <p style={{fontSize:'0.875rem'}}>Give you board a name, e.g marketing plan, sales pipeline, quarterly roadmap</p>
                    <Input onChange={handleChangeInput} placeholder='My first board' style={{width:'30rem',height:'3rem'}} />
                  </div>
                </div>
                <div className='mb-auto tip'>
                  <div className='mt-5 mb-4 p-3'>In monday.com, "board" are the place where all content lives</div>
                </div>
              </div>
               <div className='d-flex ms-auto mt-4'>
                     <Button className='d-flex align-items-center text-center' type='primary' style={{height: '3rem' }}>
                        Continue <RightOutlined style={{ marginLeft: '5px' }} />
                    </Button>
                </div>
            </div>
        </div>
        <div className='table-bg p-1 col-lg-6 d-lg-block d-md-none'>
          <div className='d-flex justify-content-center  ms-5 mt-5 flex-column'>
            {
              title===""?
              (<div className='title btn btn-secondary' style={{width:'16rem', height:'0.3rem',cursor:'not-allowed'}}></div>):
              (<div>
                <h1>{title}</h1>
              </div>)  
            }
            <div className='mt-5'>
              <div className='title btn btn-primary' style={{width:'5rem', height:'0.3rem',cursor:'not-allowed'}}></div>
              <div className="mt-4">
                <table className='table table-bordered'>
                  <tbody>
                    <tr className='center-data'>
                      <td className='marked-column'>
                        <div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div>
                      </td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>
                        <div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div>
                      </td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>
                        <div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div>
                      </td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                    </tr>
                   <tr className='center-data'>
                      <td className='marked-column'>
                        <div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div>
                      </td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
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
                      <td className='marked-column1'>
                        <div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div>
                      </td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
                      <td><div className='title btn btn-secondary' style={{width:'5rem', height:'0.1rem',cursor:'not-allowed'}}></div></td>
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

export default StartCreate