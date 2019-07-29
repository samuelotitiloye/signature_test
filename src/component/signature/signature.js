import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import SignatureCanvas, {canvas} from 'react-signature-canvas';
// var signaturePad = new SignaturePad(canvas, {
//     backgroundColor: 'rgb(255,255,255)'
//  });



class Signature extends Component {



    state = {
        trimmedDataURL: null
    }

    sigPad = {}


    clearSig = () => {
        this.sigPad.clear();
        console.log('on click:', this.state.trimmedDataURL)
    }

    trim = () => {
        this.setState({
            trimmedDataURL: this.sigPad.getTrimmedCanvas()
                .toDataURL('image/PNG')
        })
    }

    handleClickToSaveSignature = () => {
        console.log('can we go ahead and save this signature please?')
        this.props.dispatch({ type: 'POST_SIGNATURE', payload: this.state.trimmedDataURL })
    }

    render() {
        const { trimmedDataURL } = this.state;
        return (
            <>
                This is not a page, This is our signature
                <div className="sig-canvas">
                    <SignatureCanvas penColor='black' canvasProps={{ width: 500, height: 150, className: 'sigCanvas' }} ref={(ref) => { this.sigPad = ref }} />
                </div>
                <div>
                    <button onClick={this.clearSig}>Cancel</button>
                    <button onClick={this.clearSig}>Clear</button>
                    <button onClick={this.handleClickToSaveSignature}>Confirm</button>
                    <button onClick={this.trim}>Trim</button>
                </div>
                {trimmedDataURL
                    ? <img
                        src={trimmedDataURL} alt=""/>
                    : null}
            </>
        )
    }
}



const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(Signature);

