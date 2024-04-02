import React, { useEffect, useState } from 'react'


function Github() {
 
    const [data, setData] = useState([])
useEffect(() => {
    fetch('https://api.github.com/users/shifaIshfaque')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setData(data)

    })
},[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers} <br /> Github Repository: {data.public_repos}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/shifaIshfaque')
//     return response.json()
// }