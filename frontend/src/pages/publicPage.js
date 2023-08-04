import * as React from "react";
import Box from "@mui/material/Box";
import MyAppBar from "@/components/myAppBar";

export default function PublicPage({ children }) {
  return (
    <Box>
      <MyAppBar>
        {children}
      </MyAppBar>
    </Box>
  );
}
