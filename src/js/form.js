'use strict';

/* フォームバリデーション
----------------------------- */
const form = document.querySelector('.js-form');
const submitButton = document.querySelector('.js-submit');

// フォーム要素取得
const nameElment = document.getElementById('name');
const kanaElment = document.getElementById('kana');
const privacyElment = document.getElementById('privacy');

// エラー要素取得
const nameError = nameElment.closest('.p-form__field').querySelector('.js-formError');
const kanaError = kanaElment.closest('.p-form__field').querySelector('.js-formError');
const privacyError = privacyElment.parentElement.querySelector('.js-formError');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // 入力フィールドの値を取得
  const nameValue = document.getElementById('name').value.trim();
  const kanaValue = document.getElementById('kana').value.trim();
  const privacyVlaue = document.getElementById('privacy').checked;

  // 氏名：未入力チェック
  if (!nameValue) {
    nameError.textContent = '氏名を入力してください。';
    nameError.classList.add('is-error');
    nameElment.classList.add('is-error')
    isValid = false;
  } else {
    nameError.classList.remove('is-error');
    nameElment.classList.remove('is-error')
  }

  // ふりがな：未入力・ひらがなカタカナチェック
  const kanaRegex = /^[ぁ-んァ-ヶー　\s]+$/;
  if (!kanaValue) {
    kanaError.textContent = 'ふりがなを入力してください。';
    kanaError.classList.add('is-error');
    kanaElment.classList.add('is-error')
    isValid = false;
  } else if (!kanaRegex.test(kanaValue)) {
    kanaError.textContent = '「ひらがな」または「カタカナ」で入力してください。';
    kanaError.classList.add('is-error');
    kanaElment.classList.remove('is-error')
    isValid = false;
  } else {
    kanaError.classList.remove('is-error');
    kanaElment.classList.remove('is-error')
  }

  // プライバシーポリシー同意チェック
  if (!privacyVlaue) {
    privacyError.textContent = '個人情報保護方針に同意してください。';
    privacyError.classList.add('is-error');
    isValid = false;
  } else {
    privacyError.classList.remove('is-error');
  }

  // バリデーションNGなら送信キャンセル
  if (!isValid) {
    e.preventDefault();
  }
});
