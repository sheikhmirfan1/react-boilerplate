import './App.css'
import PersonTemplate from './assets/Hero.jsx'
import User from './UserRoleMessage.jsx'
//import person from './assets/Hero.jsx'
//import Hero from './assets/Hero.jsx'

function App() {
      const person = {
    name: 'John Doe',
    age: 25,
    location: 'New York'}
    

    const person2 = {
    name: 'Anne Joe',
    age: 30,
    location: 'New York'}



  return (

<>
<PersonTemplate {...person}/>
<PersonTemplate {...person2}/>
<User role='Admin'/>


</>

   
  )
}

export default App
