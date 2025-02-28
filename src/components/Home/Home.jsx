import axios from "axios";
import { useEffect, useState } from "react";

import TruncateText from "../TruncateText/TruncateText";
import useStore from "../../store/store";

const Home = () => {
  let { addProductToTheCart } = useStore();
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log("sucesss", res.data.products);

        let filteredProducts = res.data.products.map((item) => {
          return {
            id: item.id,
            title: item.title,
            description: item.description,
            imageUrl: item.images[0],
          };
        });

        setProducts([...products, ...filteredProducts]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in fetcing products....");
      });

    // get - fetching, post -> saving, put --> update, delete
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {products.length > 0 &&
            products.map((item) => (
              <div className="card col-lg-3 mx-4" key={item.id}>
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt="..."
                  width="50px"
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <div className="card-text">
                    <TruncateText description={item.description} />
                  </div>
                  <button className="btn btn-primary" onClick={() => addProductToTheCart(item)}>Add to cart</button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
