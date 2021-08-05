import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, navigate } from "gatsby";
import { FirebaseContext } from "./Firebase";
import styled from "styled-components";

const LogoutLink = styled.span`
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  > h1 {
    margin: 0;
    flex-grow: 1;

    > a {
      color: white;
      text-decoration: none;
    }

    > div {
      display: flex;
      color: white;
    }
  }
`;

const Divider = styled.span`
margin: 0 8px;
padding-right: 1px;
background: #ddd;

`;

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext);

  const handleLogoutClick = () => {
    firebase.logout().then(() => navigate("/login"));
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
          {!!user && !!user.email && (
            <>
              <div style={{ marginRight: "20px" }}>Hello, {user.email}</div>
              <LogoutLink onClick={handleLogoutClick}>Logout</LogoutLink>
            </>
          )}
          {(!user || !user.email) && (
            <>
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                Login
              </Link>
              <Divider />
              <Link
                to="/register"
                style={{ color: "white", textDecoration: "none" }}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
