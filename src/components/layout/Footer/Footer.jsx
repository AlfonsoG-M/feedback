import './footer.css'
import logo from '../../../Assets/image/logo.jpg'

const Footer = () => {
  return (
    <div className="footerContainer">
        <img src={logo} alt="" />
        <p>Copyright © {new Date().getFullYear()} Theorem, LLC. All Rrights Reserved.</p>
    </div>
  )
}

export default Footer