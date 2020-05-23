import React from 'react';
import Card from './Card.component';

const CardList = ({robots})=> {  
    console.log('CardList');     
    return (
        <div>
            {
                robots.map(robot=>{
                    return <Card key={robot.id} id={robot.id} robot={robot}/>
                })
            }
        </div>
    );
};

export default CardList;
