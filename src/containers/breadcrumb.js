import React from "react";
import {
  Breadcrumb,
  Icon,
  BreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default function BreadcrumbNavigation({ pathname }) {
  const navs = pathname.split("/");

  const crumbs = navs.map((nav, index) => ({
    nav: index === 0 ? "Home" : nav,
    pathname: index === 0 ? "/" : navs.slice(0, index + 1).join("/")
  }));

  return (
    <Breadcrumb
      spacing="8px"
      separator={<Icon color="gray.300" name="chevron-right" />}
    >
      {crumbs.map((crumb, index) => (
        <BreadcrumbItem key={index} isCurrentPage={index === crumbs.length - 1}>
          <BreadcrumbLink as={Link} to={crumb.pathname}>
            {crumb.nav}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
