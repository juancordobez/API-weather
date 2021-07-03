import React, { useState } from "react";

import s from './search.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity(e.target.value = '')
    }}
      className={s.form}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        className={s.input}
      />
      <input type="submit" value="AGREGAR" className={s.btn}/>
    </form>
  );
}
