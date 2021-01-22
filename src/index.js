import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'



//componentes funcionales
// const TarjetaFruta = (hola) => { //usando props : (hola)
//   //expresión { hola.name } 
//   console.log(hola)
// return (   
// <div>
//   <h3>{ hola.name }</h3>
//   <hr />
// <p> ${hola.price}</p>
// </div>)
// }
// const App = () => (
//   //pasando atributo con prop name que tiene como valor "peras con naranjas"
  
//   //en el string peras con naranjas pueden ir llaves {} o no, da igual.
//   //a diferencia con template string ${} deben ir con llasves y comilas dobladas `` alt + 96 
//   <div>
//     <TarjetaFruta name='PERAS CON NARANJAS' price={60.0} /> 
//     <TarjetaFruta name='MAnGO' price={7.50}/> 
//     <TarjetaFruta name='Frutillas' price={309.0}/> 
//     <TarjetaFruta name='SANDIA' price={2500} /> 
    
    
//   </div>
// )




//PRUEBA DE EXPRESIONES JSX


// const user1 = {
//   name: 'Fabiola Leopold',
//   age: 31,
//   country: 'Castellon 751'
// }
// function getInfo(user){
//   return `hola mi nombre es ${user.name} y tengo ${user.age} años, vivo en la calle ${user1.country}`
// }
// const App = <h1> {getInfo(user1)} </h1>

  
ReactDOM.render(<App />, document.getElementById('root'))