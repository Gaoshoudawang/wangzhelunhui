// ============================================================
// 王者轮回夺宝 - 统一道具映射配置文件
// 所有页面都引用这个文件，换皮只需要改这一个文件
// ============================================================

// ITEM_SMALL_IMAGES
window.ITEM_SMALL_IMAGES = {
  // ===== 王者轮回轮盘道具 =====
  '王者自选-炫闪宝箱': 'images/items_box/王者自选-炫闪宝箱/small.png',
  '近战自选-炫闪宝箱': 'images/items_box/近战自选-炫闪宝箱/small.png',
  '英雄自选-炫闪宝箱': 'images/items_box/英雄自选-炫闪宝箱/small.png',
  '10000点积分': 'images/items_box/10000点积分/small.png',
  '英雄之钥5': 'images/items_box/英雄之钥5/small.png',
  '钻石8888': 'images/items_box/钻石8888/small.png',
  '5000点积分': 'images/items_box/5000点积分/small.png',
  '典藏之骰5': 'images/items_box/典藏之骰5/small.png',
  '钻石2888': 'images/items_box/钻石2888/small.png',
  '钻石888': 'images/items_box/钻石888/small.png',
  
  // ===== 货币 =====
  '轮回币': 'images/items_box/轮回币/small.png',
  '轮回积分': 'images/items_box/轮回积分/small.png',
};

// SLOT_IMAGES
window.SLOT_IMAGES = {
  white: '../images/common/slot/white.png',
  purple: '../images/common/slot/purple.png',
  gold: '../images/common/slot/gold.png',
  red: '../images/common/slot/red.png'
};

// SHOWCASE_IMAGES（王者轮回没有出货动画，留空）
window.SHOWCASE_IMAGES = {};

// 出货动画道具列表（王者轮回没有出货动画）
window.SHOWCASE_ITEMS = [];

// 分解配置
window.DECOMPOSE_CONFIG = {
  '王者自选-炫闪宝箱': 100,
  '近战自选-炫闪宝箱': 80,
  '英雄自选-炫闪宝箱': 50,
  '10000点积分': 20,
  '英雄之钥5': 15,
  '钻石8888': 10,
  '5000点积分': 8,
  '典藏之骰5': 5,
  '钻石2888': 3,
  '钻石888': 1,
};

// 道具显示名称映射（照搬单文件ITEM_NAMES）
window.ITEM_NAMES = {
  "王者自选-炫闪宝箱": "王者自选-炫闪宝箱",
  "钻石888": "钻石*888",
  "钻石2888": "钻石*2888",
  "近战自选-炫闪宝箱": "近战自选-炫闪宝箱",
  "英雄自选-炫闪宝箱": "英雄自选-炫闪宝箱",
  "10000点积分": "10000点积分",
  "英雄之钥5": "英雄之钥*5",
  "钻石8888": "钻石*8888",
  "5000点积分": "5000点积分",
  "典藏之骰5": "典藏之骰*5",
  "轮回币": "轮回币",
  "轮回积分": "轮回积分"
};

// 获取道具显示名称
window.getItemDisplayName = function(name) {
  if(window.ITEM_NAMES && window.ITEM_NAMES[name]) return window.ITEM_NAMES[name];
  return name;
};
