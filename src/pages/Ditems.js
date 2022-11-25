import React from 'react'
import info from '../data';
import SingleWord from "./Toggle";

function Ditems({engword, spanword, category}) {
  const newVocab= info.filter(vocab=>vocab.category==='ditem')
  
    return (
      <main>
      <div className='container'>
        <h3>Daily Items</h3>
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


export default Ditems