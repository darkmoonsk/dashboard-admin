import { useState } from "react";
import { Sidebar, ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
//import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/People";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { borderColor, height } from "@mui/system";

const Item = ({ title, icon, to, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

function SidebarComponent() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box>
            <ProSidebarProvider>
                <Sidebar
                    defaultCollapsed={isCollapsed}
                    backgroundColor={colors.primary[400]}
                    rootStyles={{
                        height: "100vh",
                        borderColor: colors.primary[400],
                    }}
                >
                    <Menu iconShape="square">
                        {/* Logo e Icone do Menu */}
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={
                                isCollapsed ? <MenuOutlinedIcon /> : undefined
                            }
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.grey[100],
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="10px"
                                >
                                    <Typography
                                        variant="h3"
                                        color={colors.grey[100]}
                                    >
                                        ADMINS
                                    </Typography>
                                    <IconButton
                                        onClick={() =>
                                            setIsCollapsed(!isCollapsed)
                                        }
                                    >
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        {/* Usuario */}
                        {!isCollapsed && (
                            <Box mb="25px">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <img
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src="../../assets/user.png"
                                        style={{
                                            cursor: "pointer",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </Box>
                                <Box textAlign="center">
                                    <Typography
                                        variant="h2"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{ m: "10px 0 0 0" }}
                                    >
                                        Bruno Souza
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color={colors.greenAccent[500]}
                                    >
                                        VP of Engineering
                                    </Typography>
                                </Box>
                            </Box>
                        )}

                        {/* Items do Menu */}
                        <Box
                            paddingLeft={isCollapsed ? undefined : "10%"}
                        >
                            <Item
                                title="Dashboard"
                                icon={<HomeOutlinedIcon />}
                                to="/"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Manage Team"
                                icon={<PeopleOutlineOutlinedIcon />}
                                to="/team"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Contacts Information"
                                icon={<ContactsOutlinedIcon />}
                                to="/contacts"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Invoices Balances"
                                icon={<ReceiptOutlinedIcon />}
                                to="/invoices"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Profile Form"
                                icon={<PersonOutlinedIcon />}
                                to="/form"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Calendar"
                                icon={<CalendarTodayOutlinedIcon />}
                                to="/calendar"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="FAQ Page"
                                icon={<HelpOutlinedIcon />}
                                to="/faq"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Bar Chart"
                                icon={<BarChartOutlinedIcon />}
                                to="/bar"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Pie Chart"
                                icon={<PieChartOutlinedIcon />}
                                to="/pie"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Line Chart"
                                icon={<TimelineOutlinedIcon />}
                                to="/line"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Geography Chart"
                                icon={<MapOutlinedIcon />}
                                to="/geography"
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Box>
                    </Menu>
                </Sidebar>
            </ProSidebarProvider>
        </Box>
    );
}

export default SidebarComponent;
