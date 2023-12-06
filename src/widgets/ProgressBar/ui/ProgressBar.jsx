import React from 'react';
import cls from "./ProgressBar.module.scss";
import {Progress} from "antd";

const ProgressBar = (props) => {
    return (
        <Progress
            className={cls.ProgressBar}
            percent={props.percent}
            steps={8}
            showInfo={false}
        />
    );
};

export default ProgressBar;