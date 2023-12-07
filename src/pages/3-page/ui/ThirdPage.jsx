import React from 'react';
import cls from './ThirdPage.module.scss'
import {Image} from "antd";
import third from "../../../shared/assets/third.jpg";
import {ProgressBar} from "../../../widgets/ProgressBar";

const ThirdPage = () => {
    return (
        <div className={'Page'}>
            <ProgressBar percent={40}/>
            <div
                className={cls.QuestImage}
            >
                <Image
                    width={700}
                    src={third}
                />
            </div>
        </div>
    );
};

export default ThirdPage;