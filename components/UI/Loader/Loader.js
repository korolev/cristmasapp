import React from 'react'

const Loader = props => (
    <div className={'center'}>
        <div className={'Loader'}>
            <div/>
            <div/>
        </div>
        <style jsx>{`
        .Loader {
            display: inline-block;
            position: relative;
            width: 64px;
            height: 64px;            
        }
        .Loader div {
            position: absolute;
            border: 4px solid #fff;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .Loader div:nth-child(2) {
            animation-delay: -0.5s;
        }
        
        .center {
            position: absolute;
            text-align: center;
            top: 45%;
            width: 100%;
        }
        @keyframes lds-ripple {
            0% {
                top: 28px;
                left: 28px;
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                top: -1px;
                left: -1px;
                width: 58px;
                height: 58px;
                opacity: 0;
            }
        }
    `}</style>
    </div>
);

export default Loader