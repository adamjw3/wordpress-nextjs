import React from "react";
import { Image, Paragraph, Header } from "../../components/Blocks";

interface Item {
  attributesJSON: string;
  name: string;
  order: number;
}

export const useBlocks = (blocks) => {
  const items = blocks.map((item: Item) => {
    switch (item.name) {
      case "core/image":
        return <Image key={item.order} data={item.attributesJSON} />;
      case "core/paragraph":
        return <Paragraph key={item.order} data={item.attributesJSON} />;
      case "core/heading":
        return <Header key={item.order} data={item.attributesJSON} />;
      default:
        return null;
    }
  });

  return items;
};
