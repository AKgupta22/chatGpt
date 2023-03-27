import { Button, Radio, Space } from 'antd';
import { useState } from 'react';

const RadioSelect = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <div style={{ marginTop: "1rem" }}>
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={'Fantasy'}>Fantasy</Radio>
                        <Radio value={'Ego Strengthening & Confidence'}>Ego Strengthening & Confidence</Radio>
                        <Radio value={'Abundance'}>Abundance</Radio>
                        <Radio value={'Healing Light'}>Healing Light</Radio>
                        <Radio value={'Flying and Floating'}>Flying and Floating</Radio>
                        <Radio value={'Deep Inner Calm'}>Deep Inner Calm</Radio>
                        <Radio value={'Eliminate a Habit'}>Eliminate a Habit</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <Button type='primary' size='large'>Generate Hypnosis!</Button>
            </div>
        </>
    );
};
export default RadioSelect;