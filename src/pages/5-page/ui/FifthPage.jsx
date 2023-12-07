import React, {useEffect, useState} from 'react';
import {ProgressBar} from "../../../widgets/ProgressBar";
import {Typography, Button} from 'antd';
import {useNavigate} from "react-router-dom";

const {Title} = Typography;

const FifthPage = () => {
    const navigate = useNavigate();
    const next = () => {
        navigate("/85301395");
    };
    const [_, setUserData] = useState(0);

    useEffect(() => {
        function checkUserData() {
            const item = localStorage.getItem('click')

            if (item) {
                setUserData(+item)
            }
        }

        window.addEventListener('storage', checkUserData)

        return () => {
            window.removeEventListener('storage', checkUserData)
        }
    }, [])

    const click = localStorage.getItem('click');
    const need = 10000;

    return (
        <div className={'Page'}>
            <ProgressBar percent={60}/>
            <div>
                {
                    click < need ?
                        <Title>
                            Нажми {need - (+click)} раз
                        </Title>
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
    )
        ;
};

export default FifthPage;