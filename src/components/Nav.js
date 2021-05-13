import { render } from '@testing-library/react';
import React from 'react';

class NavOne extends React.Component {
    render() {
        return(
            <main>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Fighting Misinformation with Misinformation</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about" >About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="cards" >Articles</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br className="mb-4"/>
            </main>
        );
    }
}

export default NavOne;