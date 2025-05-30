import { alpha, Link, LinkProps, styled } from "@mui/material";
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type SidebarLinkProps = LinkProps & { active: boolean };

const SidebarLink = ({ href, ...other }: LinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onSidebarStyledLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (href) {
        event.preventDefault();
        navigate(href);
      }
    },
    []
  );

  return (
    <SidebarStyledLink
      {...other}
      onClick={onSidebarStyledLinkClick}
      variant={"button"}
      active={!!(href && location.pathname.match(href)?.length)}
    />
  );
};

const SidebarStyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<SidebarLinkProps>(({ theme, active }) => ({
  color: active ? "white" : theme.palette.text.primary,
  background: active ? alpha("#3170de", 0.5) : "none",
  textDecoration: "none",
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  textAlign: "left",
  transition: "all .2s",
  cursor: "pointer",

  "&:hover": {
    background: alpha("#3170de", 0.3),
    // color: 'white'
  },
}));