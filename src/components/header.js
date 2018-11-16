import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
//import logo from '../images/DesignCode-Logo-Black.svg' //在大量图片引入下容易冗余, import和require等价

// 无状态组件的写法，直接用function写无状态组件
// const Header = ({ siteTitle }) => (
//   <div className="Header">
//     <div className="HeaderGroup">
//       <Link to="/"><img src={require('../images/DesignCode-Logo-Black.svg')} width="30" /></Link>
//       <Link to="/courses">Courses</Link>
//       <Link to="/downloads">Downloads</Link>
//       <Link to="/workshops">Workshops</Link>
//       <Link to="/buy"><button>Buy</button></Link>
//     </div>
//   </div>
// )

// Stateful Component 有状态的组件写法
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    }
  }

  //在组件渲染成功之后监听
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  //inner function
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if(scrollTop > 50) {
      this.setState({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/DesignCode-Logo-Black.svg')} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}


export default Header
