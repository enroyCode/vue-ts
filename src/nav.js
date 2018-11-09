const nav = [
  {
    title: '首页',
    path: '/',
    icon: 'el-icon-menu',
    display: false,
    children: []
  }, {
    title: '项目管理',
    path: '/projectMgr',
    icon: 'el-icon-menu',
    display: true,
    children: []
  },
  {
    title: '用例管理',
    path: '/testCaseMgr',
    icon: 'el-icon-menu',
    display: true,
    children: []
  }, {
    title: '测试计划',
    path: '/testPlan',
    icon: 'el-icon-menu',
    display: true,
    children: []
  },
  {
    title: '测试报告',
    path: '/testReport',
    icon: 'el-icon-menu',
    display: true,
    children: []
  },
  {
    title: '系统设置',
    path: '/setting',
    icon: 'el-icon-menu',
    display: true,
    children: [
      {
        title: '人员权限',
        icon: 'el-icon-menu',
        path: '/setting/author',
        display: true,
      }
    ]
  }
];

export default nav;
