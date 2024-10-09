import React from "react";
import Banner from "./Banner";
import Item from "./Item";
import { BiCode, BiCollection } from "react-icons/bi";
import {
  BsBootstrap,
  BsCardHeading,
  BsCloudDownload,
  BsPatchCheck,
} from "react-icons/bs";

const dataItem = [
  {
    icon: <BiCollection />,
    title: "Fresh new layout",
    desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
  },
  {
    icon: <BsCloudDownload />,
    title: "Free to download",
    desc: "As always, Start Bootstrap has a powerful collectin of free templates.",
  },
  {
    icon: <BsCardHeading />,
    title: "Jumbotron hero header",
    desc: "The heroic part of this template is the jumbotron hero header!",
  },
  {
    icon: <BsBootstrap />,
    title: "Feature boxes",
    desc: "We've created some custom feature boxes using Bootstrap icons!",
  },
  {
    icon: <BiCode />,
    title: "Simple clean code",
    desc: "We keep our dependencies up to date and squash bugs as they come!",
  },
  {
    icon: <BsPatchCheck />,
    title: "A name you trust",
    desc: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
  },
];
const Body = () => {
  return (
    <div>
      <Banner />
      <div className="container px-3 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 mb-12">
        {dataItem.map((item, index) => {
          return (
            <Item
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
