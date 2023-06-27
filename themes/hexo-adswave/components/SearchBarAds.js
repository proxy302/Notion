import { Input, Space } from 'antd'
import React from 'react'

/**
 * Searchbar components exclusive for Adswave by Jackie
 */
const SearchBarAds = props => {
  const { Search } = Input

  const onSearch = value => {
    location.replace(`/search/${value}`)
  }

  const SearchInput = () => (
    <Space direction="horizontal">
      <Search
        placeholder="搜索文章"
        allowClear
        onSearch={onSearch}
        enterButton
        className="bg-blue-500 rounded-lg w-[400px]"
      />
    </Space>
  )

  return (
    <div className="search-bar w-full mb-4 px-2 rounded-lg flex justify-center">
      <SearchInput />
    </div>
  )
}

export default SearchBarAds
