// 定义的state初始值
const state = {
  msgData: [
    {
      id: '123',
      content: '腾讯大厦一楼改造施工项目 已通过审核！',
      type: '合同动态',
      status: true,
      collected: false,
      date: '2021-01-01 08:00',
      priorty: 'high',
    },
    {
      id: '124',
      content: '三季度生产原材料采购项目 开票成功！',
      type: '票务动态',
      status: true,
      collected: false,
      date: '2021-01-01 08:00',
      priorty: 'low',
    },
    {
      id: '125',
      content: '2021-01-01 10:00的【国家电网线下签约】会议即将开始，请提前10分钟前往 会议室1 进行签到！',
      type: '会议通知',
      status: true,
      collected: false,
      date: '2021-01-01 08:00',
      priorty: 'middle',
    },
    {
      id: '126',
      content: '一季度生产原材料采购项目 开票成功！',
      type: '票务动态',
      status: true,
      collected: false,
      date: '2021-01-01 08:00',
      priorty: 'low',
    },
    {
      id: '127',
      content: '二季度生产原材料采购项目 开票成功！',
      type: '票务动态',
      status: true,
      collected: false,
      date: '2021-01-01 08:00',
      priorty: 'low',
    },
    {
      id: '128',
      content: '三季度生产原材料采购项目 开票成功！',
      type: '票务动态',
      status: true,
      collected: false,
      date: '2021-01-01 08:00',
      priorty: 'low',
    },
  ],
};

const mutations = {
  setMsgData(state, data) {
    state.msgData = data;
  },
};

const getters = {
  unreadMsg: state => state.msgData.filter(item => item.status),
  readMsg: state => state.msgData.filter(item => !item.status),
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
