import React from 'react'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api/attractions')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Attractions</h1>
      <p >
        {data.map(attraction => (
          <p className = "box1" key={attraction.id}>
            <img src={attraction.coverimage} alt={attraction.name}  className='pic1'/> 
           <div style={{textAlign: 'center'}}> {attraction.name}  
            <Link href={`/attractions/${attraction.id}`}>Read More</Link>
            </div>
          </p>
        ))}
      </p>
    </div>
  )
}