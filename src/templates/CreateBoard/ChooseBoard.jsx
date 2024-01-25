import React,{useState} from 'react'
import Timeline from 'react-calendar-timeline'
import Calendar from 'react-calendar';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import logo from './../../assets/Monday_logo.png';
import cards from './../../assets/Invite.jpg'
import {Radio,Button,Input} from 'antd';
import { RightOutlined,LeftOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUser as regularUser} from '@fortawesome/free-regular-svg-icons'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import 'react-calendar/dist/Calendar.css';
function ChooseBoard() {

//Gantt
var tasks = [
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: 'Project',
        id: 'Task',
        type: 'task',
        progress: 45,
        isDisabled: true,
        styles: { progressColor: 'green'},
    },
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: 'Project 2',
        id: 'Task',
        type: 'task',
        progress: 100,
        isDisabled: true,
        styles: { progressColor: 'red'},
    },
];
//Calendar
 const [date, setDate] = useState(new Date());

//Timeline
const groups = [{ id: 1, title: 'Project 1' }, { id: 2, title: 'Project 2' }]
const items = [
  {
    id: 1,
    group: 1,
    title: '',
    start_time: moment(),
    end_time: moment().add(1, 'day'),
     itemProps: {
    style: {
      background: 'green' 
    }
  }
  },
  {
    id: 2,
    group: 2,
    title: '',
    start_time: moment().add(-0.5, 'day'),
    end_time: moment().add(0.5, 'day'),
     itemProps: {
    style: {
      background: 'red'
    }
  }
  },

]
  const [value,setValue]=useState(1);
        const onChange=(e)=>{
            setValue(e.target.value);
        }
         let code;
         let tip;
    if(value===1)
    {
        code='Table';
        tip='Table view is your default layout. Plan, track and manage anything using a visual board.'
    }
    else if(value===2)
    {
        code='Timeline';
        tip='Stay on track with visual deadlines and timelines.'
    }
    else if(value===3)
    {
        code='Kanban';
        tip='Prioritize and balance work according to capacity.'
    }
     else if(value===4)
    {
        code='Cards';
        tip='See all your item details in a visual gallery.'
    }
     else if(value===5)
    {
        code='Calendar';
        tip='See all upcoming content and due dates at a glance.'
    }
     else if(value===6)
    {
        code='Gantt';
        tip='Visualize project milestones and dependencies.'
    }
    function board(){
        if(value===1)
        {
            return (
            <div>
                <div className='mt-3'>
              <div className='title btn btn-primary' style={{width:'5rem', height:'0.3rem',cursor:'not-allowed'}}></div>
              <div className="mt-4">
                <table className='table table-bordered'>
                  <tbody>
                    <tr className='center-data'>
                      <td className='marked-column'>Project</td>
                      <td>Owner</td>
                      <td>Status</td>
                      <td>Priority</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>Project 1</td>
                      <td><FontAwesomeIcon icon={faUser}/></td>
                      <td style={{backgroundColor:'#f1af54'}}>Working on it</td>
                      <td style={{backgroundColor:'#6799f5'}}>Low</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>Project 2</td>
                      <td><FontAwesomeIcon icon={regularUser}/></td>
                      <td style={{backgroundColor:'#5ac57d'}}>Done</td>
                      <td style={{backgroundColor:'#3b198e'}}>High</td>
                    </tr>
                   <tr className='center-data'>
                      <td className='marked-column'>Project 3</td>
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
                      <td className='marked-column'>Project</td>
                      <td>Owner</td>
                      <td>Status</td>
                      <td>Priority</td>
                    </tr>
                    <tr className='center-data'>
                      <td className='marked-column'>Project 1</td>
                      <td><FontAwesomeIcon icon={faUser}/></td>
                      <td style={{backgroundColor:'#f1af54'}}>Working on it</td>
                      <td style={{backgroundColor:'#6799f5'}}>Low</td>
                    </tr>
                </tbody>
              </table>
            </div>
            </div>)
        }

        else if(value===2)
        {
            return (
                <div>
                    <Timeline
                        groups={groups}
                        items={items}
                        defaultTimeStart={moment().startOf('week')}
                        defaultTimeEnd={moment().endOf('week')}
                    />
                </div>
            )
        }
        else if(value===3)
        {
            return(
                <div className='mt-5'>
                    <div className='d-flex justify-content-between'>
                        <div class="card" style={{width:'12rem'}}>
                            <div className='bg-success text-center text-white p-2'>Done</div>
                            <div class="card-body">
                                <h5>Project 1</h5>
                                <p>Owner: <span className='bg-secondary'><FontAwesomeIcon icon={regularUser}/></span></p>
                                <p>Due date: <span className='bg-secondary'> 24/...</span></p>
                            </div>
                        </div>
                         <div class="card" style={{width:'12rem'}}>
                            <div className='bg-danger text-center text-white p-2'>Stuck</div>
                            <div class="card-body">
                                <h5>Project 2</h5>
                                <p>Owner: <span className='bg-secondary'><FontAwesomeIcon icon={regularUser}/></span></p>
                                <p>Due date: <span className='bg-secondary'> 24/...</span></p>
                            </div>
                        </div>
                         <div class="card" style={{width:'12rem'}}>
                            <div className='bg-success text-center text-white p-2'>Done</div>
                            <div class="card-body">
                                <h5>Project 3</h5>
                                <p>Owner: <span className='bg-secondary'><FontAwesomeIcon icon={regularUser}/></span></p>
                                <p>Due date: <span className='bg-secondary'> 24/...</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(value===4)
        {
            return(
                <div>
                    <div className='d-flex justify-content-between'>
                        <div class="card" style={{width:'20rem'}}>
                            <img src={cards} alt="" height={200} />
                            <div class="card-body">
                                <h5>Project 1</h5>
                                <p>Owner: <span className='bg-secondary'><FontAwesomeIcon icon={regularUser}/></span></p>
                                <p>Status: <span className='bg-success px-4 py-2'>Done</span></p>
                                <p>Due date: <span className='bg-secondary'> 24/...</span></p>
                            </div>
                        </div>
                         <div class="card" style={{width:'20rem'}}>
                            <img src={cards} alt="" height={200} />
                            <div class="card-body">
                                <h5>Project 2</h5>
                                <p>Owner: <span className='bg-secondary'><FontAwesomeIcon icon={regularUser}/></span></p>
                                <p>Status: <span className='bg-danger px-4 py-2'>Stuck</span></p>
                                <p>Due date: <span className='bg-secondary'> 24/...</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(value===5)
        {
            return(
                <div className=' mx-auto'>
                    <div className='calendar-container'>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                </div>
            )
        }
        else if(value===6)
        {
            return(
                <div>
                    <Gantt tasks={tasks} />
                </div>
            )
        }
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
                    <h4>Add a view layout</h4>
                    <p className='mt-2'>Transform the way you see and manage your work with more unique views. You can always add more later.</p>
                  </div>
                  <div className='mt-3'>
                        <Radio.Group onChange={onChange} value={value} className='board'>
                            <Radio value={1}>Table</Radio>
                            <Radio value={2}>Timeline</Radio>
                            <Radio value={3}>Kanban</Radio>
                            <Radio value={4}>Cards</Radio>
                            <Radio value={5}>Calendar</Radio>
                            <Radio value={6}>Gantt</Radio>
                       </Radio.Group>
                  </div>
                </div>
                <div className='mb-auto tip'>
                  <div style={{borderLeft:'0.1rem solid orange'}} className='mt-5 mb-4 p-3'>{tip}</div>
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
                <p style={{borderBottom:'0.1rem solid blue',width:'4rem'}}>{code}</p>
            </div>
            {board()}
          </div>
        </div>
    </div>
  </div>
  )
}

export default ChooseBoard