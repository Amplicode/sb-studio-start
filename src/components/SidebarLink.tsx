import { alpha, Link, LinkProps, styled } from "@mui/material";
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const SidebarLink = (props: LinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onSidebarStyledLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (props.to) {
        event.preventDefault();
        navigate(props.to);
      }
    },
    []
  );

  return (
    <SidebarStyledLink
      {...props}
      onClick={onSidebarStyledLinkClick}
      variant={"button"}
      active={!!(props.to && location.pathname.match(props.to.toString())?.length)}
    />
  );
};

type StyledSidebarLinkProps = Omit<LinkProps, 'to'> & { active: boolean };

const SidebarStyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<StyledSidebarLinkProps>(({ theme, active }) => ({
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