import * as React from "react";
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DiamondIcon from "@mui/icons-material/Diamond";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  const nav = useNavigate();
  const NavList = [
    { name: "Home", path: "/", Icon: HomeOutlinedIcon },
    { name: "Students", path: "/students", Icon: GroupOutlinedIcon },
    {
      name: "Create Student",
      path: "/createstudent",
      Icon: PersonAddAltOutlinedIcon,
    },
    {
      name: "School Policies",
      path: "/policies",
      Icon: InfoOutlinedIcon,
    },
  ];
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ bgcolor: "#0A1929", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Student Management
          </Typography>
          <DiamondIcon sx={{ color: "white" }} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            bgcolor: "#1F2C3B",
            height: "100%",
            color: "white",
          }}
        >
          <List>
            {NavList.map(({ name, Icon, path }, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => nav(path)}>
                  <ListItemIcon>
                    <Icon sx={{ color: "whitesmoke" }} />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
