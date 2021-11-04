import React from "react";

export const Image = ({ data }) => {
  const { url } = JSON.parse(data);

  return <img src={url} alt="" />;
};
