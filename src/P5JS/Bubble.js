class Bubble {
    constructor(p,x=200,y=150,r=50,img)
    {
        this.p = p;
        this.x = x;
        this.y = y;
        this.r = r;
        this.xspeed = 1;
        this.yspeed = 1;
        this.brightness = 0; 
        this.stroke = 255;  
        this.img = img;      
    }
    move = ()=>{
        const {p} = this;
        this.x = this.x + p.random(-2,2);
        this.y = this.y + p.random(-2,2);
    }
    show = ()=>{
        const {p} = this;
        p.image(this.img,this.x,this.y,this.r,this.r)
        // p.strokeWeight(4);
        // p.stroke(this.stroke);                     
        // p.fill(this.brightness,125);
        // p.rect(this.x,this.y,this.r); 
    }
    changeColor = (color)=>{
        this.brightness = color;         
    }
    contains = (px,py)=>{
        const {p} = this;
        let d = p.dist(px,py,this.x,this.y);
        // if(d < this.r)
        // {
        //     return true;
        // }
        // else{
        //     return false;
        // }
        if(px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r)
        {
           return true;           
        }else{
            return true;            
        }
    }
    intersects = (obj)=>{
        const {p} = this;
        let d = p.dist(this.x,this.y,obj.x,obj.y)
        return (d < this.r + obj.r);
    }    
    
}
export default Bubble;