// Seokki Hangul Beta - 2024.10

seokkiHangul_serifA();

function seokkiHangul_serifA() {
  let textEls = document.getElementsByClassName('serifA');

  for (let textEl of textEls) {
    let innerText = textEl.innerText;

    // 한글
    innerText = innerText.replace(/[가-힣]+(?=[^)」』]|$)/g, (match) => {
      return `<span class="serifA-한글">${match}</span>`;
    });

    // 한글+괄호낫표
    innerText = innerText.replace(/([가-힣](?=[\)\」\』]))/g, (match) => {
      return `<span class="serifA-한글괄호낫표">${match}</span>`;
    });

    // 숫자
    innerText = innerText.replace(/(\d+)/g, (match) => {
      return `<span class="serifA-숫자">${match}</span>`;
    });

    // 마침표+따옴표
    innerText = innerText.replace(/([.](?=[’”]))/g, (match) => {
      return `<span class="serifA-마침표따옴표">${match}</span>`;
    });

    // 낫표+괄호
    innerText = innerText.replace(/([\』](?=[\(]))/g, (match) => {
      return `<span class="serifA-낫표괄호">${match}</span>`;
    });

    textEl.innerHTML = innerText;
  }
}