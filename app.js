//캔버스 잡아오기
const canvas = document.getElementById('jsCanvas');

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
    console.log(x, y);
}

//마우스 드래그
function onMouseDown(event) {
    painting = true;
}

//드래그를 종료하면 painting을 false로
function onMouseUp(event) {
    stopPainting();
}

//캔버스가 존재 하면 이벤트 호출
if (canvas) {
    //마우스가 캔버스 안에서 움직일 때
    canvas.addEventListener("mousemove", onMouseMove)
    //마우스가 캔버스 위에서 드래그 할 떄
    canvas.addEventListener('mousedown', onMouseDown)
    //드래그를 중지할 떄
    canvas.addEventListener('mouseup', onMouseUp)
    //마우스가 캔버스를 나갈 때
    canvas.addEventListener('mouseleave', stopPainting)
}