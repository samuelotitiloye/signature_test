import axios from 'axios';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';


// this saga sends/posts the signature to the database as base64 file
function* sendSignatureToDatabase(action){
    console.log('we made it, now we here');
    try {
        yield axios.post('/api/signature', [action.payload])
        //then run below code to retrieve the signature from db to bed place on our document
       const returnedSignature = yield axios.get('/api/signature')
       yield put ({type:'SET_SIGNATURE', payload:returnedSignature.data.sign})
    //    console.log(returnedSignature.data);
    } catch (error) {
        console.log('ERROR making the POST request to the database', error);
    }
}





// our combined sagas will live here.
//POST_SIGNATURE is our action dispatched from signature.js on the onClick to save signature
function* rootSaga(){
    yield takeLatest('POST_SIGNATURE', sendSignatureToDatabase); // 
}


export default rootSaga;