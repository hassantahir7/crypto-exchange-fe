import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import LoadingSpinner from "../../common/Spinner/LoadingSpinner";

const DepthCard: React.FC<{ depth?: any }> = ({ depth }) => {
  // Dummy data for depth
  const dummyDepth = {
    b: "100.00, 99.80, 99.50, 99.00, 98.80",
    a: "100.50, 100.80, 101.00, 101.50, 102.00",
  };

  const orderDepth = depth || dummyDepth;

  return (
    <Card sx={{ height: "100%", boxShadow: 3, borderRadius: "16px" }}>
      <CardContent sx={{ textAlign: "left" }}>
        {" "}
        <Box display="flex" alignItems="center" mb={2}>
          <BarChartIcon
            color="primary"
            sx={{ fontSize: "2rem", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Order Book Depth
          </Typography>
        </Box>
        {depth ? (
          <>
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                marginRight: "10px",
                display: "inline-block",
                width: "100%",
              }}
            >
              <strong>Bids:</strong> {orderDepth.b}
            </Typography>
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                marginRight: "10px",
                display: "inline-block",
                width: "100%",
              }}
            >
              <strong>Asks:</strong> {orderDepth.a}
            </Typography>
          </>
        ) : (
          <LoadingSpinner />
        )}
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", textAlign: "left" }}
          >
            Notes:
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "left", color: "text.secondary" }}
          >
            - Bids represent the buy orders placed at different price levels.
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "left", color: "text.secondary" }}
          >
            - Asks represent the sell orders available in the market.
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "left", color: "text.secondary" }}
          >
            - Monitor these values to understand market trends and make informed
            trading decisions.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DepthCard;
