import { Tabs } from 'antd';
import { tabData } from '../../../utils/constant'

const HomePageTabs = () => {

    return (
        <div className='tab-container'>

            <Tabs
                defaultActiveKey="1"
                tabPosition={'top'}
                style={{
                    height: 'auto',
                }}
                items={tabData.map((item, i) => {
                    return {
                        label: `${item?.title}`,
                        key: i,
                        disabled: i === tabData.length,
                        children: item?.content,
                    };
                })}
            />
        </div>
    );
};
export default HomePageTabs;