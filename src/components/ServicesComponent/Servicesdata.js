import topup from "../../assets/icons/topup.png";
import cashout from "../../assets/icons/cashout.png";
import billpayments from "../../assets/icons/billpayments.png";
import transfer from "../../assets/icons/arrowsdownup.png";
import p2g from "../../assets/icons/p2g.png";
import qr from "../../assets/icons/qr.png";
import shopping from "../../assets/icons/shopping.png";
import sendmoney from "../../assets/icons/sendmoney.png";
import services from "../../assets/icons/services.png";
import myfavorite from "../../assets/icons/myfavorite.png";

export const data = [
  { id: 1, image: topup, text: "Top Up", link: "", value: "1" },
  { id: 2, image: cashout, text: "Cash Out", link: "/cashout", value: "2" },
  {
    id: 3,
    image: billpayments,
    text: "Bill payments",
    link: "/billpayment",
    value: "3",
  },
  { id: 4, image: transfer, text: "Transfers", link: "/transfer", value: "4" },
  { id: 5, image: p2g, text: "P2G", link: "", value: "5" },
  { id: 6, image: qr, text: ">QR/Bar code", link: "/qr", value: "6" },
  { id: 7, image: shopping, text: "Shopping", link: "/shopping", value: "7" },
  { id: 8, image: sendmoney, text: "Send money", link: "", value: "8" },
  { id: 9, image: services, text: "Services", link: "", value: "9" },
  { id: 10, image: myfavorite, text: ">My Favorite", link: "", value: "10" },
];

export const dataGroupItems = [
  {
    id: 1,
    name: "Internet",
    category: "",
  },
  { id: 2, name: "Landline", category: "" },
  { id: 3, name: "Electricity", category: "" },
  { id: 4, name: "Water", category: "" },
  { id: 5, name: "Utility", category: "" },
];
