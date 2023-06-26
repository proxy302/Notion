/**
 *
 */
const TopNavAds = props => {
  return (
    <div className="header-ads h-12 w-full bg-gray-400 fixed z-40 top-0 left-0">
      <div className="header-nav">
        <a href="#">主页</a>
        <a href="#">特点</a>
        <a href="#">价格</a>
        <a href="#">联系我们</a>
      </div>
      <div className="header-logo">
        <img
          className="image w-36"
          src="https://www.proxy302.com/assets/imgs/logo.png?_=1677746101"
          alt=""
        />
      </div>
      <div className="header-right">
        <div>登录/注册</div>
        <div>English</div>
      </div>
    </div>
  )
}

export default TopNavAds
