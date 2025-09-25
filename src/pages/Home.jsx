import React, { useEffect } from "react";
import Herosection from "../components/Herosection";
import Cardsection from "../components/Cardsection";
import Product from "../components/Product";
import Exclusive from "../components/Exclusive";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
 let count = useSelector(state => state.counterReducer.count)
    useSelector(function (state) { return state })
        console.log(count);
    let navigate = useNavigate()
    useEffect(() => {
        getDashboard()
    }, [])
    let token = localStorage.token
    let url = "https://class-work1.onrender.com/user/dashboard"
    const getDashboard = () => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((res) => {
                if (!res.data.status) {
                    localStorage.removeItem(token)
                    navigate("/signin")
                     }
                else {
                    // console.log(res);

                }
            })
            .catch((err) => {
                console.error("Error:", err.response ? err.response.data : err);
            })
    }
    const logOut = () => {
        localStorage.removeItem(token)
        navigate("/signin")
    }

  return (
    <>
      <Herosection />
      <Cardsection />
      <Product />
      <Exclusive />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
