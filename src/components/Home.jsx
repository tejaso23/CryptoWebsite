import React, { useEffect, useState } from "react";
import Coin from "./Product";
import axios from "axios";
import Loader from "./Loader";
const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  /* const [temp,settemp] = useState(0);
  const [temp1,settemp1] = useState(0);
  const [temp2,settemp2] = useState(0);*/

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const { data } =
          await /*axios.get("https://api.coingecko.com/api/v3/coins/list")*/

          axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=120"
          );

        setCoins(data);

        setLoading(false);
      } catch (error) {
        alert("Not working");
      }
    };
    fetchAllCoins();
  }, []);

  return (
    <>
      <div className="home">
        {loading ? (
          <Loader></Loader>
        ) : (
          coins.map((i) => (
            <Coin
              name={i.name}
              symbol={i.symbol}
              key={i.id}
              imgSrc={i.image}
              price={i.current_price}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
