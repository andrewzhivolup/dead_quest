import React from "react";
import cls from "./SecondPage.module.scss";
import {Progress} from "antd";

const SecondPage = () => {

    return (
        <div className={cls.SecondPage}>
            <Progress
                className={cls.ProgressBar}
                percent={20}
                steps={8}
                showInfo={false}
            />
            <div>

            </div>
        </div>
    );
};

export default SecondPage;
