import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import { DownloadOutlined } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { PointOfSale } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { Traffic } from "@mui/icons-material";
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

        {/* Grid & Charts */}

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px" gridAutoRows="140px">
            {/* Row 1 */}
            <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
                <StatBox
                    title="12,361"
                    subtitle="Emails sent"
                    progress="0.75"
                    increase="+14%"
                    icon={<Email fontSize="26px" sx={{color: colors.greenAccent[600]}}/>}
                    />
            </Box>

            <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
                <StatBox
                    title="431,225"
                    subtitle="Sales Obtained"
                    progress="0.5"
                    increase="+21%"
                    icon={<PointOfSale fontSize="26px" 
                    sx={{color: colors.greenAccent[600]}}
                />}
                />
            </Box>

            <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
                <StatBox
                    title="32,441"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+5%"
                    icon={<PersonAdd fontSize="26px" 
                    sx={{color: colors.greenAccent[600]}}
                />}
                />
            </Box>

            <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
                <StatBox
                    title="1,325,134"
                    subtitle="Traffic Inbound"
                    progress="0.80"
                    increase="+43%"
                    icon={<Traffic fontSize="26px" 
                    sx={{color: colors.greenAccent[600]}}
                />}
                />
            </Box>
            
            {/* Row 2 */}

        </Box>
    </Box>
    );
}

export default Dashboard;