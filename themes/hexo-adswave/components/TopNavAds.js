import { Drawer, Space } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import { useState } from 'react'

/**
 *
 */
const TopNavAds = props => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  const MobileMenuItem = props => {
    const { link, itemName, className } = props

    return (
      <a className={'block text-lg py-2' + ' ' + className} href={link}>
        {itemName}
      </a>
    )
  }

  return (
    <div className="header-ads">
      {/* desktop mode */}
      <div className="header-ads-desktop hidden py-3 w-full bg-white shadow-lg fixed z-40 top-0 left-0 sm:grid grid-cols-3 gap-5 justify-items-center items-center">
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

      {/* mobile mode */}
      <div className="header-ads-mobile flex justify-between py-3 w-full bg-white shadow-lg fixed z-40 top-0 left-0 sm:hidden">
        <Space>
          <MenuUnfoldOutlined className="text-xl px-6" onClick={showDrawer} />
        </Space>
        <div className="header-logo mr-6">
          <img
            className="image w-36"
            src="https://www.proxy302.com/assets/imgs/logo.png?_=1677746101"
            alt=""
          />
        </div>
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={onClose}
          open={open}
          key="left"
        >
          <MobileMenuItem link="#" itemName="主页" />
          <MobileMenuItem link="#" itemName="特点" />
          <MobileMenuItem link="#" itemName="价格" />
          <MobileMenuItem link="#" itemName="联系我们" />
          <a
            href="#"
            className="inline-block mt-10 px-4 py-1 rounded-full bg-[#5e79ee] text-white font-bold"
          >
            登录/注册
          </a>
          <MobileMenuItem className="font-bold" link="#" itemName="English" />
        </Drawer>
      </div>
    </div>
  )
}

export default TopNavAds
