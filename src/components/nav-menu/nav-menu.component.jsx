import React from 'react';
import './nav-menu.scss';
import { Link,withRouter } from 'react-router-dom';
class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: '',
    };
    this.toggleVisible = this.toggleVisible.bind(this);
    this.currentPageColor = this.currentPageColor.bind(this);
  }

  toggleVisible() {
    this.state.visible === ''
      ? this.setState({
          visible: 'open',
        })
      : this.setState({
          visible: '',
        });
  }
  currentPageColor(page) {
    return this.props.location.pathname === page ? 'current' : ''
  }
  render() {
    let currentPage = this.props.location.pathname
    
    
    return (
      <div className="menu">
        <div className="menu-btn" onClick={() => this.toggleVisible()}>
          <span className={`menu-btn__burger ${this.state.visible}`}></span>
        </div>
        <nav className={`nav ${this.state.visible}`}>
          <ul className={`menu-nav ${this.state.visible}`}>
            <li className={`menu-nav__item ${this.state.visible}`}>
              <Link to="/" className={`menu-nav__link homel ${this.currentPageColor('/')}`}>
                Home
              </Link>
            </li>
            <li className={`menu-nav__item ${this.state.visible}`}>
              <Link to="/discover" className={`menu-nav__link ${this.currentPageColor('/discover')}`}>
                Discover
              </Link>
            </li>
            <li className={`menu-nav__item ${this.state.visible}`}>
              <Link to="/pricing" className={`menu-nav__link ${this.currentPageColor('/pricing')}`}>
                Pricing
              </Link>
            </li>
            <li className={`menu-nav__item ${this.state.visible}`}>
              <Link to="/sign-up" className={`menu-nav__link ${this.currentPageColor('/sign-up')}`}>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavMenu);
