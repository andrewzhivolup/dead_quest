import React from 'react';
import {ProgressBar} from "../../../widgets/ProgressBar";
import { Typography } from 'antd';
const { Title } = Typography;

const FourthPage = () => {
    return (
        <div className={'Page'}>
            <ProgressBar percent={50}/>
                <div>
                    <Title>
                        Слышал там у ATL альбом вышел, офигенный?!
                    </Title>
                </div>
        </div>
    );
};

export default FourthPage;