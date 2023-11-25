import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export const options = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    info: "sewornurichard69@gmail.com",
    link: "mailto:sewornurichard69@gmail.com",
  },
  {
    id: 2,
    icon: <BsWhatsapp />,
    info: "+233 54 497 0431",
    link: "https://api.whatsapp.com/send?phone=+233544970431&text=Hello",
  },
  {
    id: 3,
    icon: <RiMessengerLine />,
    info: "richiesmuse",
    link: "https://m.me/richies.muse",
  },
];
