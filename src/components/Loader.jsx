import "./style.css";
export default function Loader() {
 return (
 <div className="w-screen h-screen flex jusƟfy-center items-center bg-black">
 <div className="loader-container">
 <div className="content">
 <p className="content__container__text">Hello ! </p>
 <div className="content__container">
 <ul className="content__container__list">
 <li className="content__container__list__item">!</li>
 <li className="content__container__list__item">Innovators!</li>
 <li className="content__container__list__item">Thinkers!</li>
 <li className="content__container__list__item">Developer!</li>
 <li className="content__container__list__item">Innovators!</li>
 </ul>
 </div>
 <p className="quote">Innovaton begins with a single step</p>
 </div>
 </div>
 </div>
 );
} 
