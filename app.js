//캔버스 찾기
const canvas = document.getElementById('jsCanvas');
//캔버스 크기 설정
canvas.width = 800;
canvas.height = 600;

//캔버스 그리기모드로 가져오기
const ctx = canvas.getContext('2d');

//브러쉬 사이즈
ctx.lineWidth = 1;
//브러쉬 색상
ctx.strokeStyle = "#2c2c2c";

//캔버스를 드래그 할 떄 true로 변경
let painting = false;

//기록 중지
function stopPainting() {
    painting = false;
}

//캔버스에서 마우스 위치 가져오기
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        //그리기 시작
        ctx.beginPath();
        //드로잉 시작점 지정
        ctx.moveTo(x, y);
    } else {
        //드로잉 엔드포인트 지정
        ctx.lineTo(x, y);
        //그리깅
        ctx.stroke();
    }
}

//마우스 드래그
function onMouseDown(event) {
    painting = true;
}

/*
//드래그를 종료하면 painting을 false로
function onMouseUp(event) {
    stopPainting();
}
*/

//캔버스가 존재 하면 이벤트 호출
if (canvas) {
    //마우스가 캔버스 안에서 움직일 때
    canvas.addEventListener("mousemove", onMouseMove)
    //마우스가 캔버스 위에서 드래그 할 떄
    canvas.addEventListener('mousedown', onMouseDown)
    //드래그를 중지할 떄
    canvas.addEventListener('mouseup', stopPainting)
    //마우스가 캔버스를 나갈 때
    canvas.addEventListener('mouseleave', stopPainting)
}