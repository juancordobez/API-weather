// React
import React from 'react';

// Route dom
import { Link } from 'react-router-dom';

// Styles
import s from './card.module.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={s.divCard}>
        <div id="closeIcon" className={s.divBtn}>
            <button onClick={onClose} className={s.btn}>X</button>
        </div>
          <Link to={`/ciudad/${id}`} >
            <h2 className="titulo">{name}</h2>
          </Link>
          <span className={s.span1}>min:</span><span className={s.span2}>{ min }°</span>
        <span className={s.span1}>max:</span><span className={s.span2}>{ max }°</span>

            <figure>
              <img className={s.img} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </figure>
      </div>
    );
};
