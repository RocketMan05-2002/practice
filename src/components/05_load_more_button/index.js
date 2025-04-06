import { useEffect, useState } from "react";
import './load.css'

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [ disableButton,setDisabelButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);
      if(data && data.products && data.products.length){
        setProducts((prevData)=>[...prevData,...data.products]);
        setLoading(false);
      }
    } catch (e) {
        setLoading(false);
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(()=>{
    if(products&&products.length===100) setDisabelButton(true);
  },[products])

  if(loading) <div>Loading data...please wait</div>

  return <div className="load-more-container">
    <div className="product-container">
        {
            products && products.length ? 
            products.map(item=><div key={item.id} className="product-item">
                <img  
                src={item.thumbnail}
                alt={item.title}
                />
                <p>{item.title}</p>
            </div>)
            :null
        }
    </div>
    <div className="button-container">
        <button onClick={()=>setCount(count+1)} disabled={disableButton}>Load More Prodcuts</button>
    </div>
  </div>;
}
