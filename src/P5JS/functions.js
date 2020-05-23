export const bounce = (p,obj)=>{
    if(obj.x > p.width || obj.x < 0)
    {
        obj.xspeed = obj.xspeed * -1;
    }
    if(obj.y > p.height || obj.y < 0)
    {
        obj.yspeed = obj.yspeed * -1;
    }
};
export const move = (obj)=>{
    obj.x = obj.x + obj.xspeed;
    obj.y = obj.y + obj.yspeed;
};
export const moveRand = (p,obj)=>{
    obj.x = obj.x + p.random(-5,5);
    obj.y = obj.y + p.random(-5,5);
};
export const display = (p,obj)=>{
    p.strokeWeight(4);
    p.stroke(255);                     
    p.noFill();
    p.ellipse(obj.x,obj.y,24,24); 
};
