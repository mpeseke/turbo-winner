"use client";
import Image from "next/image";
import classes from "./EventItem.module.css";
import EventButton from "../ui/EventButton";
import { AddressIcon, DateIcon } from "../icons/icons";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li
      className={
        classes.item + " flex justify-between items-center gap-x-6 p-2 m-2"
      }
    >
      <Image src={`/${image}`} alt={title} width={"100"} height={"100"} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div className="flex">
          <DateIcon />
          <time>{readableDate}</time>
        </div>
        <div className="flex">
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <EventButton link={exploreLink} />
      </div>
    </li>
  );
}
