import React from 'react';


const Page2 = ({onRouteChange})=>{
    return (
        <div className="App">            
            <h3>Page 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ea molestiae odit iusto, ut quisquam totam reiciendis architecto! Dicta quidem corporis exercitationem, aspernatur modi perferendis inventore iure pariatur placeat totam libero incidunt asperiores voluptatem odio, consequatur earum. Labore nesciunt beatae quisquam libero aut ipsum atque tenetur ullam nostrum mollitia soluta, quasi ducimus iusto non culpa quas doloribus minus nulla? Cum odit itaque perferendis illum dicta, cupiditate assumenda voluptatem hic, reprehenderit est iure? Sapiente necessitatibus autem distinctio nulla?</p>
            <button onClick={()=>onRouteChange('page1')}>Page 1</button>
            <button className="disabled">Page 2</button>
            <button onClick={()=>onRouteChange('page3')}>Page 3</button>
        </div>
    );
};
export default Page2;