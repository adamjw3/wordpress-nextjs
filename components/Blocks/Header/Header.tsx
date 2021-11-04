import React from "react";

export const Header = ({ data }) => {
  const { content, level } = JSON.parse(data);

  switch (level) {
    case 1:
      return <h1 dangerouslySetInnerHTML={{ __html: content }} />;
    case 2:
      return <h2 dangerouslySetInnerHTML={{ __html: content }} />;
    case 3:
      return <h3 dangerouslySetInnerHTML={{ __html: content }} />;
    case 4:
      return <h4 dangerouslySetInnerHTML={{ __html: content }} />;
    case 5:
      return <h5 dangerouslySetInnerHTML={{ __html: content }} />;
    case 6:
      return <h6 dangerouslySetInnerHTML={{ __html: content }} />;
  }
};
