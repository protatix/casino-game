import PropTypes from "prop-types"
import { Wrapper, Header } from "./style"
import logo from "../logo.svg"

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
