'use strict';

/* フェードインアニメーション
----------------------------- */
CustomEase.create('custom-animation', '0.25, 0.46, 0.45, 0.94');
CustomEase.create('custom-balloon', '.68,-.6,.32,1.6');

/* 連続フェードアップ */
gsap.set('.js-fadeUps > *', { autoAlpha: 0, y: 35 });
gsap.utils.toArray('.js-fadeUps').forEach((element) => {
  let targets = element.querySelectorAll(':scope > *');
  gsap.fromTo(
    targets,
    { autoAlpha: 0, y: 35 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      delay: .1,
      ease: 'custom-animation',
      stagger: 0.2,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%'
      }
    }
  );
});

/* フェードアップ */
gsap.utils.toArray('.js-fadeUp').forEach((target) => {
  gsap.fromTo(
    target,
    {
      autoAlpha: 0,
      y: 25
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      delay: .1,
      ease: 'custom-animation',
      scrollTrigger: {
        trigger: target,
        start: 'top 90%'
      }
    }
  );
});

/* フェードイン */
gsap.utils.toArray('.js-fadeIn').forEach((target) => {
  gsap.fromTo(
    target,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 0.9,
      delay: .1,
      ease: 'custom-animation',
      scrollTrigger: {
        trigger: target,
        start: 'top 90%'
      }
    }
  );
});

/* GSAP スクロールトリガー ページの初期ロード時にも反映
-------------------------------------------- */
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
