import React from 'react';


const Page3 = ({onRouteChange})=>{
    return (
        <div className="App">            
            <h2>
                PAGE3
            </h2>
            <img src="https://wmasg.com/uploads/articles/covers/02396832c51f18f727a60078932be6ce.jpeg" alt=""/>
            <button onClick={()=>onRouteChange('page1')}>Page 1</button>
            <button onClick={()=>onRouteChange('page2')}>Page 2</button>
            <button className="disabled">Page 3</button>
        </div>
    );
};
export default Page3;