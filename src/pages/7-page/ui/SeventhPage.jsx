import React from 'react';
import {ProgressBar} from "../../../widgets/ProgressBar";
import {Typography} from 'antd';
const {Title, Paragraph} = Typography;

const SeventhPage = () => {
    return (
        <div className={'Page'}>
            <ProgressBar percent={85}/>
            <div>
                <Title level={3}>Ладно, пора просто остановиться!</Title>
                <Title level={3}>Поздравляю с днёй рождения.</Title>
                <Title level={3}>Вот твой сладкий подарок:</Title>
                <Title>P6H3K-A4ALR-0X4B8</Title>
                <Paragraph copyable>This is a copyable text.</Paragraph>
                <Title level={4}>На самом деле это вторая попытка  создать что-то подобное</Title>
                <Title level={4}>Если помнишь картину, там на другой стороне было кое-что зашифровано</Title>
                <Title level={4}>Но там была настолько сложная загадка, что я сам запутался в какой-то момент</Title>
            </div>
        </div>
    );
};

export default SeventhPage;