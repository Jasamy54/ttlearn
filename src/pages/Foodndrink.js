import React from 'react'
import info from '../data';
import SingleWord from "./Toggle";

const Foodndrink = ({engword, spanword, category}) => {

  const newVocab= info.filter(vocab=>vocab.category==='foodd')
  
    return (
      <main>
      <div className='container'>
        <h3>Food and Drinks</h3>
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

export default Foodndrink