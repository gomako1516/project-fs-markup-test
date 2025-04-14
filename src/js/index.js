'use strict';

/* header 固定・変化
----------------------------- */
const header = document.querySelector('.js-header');

// headerの高さを取得
const headerHeight = header.offsetHeight;

// スクロール時の処理
function headerChange() {
  const scroll = window.scrollY;
  if (scroll >= headerHeight) {
    header.classList.add('is-fixed');
  } else {
    header.classList.remove('is-fixed');
  }
}

// スクロールイベント登録
window.addEventListener('scroll', headerChange);


/* 追従バナーの表示・非表示
----------------------------- */
window.addEventListener('scroll', () => {
  const pageTop = document.querySelector('.js-floatingBanner');
  const currentY = window.pageYOffset;

  if(currentY >= 200) {
    setTimeout(() => {
      pageTop.style.opacity = 1;
      pageTop.style.visibility = 'visible';
    }, 1);
  } else {
    setTimeout(() => {
      pageTop.style.opacity = 0;
      pageTop.style.visibility = 'hidden';
    }, 1);
  }
});


/* 追従バナーをフッター手前で止める
----------------------------- */
const floatingBanner = document.querySelector('.js-floatingBanner');
const footer = document.querySelector('.js-footer');

const bannerMarginBottom = 20; // バナーと画面下の距離
const stopMargin = 10; // footerの上から10px上で止める

function handleFloatingBanner() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;
  const footerHeight = footer.offsetHeight;

  // バナーの下端位置
  const bannerBottom = scrollY + windowHeight - bannerMarginBottom;

  // 停止位置（ページ全体の高さ − footerの高さ − stopMargin）
  const stopPositionY = documentHeight - footerHeight - stopMargin;

  if (bannerBottom >= stopPositionY) {
    floatingBanner.classList.add('is-stopped');
  } else {
    floatingBanner.classList.remove('is-stopped');
  }
}

window.addEventListener('scroll', handleFloatingBanner);
window.addEventListener('resize', handleFloatingBanner);

// 初期実行
handleFloatingBanner();