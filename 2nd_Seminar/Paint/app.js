const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn =  document.getElementById("isSave");

const INITIAL_COLOR = "2c2c2c"
const CANVAS_SIZE = 700;
//canvas 요소 자체의 크기를 지정해줘야 
//그 요소 내에서의 X,Y위치를 가져올 수 있기 때문에
//크기를 설정해줘야함 
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;

let startPainting = () => {
    painting = true;
}

let stopPainting=()=>{
    painting = false;
}

let onMouseMove = (e) => {
    const x = e.offsetX,
    y = e.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
        //else를 시작하게되면 그 상태는 이 if문 이내에서 moveTo로 이동한 x,y
        //이 x,y 를 기준으로 lineTo가 연결될것
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

let handleColor= (e)=>{
    console.log(e);
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

let handleRangeChange = (e)=>{
    const size = e.target.value
    ctx.lineWidth = size;
}

let handleModeClick = () => {
    if(filling){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "PAINT";
    }
}

let handleCanvasClick = () => {
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE, CANVAS_SIZE);
    }
}

let handleCM = (e) => {
    e.preventDefault();
}

let handleSaveClick = () => {
    const image = canvas.toDataURL("image/PNG");
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🎨]";
    link.click();
}



let init =() =>{
    if(canvas){
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
        canvas.addEventListener("click", handleCanvasClick);
        canvas.addEventListener("contextmenu", handleCM);
    }
    
    Array.from(colors).map((color)=>{
        color.addEventListener("click", handleColor);
    })
    
    if(range){
        range.addEventListener("input", handleRangeChange);
    }
    
    if(mode){
        mode.addEventListener("click", handleModeClick);
    }
    
    if(saveBtn){
        saveBtn.addEventListener("click", handleSaveClick);
    }
}

init();