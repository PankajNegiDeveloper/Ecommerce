import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  let [api, setApi] = useState([]);

  let m = useParams();
  console.log(m);

  useEffect(() => {
    let data = fetch(`https://fakestoreapi.com/products/${m.id}`);
    console.log(data);

    let ans = data.then((x) => {
      console.log(x);
      return x.json();
    });
    console.log(ans);

    ans.then((y) => {
      console.log(y);
      setApi(y);
    });
  }, []);

  function click(a) {
    let z = window.confirm("Do want to remove");
    if (z) {
        setApi([]);
      }
     else {
      alert("Product not deleted");
    }
  }

  return (
    <div>
      <h1>Cart Info</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Product Image</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{api.title}</td>
            <td>
              <img src={api.image} alt="" />
            </td>
            <td>{api.price}</td>
            <td>
              <button id="Cartbutton" onClick={()=>{
                click(api.id)
              }}>
                REMOVE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
