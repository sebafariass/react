import React from 'react'
import ReactDOM from 'react-dom'

class TarjetaFruta extends React.Component {
  //constructor se ejecuta cuando se crea al momento de crear el componente del state
constructor () {
  super()

  this.agregar = this.agregar.bind(this)

  this.quitar = this.quitar.bind(this)

  this.state = {
    cantidad: 0
  }
}

agregar() {
 this.setState( { cantidad: this.state.cantidad + 1})
}

quitar() {
  this.setState( { cantidad: this.state.cantidad - 1})
 }

/*al usar setState, vuelve a ejecutar  el metodo render, revisa el estado 
y analiza que elementos cambiaron, despeus aplica estos cambios a los cambios*/
  render () {
    return (
      <div>
      <h3> { this.props.name } </h3>
      <hr/>
      <div>Cantidad : {this.state.cantidad} </div>
   
     <button onClick={this.agregar} > +</button>
    
      <button onClick={this.quitar}> -  </button>
      <p> ${ this.props.price } </p>
      </div>
    )
  }
}

const App = () => (
  //pasando atributo con prop name que tiene como valor "peras con naranjas"
  
  //en el string peras con naranjas pueden ir llaves {} o no, da igual.
  //a diferencia con template string ${} deben ir con llasves y comilas dobladas `` alt + 96 
  <div>
    <TarjetaFruta name={'peras con naranja'} price={60.0} /> 
    <TarjetaFruta name={'MAnGO'} price={7.50}/> 
    <TarjetaFruta name='Frutillas' price={309.0}/> 
    <TarjetaFruta name='SANDIA' price={2500} /> 
    
    
  </div>
)

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