import {useState , useEffect} from 'react';
import { rootContext } from './Product.js';
import { API } from './fetchApi.js';

export function ResultApi() { 
    
const [data,setData] = useState();

useEffect(() => {
    API.getApiTest().then(res => {
        setData(res)
    })
}, []);
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
        <div>
                {JSON.stringify(data)}
            </div>
        </>
    )
 }