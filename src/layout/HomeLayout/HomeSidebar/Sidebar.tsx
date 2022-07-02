import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface Item {
  text: string;
  icon: JSX.Element;
  path: string;
}

interface Props {
  items: Item[];
}

export const Sidebar = ({ items }: Props) => {
  const navigate = useNavigate();

  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "rgba(46, 43, 101, 0.94)",
        },
      }}
    >
      <Toolbar />

      <List
        sx={{
          marginTop: 3,
        }}
      >
        {items.map((item) => (
          <ListItem
            sx={{
              color: "white",
            }}
            key={item.text}
            button
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <div></div>
    </Drawer>
  );
};
