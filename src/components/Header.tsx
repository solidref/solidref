import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";

function AppBar(props: AppBarProps) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up("sm")]: {
    height: 70,
  },
}));

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function Header() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {"onepirate"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Sign Up"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;
