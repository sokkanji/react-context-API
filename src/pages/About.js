import React, { useContext } from "react";
import { UserContext } from '../store/users';

export default function About() {
    const context = useContext(UserContext);

    return (
        <div>
            <h3>{context.name}</h3>
        </div>
    )
}
