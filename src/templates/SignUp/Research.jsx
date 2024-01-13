import React from 'react'
import { RadioChangeEvent } from 'antd';
import bg from './../../assets/research.jpg'
import { RightOutlined,LeftOutlined } from '@ant-design/icons';
import { Checkbox, Col, Row , Button} from 'antd';
import logo from './../../assets/Monday_logo.png';
function Research() {
  const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
  return (
     <div className='d-grid signup'>
        <div className='container layout d-flex flex-column align-items-center'>
            <div className='d-flex flex-column justify-content-center align-item-center'>
                <div>
                    <img src={logo} height={50} />
                </div>
                <div className='mt-5 mb-3'>
                    <h3>One last question, how did you hear about us?</h3>
                </div>
                <div className='mt-2'>
                    <Checkbox.Group style={{width:'100%'}} onChange={onChange}>
                        <Row>
                            <Col span={6}>
                                <Checkbox value="A">Software review sites</Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox value="B">Friend / Colleague</Checkbox>
                            </Col>
                            <Col span={7}>
                                <Checkbox value="C">Billboard / Public transit ad</Checkbox>
                            </Col>
                            <Col span={5}>
                                <Checkbox value="D">Youtube ad</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value="E">Linkedin</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value="F">Consultant</Checkbox>
                            </Col>
                            <Col span={10}>
                                <Checkbox value="G">Social media (Facebook, Instagram, Reddit, etc.)</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="H">Search engine(Google, Bing, etc.)</Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox value="J">TV/ Streaming service</Checkbox>
                            </Col>
                            <Col span={7}>
                                <Checkbox value="K">Audio ad (Podcast, Spotify)</Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox value="L">Other</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </div>
               <div className='d-flex justify-content-between'>
                    <div className='continue d-flex btn-continue'>
                        <Button icon={<LeftOutlined/>} className='d-flex align-items-center text-center'  style={{height: '2.5rem' }}>
                            Back
                        </Button>
                    </div>
                    <div className='continue d-flex ms-auto btn-continue'>
                        <Button className='d-flex align-items-center text-center' type='primary' style={{height: '2.5rem' }}>
                            Continue <RightOutlined style={{ marginLeft: '5px' }} />
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

export default Research