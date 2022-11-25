import React from 'react'
import info from '../data';
import SingleWord from "./Toggle";


  const Verbs = ({engword, spanword, category}) => {

    const newVocab= info.filter(vocab=>vocab.category==='verb')
    
      return (
        <main>  
      <div className='container'>
      <h3>Verbs</h3>
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


export default Verbs