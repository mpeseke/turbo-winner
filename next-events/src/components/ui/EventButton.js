import { ButtonBase } from "@mui/material";
import Link from "next/link";
import { ArrowRightIcon } from "../icons/icons";

export default function EventButton(props) {
  return (
    <Link href={props.link} passHref>
      <ButtonBase
        component="button"
        className="flex w-full justify-center rounded-md bg-indigo-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <span>Explore Event</span>
        <span>
          <ArrowRightIcon />
        </span>
      </ButtonBase>
    </Link>
  );
}
