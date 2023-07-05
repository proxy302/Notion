/**
 *
 */

const FooterAds = () => {
  return (
    <>
      <div className="footer-ads pt-12 pb-28 grid grid-cols-2 sm:grid-cols-3 bg-[#272d46] text-white">
        <div className="footer-content mb-14 sm:mb-0 col-span-full sm:col-span-1 flex flex-col sm:pl-16 pl-20 pt-4">
          <img
            className="footer-logo w-40 mb-8"
            src="/proxy302-logo-white.svg"
            alt="Logo"
          />
          <p className="footer-text mt-4">需要更多信息吗？</p>
          <p className="footer-text mt-4">技术支持: support@proxy302.com</p>
          <p className="footer-text mt-4">Proxy302 © 2023 版权所有。</p>
        </div>
        <div className="footer-nav-1 flex flex-col items-center font-bold">
          <h6>关于</h6>
          <a target="_blank" href="https://www.proxy302.com/#proxy-type">
            代理类型
          </a>
          <a target="_blank" href="https://www.proxy302.com/#feature">
            产品特征
          </a>
          <a target="_blank" href="https://www.proxy302.com/#price">
            定价计划
          </a>
          <a target="_blank" href="https://www.proxy302.com/#tool">
            用户案例
          </a>
          <a target="_blank" href="https://www.proxy302.com/#global">
            地理位置
          </a>
        </div>
        <div className="footer-nav-2 flex flex-col items-center font-bold">
          <h6>文件</h6>
          <a target="_blank" href="https://www.proxy302.com/terms-of-use.html">
            使用条款
          </a>
          <a
            target="_blank"
            href="https://www.proxy302.com/privacy-policy.html"
          >
            隐私政策
          </a>
        </div>
      </div>
      <style jsx>{`
        .footer-nav-1 > a,
        .footer-nav-2 > a {
          margin-top: 20px;

          &:hover {
            text-decoration-line: underline;
          }
        }
      `}</style>
    </>
  )
}

export default FooterAds
