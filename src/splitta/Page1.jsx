import React from 'react';
import logo from '../logo.svg';

const Page1 = ({onRouteChange})=>{
    return (
        <div className="App">
            <header style={{width: '25vw'}}>
                <img src={logo} alt="" style={{width: '100%'}}/>                
            </header>
            <h2>
                page1
            </h2>
            <button className="disabled">Page 1</button>
            <button onClick={()=>onRouteChange('page2')}>Page 2</button>
            <button onClick={()=>onRouteChange('page3')}>Page 3</button>
        </div>
    );
};
export default Page1;
