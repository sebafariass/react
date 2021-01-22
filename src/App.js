import React from 'react'
import TarjetaFruta from './componentes/Tarjetafruta'


const App = () => (
    //pasando atributo con prop name que tiene como valor "peras con naranjas"
    
    //en el string peras con naranjas pueden ir llaves {} o no, da igual.
    //a diferencia con template string ${} deben ir con llasves y comilas dobladas `` alt + 96 
    <div>
      <TarjetaFruta name={'peras con naranja'} price={4} /> 
      <TarjetaFruta name={'MAnGO'} price={2.0}/> 
      <TarjetaFruta name='Frutillas' price={10}/> 
      <TarjetaFruta name='SANDIA' price={2500} /> 
      
      
    </div>
  )

  export default App