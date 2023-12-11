import React from 'react';
import {ProgressBar} from "../../../widgets/ProgressBar";
import { Typography } from 'antd';
const { Title } = Typography;

const UnknownPage = () => {
    return (
        <div className={'Page'}>
            <ProgressBar percent={0}/>
            <div>
                <Title>
                    <p>Нет такой страницы!</p>
                    <p>Надеюсь, что ты понял, как формируется путь к страницам.</p>
                </Title>
            </div>
        </div>
    );
};

export default UnknownPage;