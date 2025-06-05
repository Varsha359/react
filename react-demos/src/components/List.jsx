import React from 'react'

const List = () => {

    const numbers = [1,2,3,4,5];

  return (
    <main>
      {numbers.map(number =>(
        <ul key={Math.random}>
            <li>{number}</li>
        </ul>
      ))
      }
    </main>
  )
}

export default List
