import {useState , useEffect} from 'react';
import { rootContext } from './Product.js';
import { API } from './fetchApi.js';

export function ResultApi() { 
    
const [data,setData] = useState();

const test = {
    data : 1,
    title : 'berhasil'
}

useEffect(() => {
    API.getApiTest().then(res => {
        setData(res)
    })
}, []);

const postApi = (test) => {
    API.postApiTest(test).then(res => {
        console.log(res);
    })
}

const putApi = (id,data) => {
    API.putApiTest(id,data).then(res => {
        console.log(res);
    })
}

const deleteApi = (id) => {
    API.deleteApiTest(id).then(res => {
        console.log(res)
    })
}
    return (
        <>
        <rootContext.Consumer>
            {value => {
               return(
               <div>{value.state.entities.map((e) => {
                   return (
                       <tr key={e.id}>
                           <td>{e.id}</td>
                           <td>{e.name}</td>
                           <td>{e.username}</td>
                           <td>{e.email}</td>  
                       </tr>
                   )
               })}</div>
               )
            }}
          
        </rootContext.Consumer>
        <button type="button" onClick={() => postApi(test)}>Testing Post</button>
        <button type="button" onClick={() => putApi(1,test)}>Testing PUT</button>
        <button type="button" onClick={() => deleteApi(1)}>Testing DELETE</button>
        <div>
                {JSON.stringify(data)}
            </div>
        </>
    )
 }