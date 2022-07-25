const DSC_1025src = 'url("img/DSC_1025.JPG")';
const DSC_1026src = 'url("img/DSC_1026.JPG")';
const DSC_1027src = 'url("img/DSC_1027.JPG")';
const DSC_1028src = 'url("img/DSC_1028.JPG")';
const DSC_1029src = 'url("img/DSC_1029.JPG")';
const DSC_1030src = 'url("img/DSC_1030.JPG")';
const header = document.getElementById('top');

// 次の画像を指定する関数
function nextImage() {
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == DSC_1025src) {
    // 今1枚め
    header.style.backgroundImage = DSC_1026src;
  } else if (nowBg == DSC_1026src) {
    // 今2枚め
    header.style.backgroundImage = DSC_1027src;
  } else if (nowBg == DSC_1027src) {
    // 今3枚め
    header.style.backgroundImage = DSC_1028src;
  } else if (nowBg == DSC_1028src) {
    // 今4枚め
    header.style.backgroundImage = DSC_1029src;
  } else if (nowBg == DSC_1029src) {
    // 今5枚め
    header.style.backgroundImage = DSC_1030src;
  } else {
    // 今6枚め
    header.style.backgroundImage = DSC_1025src;
  }
}

// 前の画像を指定する関数
function prevImage() {
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == DSC_1025src) {
    // 今1枚め
    header.style.backgroundImage = DSC_1030src;
  } else if (nowBg == DSC_1026src) {
    // 今2枚め
    header.style.backgroundImage = DSC_1025src;
  } else if (nowBg == DSC_1027src) {
    // 今3枚め
    header.style.backgroundImage = DSC_1026src;
  } else if (nowBg == DSC_1028src) {
    // 今4枚め
    header.style.backgroundImage = DSC_1027src;
  } else if (nowBg == DSC_1029src) {
    // 今5枚め
    header.style.backgroundImage = DSC_1028src;
  } else {
    // 今6枚め
    header.style.backgroundImage = DSC_1029src;
  }
}

// ページが表示されたタイミングで実行したい処理を書く
document.getElementById('top').style.backgroundImage = image01src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);
// タイマーセット(5秒ごとに次の画像)
setInterval(nextImage, 5000);
