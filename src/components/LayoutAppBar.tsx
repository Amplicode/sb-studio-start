import { ArrowBack, Person, ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

export const LayoutAppBar = ({
  open,
  handleOpenDrawer,
  handleCloseDrawer,
  drawerWidth,
}: {
  open: boolean;
  drawerWidth: number;
  handleOpenDrawer: () => void;
  handleCloseDrawer: () => void;
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: open ? `${drawerWidth}px` : 0,
        background: "#fff",
        boxShadow: "inset 0 0 12px 0px #3170de",
        transition: "all 225ms",
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          {!open ? (
            <IconButton
              color="primary"
              size="medium"
              onClick={handleOpenDrawer}
            >
              <Menu />
            </IconButton>
          ) : (
            <IconButton
              color="primary"
              size="medium"
              onClick={handleCloseDrawer}
            >
              <ArrowBack />
            </IconButton>
          )}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="primary" size="medium">
              <Person />
            </IconButton>
            <IconButton color="primary" size="medium">
              <ShoppingCart />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
