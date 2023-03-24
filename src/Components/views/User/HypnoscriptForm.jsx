import { Button, Form, Input, Image } from 'antd';
import { SendOutlined } from '@ant-design/icons'
import { useState } from 'react';
import axiosBase from '../../../utils/axios'

const HypnoscriptForm = () => {
    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setIsLoading(true)
        setErrorText('')
        try {
            const response = await axiosBase.post('gpt/generate-image/', values)
            if (response.data?.image_urls) {
                setResponse(response.data?.image_urls)
            }
            setIsLoading(false)
            form.resetFields()
        }
        catch (e) {
            console.log(e);
            setErrorText('Something went wrong!')
            setIsLoading(false)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='chatGpt-Form'>
            {
                response.length > 0 &&
                <div style={{ height: "300px", overflow: "scroll" }}>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                            height:"500px",

                        }}
                    >
                        {
                            response.map((item, i) => {
                                return <Image
                                    width={150}
                                    src={item}
                                    style={{ padding: ".5rem" }}
                                />
                            })
                        }
                    </Image.PreviewGroup>
                </div>
            }
            <Form
                form={form}
                name="basic"
                style={{
                    display: 'flex',
                    marginTop: "1rem",
                    justifyContent: "center"
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="text"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter image text!',
                        },
                    ]}
                    style={{ width: "85%" }}
                >
                    <Input placeholder='enter your text to generate image' style={{ height: "3rem" }} />
                </Form.Item>

                <Button type="primary" htmlType="submit" style={{ height: "3rem" }}>
                    {isLoading ? "Please wait.." : <SendOutlined />}
                </Button>
            </Form>
            {errorText && <p className='errorMsg'>{errorText}</p>}
        </div>
    )
}
export default HypnoscriptForm;
