import React from "react";

export const Paragraph = ({ data }) => {
  const { content } = JSON.parse(data);

  return <p dangerouslySetInnerHTML={{ __html: content }}></p>;
};
