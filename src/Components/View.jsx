import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = () => {
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

  let nav = useNavigate();
  function back(){
    nav(`/adminportal/products`);
  }

  function cart (){
    nav(`/adminportal/cart/${m.id}`);
  }

  return (
    <div>
      <div id="Viewheading">
        <h1>Product Details</h1>
      </div>
      <p>
        <b>Id: </b>
        {api.id}
      </p>
      <p>
        <b>Title: </b>
        {api.title}
      </p>
      <p>
        <b>Price:</b>
        {api.price}
      </p>
      <p>
        <b>Description:</b>
        {api.description}
      </p>
      <p>
        <b>Category: </b>
        {api.category}
      </p>
      <button onClick={back}>Back</button>
      <button onClick={cart}>Add to Cart</button>
    </div>
  );
};

export default View;
