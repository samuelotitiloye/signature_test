import React, {Component}from 'react';
import jsPDF from 'jspdf';
// import './App.css';
import {connect} from 'react-redux';




class PdfMaker extends Component {


  
 handleClick=()=>{
   // alert('banger')
   let doc = new jsPDF()
   const imgData = `${this.props.reduxState.sign}`
   doc.addImage(imgData, 'JPEG',81,81,8,8)
   doc.text('our doc!', 86, 66)
   doc.addPage()
   doc.addImage(imgData, 'JPEG',81,81,8,8)
   doc.text('our doc!', 80, 60)
   doc.save('a4.pdf')
 }

//  doc.addImage(imgData, 'JPEG',79,59,5,5.7)





 render(){
   return (
       <>
     <div className="App">
       <button onClick={this.handleClick}>download pdf</button>
     </div>
     <pre>
         {JSON.stringify(this.props.reduxState.sign, null, 2)}
     </pre>
     </>
   );
 }
}



const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(PdfMaker)


// var myImage = new Image();.
// myImage .src = 'https://www.myserver.com/somepath/myImage.png';.
// myImage .onload = function(){.
// doc.addImage(myImage , 'png', 5, 5, 40, 10);.
// doc.save('myPDF.pdf');.
// };.


