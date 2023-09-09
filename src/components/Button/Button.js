import React from 'react'

const DisplayData = () => {
    const user   = {
        name:"James Bond",
        imageUrl: "https://img.freepik.com/premium-photo/front-view-person-with-short-hair_23-2148749599.jpg?w=2000",
        imageSize: 200

    }

  return (
    <>
      <h1>{user.name}</h1>
      <img className='"avatar' src={user.imageUrl} alt={"Photo of" + user.name}
      style={{
        width:user.imageSize,
        height:user.imageSize
      }}
       />
    </>
  )
}

export default DisplayData