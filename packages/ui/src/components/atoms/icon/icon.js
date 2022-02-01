import React from "react";
import PropTypes from "prop-types";
import {
  FiMonitor,
  FiImage,
  FiDownload,
  FiCode,
  FiCoffee,
  FiBookmark,
  FiBookOpen,
  FiClipboard,
  FiFileText,
  FiFlag,
  FiFilter,
  FiFilm,
  FiFilePlus,
  FiGift,
  FiKey,
  FiLayers,
  FiMail,
  FiPaperclip,
  FiShield,
  FiShoppingBag,
  FiPrinter,
  FiServer,
  FiUnlock,
  FiUserPlus,
  FiTool,
  FiUsers,
  FiShoppingCart,
  FiTag,
  FiSliders,
  FiPackage,
  FiHardDrive,
  FiDatabase,
  FiDribbble,
  FiBriefcase,
  FiBox,
  FiBook,
  FiAlignJustify,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiArrowDown,
  FiCalendar,
  FiCheckCircle,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronsUp,
  FiCopy,
  FiEdit2,
  FiExternalLink,
  FiEye,
  FiFolder,
  FiHeart,
  FiHome,
  FiLink2,
  FiMenu,
  FiPlus,
  FiSave,
  FiSearch,
  FiSend,
  FiSettings,
  FiTrash2,
  FiCamera,
  FiUser,
  FiX,
  FiXCircle,
  FiMaximize,
  FiFrown as DefaultIcon,
} from "react-icons/fi";
import { MdTimer, MdTimerOff, MdOutlineInventory } from "react-icons/md";
import {
  IoUmbrellaOutline,
  IoTrophyOutline,
  IoReceiptOutline,
  IoWalletOutline,
  IoSchoolOutline,
} from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import classNames from "../../../utils/className";

const IDIcon = () => (
  <span
    className="icon"
    style={{
      fontFamily: " Arial",
      fontSize: "12px",
      lineHeight: "1",
      fontWeight: "bold",
      userSelect: "none",
      padding: "4px 8px",
      borderRadius: "4px",
      backgroundColor: "#f3f3f3",
    }}
  >
    Id
  </span>
);

const DragIcon = () => (
  <>
    <HiOutlineDotsVertical style={{ marginRight: "-0.6em" }} />
    <HiOutlineDotsVertical />
  </>
);

export const iconList = {
  author: FiUserPlus,
  bars: FiMenu,
  bookMark: FiBookmark,
  bookOpen: FiBookOpen,
  box: FiBox,
  brief: FiBriefcase,
  calendar: FiCalendar,
  cancel: FiXCircle,
  caretDown: FiChevronDown,
  caretLeft: FiChevronLeft,
  caretRight: FiChevronRight,
  caretsDown: FiChevronsDown,
  caretsLeft: FiChevronsLeft,
  caretsRight: FiChevronsRight,
  caretsUp: FiChevronsUp,
  caretUp: FiChevronUp,
  check: FiCheckCircle,
  checkout: FiShoppingCart,
  clip: FiPaperclip,
  clipBoard: FiClipboard,
  close: FiX,
  code: FiCode,
  coffee: FiCoffee,
  copy: FiCopy,
  database: FiDatabase,
  dictionary: FiBook,
  donwload: FiDownload,
  downArrow: FiArrowDown,
  drag: DragIcon,
  drivers: FiHardDrive,
  edit: FiEdit2,
  email: FiMail,
  export: FiExternalLink,
  eye: FiEye,
  facebook: FaFacebookF,
  filePlus: FiFilePlus,
  fileText: FiFileText,
  filter: FiFilter,
  flag: FiFlag,
  folder: FiFolder,
  gear: FiSettings,
  gift: FiGift,
  heart: FiHeart,
  home: FiHome,
  image: FiImage,
  info: IDIcon,
  key: FiKey,
  layers: FiLayers,
  leftArrow: FiArrowLeft,
  link: FiLink2,
  menu: FiAlignJustify,
  monitor: FiMonitor,
  package: FiPackage,
  paper: IoReceiptOutline,
  photo: FiCamera,
  plus: FiPlus,
  poll: MdOutlineInventory,
  print: FiPrinter,
  rightArrow: FiArrowRight,
  save: FiSave,
  schedule: MdTimer,
  school: IoSchoolOutline,
  search: FiSearch,
  security: FiShield,
  send: FiSend,
  server: FiServer,
  settings: FiSliders,
  shopping: FiShoppingBag,
  tags: FiTag,
  tool: FiTool,
  tournaments: FiDribbble,
  trash: FiTrash2,
  trophy: IoTrophyOutline,
  umbrella: IoUmbrellaOutline,
  unlock: FiUnlock,
  unschedule: MdTimerOff,
  upArrow: FiArrowUp,
  user: FiUser,
  users: FiUsers,
  videos: FiFilm,
  wallet: IoWalletOutline,
  instagram: FaInstagram,
  twitter: FaTwitter,
  maximize: FiMaximize,
};

const Icon = ({ name, className, ...props }) => {
  const IconComponent = iconList?.[name] ? iconList[name] : DefaultIcon;
  return <IconComponent className={classNames("icon", className)} {...props} />;
};

const iconNames = Object.keys(iconList);

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames),
  className: PropTypes.string,
};

Icon.defaultProps = {
  name: "",
  className: "",
};

export default Icon;
