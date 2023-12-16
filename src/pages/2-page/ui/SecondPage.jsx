import React from "react";
import cls from "./SecondPage.module.scss";
import {Button} from "antd";
import qrcode from "qrcode";
import {QuestionCircleOutlined} from "@ant-design/icons";
import {ProgressBar} from "../../../widgets/ProgressBar";


const SecondPage = () => {
    const print = () => {
        qrcode.toDataURL('38109423', function (err, code) {
            if (err) return console.log("error occurred")
            console.log(code)
        })
    }

    return (
        <div className={'Page'}>
            <ProgressBar percent={20}/>
            <Button
                className={cls.QuestButton}
                type="primary"
                shape="circle"
                icon={<
                    QuestionCircleOutlined
                    style={{fontSize: '50px'}}
                />}
                onClick={
                    () => {
                        const click = localStorage.getItem('click');
                        if (!click) {
                            localStorage.setItem('click', 1);
                        } else {
                            localStorage.setItem('click', +localStorage.getItem('click') + 1);
                        }
                    }
                }
            />
            <div onClick={print}/>
        </div>
    );
};

export default SecondPage;
