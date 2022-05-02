import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";

interface IHeaderNavLink {
    label: string,
    to: string
}

export default function HeaderNavLink({label, to}:IHeaderNavLink){
    const match = useRouteMatch({
        path: to,
        exact: true
    });

    return (
        <li className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
        </li>
    )
}