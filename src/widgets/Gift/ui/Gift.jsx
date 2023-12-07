import React from 'react';
import gift from "../../../shared/assets/gift.png";

const Gift = () => {
    return (
        <div className={'Page'}>
            <img
                width={500}
                src={gift}
                alt={'gift'}
            />
        </div>
    );
};

export default Gift;