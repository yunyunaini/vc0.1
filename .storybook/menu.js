/** 文档组件排序 */
const menuSort = {
  Icon: 1,
  Button: 2,
  Tag:3
}

export default function getSortNumByMenu(menu) {
  return menuSort[menu]
}