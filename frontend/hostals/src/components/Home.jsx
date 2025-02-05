import React from "react"
import Cats from "./menu/Cats";
import FilterResults from "./filter_results/FilterResults";
import { useState } from "react";
const Home = (props) => {
  const [catogory, setcatogory] = useState(null);
  const handlecatogory = (cat) => {
    setcatogory(cat);
    // alert(cat);
  };
  return (
   <>
   <Cats catselect = {handlecatogory}/>
<FilterResults selectedcat = {catogory}/>
   </>
  )
};

export default Home;
