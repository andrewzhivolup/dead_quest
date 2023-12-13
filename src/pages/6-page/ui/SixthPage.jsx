import React, {useEffect, useState} from 'react';
import {ProgressBar} from "../../../widgets/ProgressBar";
import {Button, Typography} from 'antd';
import {useNavigate} from "react-router-dom";
import cls from "./SixthPage.module.scss";

const {Title} = Typography;


const SixthPage = () => {
    const [bool, setBool] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setBool(!bool);
        }, 616 * 1000)
    }, []);

    const next = () => {
        navigate("/24830103");
    };

    return (
        <div className={'Page'}>
            <ProgressBar percent={70}/>
            <div>
                <Title
                    level={4}
                    className={cls.Title}
                >
                    Длинный палец Катерины укажет на тень на земле,
                    где похоронен желтый амулет в полдень во время
                    весеннего равноденствия.
                </Title>

                {
                    !bool
                        ? ''
                        :
                        <
                            Button type="primary"
                                   onClick={next}
                        >
                            Следующая страница
                        </Button>
                }
            </div>
        </div>
    );
};

export default SixthPage;