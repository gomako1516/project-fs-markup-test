'use strict';

/* フォームバリデーション
----------------------------- */
const form = document.querySelector('.js-form');
const submitButton = document.querySelector('.js-submit');

// エラー要素取得
const nameError = document.querySelector('#name + .js-formError');
const kanaError = document.querySelector('#kana + .js-formError');
const privacyError = document.querySelector('#privacy + .js-formError');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // 入力フィールドの値を取得
  const name = document.getElementById('name').value.trim();
  const kana = document.getElementById('kana').value.trim();
  const privacy = document.getElementById('privacy').checked;

  // 氏名：未入力チェック
  if (!name) {
    nameError.textContent = '氏名を入力してください。';
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameError.style.display = 'none';
  }

  // ふりがな：未入力・ひらがなカタカナチェック
  const kanaRegex = /^[ぁ-んァ-ヶー　\s]+$/;
  if (!kana) {
    kanaError.textContent = 'ふりがなを入力してください。';
    kanaError.style.display = 'block';
    isValid = false;
  } else if (!kanaRegex.test(kana)) {
    kanaError.textContent = '「ひらがな」または「カタカナ」で入力してください。';
    kanaError.style.display = 'block';
    isValid = false;
  } else {
    kanaError.style.display = 'none';
  }

  // プライバシーポリシー同意チェック
  if (!privacy) {
    privacyError.textContent = '個人情報保護方針に同意してください。';
    privacyError.style.display = 'block';
    isValid = false;
  } else {
    privacyError.style.display = 'none';
  }

  // バリデーションNGなら送信キャンセル
  if (!isValid) {
    e.preventDefault();
  }
});
