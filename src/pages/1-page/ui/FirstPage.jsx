import React from "react";
import cls from "./FirstPage.module.scss";
import {Button, Modal, Progress} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const FirstPage = () => {
    const navigate = useNavigate();
    const next = () => {
        navigate("/75489384");
    };
    const info = () => {
        Modal.info({
            title: 'Обучение?',
            content: (
                <div>
                    <p>Я хочу сыграть с тобой в игру. Буду оставлять тебе подсказки или давать задачи на подумать, ответы на которые помогут перейти тебе на следующую страницу.</p>
                    <p>Первая страница, тут всё легко - кнопка "ОК" перенесет тебя на следующую страницу.</p>
                    <p>P.S.: сложность будет, как в российский квестах из 00-х, а может и нет.</p>
                </div>
            ),
            onOk() {
                next()
            },
        });
    };

    return (
        <div className={cls.FirstPage}>
            <Progress
                className={cls.ProgressBar}
                percent={10}
                steps={8}
                showInfo={false}
            />
            <Button
                className={cls.QuestButton}
                type="primary"
                shape="circle"
                icon={<
                    QuestionCircleOutlined
                    style={{fontSize: '50px'}}
                />}
                onClick={info}
            />
        </div>
    );
};

export default FirstPage;
