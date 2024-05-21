import "destyle.css";
import "/styles/pages/top/style.scss";

import gsap from "gsap";

gsap.from(".text-1", {
  duration: 2, // アニメーションの時間（秒）
  clipPath: "inset(100% 0% 0% 0%)", // 開始時に全て隠れる
  ease: "power2.out", // イージング関数で自然な動きを演出
  onComplete: () => console.log("Animation completed!") // アニメーション完了時のコールバック
});
