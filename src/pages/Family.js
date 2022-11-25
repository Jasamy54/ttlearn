import React from 'react'
import info from '../data';
import SingleWord from "./Toggle";

function Family({engword, spanword, category}) {
  const newVocab= info.filter(vocab=>vocab.category==='family')
  
    return (
      <main>
      <div className='container'>
        <h3>Family</h3>
        <section className='info'>
          {newVocab.map((item) => {
            const {id, engword, spanword, img} = item;
            return (
              <SingleWord key={item.id} {...item}></SingleWord>
            );
          })}
        </section>
      </div>
    </main>
    )
      
  };


export default Family