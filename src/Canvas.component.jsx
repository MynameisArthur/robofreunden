import React, {Component} from 'react';
import './Canvas.sass';
import p5 from 'p5';
import Bubble from './P5JS/Bubble';
const images = require.context('./img/', true);



// https://robohash.org/ddd

class Canvas extends Component{
    constructor(props)   
    {
        super(props);
        this.myRef = React.createRef(); 
        this.state = {
            part: '',
            width: props.width || '70vw',
            height: props.height || '55vh',                   
        };
    }
    Sketch = (p)=>{
        const {scrollHeight,scrollWidth} = this.myRef.current;  
        let bubbles = []; 
        let kittens = [];
        let kit = kittens[0];
        
        p.preload = ()=>{            
            for(let i =0;i<5;i++)
            {
                let temp = images(`./kitten${i}.jpg`)
                kittens.push(p.loadImage(temp));
            }           
        }
        p.setup = ()=>{
            p.createCanvas(scrollWidth,scrollHeight);    
            for(let i =0; i < kittens.length; i++)
            {
                let x = p.random(p.width);
                let y = p.random(p.height);
                let r = p.random(50,150);
                bubbles[i] = new Bubble(p,x,y,r,kittens[i]);
            }
         
        }
        p.draw = ()=>{                         
            p.background(0);            
            for(let bubble of bubbles)
            {
                bubble.show();
                bubble.move();
            }
        }  
        p.mousePressed = ()=>{
            for(let bubble of bubbles)
            {
                if(bubble.contains(p.mouseX,p.mouseY))
                {
                   return bubble.img = 'https://static-ca-cdn.eporner.com/photos/467507.jpg';
                   
                }
            }
            
        }
      
    }
    componentDidMount()
    {
        this.myP5 = new p5(this.Sketch,this.myRef.current);        
    }
    
    render(){
        const {width,height} = this.state;
        const styles = `width: ${width};height: ${height};`;
        return (
            <div id="canvas" ref={this.myRef} styles={styles}>
                
            </div>
        );
    }
}
export default Canvas;
