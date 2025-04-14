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
  // ↓document.documentElement.clientHeight +以降の記述はスクロールの高さを取得するための記述であるが、クローム、IEなどの各ブラウザに対応するために記述を分けている
  const windowScrollHeight = document.documentElement.clientHeight + document.documentElement.scrollTop || document.body.scrollTop || document.scrollingElement.scrollTop || window.pageYOffset || window.scrollY;
  const footerHeight = footer.clientHeight;
  if (bodyHeight - windowScrollHeight <= footerHeight) {
    targetElement.style.position = 'absolute';
    targetElement.style.bottom = footerHeight + 'px';
  } else {
    targetElement.style.position = 'fixed';
    targetElement.style.bottom = 0;
  }
});