/* --------------색상 선택기 ------------ start */

//색상 컨트롤러 가져오기
const colors = document.getElementsByClassName('jsColor');

//색상컨트롤러 클릭시 color 변경
function changeColor(event) {
    //CSS(style) background-color 가져오기
    ctx.strokeStyle = event.target.style.backgroundColor;
}

//색상 컨트롤러에 이벤트 넣기
Array.from(colors).forEach(dotoryeee => dotoryeee.addEventListener('click', changeColor));
/* --------------색상 선택기 -------------- end */


/* --------------브러쉬 크기 컨트롤 ------------------- start */
//브러쉬 찾아오기
const range = document.getElementById('jsRange');

//range 값 가져와서 브러쉬 사이즈(lineWidth)에 넣어주기
function changeBrushSize(e) {
    ctx.lineWidth = e.target.value;
}

//range 조절시 함수 호출 이벤트
range.addEventListener('click', changeBrushSize);

/* --------------크러쉬 크기 컨트롤------------------- end */


/* --------------캔버스 컨트롤 ------------------- start */

//캔버스 찾기
const canvas = document.getElementById('jsCanvas');
//캔버스 크기 설정
canvas.width = 800;
canvas.height = 600;

//캔버스 그리기모드로 가져오기
const ctx = canvas.getContext('2d');

//브러쉬 사이즈
ctx.lineWidth = 5;
//브러쉬 색상(기본값 black 지정)
ctx.strokeStyle = 'black';

//캔버스를 드래그 할 떄 true 로 변경
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
function onMouseDown() {
    painting = true;
}

/*
//드래그를 종료하면 painting 을 false 로
function onMouseUp(event) {
    stopPainting();
}
*/

//우클릭 금지 사카는 함수
function handleContext(e) {
    e.preventDefault();
}

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
    //컨텍스트메뉴 제거(우클릭)
    canvas.addEventListener('contextmenu', handleContext);
}

/* --------------캔버스 컨트롤 ------------------- end */


/* --------------FILL BTN---------------- start */
//채우기 버튼 찾기
const fill = document.getElementById('jsFill');

//채우기 함수
function FillCanvas() {
    //컬러선택기 값 가져오기(default 는 black)
    ctx.fillStyle = ctx.strokeStyle;
    //0,0 위치부터 캔버스 크기만큼 색 채우기
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//채우기 버튼에 함수를 호출하는 트리거 추가
fill.addEventListener('click', FillCanvas);

/* --------------FILL BTN---------------- end */


/* --------------SAVE BTN------- start */
//저장 버튼 찾아오기
const saveBtn = document.getElementById('jsSave');

//저장함수
function saveAction() {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a'); //anchor
    link.href = image; //href 에 image 추가
    link.download = 'image.png'; //파일이름 지정
    link.click();
}

//저장 버튼 트리거 추가
saveBtn.addEventListener('click', saveAction);
/* --------------SAVE BTN------- end */