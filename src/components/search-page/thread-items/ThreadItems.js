import React, { useState, useEffect } from "react";
import { ReactComponent as UpArrowIcon } from "../../../assets/images/arrow-up-svgrepo-com.svg";
import { ReactComponent as DownArrowIcon } from "../../../assets/images/arrow-down-svgrepo-com.svg";
import { ReactComponent as CommentIcon } from "../../../assets/images/comment-svgrepo-com.svg";
import { ReactComponent as ShareIcon } from "../../../assets/images/share-arrows-svgrepo-com.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/images/bookmark-svgrepo-com.svg";
import { ReactComponent as MoreOptionIcon } from "../../../assets/images/three-dots-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { relativeTime } from "../../../shared/relativeTime";
import { formatVoteNumber } from "../../../shared/formatVoteNumber";
import { useSelector } from "react-redux";
import { EventBus } from "../../../shared/EventBus";
import "./index.css";

function ThreadItem() {
  const navigate = useNavigate();
  const [subredList, setSubredList] = useState([]);
  const subredditsList = useSelector(
    (state) => state.subreddits.subredditsList
  );
  useEffect(() => {
    setSubredList(subredditsList);
  }, [subredditsList]);
  return (
    <InfiniteScroll
      dataLength={subredList.length}
      next={() => EventBus.$emit("fetch-data")}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p className="text-center normal-text">
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {subredList.length ? (
        subredList.map((item) => (
          <div
            onClick={() => navigate("/thread", { state: item })}
            className="thread-item d-flex"
            key={item.data.id}
          >
            <div className="vote-section text-center">
              <button className="vote-btn">
                <UpArrowIcon className="vote-icon vote-up"></UpArrowIcon>
              </button>
              <div className="small-text mt-2 mb-2">
                {formatVoteNumber.nFormatter(item.data.ups, 1)}
              </div>
              <button className="vote-btn">
                <DownArrowIcon className="vote-icon vote-down"></DownArrowIcon>
              </button>
            </div>
            <div className="thread-content-section">
              <p className="post-by small-text">
                Posted by{" "}
                <span className="author-name">{item.data.author_fullname}</span>{" "}
                <span>{relativeTime.relativeTime(item.data.created)}</span>
              </p>
              <h3 className="thread-title">{item.data.title}</h3>
              <div className="d-flex action-bar">
                <button className="action-btn">
                  <CommentIcon className="action-icon"></CommentIcon>{" "}
                  <span className="small-text thread-item__action-label">
                    {formatVoteNumber.nFormatter(item.data.num_comments, 1)}{" "}
                    Comments
                  </span>
                </button>
                <button className="action-btn">
                  <ShareIcon className="action-icon"></ShareIcon>{" "}
                  <span className="small-text thread-item__action-label">
                    Share
                  </span>
                </button>
                <button className="action-btn">
                  <BookmarkIcon className="action-icon"></BookmarkIcon>{" "}
                  <span className="small-text thread-item__action-label">
                    Save
                  </span>
                </button>
                <button className="action-btn">
                  <MoreOptionIcon className="action-icon"></MoreOptionIcon>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <p className="large-text">No thread to show</p>
        </div>
      )}
    </InfiniteScroll>
  );
}

export default ThreadItem;
