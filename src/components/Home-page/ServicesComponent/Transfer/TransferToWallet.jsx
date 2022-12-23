import { Select, Grid, MenuItem, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Accounts from "../../Accounts/Accounts";
// import { makeStyles, withStyles } from "tss-react/mui";

const TransferToWallet = () => {
  const [account, setAccount] = useState("");
  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  //   const useStyles = makeStyles({
  //     input: {
  //       "& input[type=number]": {
  //         "-moz-appearance": "textfield",
  //       },
  //       "& input[type=number]::-webkit-outer-spin-button": {
  //         "-webkit-appearance": "none",
  //         margin: 0,
  //       },
  //       "& input[type=number]::-webkit-inner-spin-button": {
  //         "-webkit-appearance": "none",
  //         margin: 0,
  //       },
  //     },
  //   });

  return (
    <Container
      maxWidth="1730px"
      sx={{
        backgroundColor: "#E5E5E5",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
        width: "98%",
      }}
    >
      <Accounts />
      <Grid
        container
        direction="column"
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "560px",
          borderRadius: "25px",
          backgroundColor: "white",
          gap: "38px",
          padding: "50px",
          mb: "50px",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: { sm: 250, md: 330, lg: 396 },
          }}
        >
          <label htmlFor="" style={{ fontFamily: "Inter", color: "#6C757D" }}>
            Please select the account
          </label>
          <Select
            labelId="demo-simple-select-standard-label"
            variant="filled"
            id="demo-simple-select-standard"
            value={account}
            onChange={handleChange}
            label="Age"
            sx={{ borderRadius: "4px", width: { sm: 250, md: 330, lg: 396 } }}
            InputLabelProps={{
              style: { color: "#00457C" },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="YER">YER Account</MenuItem>
            <MenuItem value="USD">USD Account</MenuItem>
          </Select>
        </Grid>
        <Grid
          item
          sx={{
            // width: "396px",

            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="Recipient Number"
            type="tel"
            variant="standard"
            sx={{ width: { sm: 250, md: 330, lg: 396 } }}
            InputProps={{
              style: {
                color: "#00457C",
              },
            }}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            id="standard-basic"
            label="Amount"
            type="number"
            variant="standard"
            sx={{ width: { sm: 250, md: 330, lg: 396 } }}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            id="standard-basic"
            label="Note"
            type="tel"
            variant="standard"
            sx={{ width: { sm: 250, md: 330, lg: 396 } }}
          ></TextField>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              width: { sm: 250, md: 330, lg: 396 },
              backgroundColor: "#00457C",
              fontFamily: "Inter",
              fontSize: "16px",
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TransferToWallet;
