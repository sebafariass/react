import React from 'react'



class TarjetaFruta extends React.Component {
    //constructor se ejecuta cuando se crea al momento de crear el componente del state
  // constructor () {
  //   super()
  
  //   // this.agregar = this.agregar.bind(this)
  //   // this.quitar = this.quitar.bind(this)
  //  /* para no hacer tan repetitivo las lineas 10 y 9 
  //  se hace una funcion con los array dentro de el
  //  se ponen los strings con el nombre de cada metodo
  //  luego de eso debo declarar el metodo junto a un foreach
  //  que recibe una funcion que x cualquier elemento del array se
  //  ejecutara la funcion y llegar por parametro el elemento*/
  
  
  // const agregar = [ 
  //   'agregar',
  //   'quitar',
  //   'limpiar'
  // ]
  
  //   agregar.forEach((pienso) => {
  //     this[pienso] = this[pienso].bind(this)
  //   })
    
  //   // this.state = {
  //   //   cantidad: 0
  //   // }
  // }
  
    
  state = {
    cantidad: 0
  }
  
  agregar = () => this.setState( { 
    cantidad: this.state.cantidad + 1})
  
  
  quitar = () => this.setState( { 
    cantidad: this.state.cantidad - 1})
   
   
   limpiar =() => this.setState( {
      cantidad: 0})
   
  
  /*al usar setState, vuelve a ejecutar  el metodo render, revisa el estado 
  y analiza que elementos cambiaron, despeus aplica estos cambios a los cambios*/
    render () {

        /* separando la logica del condicional 
        y dejandola en una constante"funcion", para que quede 
        mas refactorizado
    */
       
    //operacion ternaria si es mayor a 0 que se aplique entonces que se aplique el color 
  const changeItems = this.state.cantidad > 0

        const styles = {
            border: '1px solid red',

            marginBottom: '10px',
            borderRadius: '5px',
            padding : '16px',
            width: 'auto',
            /* ? = Enntonces  ///////  : dos puntos significa = en caso contrario*/
            background: changeItems ? 'linear-gradient(45deg, black, #4a02f7)' : '#FFF',
            color:  changeItems ? '#FFF' : '#000' ,
            transition: 'all 250ms ease-out'
        }  



      return (
        <div style={styles} >
        <h3> { this.props.name } </h3>
        <hr/>
        <div style={{
        border: '1px solid red'}}
        >Cantidad : {this.state.cantidad} </div>
     
       <button onClick={this.agregar} > +</button>
      
        <button onClick={this.quitar}> -  </button>
  
        <button onClick={this.limpiar}> Limpia Loco  </button>
        <p> ${ this.props.price } </p>
<p>
    Total: ${this.props.price * this.state.cantidad}
</p>

        </div>
      )
    }
  }
  


  export default TarjetaFruta