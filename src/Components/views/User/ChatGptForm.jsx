import { Button, Form, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import axiosBase from '../../../utils/axios'

const ChatGptForm = () => {
    const [response, setResponse] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setIsLoading(true)
        try {
            const response = await axiosBase.post('gpt/chat/', values)
            if (response.data?.choices[0]?.message?.content) {
                setResponse(response.data?.choices[0].message?.content)
            }
            setIsLoading(false)
            form.resetFields()
        }
        catch (e) {
            console.log(e);
            setIsLoading(false)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='chatGpt-Form'>
            {
                response && <TextArea
                    showCount
                    style={{
                        height: 200,
                        resize: 'none',
                    }}
                    placeholder="response will show here"
                    value={response}
                />
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
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your message!',
                        },
                    ]}
                    style={{ width: "85%" }}
                >
                    <Input placeholder='enter your message' style={{ height: "3rem" }} />
                </Form.Item>

                <Button type="primary" htmlType="submit" style={{ height: "3rem" }}>
                    {isLoading ? "Please wait.." : <SendOutlined />}
                </Button>
            </Form>
        </div>
    )
}
export default ChatGptForm;
