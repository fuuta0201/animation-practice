import "destyle.css";
import "/styles/pages/top/style.scss";

import gsap from "gsap";

import { wave } from "./wave.js";
import { particle } from "./particle.js";

gsap.from(".text-1", {
  duration: 2, // アニメーションの時間（秒）
  clipPath: "inset(100% 0% 0% 0%)", // 開始時に全て隠れる
  ease: "power2.out", // イージング関数で自然な動きを演出
  onComplete: () => console.log("Animation completed!") // アニメーション完了時のコールバック
});

// load
const jsLoaderBg = ".js-loader-bg";
const button = document.querySelector(".button");
const closeLoadingScreen = (jsLoaderBg) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 0,
    direction: 1.1
  });
};

const showLoadingScreen = (jsLoaderBg) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 1
  });
};
// ロード完了したら
window.onload = () => {
  setTimeout(() => {
    closeLoadingScreen(jsLoaderBg);
  }, 2500);
};

document.addEventListener('DOMContentLoaded', () => {
  wave();
  particle();
});