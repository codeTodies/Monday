import React,{useState} from 'react'
import logo from './../../assets/Monday_logo.png';
import {Radio,Button,Input} from 'antd';
import { RightOutlined,LeftOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUser as regularUser} from '@fortawesome/free-regular-svg-icons'
function TaskOrProject() {
     const [value,setValue]=useState(0);
        const onChange=(e)=>{
            setValue(e.target.value);
        }


    const [title,setTitle]=useState("");
    const handleChangeInput=(event)=>{
    setTitle(event.target.value);
    }
    let code;
    let bool=true
    if(value===1)
    {
        code='Project';
    }
    else if(value===2)
    {
        code='Task'
    }
    else if(value===3)
    {
        code=title
        bool=false;
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
                    <h3>Select one of the items you'd like to manage</h3>
                  </div>
                  <div className='mt-3'>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Project</Radio>
                            <Radio value={2}>Task</Radio>
                            <Radio value={3}><Input disabled={bool} onChange={handleChangeInput} placeholder='Custom' style={{width:'6rem'}} /></Radio>
                       </Radio.Group>
                  </div>
                </div>
                <div className='mb-auto tip'>
                  <div className='mt-5 mb-4 p-3'>"Items" are row in your board which hold all the relevant information to your tasks,projects, campaigns and more.</div>
                </div>
              </div>
               <div className='d-flex'>
                    <div className='continue d-flex'>
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
                      <td className='marked-column'>{code}</td>
                      <td>Owner</td>
                      <td>Status</td>
                      <td>Priority</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>{code} 1</td>
                      <td><FontAwesomeIcon icon={faUser}/></td>
                      <td style={{backgroundColor:'#f1af54'}}>Working on it</td>
                      <td style={{backgroundColor:'#6799f5'}}>Low</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>{code} 2</td>
                      <td><FontAwesomeIcon icon={regularUser}/></td>
                      <td style={{backgroundColor:'#5ac57d'}}>Done</td>
                      <td style={{backgroundColor:'#3b198e'}}>High</td>
                    </tr>
                   <tr className='center-data'>
                      <td className='marked-column'>{code} 3</td>
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
                      <td className='marked-column'>{code}</td>
                      <td>Owner</td>
                      <td>Status</td>
                      <td>Priority</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>{code} 1</td>
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


export default TaskOrProject