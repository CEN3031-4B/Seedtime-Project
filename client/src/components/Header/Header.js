import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import api from "../../api";

class Header extends Component {
  state = {
    search: ""
  };

  onChange = e => {
    const search = e.target.value;    
    this.setState({ search });
    this.props.onSearch(search);
  };

  render() {
    const { search } = this.state;
    return (
      // <div className='topnav'>
      //     {/* Logo */}
      //     <Link id="logo-link" to="/">
      //         <img className="topnav-logo" src={ "/logo192.png" } alt="React logo" />
      //     </Link>

      //     {/* Page Links */}
      //     <div className="topnav-right">
      //         <Link className="topnav-link" to='/Register'>Sign in</Link>
      //         <Link className="topnav-link" to='/projects'>Projects</Link>
      //         <a className="topnav-link" target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/groups/ufosc/events/?source=4&action_history=null&filter=calendar">
      //             Events
      //             <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
      //         </a>
      //         <a className="topnav-link" target='_blank' rel="noopener noreferrer" href="https://github.com/ufosc/club-resources">
      //             Resources
      //             <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6 right-4"></i>
      //         </a>
      //         <Link className="topnav-link" to="/about">About</Link>
      //     </div>
      // </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/produce">
          <a class="navbar-brand" href="#">
            <img src="/farmLogo.jpg" id="farmLogo"></img>
          </a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <Link to="/produce">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Produce<span class="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <Link to="/produce">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Produce<span class="sr-only">(current)</span></a>
                        </li>
                    </Link>
                    <Link to="/about">
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                    </Link>
                    <Link to="/signin">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign In</a>
                        </li>
                    </Link>
                    <Link to="/register">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Register</a>
                        </li>
                    </Link>
                    <Link to="/add_produce">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Add Produce</a>
                        </li>
                    </Link>


                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="navSearch">Search</button>
                </form>
            </div>
            <Link to="/cart">
                <a class="navbar-brand" href="#">
                    <img src = "/shopping-cart.svg" id="cartLogo"></img>
                </a>
              </li>
            </Link>
            <Link to="/add_produce">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Add Produce
                </a>
              </li>
            </Link>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              onChange={this.onChange}
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
            ></input>
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              id="navSearch"
            >
              Search
            </button>
          </form>
        </div>
        <Link to="/cart">
          <a class="navbar-brand" href="#">
            <img src="/shopping-cart.svg" id="cartLogo"></img>
          </a>
        </Link>
      </nav>
    );
  }
}

export default Header;
