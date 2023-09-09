import React from 'react'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

const CondionalRendering = () => {
    const isLoggedIn = true;
//let content;

// if(isLoggedIn){
//     content  = <AdminPanel />
// } else {
//     content = <LoginForm />
// }


  return (
    <div>CondionalRendering
       {isLoggedIn ?(
        <AdminPanel />
       ):(
        <LoginForm />
       )}
        {/* {isLoggedIn && <AdminPanel/>} */}
    </div>
  )
}

export default CondionalRendering