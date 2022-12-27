import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { dataAccounts } from "../Servicesdata";
import "../Accounts/accounts.css";
import eye from "../../../assets/eye.png";
// import VisibilityIcon from "@mui/icons-material/Visibility";

const Accounts = () => {
  return (
    <Container maxWidth="1730px">
      <Grid
        container
        direction="row"
        spacing={1}
        backgroundColor="#e5e5e5"
        sx={{ padding: { lg: "40px", md: "40px", sm: "20px", xs: "10px" } }}
      >
        {dataAccounts.map((item) => (
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="accounts_card">
              <div className="accounts_title">
                <p>{item.name}</p>
                <img src={item.pic} alt="" />
              </div>
              <p style={{ color: "#E4EDFB", fontWeight: "500" }}>Balance:</p>
              <div className="accounts_balance">
                <p className="accounts_balance__name">
                  <span>{item.balance}</span>
                  <span> {item.currency}</span>
                </p>
                <div className="accounts__btn1">
                  <img src={eye} alt="" />
                </div>

                <div className="accounts__btn2">
                  <button>+</button>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Accounts;
