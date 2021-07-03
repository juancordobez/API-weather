import React from "react";
import { Redirect } from "react-router";

import s from './card.module.css';


export default function Ciudad({city}) {
    return (
        city ?
            <div className="column">
                    <div className="column">
                        <h2 className="titulo">{city.name}</h2>
                            <div className={s.divCard}>Temperatura: {city.temp} ºC</div>
                            <div className={s.divCard}>Clima: {city.weather}</div>
                            <div className={s.divCard}>Viento: {city.wind} km/h</div>
                            <div className={s.divCard}>Cantidad de nubes: {city.clouds}</div>
                            <div className={s.divCard}>Latitud: {city.latitud}º</div>
                            <div className={s.divCard}>Longitud: {city.longitud}º</div>
                    </div>
            </div> 
        :
        <Redirect to = '/' />
    )
}