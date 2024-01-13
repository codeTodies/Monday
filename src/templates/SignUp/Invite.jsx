import React, { useState,useReducer } from 'react'
import { Button, Input} from 'antd';
import DropdownType from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from './../../assets/dev-logo.png';
import { DownOutlined } from '@ant-design/icons';
import bg from './../../assets/Invite.jpg'
function Invite() {
const [val,setVal]=useState([]);
const [pairs, setPairs] = useState([{ value: 'Admin' }]);

  const handleAdd = () => {
    const newPairs = [...pairs, { value: 'Admin' }];
    setPairs(newPairs);
  };

  const handleDropdownChange = (index, newValue) => {
    const newPairs = [...pairs];
    newPairs[index].value = newValue;
    setPairs(newPairs);
  };
  return (
    <div className='d-grid signup'>
        <div className='container layout d-flex flex-column align-items-center'>
            <div className='d-flex flex-column justify-content-center align-item-center'>
                <div>
                    <img src={logo} height={50} />
                </div>
                <div className='mt-5 mb-2'>
                    <h4>Invite your teammate</h4>
                </div>
                <div>
                    <p>Collaborate with your team to get the most out of monday.com</p>
                </div>
                 <div className='mt-3 d-flex flex-column'>
                {pairs.map((pair, index) => (
                    <div key={index} className='mb-2 d-flex'>
                        <Input placeholder='Add email here' style={{ width: '30rem', height: '3rem' }} />
                            <Dropdown className='ml-2'>
                                <Dropdown.Toggle style={{height:'3rem'}} variant="secondary" id="dropdown-basic">
                                        {pair.value}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdown'>
                                    <Dropdown.Item eventKey="1" onClick={() => handleDropdownChange(index, 'Admin')}>
                                        <div className='dropdown-size'>
                                            <p>Admin</p>
                                            <p>Manage and invite new users</p>
                                       </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="2" onClick={() => handleDropdownChange(index, 'Member')}>
                                        <div className='dropdown-size'>
                                            <p>Member</p>
                                            <p>Can add and edit content</p>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </div>
            ))}
                 <Button type='text' onClick={()=>handleAdd()}>+ Add another</Button>
                </div>
               <div className='d-flex justify-content-between'>
                    <div className='continue d-flex btn-continue'>
                        <Button  className='d-flex align-items-center text-center' type='text'  style={{height: '2.5rem' }}>
                            Remind me later
                        </Button>
                    </div>
                    <div className='d-flex ms-auto btn-continue'>
                        <Button className='d-flex align-items-center text-center' type='primary' style={{height: '2.5rem' }}>
                            Invite your team
                        </Button>
                    </div>
                </div>
            </div>
        </div>
         <div className='bg d-flex justify-content-end overflow-hidden'>
            <img src={bg} alt="signup" />
        </div>
    </div>
  )
}

export default Invite