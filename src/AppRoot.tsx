/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { getTodo } from "./apis/todos/apistodos";
import { getPhoto, getPhotos } from "./apis/photos/apisphotos";
import { ITodo } from "./types/todotype";
import { IPhoto } from "./types/phototype";

const AppRoot = () => {
  const getTodoOne = async () => {
    const result: ITodo = await getTodo(3);
    console.log(result);
  };

  const getPhotoOne = async () => {
    const result: IPhoto = await getPhoto(3);
    console.log(result);
  };
  const getPhotoAll = async () => {
    const result: IPhoto[] = await getPhotos();
  };

  useEffect(() => {
    getTodoOne();
  }, []);
  return <div></div>;
};

export default AppRoot;
