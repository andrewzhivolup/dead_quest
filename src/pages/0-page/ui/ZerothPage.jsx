import React from 'react';
import {ProgressBar} from "../../../widgets/ProgressBar";
import { Typography } from 'antd';
const { Title } = Typography;

const ZerothPage = () => {
    return (
        <div className={'Page'}>
            <ProgressBar percent={0}/>
            <div>
                <Title>
                    <p>Надеюсь, что ты не начал перебирать все варианты?</p>
                    <p>Что закибербуллил тебя?</p>
                    <p>Ну не знаю, выключи компьютер!</p>
                </Title>
            </div>
        </div>
    );
};

export default ZerothPage;