import * as React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

interface IHeaderNavLink {
    label: string,
    to: string
}

export default function HeaderNavLink({label, to}:IHeaderNavLink){
    const match = useRouteMatch({
        path: to,
        exact: true
    });
    const history = useHistory();

    const click = () => { 
        history.push(to);
    }

    return (
        <li className={match ? "active" : ""}>
            <a onClick={click}>{label}</a>
        </li>
    )
}