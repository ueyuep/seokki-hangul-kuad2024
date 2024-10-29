// Seokki Hangul Beta - 2024.10

seokkiHangul_A();
seokkiHangul_B();
seokkiHangul_D();

function seokkiHangul_A() {
  let textEls = document.getElementsByClassName('A');

  for (let textEl of textEls) {
    let innerText = textEl.innerText;

    // 로마자
    innerText = innerText.replace(/([A-z]+)/g, (match) => {
      return `<span class="roman">${match}</span>`;
    });

    // 한글
    innerText = innerText.replace(/[가-힣]+(?=[^)‹›«»」』]|$)/g, (match) => {
      return `<span class="한글">${match}</span>`;
    });

    // 한글+괄호꺽쇠낫표
    innerText = innerText.replace(/([가-힣](?=[\)\‹\›\«\»\」\』]))/g, (match) => {
      return `<span class="한글괄호꺽쇠낫표">${match}</span>`;
    });

    // 숫자
    innerText = innerText.replace(/(\d+)/g, (match) => {
      return `<span class="숫자">${match}</span>`;
    });

    // 대시
    innerText = innerText.replace(/(\—)/g, (match) => {
      return `<span class="대시">${match}</span>`;
    });

    // 꺽쇠
    innerText = innerText.replace(/([\‹\›\«\»])/g, (match) => {
      return `<span class="꺽쇠">${match}</span>`;
    });

    // 낫표
    innerText = innerText.replace(/([\「\」\『\』](?=[^(]|$))/g, (match) => {
      return `<span class="낫표">${match}</span>`;
    });

    // 낫표+괄호
    innerText = innerText.replace(/([\」\』](?=[\(]))/g, (match) => {
      return `<span class="낫표괄호">${match}</span>`;
    });

    // 콜론
    innerText = innerText.replace(/([\:\;])/g, (match) => {
      return `<span class="콜론">${match}</span>`;
    });

    // 마침표+따옴표
    innerText = innerText.replace(/([.](?=[’”]))/g, (match) => {
      return `<span class="마침표따옴표">${match}</span>`;
    });

    textEl.innerHTML = innerText;
  }
}

function seokkiHangul_B() {
  let textEls = document.getElementsByClassName('B');

  for (let textEl of textEls) {
    let innerText = textEl.innerText;

    // 로마자
    innerText = innerText.replace(/([A-z]+)/g, (match) => {
      return `<span class="roman">${match}</span>`;
    });

    // 한글
    innerText = innerText.replace(/[가-힣]+(?=[^)‹›«»」』]|$)/g, (match) => {
      return `<span class="한글">${match}</span>`;
    });

    // 한글+괄호꺽쇠낫표
    innerText = innerText.replace(/([가-힣](?=[\)\‹\›\«\»\」\』]))/g, (match) => {
      return `<span class="한글괄호꺽쇠낫표">${match}</span>`;
    });

    // 숫자
    innerText = innerText.replace(/(\d+)/g, (match) => {
      return `<span class="숫자">${match}</span>`;
    });

    // 마침표
    innerText = innerText.replace(/([.])(?=[^’”]|$)/g, (match) => {
      return `<span class="마침표">${match}</span>`;
    });

    // 마침표+따옴표
    innerText = innerText.replace(/([.](?=[’”]))/g, (match) => {
      return `<span class="마침표따옴표">${match}</span>`;
    });

    // 쉼표
    innerText = innerText.replace(/([,])/g, (match) => {
      return `<span class="쉼표">${match}</span>`;
    });

    // 따옴표
    innerText = innerText.replace(/([\‘\’\“\”])/g, (match) => {
      return `<span class="따옴표">${match}</span>`;
    });

    // 대시
    innerText = innerText.replace(/([\-\—])/g, (match) => {
      return `<span class="대시">${match}</span>`;
    });

    // 꺽쇠
    innerText = innerText.replace(/([\‹\›\«\»](?=[^(]|$))/g, (match) => {
      return `<span class="꺽쇠">${match}</span>`;
    });

    // 꺽쇠괄호
    innerText = innerText.replace(/([\›\»](?=[\(]))/g, (match) => {
      return `<span class="꺽쇠괄호">${match}</span>`;
    });

    // 낫표
    innerText = innerText.replace(/([\「\」\『\』](?=[^(]|$))/g, (match) => {
      return `<span class="낫표">${match}</span>`;
    });

    // 낫표괄호
    innerText = innerText.replace(/([\「\」\『\』](?=[\(]))/g, (match) => {
      return `<span class="낫표괄호">${match}</span>`;
    });

    // 콜론
    innerText = innerText.replace(/([\:\;])/g, (match) => {
      return `<span class="콜론">${match}</span>`;
    });

    textEl.innerHTML = innerText;
  }
}

function seokkiHangul_D() {
  let textEls = document.getElementsByClassName('D');

  for (let textEl of textEls) {
    let innerText = textEl.innerText;

    // 로마자
    innerText = innerText.replace(/[A-z]+(?=[^)]|$)/g, (match) => {
      return `<span class="roman">${match}</span>`;
    });

    // 로마자+괄호
    innerText = innerText.replace(/([A-z](?=[\)]))/g, (match) => {
      return `<span class="romanParenthesis">${match}</span>`;
    });

    // 한글
    innerText = innerText.replace(/[가-힣]+(?=[^)‹›«»」』]|$)/g, (match) => {
      return `<span class="한글">${match}</span>`;
    });

    // 한글+괄호꺽쇠낫표
    innerText = innerText.replace(/([가-힣](?=[\)\›\»\」\』]))/g, (match) => {
      return `<span class="한글괄호꺽쇠낫표">${match}</span>`;
    });

    // 숫자
    innerText = innerText.replace(/(\d+)/g, (match) => {
      return `<span class="숫자">${match}</span>`;
    });

    // 마침표
    innerText = innerText.replace(/[.]+(?=[^’”]|$)/g, (match) => {
      return `<span class="마침표">${match}</span>`;
    });

    // 마침표+따옴표
    innerText = innerText.replace(/([.](?=[’”]))/g, (match) => {
      return `<span class="마침표따옴표">${match}</span>`;
    });

    // 쉼표
    innerText = innerText.replace(/([,])/g, (match) => {
      return `<span class="쉼표">${match}</span>`;
    });

    // 따옴표
    innerText = innerText.replace(/([\‘\’\“\”])/g, (match) => {
      return `<span class="따옴표">${match}</span>`;
    });

    // 대시
    innerText = innerText.replace(/([\-\—])/g, (match) => {
      return `<span class="대시">${match}</span>`;
    });

    // 꺽쇠
    innerText = innerText.replace(/([\‹\›\«\»](?=[^(]|$))/g, (match) => {
      return `<span class="꺽쇠">${match}</span>`;
    });

    // 꺽쇠+괄호
    innerText = innerText.replace(/([\›\»](?=[\(]))/g, (match) => {
      return `<span class="꺽쇠괄호">${match}</span>`;
    });

    // 괄호
    innerText = innerText.replace(/([\(\)])/g, (match) => {
      return `<span class="괄호">${match}</span>`;
    });

    // 낫표
    innerText = innerText.replace(/([\「\」\『\』])/g, (match) => {
      return `<span class="낫표">${match}</span>`;
    });

    // 콜론
    innerText = innerText.replace(/([\:\;])/g, (match) => {
      return `<span class="콜론">${match}</span>`;
    });

    textEl.innerHTML = innerText;
  }
}