import React, { createContext, Fragment } from "react";
import axios from "axios";
import { Item } from "./Item.js";
import { ModulDana } from "../modul/ModulDana.js";
import { ResultApi } from "./resultApi.js";

export const rootContext = createContext();
const Provider = rootContext.Provider;

class Product extends React.Component {
  state = {
    totalOrder: 5,
    entities: [],
  };
  handleCounter = (action) => {
    switch (action.type) {
      case "plus":
        this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            this.setState({
                entities : response.data
            })
          });
        break;

      case "minus":
        if (this.state.totalOrder > 0) {
          this.setState({
            totalOrder: this.state.totalOrder - 1,
            entities : []
          });
        } else {
          return this.state.totalOrder;
        }
        break;

      default:
        return this.state.totalOrder;
    }
  };
  render() {
    return (
      <>
        <Provider
          value={{
            state: this.state,
            handleCounter: this.handleCounter,
          }}
        >
          <Item />
          <hr />
          <ModulDana />
          <hr />
          <ResultApi />
        </Provider>
      </>
    );
  }
}

export default Product;

// Redux

// untuk menerima state global

// const  mapStateToProps = (state) => {
//     return {
//         order : state.totalOrder
//     }
// }

// Dispatching

// untuk merubah state global

// const mapDispatchToProps = (dispatch) => {
//     return {
//         minus: () => dispatch({
//             type : Type.ActionType.minus
//         }),
//         plus: () => dispatch({
//             type : Type.ActionType.plus
//         })
//     }
// }

// apabila ingin merubah state global

// export default connect(mapStateToProps,mapDispatchToProps)(Product);

// apabila tidak merubah state global

// export default connect(mapStateToProps)(Product);

// fungsi mapDispatchToProps untuk merubah state global apabila tidak mau merubah state global maka tidak perlu mapDispatchToProps

// fungis mapStateToProps untuk memanggil global state

// connect() syarat untuk menghubungkan compenent ke global state / reducer
