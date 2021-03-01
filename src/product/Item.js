import React , {useState} from 'react';

export function Item() { 
    const [dataSatu,setDataSatu] = useState();
    const [dataDua,setDataDua] = useState();

    // CALLBACK 

    // const satu = (callBack) => {
    //     setTimeout(() => {  
    //         callBack('nama saya sechan')
    //     },3000)
    // }

    // const dua = (callBack2) => {
    //     setTimeout(() => {
    //         callBack2('saya programmer')
    //     },3000)
    // }

    // const test = () => {
    //     satu((res) => {
    //         setDataSatu(res);
    //     })
    //     dua((res) => {
    //         setDataDua(res);
    //     })
    // }

    // CALLBACK GROUP

    // const satu = (callBack) => {
    //     setTimeout(() => {  
    //         callBack('nama saya sechan')
    //     },3000)
    // }

    // const dua = (callBack2) => {
    //     setTimeout(() => {
    //         callBack2('saya programmer')
    //     },3000)
    // }

    // const test = () => {
    //     satu((res) => {
    //         dua((rej) => {
    //             setDataSatu(res + rej);
    //         })
    //     })
    // }

    // PROMISE

    // const satu = () => {
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {  
    //            resolve('Saya Sechan')
    //         },3000)
    //     })
    // }

    // const dua = (param) => {
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve(param + 'saya programmer')
    //         },3000)
    //     })
    // }

    // const test = () => {
    //     satu().then((res) => {
    //       return dua(res);
    //     }).then((rej) => {
    //         setDataSatu(rej);
    //     })
    // }

    // PROMISE GROUP

    //  const satu = () => {
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {  
    //            resolve('Saya Sechan')
    //         },3000)
    //     })
    // }

    // const dua = () => {
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('saya programmer')
    //         },3000)
    //     })
    // }

    // const test = () => {
    //     Promise.all([satu(),dua()]).then(([res1,res2]) => {
    //        setDataSatu(res1 + res2);
    //    })
    // }

    // ASYNC AND AWAIT note : [ async wajib memakai promise atau callback ]

     const satu = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {  
               resolve('Saya Sechan')
            },3000)
        })
    }

    const dua = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('saya programmer')
            },3000)
        })
    }

    const test = async () => {
       const getSatu = await satu();
       const getDua = await dua();
       const mergeAll = getSatu + getDua;
       setDataSatu(mergeAll);
    }

    
    return (
        <>
        <div>Ini Item</div>
        <button onClick={test}>Testing Callback</button>
    <div>{dataSatu}</div>
    <div>{dataDua}</div>
    </>
    )
 }