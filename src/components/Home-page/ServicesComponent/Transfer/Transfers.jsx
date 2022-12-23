import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransferToWallet from "./TransferToWallet";

export const Transfers = () => {
  return (
    <Routes>
      <Route path="/transfer/wallet" element={<TransferToWallet />} />
    </Routes>
  );
};
