import React from 'react'

export async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/attractions/${id}`)
  return res.json()
}

export default async function Page({ params }) {
  const id = params.id
  const data = await getData(id)
  console.log(data)
  return (
    

    <div  className = "box">
      <div style={{textAlign: 'center'}}>
        <img  src={data.coverimage} alt={data.name} />
      </div>
      <p style ={{textAlign: 'center'}}>{data.name}</p>
      <p style ={{textAlign: 'center'}} >{data.detail}</p>
    </div>

    
    
  )
}