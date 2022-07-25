import style from "./fancyBack-style.module.css";

export default function FancyBackground() {
  return (
    <div className={style.fancyBack}>
      <div className={`${style.smallSquare} ${style.square}`}></div>
      <div className={`${style.mediumSquare} ${style.square}`}></div>
      <div className={`${style.largeSquare} ${style.square}`}></div>
      <div className={`${style.largeSquare} ${style.square}`}></div>
    </div>
  );
}
