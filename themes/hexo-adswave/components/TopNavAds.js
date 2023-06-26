/**
 *
 */
const TopNavAds = props => {
  return (
    <>
      {/* desktop mode */}
      <div className="header-ads hidden py-3 w-full bg-white shadow-lg fixed z-40 top-0 left-0 sm:grid grid-cols-3 gap-5 justify-items-center items-center">
        <div className="header-nav flex">
          <a className="mx-2 hover:underline" href="#">
            主页
          </a>
          <a className="mx-2 hover:underline" href="#">
            特点
          </a>
          <a className="mx-2 hover:underline" href="#">
            价格
          </a>
          <a className="mx-2 hover:underline" href="#">
            联系我们
          </a>
        </div>
        <div className="header-logo">
          <img
            className="image w-36"
            src="https://www.proxy302.com/assets/imgs/logo.png?_=1677746101"
            alt=""
          />
        </div>
        <div className="header-right flex items-center">
          <a
            href="#"
            className="mx-2 px-4 py-1 rounded-full bg-[#5e79ee] text-white font-bold"
          >
            登录/注册
          </a>
          <a href="#" className="mx-2">
            English
          </a>
        </div>
      </div>
    </>
  )
}

export default TopNavAds
