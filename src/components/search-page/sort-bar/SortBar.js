import React, { useEffect, useState } from "react";
import { ReactComponent as FireIcon } from "../../../assets/images/fire-svgrepo-com.svg";
import { ReactComponent as SunIcon } from "../../../assets/images/sun-svgrepo-com.svg";
import { ReactComponent as RankIcon } from "../../../assets/images/ranking-rank-svgrepo-com.svg";
import { ReactComponent as MoreOptionIcon } from "../../../assets/images/three-dots-svgrepo-com.svg";
import "./index.css";
import { useDispatch } from "react-redux";
import { EventBus } from "../../../shared/EventBus";
import {
  fetchHotList,
  fetchNewList,
  fetchTopList,
} from "../../../reducer/subredditsListReducer";

function SortBar() {
  const [sortState, setSortState] = useState(0);
  const [itemInterval, setItemInterval] = useState(25);
  const dispatch = useDispatch();
  useEffect(() => {
    EventBus.$on("fetch-data", () => {
      if (itemInterval > 100) return;
      const nextInterval = itemInterval + 25;
      setItemInterval(nextInterval);
    });
  }, []);
  useEffect(() => {
    fetchDataBySortType(itemInterval);
  }, [itemInterval]);
  useEffect(() => {
    const resetInterval = 25;
    setItemInterval(resetInterval);
  }, [sortState]);
  const fetchDataBySortType = (interval) => {
    const params = {
      limit: interval,
    };
    switch (sortState) {
      case 0:
        dispatch(fetchHotList(params));
        break;
      case 1:
        dispatch(fetchNewList(params));
        break;
      case 2:
        dispatch(fetchTopList(params));
        break;
      default:
        dispatch(fetchHotList(params));
        break;
    }
  };
  return (
    <div className="sort-bar d-flex">
      <button
        onClick={() => setSortState(0)}
        className={`sort-bar__sort-btn ${sortState === 0 ? "active" : ""}`}
      >
        <FireIcon className="sort-bar__sort-icon"></FireIcon>
        <span className="sort-bar__btn-label large-text">Hot</span>
      </button>
      <button
        onClick={() => setSortState(1)}
        className={`sort-bar__sort-btn ${sortState === 1 ? "active" : ""}`}
      >
        <SunIcon className="sort-bar__sort-icon"></SunIcon>
        <span className="sort-bar__btn-label large-text">New</span>
      </button>
      <button
        onClick={() => setSortState(2)}
        className={`sort-bar__sort-btn ${sortState === 2 ? "active" : ""}`}
      >
        <RankIcon className="sort-bar__sort-icon"></RankIcon>
        <span className="sort-bar__btn-label large-text">Top</span>
      </button>
      <button className="sort-bar__sort-btn">
        <MoreOptionIcon className="sort-bar__sort-icon"></MoreOptionIcon>
      </button>
    </div>
  );
}

export default SortBar;
