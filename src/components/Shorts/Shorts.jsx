import React from 'react';
import './Shorts.css';
import Short from '../Short/Short';

const Shorts = () => {
    return (
        <section>
            <div className="container">
                <div className="shorts my-12 grid grid-cols-5 gap-4 ml-7">
                    <Short></Short>
                    <Short></Short>
                    <Short></Short>
                    <Short></Short>
                    <Short></Short>
                </div>
            </div>
        </section>
    );
};

export default Shorts;