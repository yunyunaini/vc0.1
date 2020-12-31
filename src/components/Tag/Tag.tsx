
import React, { useContext } from 'react'
import classnames from 'classnames'
import { tuple } from '../_util/type'
import { ConfigContext } from '../Config'
import CheckableTag from './CheckableTag'

export interface BaseTagProps {
  className?: string
  color?: string
  icon?: React.ReactDOM
  closable?: boolean
  visible?: boolean
  onClose?: (e: React.MouseEvent<HTMLElement>) => void
  children?:React.ReactDOM
}

export type AnchorTagProps = {
} & BaseTagProps & Omit<React.AnchorHTMLAttributes<unknown>,  'onClose'>

export type TagProps = Partial<AnchorTagProps>

const InternalTag: React.ForwardRefRenderFunction<unknown, AnchorTagProps> = (props, ref) => {
  const { icon, color, children, className,closable, ...restProps } = props
  const [visible, setVisible] = React.useState(true)

  const iconNode = icon ?  <>{icon}<span>{children}</span></> : <span>{children}</span>

  const handleClose = (e: React.MouseEvent<HTMLElement>) =>{
    e.stopPropagation()
    if(e.defaultPrevented)return
    if(restProps.onClose){
      restProps.onClose(e)
    }
    if(!('visible' in restProps)){
      setVisible(false)
    }
  }
  
  const renderCloseIcon = () => {
    if(closable){
      return <CheckableTag className={`${prefixCls}-close-icon`} onClick={handleClose} />
    }
  }

  //目的是为了给样式加前缀，避免样式冲突
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('tag', '')
  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-${color}`]: color,
    [`${prefixCls}-hidden`]: !visible,
  })
  
  
  
  return (
    <div  className={classes} {...restProps}>
      {iconNode}
      {renderCloseIcon()}
    </div>
  )
}

const Tag = React.forwardRef<unknown, TagProps>(InternalTag)

export default Tag