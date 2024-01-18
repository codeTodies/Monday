import React,{useState} from 'react'
import logo from './../../assets/Monday_logo.png';
import {Button,Checkbox,Table,Space,Tag} from 'antd';
import { RightOutlined,LeftOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faUser,faFile } from '@fortawesome/free-solid-svg-icons';
import {faUser as regularUser} from '@fortawesome/free-regular-svg-icons'

function AddColumn() {
     const [listColumn, setListColumn] = useState([
    {
      name: "Status",
      type: "Essentials",
      columnTemplateValue: [],
    },
    {
      id: 3,
      name: "Due Date",
      type: "Essentials",
      columnTemplateValue: [],
    },
    {
      id: 4,
      name: "Text",
      type: "Super Useful",
      columnTemplateValue: [],
    },
    {
      id: 5,
      name: "Files",
      type: "Super Useful",
      columnTemplateValue: [],
    },
    {
      id: 6,
      name: 'Owner',
      type: "Super Useful",
      columnTemplateValue: [],
    },
    {
      id: 7,
      name: 'Priority',
      type: "Super Useful",
      columnTemplateValue: [],
    },
    {
      id: 8,
      name: 'Budget',
      type: "Super Useful",
      columnTemplateValue: [],
    }
  ]);
  const [values, setValues] = useState([]);





const data = [
  {
    key: '1',
    Owner:<FontAwesomeIcon icon={faUser}/>,
    Status: 'Working on it',
    Priority:'Critical',
    'Due Date':'21 Nov',
    Text:'Hello',
    Files:<FontAwesomeIcon icon={faFile}/>,
    Budget:'$1200',
  },
  {
    key: '2',
    Owner:<FontAwesomeIcon icon={regularUser}/>,
    Status:'Done',
    Priority:'High',
    'Due Date':'20 Nov',
    Text:'World',
    Files:<FontAwesomeIcon icon={faFile}/>,
    Budget:'$1200',
  },
  {
    key: '3',
    Owner:<FontAwesomeIcon icon={regularUser}/>,
    Status:'Stuck',
    Priority:'Low',
    'Due Date':'4 Oct',
    Text:'Future',
    Files:<FontAwesomeIcon icon={faFile}/>,
    Budget:'$1200',
  },
];


const data1 = [
  {
    key: '1',
    Owner:<FontAwesomeIcon icon={faUser}/>,
    Status: 'Working on it',
    Priority:'Critical',
    'Due Date':'21 Nov',
    Text:'Hello',
    Files:<FontAwesomeIcon icon={faFile}/>,
    Budget:'$1200',
  },
];


  return (
   <div className='container-fluid'>
    <div style={{width:'100vw',height:'100vh'}} className='d-flex row'>
        <div className="d-flex justify-content-center col-lg-6 col-md-12">
            <div className="d-flex flex-column justify-content-between content">
              <div className='pb-4'>
                <img style={{height:'3.375rem'}} src={logo} alt="" />
              </div>
              <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
                <div className='align-baseline'>
                  <div className='mt-5'>
                    <h5>Let's select the revelant columns for your board</h5>
                  </div>
                  <div className='mt-3'>
                    <p style={{fontSize:'0.875rem'}}>Choose from the most popular column type for your work</p>
                    <Checkbox.Group
                      options={listColumn.map((item, index) => {
                    return {
                      label: (
                       <div className=" d-flex align-items-center" key={index}>
                          {item.name}
                        </div>
                      ),
                      value: item.name,
                    };
                })}
                value={values}
                onChange={(checkedValues) => {
                  setValues(checkedValues);
                }}
              />
                  </div>
                </div>
              </div>
               <div className='d-flex justify-content-between align-items-center'>
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
                <h2>My board Demo</h2>
            </div>
            <div className='mt-5'>
              <div className='title btn btn-primary' style={{width:'5rem', height:'0.3rem',cursor:'not-allowed'}}></div>
              <div className="mt-4">             
                <div className="bg-white p-5 w-6/12">
                  <Table bordered columns={values.map((item,index) => {
                        return {
                              title: item,
                              dataIndex: item,
                              key: item,
                              };
                        })} 
                          dataSource={data} />;
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='title btn btn-success mb-4' style={{width:'5rem', height:'0.3rem',cursor:'not-allowed'}}></div>
               <Table bordered columns={values.map((item,index) => {
                        return {
                              title: item,
                              dataIndex: item,
                              key: item,
                              };
                        })} 
                          dataSource={data1} />;
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default AddColumn