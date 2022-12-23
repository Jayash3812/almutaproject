import topup from "../../assets/icons/topup.png";
import cashout from "../../assets/icons/cashout.png";
import billpayments from "../../assets/icons/billpayments.png";
import transfer from "../../assets/icons/arrowsdownup.png";
import p2g from "../../assets/icons//p2g.png";
import qr from "../../assets/icons//qr.png";
import shopping from "../../assets/icons/shopping.png";
import sendmoney from "../../assets/icons/sendmoney.png";
import services from "../../assets/icons/services.png";
import myfavorite from "../../assets/icons/myfavorite.png";
import home from "../../assets/icons/home_icon.png";
import transfermin from "../../assets/icons/arrowtransfer.png";
import wallet from "../../assets/icons/wallet.png";
import flowers from "../../assets/fiesta_flowers.png";
import biodent from "../../assets/biodent.png";
import pizza from "../../assets/pizza.png";
import coffeshop from "../../assets/coffeshop.png";
import logo_acc from "../../assets/logo_account.png";

export const data = [
  {
    id: 1,
    image: topup,
    text: "Top Up",
    link: "",
    value: "1",
    category: "topup",
  },
  {
    id: 2,
    image: cashout,
    text: "Cash Out",
    // link: "/cashout",
    value: "2",
    category: "cashout",
  },
  {
    id: 3,
    image: billpayments,
    text: "Bill payments",
    // link: "/billpayment",
    value: "3",
    category: "billpayments",
  },
  {
    id: 4,
    image: transfer,
    text: "Transfers",
    // link: "/transfer",
    value: "4",
    category: "transfer",
  },
  { id: 5, image: p2g, text: "P2G", link: "", value: "5", category: "p2g" },
  {
    id: 6,
    image: qr,
    text: "QR/Bar code",
    // link: "/qr",
    value: "6",
    category: "qr",
  },
  {
    id: 7,
    image: shopping,
    text: "Shopping",
    // link: "/shopping",
    value: "7",
    category: "shopping",
  },
  {
    id: 8,
    image: sendmoney,
    text: "Send money",
    // link: "",
    value: "8",
    category: "shopping",
  },
  {
    id: 9,
    image: services,
    text: "Services",
    // link: "",
    value: "9",
    category: "services",
  },
  {
    id: 10,
    image: myfavorite,
    text: "My Favorite",
    // link: "",
    value: "10",
    category: "myfavorite",
  },
];

export const dataGroupItems = [
  {
    id: 1,
    pic: home,
    name: "Internet",
    category: "billpayments",
  },
  { id: 2, pic: home, name: "Landline", category: "billpayments", link: "" },
  { id: 3, pic: home, name: "Electricity", category: "billpayments", link: "" },
  { id: 4, pic: home, name: "Water", category: "billpayments", link: "" },
  { id: 5, pic: home, name: "Utility", category: "billpayments", link: "" },
  {
    id: 6,
    pic: transfermin,
    name: "Self Transfer",
    category: "transfer",
    link: "",
  },
  {
    id: 7,
    pic: transfermin,
    name: "Lockal transfer",
    category: "transfer",
    link: "",
  },
  {
    id: 8,
    pic: transfermin,
    name: "International transfer",
    category: "transfer",
    link: "",
  },
  {
    id: 9,
    pic: transfermin,
    name: "Transfer to bank Account",
    category: "transfer",
    link: "",
  },
  {
    id: 10,
    pic: transfermin,
    name: "Transfer to other Wallet",
    category: "transfer",
    link: "/transfer/wallet",
  },
  {
    id: 11,
    pic: wallet,
    name: "Cash out by agent",
    category: "cashout",
    link: "",
  },
  {
    id: 12,
    pic: wallet,
    name: "Cash out from ATM",
    category: "cashout",
    link: "",
  },
];

export const pictureItems = [
  {
    id: 1,
    picture: flowers,
    title: "Fiesta Flowers",
  },
  { id: 2, picture: coffeshop, title: "Coffe shop" },
  { id: 3, picture: biodent, title: "Biodent" },
  { id: 4, picture: pizza, title: "NY Pizza" },
];

export const dataAccounts = [
  {
    id: 1,
    name: "YER Account",
    balance: "112,450.23",
    currency: "YER",
    pic: logo_acc,
  },
  {
    id: 2,
    name: "YER Account",
    balance: "112,450.23",
    currency: "YER",
    pic: logo_acc,
  },
  {
    id: 3,
    name: "YER Account",
    balance: "112,450.23",
    currency: "YER",
    pic: logo_acc,
  },
];
