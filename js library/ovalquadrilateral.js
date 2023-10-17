const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export function draw(x,y,w,h,c,b,lw,r){
    if(w/2<r){
        r=w/2;
    }
    else if(h/2<r){
        h=y/2;
    }
    if(r<=0){
        r=1;
    }
    ctx.fillStyle = c;
    ctx.strokeStyle = b;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w,y, x+w,y+h, r);
    ctx.arcTo(x+w,y+h, x,y+h, r);
    ctx.arcTo(x,y+h, x,y, r);
    ctx.arcTo(x,y, x+r,y, r);
    ctx.stroke();
    ctx.fill();
}