const blessings = [
    "生日快樂!!",
    "很開心可以跟妳成為室友",
    "雖然大二沒辦法再一起住了",
    "但是我很喜歡妳這個朋友!!",
    "能夠遇見妳們我很開心",
    "我是一個需要別人推動才會努力的人",
    "每次看見妳認真我都會有想更加努力的動力",
    "希望以後還可以一直當朋友!!",
    "我會努力傳summer給妳的(疑)",
    "字是隨機的妳自己拚哈哈哈哈哈哈",
    "祝妳以後前程似錦!",
    "我做的很陽春不要嫌棄哈哈哈哈",
    "希望一年後的我不要覺得這是我黑歷史(汗",
    "點滿50下有驚喜!"
];

const cat = document.getElementById("cat");
const counter = document.getElementById("counter");
const messageContainer = document.getElementById("message-container");

let clickCount = 0;

cat.addEventListener("click", () => {
  clickCount++;
  counter.innerText = `你點了 ${clickCount} 次`;

  cat.src = "img/IMG_0337.png";
  setTimeout(() => {
    cat.src = "img/IMG_0327.png";
  }, 500);

  const msg = blessings[Math.floor(Math.random() * blessings.length)];

  // 建立新的祝福元素
  const msgElem = document.createElement("div");
  msgElem.className = "falling-message";
  msgElem.innerText = msg;

  // 加入到畫面中
  messageContainer.appendChild(msgElem);

  // 一段時間後自動移除（可選）
  setTimeout(() => {
    msgElem.remove();

  }, 1000);
   // 顯示賀圖與連結（只出現一次）
  if (clickCount === 50) {
    const congrats = document.getElementById("congrats-section");
    congrats.style.display = "block";
  }
    
});




