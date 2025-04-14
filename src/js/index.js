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

  if (currentY >= 200) {
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
window.addEventListener('scroll', function () {
  const targetElement = document.querySelector('.js-floatingBanner');
  const footer = document.querySelector('.js-footer');

  // ページ全体（コンテンツ）の高さを取得
  const bodyHeight = document.body.offsetHeight;

  // スクロール位置を取得
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // ビューポートの高さを取得（Safari 下部ツールバーを考慮）
  const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

  // 現在のスクロール位置 + 画面の高さ = 画面の下端位置
  const windowScrollHeight = scrollTop + viewportHeight;

  // フッターの高さを取得
  const footerHeight = footer.clientHeight;

  // ページの下端と画面の下端の距離がフッターの高さ以下の場合
  if (bodyHeight - windowScrollHeight <= footerHeight) {
    // 追従バナーをフッターの上に固定
    targetElement.style.position = 'absolute';
    targetElement.style.bottom = footerHeight + 12 + 'px';
  } else {
    targetElement.style.position = 'fixed';
    targetElement.style.bottom = 12 + 'px';
  }
});
