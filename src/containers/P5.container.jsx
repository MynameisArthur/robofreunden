import React,{Component} from 'react';
import './P5.sass';
import Canvas from '../Canvas.component';

//Components


class P5 extends Component {
  constructor()  
  {
    super();
    document.title = process.env.REACT_APP_PAGE_TITLE_THREE;        
  }    
  render() {
    return (
        <div className="container" id="p5-app">
          <h1>P5js</h1>
          <div className="canvas-container" style={{width: '750px',height: '750px'}}>
           
            <Canvas/>
          </div>
        </div>
    );
  }
}


export default P5;
