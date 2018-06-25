/**
 * @file index.js
 * @author xuguixin0624@gmail.com
 * @description 登录页面
 */
const app = getApp();
const BOYLIST = {
  "data": [{
    "imgSrc": "http://wfqqreader.3g.qq.com/cover/537/15808537/t3_15808537.jpg",
    "title": "大帝姬",
    "des": "穿越的薛青发现自己女扮男装在骗婚。不仅如此她还有一个更大的骗局。这是一个有很多秘密的人的故事",
    "type": "希行 / 古言",
    "status": "end",
    "id": "1"
  }, {
    "imgSrc": "http://wfqqreader.3g.qq.com/cover/305/20304305/t3_20304305.jpg",
    "title": "恰似寒光遇骄阳",
    "des": "这家伙，口味是有多重，这都下得去口？”一觉醒来，她看着镜子里的自己，爆炸头血腥纹身脸化得像鬼，多看一秒都辣眼睛。重生前，她另有所爱，一心逃离，与他发生关系后对他恨之入骨。重生后，她瞄了眼床上的美色，严肃思考，这事后留下阴影的，貌似应该是他？上一世脑子被门夹了放着绝色老公不要，被渣男贱女所害，被最信任的闺密洗脑，落了个众叛亲离的下场。这一世，任各路牛鬼蛇神处心积虑巴不得她离婚让位，不好意思，本小姐智商上线了！",
    "type": "囧囧有妖 / 现言",
    "status": "update",
    "id": "2"
  }, {
    "imgSrc": "http://wfqqreader.3g.qq.com/cover/200/835200/t3_835200.jpg",
    "title": "顾盼生辉",
    "des": "晋江人气作者夜蔓首部温暖之作，治愈每一段抱憾人生的手语之爱。因为遇见你，我才喜欢上雪天；也是因为遇见你，我才知道原来生活还有另一种可能。开间工作室，还有一家咖啡厅，里面放着翻不完的漫画书；养一只波斯猫，一个人的时候也不会觉得孤独。她想就这样过一辈子也挺好，如果陈绍宸没有出现的话……她一直记得那天，雪花纷飞，彻骨寒冷，他说：“你比画，我应该能看得懂。”从遇见她的那一刻起，他便以自己的方式守护她成长。宸，北极星的所在。永远北方的指向，航海的人们通过它来辨别方向，而陈绍宸是顾盼的方向。婚礼上，他拥着她，在她耳边沉声道：“从此，我便是你的声音，你比画，我来说。”只因遇见你，所有的遗憾便都不再是遗憾",
    "type": "夜蔓 / 青春",
    "status": "end",
    "id": "3"
  }, {
    "imgSrc": "http://wfqqreader.3g.qq.com/cover/826/913826/t3_913826.jpg",
    "title": "韩先生，我想请你结个婚",
    "des": "黑暗中，她为救他，成了他的女人，他却隔天清晨匆匆离去。六年后，她进入他的公司，与他擦肩而过，却互不相识，但一切却悄然发生改变，他有了自己爱的人，她有了爱自己的人......她带着女儿疲于奔命，他重新进入她的生活，当他决定娶她时，她却淡淡一笑，转身离开",
    "type": "顾伊雪 / 青春",
    "status": "update",
    "id": "4"
  }]
};
const CARDDATA = [{ icon: '../../static/img/1.png', text: '免费' }, { icon: '../../static/img/2.png', text: '排行' }, { icon: '../../static/img/3.png', text: '分类' }, { icon: '../../static/img/2.png', text: '完本'}];
const IMAGES = ['../../static/img/1.jpg', '../../static/img/2.jpg', '../../static/img/3.jpg'];
const TYPEDATA = [{name: '男生小说', id: 'boy'}, {name: '女生小说', id: 'girl'}, {name: '出版书籍', id: 'pub'}]

Page({
  data: {
    backgroundImage: IMAGES,
    typeData: TYPEDATA,
    cardData: CARDDATA,
    tags: ['科幻', '游戏', '末世', '校花'],
    boyList: BOYLIST.data
  },
  _onEnterDeatil (e) {
    console.log(e.detail); // e.detail为当前信息
  }
})
