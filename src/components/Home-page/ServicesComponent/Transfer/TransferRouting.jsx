import React from "react";
import { Route, Routes } from "react-router";
import TransferToWallet from "./TransferToWallet";

const TransferRouting = () => {
  return (
    <Routes>
      <Route path="/transfer/wallet" element={<TransferToWallet />} />
    </Routes>
  );
};

export default TransferRouting;
