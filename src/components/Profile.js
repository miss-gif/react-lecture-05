import React from "react";
import useAuth from "../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { deleteUser } from "firebase/auth";

const Profile = () => {
  const userObject = useAuth();

  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate("/edit-profile");
  };
  const handleClickDeleteUser = async () => {
    // console.log(userObject.userCurrent);

    // 탈퇴여부 확인
    const flag = window.confirm(
      "정말로 회원탈퇴 하시겠습니까? \n이 작업은 되돌리수 없습니다.",
    );

    if (flag) {
      try {
        // 1. db 문서 삭제
        const userDocRef = doc(db, "users", userObject.userCurrent.uid);
        await deleteDoc(userDocRef);
        // 2. image 파일 삭제
        if (userObject.userData.imageUrl) {
          const imageRef = ref(
            storage,
            `users/${userObject.userCurrent.uid}/profile.png`,
          );
          await deleteObject(imageRef);
        }
        // 3. 사용자 삭제
        await deleteUser(userObject.userCurrent);
        // 4. 안내창
        alert("회원탈퇴가 완료되었습니다.");
        // 5. 패스이동("/")
        navigate("/");
      } catch (error) {
        console.log("회원탈퇴 실패 : ", error);
        alert("회원탈퇴에 실패하였습니다. 다시 시도해 주세요.");
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">프로필</h1>
      {userObject.userData && (
        <div className="flex flex-col items-center">
          {userObject.userData.imageUrl ? (
            <img
              src={userObject.userData.imageUrl}
              alt="Profile Image"
              className="w-32 h-32 rounded-full mr-2"
            />
          ) : (
            <FaUserCircle className="w-32 h-32 text-gray-500 mr-2" />
          )}
          <p className="text-lg mb-2">이름: {userObject.userData.name}</p>
          <p className="text-lg mb-4">이메일: {userObject.userData.email}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => {
                handleClickEdit();
              }}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              프로필 수정
            </button>
            <button
              onClick={() => {
                handleClickDeleteUser();
              }}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              회원탈퇴
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
