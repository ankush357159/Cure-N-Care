import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const AppbarContainer = styled("div")(({ theme }) => ({
  position: "relative",
  "&: .css-1rg09f3 .MuiToolbar-root": {
    padding: theme.spacing(1, 2, 0, 1),
  },
  display: "flex",
  flexDirection: "row",
}));

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const router = useRouter();

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleDesign = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    router.push("/");
  };
  const handleDevelopment = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    router.push("/");
  };

  const handleSeo = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    router.push("/");
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppbarContainer>
      <AppBar
        position='sticky'
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 28%, rgba(0,212,255,1) 100%)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link href='/' passHref={true}>
            <Typography sx={{ cursor: "pointer", fontWeight: 600 }}>
              HOME
            </Typography>
          </Link>
          <Link href='/aboutus' passHref={true}>
            <Typography sx={{ cursor: "pointer", fontWeight: 600 }}>
              ABOUT US
            </Typography>
          </Link>

          <Typography
            ref={anchorRef}
            id='composition-button'
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup='true'
            onMouseEnter={() => setOpen((prevOpen) => !prevOpen)}
            onMouseDownCapture={() => setOpen((prevOpen) => !prevOpen)}
            sx={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            SERVICES
          </Typography>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement='bottom-start'
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='composition-menu'
                      aria-labelledby='composition-button'
                      onKeyDown={handleListKeyDown}
                      sx={{
                        mt: 2.5,
                        cursor: "pointer",
                        backgroundColor: "#090979",
                        p: 0,
                        color: "#FFFFFF",
                      }}
                    >
                      <MenuItem
                        onClick={handleDesign}
                        sx={{ "&:hover": { backgroundColor: "#0062b8" } }}
                      >
                        Back Pain
                      </MenuItem>
                      <MenuItem
                        onClick={handleDevelopment}
                        sx={{ "&:hover": { backgroundColor: "#0062b8" } }}
                      >
                        Arthirtis
                      </MenuItem>
                      <MenuItem
                        onClick={handleSeo}
                        sx={{ "&:hover": { backgroundColor: "#0062b8" } }}
                      >
                        Diabetes
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <Link href={"/contact"} passHref={true}>
            <Typography sx={{ cursor: "pointer", fontWeight: 600 }}>
              CONTACT US
            </Typography>
          </Link>

          <Link href={"/testimonials"} passHref={true}>
            <Typography sx={{ cursor: "pointer", fontWeight: 600 }}>
              TESTIMONIALS
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </AppbarContainer>
  );
};

export default MainHeader;
