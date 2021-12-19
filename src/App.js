import './App.css';
import React, { Component } from 'react'




export class App extends Component {


  state={
    FullName: "Sarra Aouina",
    bio: "Full Stack Developer",
    profession: "Student",
    show: true,
    img: <img  src="https://ds1.static.rtbf.be/article/image/1920xAuto/2/a/0/5e62d03aec0d17facfc5355dd90d441c-1512575731.png"   className='pic' />,
  }



  

  toggleshow=()=>{this.setState({show:!this.state.show  } ) }




  render() {
    return (
      <div>
        <button  onClick={()=>this.toggleshow()}>    
        {this.state.show ? 'Show'   :"Back" }
        </button>
       {this.state.show!==true  ?  <div>
         
         <ul>
        <div className='profile'> {this.state.img}</div>
       <div className='mypro'> {this.state.FullName} <br/>
          {this.state.bio} <br/>
          {this.state.profession}
         </div>
         
          </ul>
         </div> 
                 :null }
      

      </div>
    )
  }
}




export default App;
