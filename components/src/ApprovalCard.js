import React from "react";
import CommentDetails from './CommentDetail'

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">Are you sure</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">approve</div>
          <div className="ui basic red button">reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
