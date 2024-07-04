import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContextProvider";

const TodoAdd = () => {
  const { dispatch } = useContext(TodoContext);
  const [content, setContent] = useState("");

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    if (content.trim() === "") {
      alert("할 일을 입력하세요.");
      return;
    }
    dispatch({
      type: "ADD_TODO",
      payload: { content, isCompleted: false },
    });
    setContent(""); // 입력 필드를 초기화합니다.
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleClick}>할일추가</button>
    </div>
  );
};

export default TodoAdd;
