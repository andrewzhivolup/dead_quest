import React from 'react';
import cls from './ThirdPage.module.scss'
import {Image, Progress} from "antd";

const ThirdPage = () => {
    return (
        <div className={cls.ThirdPage}>
            <Progress
                className={cls.ProgressBar}
                percent={40}
                steps={8}
                showInfo={false}
            />
            <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        </div>
    );
};

export default ThirdPage;