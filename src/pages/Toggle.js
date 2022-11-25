import React, { useState } from 'react';
import data from "../data";

const Toggle =({ engword, spanword, img})=> {
  const [showInfo, setShowInfo] = useState(false);

return (
  <article className='toggle'>
    <div class="accordion">
 <div class="accordion-item">
    <h2 class="accordion-header" >
      <button class="accordion-button" type="button" onClick={() => setShowInfo(!showInfo)}>
      {engword} {showInfo ? "": ""}
      </button>
    </h2>
    <div  data-bs-parent="#accordionExample">
      <div className='shown'>
      {showInfo && <p>{spanword} <img className='photo' src={img} alt={engword}/></p>}
            </div>
    </div>
  </div>
  </div>
</article>
)
}

export default Toggle