import { Button, Form, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import axiosBase from '../../../utils/axios'

const ChatGptForm = () => {
    const [response, setResponse] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onFinish = async (values) => {
        setIsLoading(true)
        try {
            const response = await axiosBase.post('gpt/chat/', values)
            if (response.data?.choices[0]?.message?.content) {
                setResponse(response.data?.choices[0].message?.content)
            }
            setIsLoading(false)
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
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    marginTop: "1rem"
                }}
                initialValues={{
                    remember: true,
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
                >
                    <Input placeholder='enter your message' style={{ height: "4rem" }} />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    {isLoading ? "Please wait.." : <SendOutlined />}
                </Button>
            </Form>
        </div>
    )
}
export default ChatGptForm;