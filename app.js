/*
 --------------색상 선택기 ------------------- start
 */


//색상 컨트롤러 가져오기
const colors = document.getElementsByClassName('jsColor');

//색상컨트롤러 클릭시 color 변경
function changeColor(event) {
    //CSS(style) background-color 가져오기
    ctx.strokeStyle = event.target.style.backgroundColor;
}

//색상 컨트롤러에 이벤트 넣기
Array.from(colors).forEach(dotoryeee => dotoryeee.addEventListener('click', changeColor));
/*
 --------------색상 선택기 ------------------- end
 */


/*
 --------------캔버스 컨트롤 ------------------- start
 */

//캔버스 찾기
const canvas = document.getElementById('jsCanvas');
//캔버스 크기 설정
canvas.width = 800;
canvas.height = 600;

//캔버스 그리기모드로 가져오기
const ctx = canvas.getContext('2d');

//브러쉬 사이즈
ctx.lineWidth = 50;
//브러쉬 색상(기본값 black 지정)
ctx.strokeStyle = 'black';

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

/*
 --------------캔버스 컨트롤 ------------------- end
 */