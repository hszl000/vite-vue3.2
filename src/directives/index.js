// 页面按钮权限
import permission from './permission'

export default (app) => {
  app.directive('showPermission', permission)
}
