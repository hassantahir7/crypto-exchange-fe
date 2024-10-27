import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Footer: React.FC = () => (
  <Box mt={5} sx={{ textAlign: "center", color: "#777" }}>
    <Divider />
    <Typography variant="body2" sx={{ padding: "20px 0" }}>
      © 2024 Binance Dashboard. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
