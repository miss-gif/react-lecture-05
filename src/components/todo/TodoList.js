import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContextProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [editId, setEditId] = useState(null);
  const [newContent, setNewContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  const handleDelete = id => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    });
  };

  const handleEdit = id => {
    setEditId(id);
    const todo = state.find(todo => todo.id === id);
    if (todo) {
      setNewContent(todo.content);
    }
  };

  const handleSave = id => {
    dispatch({
      type: "MODIFY_TODO",
      payload: { id, content: newContent },
    });
    setEditId(null);
    setNewContent("");
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      handleSave(id);
    }
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = state.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(state.length / todosPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => (
    <button
      key={number}
      onClick={() => handlePageChange(number)}
      disabled={number === currentPage}
    >
      {number}
    </button>
  ));

  return (
    <div>
      <h1>오늘할일</h1>
      {currentTodos.length === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        currentTodos.map((item, index) => (
          <div key={index}>
            {editId === item.id ? (
              <div>
                <input
                  type="text"
                  value={newContent}
                  onChange={e => setNewContent(e.target.value)}
                  onKeyPress={e => handleKeyPress(e, item.id)}
                />
                <button onClick={() => handleSave(item.id)}>저장</button>
                <button onClick={() => setEditId(null)}>취소</button>
              </div>
            ) : (
              <div>
                <p>
                  글번호: {item.id}
                  글제목: {item.content}
                </p>
                <button onClick={() => handleEdit(item.id)}>수정</button>
                <button onClick={() => handleDelete(item.id)}>삭제</button>
              </div>
            )}
          </div>
        ))
      )}
      {state.length > 0 && totalPages > 1 && (
        <div>
          {currentPage !== 1 && <button onClick={handlePrevPage}>이전</button>}
          {renderPageNumbers}
          {currentPage !== totalPages && (
            <button onClick={handleNextPage}>다음</button>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
