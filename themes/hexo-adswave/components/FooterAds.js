/**
 *
 */

const FooterAds = () => {
  return (
    <div className="footer-ads pt-12 pb-36 grid grid-cols-3 bg-[#272d46] text-white ">
      <div className="footer-content col-span-1 flex flex-col px-12">
        <img
          className="footer-logo w-40 mb-8"
          src="/proxy302-logo-white.svg"
          alt="Logo"
        />
        <p className="footer-text mt-4">需要更多信息吗？</p>
        <p className="footer-text mt-4">技术支持: support@proxy302.com</p>
        <p className="footer-text mt-4">Proxy302 © 2023 版权所有。</p>
      </div>
      <div className="footer-nav-1 bg-sky-400">
        <h6>关于</h6>
        <a href="">代理类型</a>
        <a href="">产品特征</a>
        <a href="">定价计划</a>
        <a href="">用户案例</a>
        <a href="">地理位置</a>
      </div>
      <div className="footer-nav-2 bg-teal-400">
        <h6></h6>
        <a href="">使用条款</a>
        <a href="">隐私政策</a>
      </div>
    </div>
  )
}

export default FooterAds
