import axios from 'axios';
import React, { useEffect } from 'react';
import LayoutLec from "../components/LayoutLec";

const HomeLec = () => {
  const getData = async () => {
    try {
      const response = await axios.post("/api/user/get-user-info-by-id", {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [])
  return (
  <LayoutLec><h1>HomeLec</h1></LayoutLec>
  );
};

export default HomeLec;