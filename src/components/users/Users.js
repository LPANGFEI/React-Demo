import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

// 无状态组件
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      // 调用样式，在外部定义
      <div style={userStyle}>
        {/* 组件遍历 */}
        {users.map(user => (
          // 嵌套组件
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

// 定义样式
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
