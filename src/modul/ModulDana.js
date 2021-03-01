import React , {useState , useEffect} from 'react';
import { rootContext } from '../product/Product.js';

export function ModulDana() { 
    return (
        <rootContext.Consumer>
            {
                value => {
                    return (
                        <div>
                            <button onClick={() => value.handleCounter({ type : 'plus' })}>Plus</button>
                            <div>Ini ModulDana</div>
                            <div>{value.state.totalOrder}</div>
                            <button onClick={() => value.handleCounter({ type : 'minus' })}>Minus</button>
                        </div>
                    )
                }
            }
        </rootContext.Consumer>
    )
 }