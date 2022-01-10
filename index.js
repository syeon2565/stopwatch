let min = 0;
let sec = 0;
let ms = 0; // 시간의 초기값을 설정합니다.

// 각 변수 별로 html에서 element를 가져오는 코드를 작성하세요 (*변수명을 수정하지 말아주세요)
const millisec = document.querySelector("#millisec");
const second = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let time = 0;

//시작 버튼 클릭 시 시간이 10ms씩 증가합니다.
startBtn.addEventListener("click", () => {
  clearInterval(time);
  time = setInterval(startClock, 10);
});

//일시정지 버튼 클릭 시 시간 증가가 정지됩니다.
stopBtn.addEventListener("click", stopClock);

//리셋 버튼 클릭 시 시간이 상태로 초기화 됩니다.
resetBtn.addEventListener("click", resetClock);

function startClock() {
  ms++;
  millisec.innerHTML = ms > 9 ? ms : "0" + ms;
  if (ms > 99) {
    sec++;
    second.innerHTML = sec > 9 ? sec : "0" + sec;
    ms = 0;
    millisec.innerHTML = "00";
  }
  if (sec > 59) {
    min++;
    minutes.innerHTML = min > 9 ? min : "0" + min;
    sec = 0;
    second.innerHTML = "00";
  }
}

function stopClock() {
  clearInterval(time);
}

function resetClock() {
  clearInterval(time);
  ms = 0;
  sec = 0;
  min = 0;
  millisec.innerHTML = "00";
  second.innerHTML = "00";
  minutes.innerHTML = "00";
}
