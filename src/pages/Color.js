import React, { useState } from 'react';
import info from '../data';
import SingleWord from "./Toggle";

function Color({engword, spanword, category}){
  //const [showInfo, setShowInfo] = useState(false);
  const newVocab= info.filter(vocab=>vocab.category==='color')

  return (
    <main>
      <div className='container'>
        <h3>Colors</h3>
        <section className='info'>
          {newVocab.map((item) => {
            const {id, engword, spanword} = item;
            return (
              <SingleWord key={item.id} {...item}></SingleWord>
            );
          })}
        </section>
      </div>
    </main>


  )
    
};

export default Color