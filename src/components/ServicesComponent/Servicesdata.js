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
  { id: 1, image: topup, text: "Top Up", link: "" },
  { id: 2, image: cashout, text: "Cash Out", link: "/cashout" },
  { id: 3, image: billpayments, text: "Bill payments", link: "/billpayment" },
  { id: 4, image: transfer, text: "Transfers", link: "/transfer" },
  { id: 5, image: p2g, text: "P2G", link: "" },
  { id: 6, image: qr, text: ">QR/Bar code", link: "/qr" },
  { id: 7, image: shopping, text: "Shopping", link: "/shopping" },
  { id: 8, image: sendmoney, text: "Send money", link: "" },
  { id: 9, image: services, text: "Services", link: "" },
  { id: 10, image: myfavorite, text: ">My Favorite", link: "" },
];

export const dataGroup = [
  {
    id: 1,
    name: "Internet",
  },
  { id: 2, name: "Landline" },
  { id: 3, name: "Electricity" },
  { id: 4, name: "Water" },
  { id: 5, name: "Utility" },
];
