import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

const Home = () => {
  return (
    <>
      <div className="jumbotron row text-white display-3"
        style={{
          background: "#EB3349",
          background: "-webkit-linear-gradient(to right, #F45C43, #EB3349)",
          background: "linear-gradient(to right, #F45C43, #EB3349)",
          paddingLeft: "5%",
          maxWidth: "100vw",
          }}>
        <div className="col-md-6 text-left"><strong>Harbour.</strong></div>
        <div className="col-md-6 text-right">
        <Jumbotron text={["Latest Products", "Best Deals", "Quality Assured"]} />
        </div>
      </div>

      <h4 className="text-center p-3 ml-auto mr-auto mt-5 mb-5 display-4 jumbotron"
        style={{
          backgroundImage: "linear-gradient(90deg, #EB3349 36%, #F45C43 100%)",
          maxWidth:"500px"

        }}>
        <span className="text-white"> New Arrivals</span>
      </h4>
      <NewArrivals />

      <h4 className="text-center ml-auto mr-auto p-3 mt-5 mb-5 display-4 jumbotron"
        style={{
          backgroundImage: "linear-gradient(90deg, #EB3349 36%, #F45C43 100%)",
          maxWidth:"500px"
        }}>
        <span className="text-white"> Best Sellers</span>
      </h4>
      <BestSellers />

      <h4 className="text-center ml-auto mr-auto p-3 mt-5 mb-5 display-4 jumbotron"
        style={{
          backgroundImage: "linear-gradient(90deg, #EB3349 36%, #F45C43 100%)",
          maxWidth:"500px"
        }}>
        <span className="text-white"> Categories</span>
      </h4>
      <CategoryList />

      <h4 className="text-center ml-auto mr-auto p-3 mt-5 mb-5 display-4 jumbotron"
        style={{
          backgroundImage: "linear-gradient(90deg, #EB3349 36%, #F45C43 100%)",
          maxWidth:"500px"
        }}>
         <span className="text-white"> Sub Categories</span>
      </h4>
      <SubList />

      <br />
      <br />
    </>
  );
};

export default Home;
