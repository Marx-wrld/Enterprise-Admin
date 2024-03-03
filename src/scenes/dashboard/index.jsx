import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import { DownloadOutlined } from "@mui/icons-material";
import { EmailIcon } from "@mui/icons-material";
import { PointOfSale } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { TrafficOutlined } from "@mui/icons-material";
import LineChart from "../../components/GeographyChart"
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircles";

const Dashboard= () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
        </Box>
        <Box>
            <Button
                sx={{
                    backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", borderRadius: "20px", padding: "10px 20px", textTransform: "none",
                }}
            >
                <DownloadOutlined 
                    sx={{
                        mr: "10px",
                    }}
                >
                    Download Reports
                </DownloadOutlined>
            </Button>
        </Box>
    </Box>
    );
}

export default Dashboard;