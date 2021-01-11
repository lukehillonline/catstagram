import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

/**
 * This component renders a navigation item using Materual UI Link for style
 * and react router NavLink for routing.
 *
 * @param {string} href a path to a page
 * @param {object} styleOverride style overrides
 */
export function NavigationItem({ href, styleOverride, children, ...props }) {
  return (
    <Link component={NavLink} to={href} className={styleOverride} {...props}>
      {children}
    </Link>
  );
}
