import React from "react";

export default class NavBarFirst extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="navN">
                        <div>
                            <img />
                        </div>
                        <div>
                            <ul>
                                <li>Primero</li>
                                <li>Segundo</li>
                                <li><a href="https://github.com/aron1984/ch-ronconi.git">GitHub</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>


        );
    }
}

