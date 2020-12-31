import React from 'react'

interface IIconProps {
  /** 图标的类名字*/
  icon: string
  /**
   * 图标自定义class
   * cda
   * @default
   **/
  className?: string
  /**
   * 默认前缀
   *
   * @default 'lg'
   **/
  prefixCls?: string
}

const Demo: React.FC<IIconProps> = () => {
  return <div></div>
}
export default Demo
