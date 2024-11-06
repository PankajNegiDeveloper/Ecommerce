import React, { useEffect, useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  let [api, setApi] = useState([]);
  useEffect(() => {
    let data = fetch(`https://fakestoreapi.com/products`);
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
  function click(a){ 
    nav(`/adminportal/view/${a}`)
  }

  return (
    <div>
      <div id="prodheading">
        <h1>Products Details</h1>
      </div>
      <div className="" id="prodcontainer">
        {api &&
          api.map((product) => {
            return (
              <>
                <div className="mainbody">
                  <div className="product">
                    <div id="prodtitle" className="prodsize">
                      <p>
                        <b>Title: </b>
                        {product.title}
                      </p>
                    </div>
                    <div id="prodprice" className="prodsize">
                      <p>
                        <b>Price: </b>
                        {product.price}
                      </p>
                    </div>
                    <div id="prodimg" className="prodsize">
                      <p>
                        <b>Image: </b>
                        <img src={product.image} alt="" className="ApiImage" />
                      </p>
                    </div>
                    <div id="prodbutton" className="prodsize">
                      <button onClick={()=>{
                        click(product.id)
                      }}>View</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
