import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar sx={{ height: "65px" }}>
      <Toolbar sx={{ gap: "50px", justifyContent: "center" }}>
        <Button color="inherit" onClick={() => navigate("shops")}>
          Shop
        </Button>
        <Button color="inherit" onClick={() => navigate("cart")}>
          Shop cart
        </Button>
        <Button color="inherit" onClick={() => navigate("history")}>
          History
        </Button>
      </Toolbar>
    </AppBar>
  );
}
