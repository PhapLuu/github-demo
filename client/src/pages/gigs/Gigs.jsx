import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { Link, useLocation } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useQuery } from "react-query";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery(
    "gigs",
    () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );
  // const reSort = (type) => {
  //   setSort(type)
  //   setOpen(false)
  // }
  const reSort = useCallback(
    (type) => {
      setSort(type);
      setOpen(false);
    },
    [setSort, setOpen]
  );

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        <div className="breadcrumbs">
          <span className="home">
            <Link className="link" to="/">
              <i className="fa-solid fa-house"></i>
            </Link>
          </span>
          <span className="line">/</span>
          <span className="router">GRAPHICS & DESIGN</span>
        </div>
        <h1> AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="number" placeholder="min" ref={minRef} />
            <input type="number" placeholder="max" ref={maxRef} />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy:</span>
            <span className="sortType">
              {sort == "sales" ? "Best Selling" : " Newest"}
            </span>
            <i
              className="fa-solid fa-angle-down"
              onClick={() => setOpen(!open)}
            ></i>
            {open && (
              <div className="rightMenu">
                <span onClick={() => reSort("createdAt")}>Newest</span>
                <span onClick={() => reSort("sales")}>Best Selling</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
