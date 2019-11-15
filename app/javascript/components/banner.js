import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["The best DB to find cocktails", "Be drunked, but with quality"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
