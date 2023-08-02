import React, { useEffect, useState } from "react";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";
import classes from "./search.module.css";
// import axios from "../../../axios";
// import { useHistory } from "react-router-dom";

const Search = () => {
  // const history = useHistory();
  const [search, setsearch] = useState("");
  const [suggestions, setsuggestions] = useState();

  useEffect(() => {
    //   const fetchData = async () => {
    //     if (search.length > 0 && search.trim().length > 0) {
    //       try {
    //         let suggestData = (
    //           await axios.get(`/products/suggest?search=${search}`)
    //         ).data;
    //         setsuggestions([...suggestData]);
    //       } catch (e) {}
    //     } else {
    //       setsuggestions([]);
    //     }
    //   };
    //   fetchData();
  }, [search]);

  const handlesearch = (pattern) => {
    // let searchpattern = pattern ? pattern : search.length > 0 ? search : null;
    // if (searchpattern && search.trim().length > 0) {
    //   history.push({
    //     pathname: "/searchresultes",
    //     state: {
    //       pattern: searchpattern,
    //     },
    //   });
    //   setsearch("");
    // }
  };
  return (
    <div className={classes.searchContainer}>
      <div className={classes.Search}>
        <SearchOutlined
          className={classes.searchIcon}
          onClick={() => handlesearch()}
        />
        <input
          value={search}
          type="text"
          onChange={(e) => setsearch(e.target.value)}
          placeholder=" ابحث هنا عن المنتجات"
        />
        {search.length > 0 && (
          <ClearOutlined
            className={classes.clearIcon}
            onClick={() => setsearch("")}
          />
        )}
        <div className={classes.suggestions}>
          {suggestions &&
            suggestions.map((s, i) => (
              <p onClick={() => handlesearch(s.name)} key={i}>
                {s.name}
              </p>
            ))}
        </div>
      </div>
      <button onClick={() => handlesearch()}> البحث</button>
    </div>
  );
};

export default Search;
