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

  const MenuItem = props => {
    const { link, itemName } = props

    return (
      <>
        <a className="block sm:hidden text-lg py-2" href={link}>
          {itemName}
        </a>
        <a className="hidden sm:block mx-2 hover:underline" href={link}>
          {itemName}
        </a>
      </>
    )
  }

  const LoginButton = () => {
    return (
      <a
        href="https://dashboard.proxy302.com/login"
        className="sm:mx-2 px-6 py-2 rounded-full bg-[#5e79ee] text-white font-bold"
      >
        登录/注册
      </a>
    )
  }

  const Proxy302Logo = () => {
    return (
      <a href="/">
        <img
          className="image w-36"
          src="https://www.proxy302.com/assets/imgs/logo.png?_=1677746101"
          alt=""
        />
      </a>
    )
  }

  return (
    <div className="header-ads">
      {/* desktop mode */}
      <div className="header-ads-desktop hidden py-3 w-full bg-white shadow-lg fixed z-40 top-0 left-0 sm:grid grid-cols-3 gap-5 justify-items-center items-center">
        <div className="header-nav flex">
          <MenuItem link="/" itemName="主页" />
          <MenuItem link="#" itemName="特点" />
          <MenuItem link="#" itemName="价格" />
          <MenuItem link="#" itemName="联系我们" />
          <MenuItem link="#" itemName="文章资讯" />
        </div>
        <div className="header-logo">
          <Proxy302Logo />
        </div>
        <div className="header-right flex items-center">
          <LoginButton />
          <MenuItem link="#" itemName="English" />
        </div>
      </div>

      {/* mobile mode */}
      <div className="header-ads-mobile flex justify-between py-3 w-full bg-white shadow-lg fixed z-40 top-0 left-0 sm:hidden">
        <Space>
          <MenuUnfoldOutlined className="text-xl px-6" onClick={showDrawer} />
        </Space>
        <div className="header-logo mr-6">
          <Proxy302Logo />
        </div>
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={onClose}
          open={open}
          key="left"
          className="relative"
        >
          <MenuItem link="/" itemName="主页" />
          <MenuItem link="#" itemName="特点" />
          <MenuItem link="#" itemName="价格" />
          <MenuItem link="#" itemName="联系我们" />
          <MenuItem link="#" itemName="文章资讯" />
          <MenuItem className="font-bold" link="#" itemName="English" />
          <div className="mobile-login absolute bottom-6">
            <LoginButton />
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default TopNavAds
