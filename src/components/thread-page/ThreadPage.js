import React from "react";
import { ReactComponent as UpArrowIcon } from "../../assets/images/arrow-up-svgrepo-com.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/images/arrow-down-svgrepo-com.svg";
import { ReactComponent as CommentIcon } from "../../assets/images/comment-svgrepo-com.svg";
import { ReactComponent as ShareIcon } from "../../assets/images/share-arrows-svgrepo-com.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/images/bookmark-svgrepo-com.svg";
import { ReactComponent as MoreOptionIcon } from "../../assets/images/three-dots-svgrepo-com.svg";
import { relativeTime } from "../../shared/relativeTime";
import { formatVoteNumber } from "../../shared/formatVoteNumber";
import { useLocation } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./index.css";

function ThreadPage() {
  const { state } = useLocation();
  const item = state.data;

  const translateHTML = (text) => {
    if (text) {
      let fin = text
        .replace("&lt;!-- SC_OFF --&gt;", "")
        .replace("&lt;!-- SC_ON --&gt;", "")
        .replace('class="md"', "");
      let finfin = ReactHtmlParser(fin);
      return finfin[0];
    }
    return "";
  };
  return (
    <div className="d-flex thread-page">
      <div className="vote-section text-center">
        <button className="vote-btn">
          <UpArrowIcon className="vote-icon vote-up"></UpArrowIcon>
        </button>
        <div className="small-text mt-2 mb-2">
          {formatVoteNumber.nFormatter(item.ups, 1)}
        </div>
        <button className="vote-btn">
          <DownArrowIcon className="vote-icon vote-down"></DownArrowIcon>
        </button>
      </div>
      <div className="thread-page__page-content">
        <p className="post-by small-text">
          Posted by <span className="author-name">{item.author_fullname}</span>{" "}
          <span>{relativeTime.relativeTime(item.created)}</span>
        </p>
        <h3 className="thread-title">{item.title}</h3>
        <p className="post-by small-text">
          <span className="tag">{item.link_flair_text}</span>
        </p>
        <div
          className="thread-content normal-text mt-4"
          dangerouslySetInnerHTML={{
            __html: translateHTML(item.selftext_html),
          }}
        ></div>
        <div className="d-flex action-bar">
          <button className="action-btn">
            <CommentIcon className="action-icon"></CommentIcon>{" "}
            <span className="small-text thread-item__action-label">
              {formatVoteNumber.nFormatter(item.num_comments, 1)} Comments
            </span>
          </button>
          <button className="action-btn">
            <ShareIcon className="action-icon"></ShareIcon>{" "}
            <span className="small-text thread-item__action-label">Share</span>
          </button>
          <button className="action-btn">
            <BookmarkIcon className="action-icon"></BookmarkIcon>{" "}
            <span className="small-text thread-item__action-label">Save</span>
          </button>
          <button className="action-btn">
            <MoreOptionIcon className="action-icon"></MoreOptionIcon>
          </button>
          <p className="post-by small-text">
            {item.upvote_ratio * 100}% Upvoted
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThreadPage;
