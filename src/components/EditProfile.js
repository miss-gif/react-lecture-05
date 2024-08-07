import React from "react";

const EditProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">프로필 수정</h1>
      <div className="p-4 bg-white shadow-md rounded w-80">
        <div className="mb-2">
          <label className="block text-gray-700">이름</label>
          <input
            type="text"
            placeholder="이름"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">이메일</label>
          <input
            type="email"
            placeholder="이메일"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">프로필 이미지</label>
          <div className="flex items-center mt-1">
            <label className="cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              파일선택
              <input type="file" className="hidden" />
            </label>
            <img src="" className="ml-4 w-16 h-16 object-cover rounded-full" />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">새 비밀번호</label>
          <input
            type="password"
            placeholder="새 비밀번호"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex space-x-2">
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
            수정
          </button>
          <button className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
