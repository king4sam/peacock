const showerCard = '嗯嗯，我先去洗澡';

export const guidePageText = `在這個風風雨雨的社會，線上聊天已經成為交友的起手式，對方不必瞭解你，幾句開場白就能判你情場生死。
懂聊，就像孔雀抖動華麗尾羽，輕鬆開屏吸引對方；不懂聊，就會出現「我先去洗澡」的江湖傳說，之後輕則已讀不回，重則封鎖刪除。`;
export const guidePageTwoText = `接下來，請試著和這位女性聊天。請盡量避免讓對方回覆「我先去洗澡」的對話，當對方這樣回覆時，聊天即結束，您身後象徵吸引力的孔雀尾羽也不會開屏。
若成功與對方完成對話，您身後的孔雀尾羽就會完全展開。`;
export const winWord = `看看現在鏡中充滿吸引力的孔雀。
您的聊天才能讓您成為這個時代的交友能手
aka 情場浪子。`;
export const loseWord = `您已召喚「我先去洗澡」的江湖傳說。
很抱歉，對方不想再和您繼續聊天，所以您的孔雀尾羽也將無法展開。`;
export const gameStatus = {
  win: 1,
  lose: 2,
};

export const questionStatus = {
  continue: 1,
  notAnswerYet: 2,
};

const lines = [
  {
    index: 1,
    choices: [2, 3, 4],
  },
  {
    index: 2,
    question: '今天好像全台都在下雨，你那邊有下嗎？',
    response: '有啊，下午的時候下很大',
    choices: [5, 6, 7],
  },
  {
    index: 3,
    question: '我看到你的大頭貼想到一種動物',
    response: '什麼動物啊',
    choices: [53, 54, 55],
  },
  {
    index: 4,
    question: '安安你長得好漂亮 交個朋友嗎？',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 5,
    question: '台北現在還一直在下，你住哪裡啊？',
    response: '我在新竹，現在雨已經停了',
    choices: [8, 9, 10],
  },
  {
    index: 6,
    question: '我以前滿喜歡下雨的，來台北後就不喜歡了',
    response: '你也北漂青年？',
    choices: [35, 36, 37],
  },
  {
    index: 7,
    question: '那你現在在幹嘛',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 8,
    question: '最近天氣不太好，本來週末打算出去玩，你呢？',
    response: '本來想和朋友去爬山，但如果又下雨可能就要取消了',
    choices: [11, 12, 13],
  },
  {
    index: 9,
    question: '我今天忘記帶傘，下很大的時候人又剛好在外面',
    response: '好狼狽喔，下雨真的很煩',
    choices: [20, 21, 22],
  },
  {
    index: 10,
    question: '妳的美貌也讓我的心跳停了一下',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 11,
    question: '我這週末也是要去爬山耶！你也喜歡爬山嗎？',
    response: '對呀，基本上戶外運動都滿喜歡的',
    choices: [14, 15, 16],
  },
  {
    index: 12,
    question: '你喜歡爬山喔？爬山很累欸',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 13,
    question: '那如果下雨取消的話就見個面認識一下啊',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 14,
    question: '所以你平常也有在做體能訓練囉？',
    response: '有啊，通常是慢跑或瑜珈，不然爬山體力負荷不了',
    choices: [17, 18, 19],
  },
  {
    index: 15,
    question: '女生運動還是要多注意防曬，不然曬太黑不好看',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 16,
    question: '那身材應該滿好的？不會長得很壯吧',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 17,
    question:
      '剛好下個月和朋友要去新竹的伊澤山，是百岳喔，有興趣的話可以一起來',
    response: '好欸，我之前一直想說要去但都還沒去',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 18,
    question: '以前都和前女友一起去健身房，現在只剩一個人了，唉',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 19,
    question: '沒關係\n我揹你',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 20,
    question: '你也不喜歡下雨喔？',
    response: '不喜歡啊，出門騎車很麻煩',
    choices: [23, 24, 25],
  },
  {
    index: 21,
    question: '煩什麼？是醜女才要擔心淋雨原形畢露吧',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 22,
    question: '對啊，後來搭計程車還把公司資料忘在車上',
    response: '太衰了吧，不過你是上班族喔',
    choices: [29, 30, 31],
  },
  {
    index: 23,
    question: '真的耶，台北雨天還有捷運可以搭',
    response: '新竹還是要騎車比較方便',
    choices: [26, 27, 28],
  },
  {
    index: 24,
    question: '是喔，我前女友就滿喜歡雨天的',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 25,
    question: '那就不要騎車啊，傻嗎？',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 26,
    question: '聽說往台北的客運比往新竹市區的公車還容易等到XD',
    response: '哈哈哈，原來已經傳遍全台了？',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 27,
    question: '但是安全還是比較重要啦，以後下雨就不要騎車了',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 28,
    question: '有沒有考慮搬來台北當我女友啊',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 29,
    question: '對啊，本人肥宅工程師，你呢？',
    response: '我還是學生，不過最近開始在實習',
    choices: [32, 33, 34],
  },
  {
    index: 30,
    question: '你不會是學生吧，我其實不是想找學生啦',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 31,
    question: '剛被女友甩的上班族，上來尋找新戀情',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 32,
    question: '突然有個固定上班的時間應該滿辛苦的吧？',
    response: '還好欸，我覺得可以學到滿多東西的',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 33,
    question: '幹嘛去實習？實習根本都沒什麼用',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 34,
    question: '啊不就好棒棒',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 35,
    question: '對啊，來自美食之都',
    response: '是喔！我超愛吃的！在地人有推薦什麼美食嗎?',
    choices: [38, 39, 40],
  },
  {
    index: 36,
    question: '我北漂金城武',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 37,
    question: '你也是？既然有緣分不如見一面？',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 38,
    question: '我先了解你偏好的食物類型再推薦比較不會漏氣XD',
    response: '我想去吃小吃類，甜食也可以',
    choices: [41, 42, 43],
  },
  {
    index: 39,
    question: '自己網路查查就有啦',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 40,
    question: '火車站附近有一間沒有名字的小吃店吃過嗎？',
    response: '沒耶，我比較喜歡那種有甜點有咖啡的店',
    choices: [47, 48, 49],
  },
  {
    index: 41,
    question: '最近有一間新開的蛋糕店，上次回家去買覺得很不錯',
    response: '沒耶，我比較喜歡那種有甜點有咖啡的店',
    choices: [44, 45, 46],
  },
  {
    index: 42,
    question: '吃甜食會胖吧，小吃也有分類別啊',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 43,
    question: '單身的話就約啊，我親自帶你去吃',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 44,
    question: '我跟你講的不同家啦，不過看來你很有研究，這下要好好推薦了',
    response: '我真的是有在研究，不然來交叉比對我們的口袋名單好了',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 45,
    question: '哪是啊，少在那邊不懂裝懂',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 46,
    question: '太隨波逐流了吧，觀光客才吃那家',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 47,
    question: '甜點類我也有口袋名單，我整理一下傳給你',
    response: '有可以宅配的更好，不然不知道什麼時候才能去吃',
    choices: [],
  },
  {
    index: 48,
    question: '那幹嘛還叫我推薦',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 49,
    question: '你就是想吃那種排一堆人又難吃的網美店嘛',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 50,
    question: '下次有機會來玩的話，讓我盡一下地主之誼',
    response: '好啊，感覺可以吃到一些網路紅店以外的店',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 51,
    question: '缺男友嗎？我把自己宅配過去好了',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 52,
    question: '哇，都要推薦給你了還有得挑喔',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 53,
    question: '花栗鼠，忘記哪個卡通裡面那隻',
    response: `我知道你在講哪隻⋯⋯超多人都說我像⋯⋯`,
    choices: [56, 57, 58],
  },
  {
    index: 54,
    question: '貓咪啊，感覺你很喜歡動物？',
    response: '還滿喜歡的啊，剛好最愛貓',
    choices: [83, 84, 85],
  },
  {
    index: 55,
    question: '馬，臉有點長',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 56,
    question: '但看起來不會胖啦',
    response: '我很認真在瘦啊',
    choices: [59, 60, 61],
  },
  {
    index: 57,
    question: '幹嘛一副無奈的樣子，滿可愛的啊',
    response: '已放棄臉嬰兒肥的部分，只好減體脂',
    choices: [68, 69, 70],
  },
  {
    index: 58,
    question: '你兩頰也太圓了吧，是多會吃',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 59,
    question: '我是說看起來天生瘦，你有刻意瘦？',
    response: '稍微控制飲食啊，儘量自己帶便當',
    choices: [62, 63, 64],
  },
  {
    index: 60,
    question: '這個程度你說你有認真？',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 61,
    question: '提醒一下，女生瘦也要瘦對地方喔',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 62,
    question: '自己煮喔，也太強了吧',
    response: '就稍微料理一下啦，我很愛加蒜頭這樣比較香',
    choices: [65, 66, 67],
  },
  {
    index: 63,
    question: '感覺就是沒什麼調味的水煮便當⋯這我不行',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 64,
    question: '是喔？能吃嗎？',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 65,
    question: '可以借看一下你的菜色嗎？我也對下廚小有興趣',
    response: '好哇，我找一下照片',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 66,
    question: '噁......吃完便當一定嘴超臭',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 67,
    question: '我也要吃～看看跟我前女友的手藝誰比較好',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 68,
    question: '你也有在運動？',
    response: '有啊，比較常自己做瑜珈，偶爾去健身房',
    choices: [71, 72, 73],
  },
  {
    index: 69,
    question: '該不會是 有在健身的金剛芭比？',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 70,
    question: '體脂怎麼減，我好像也需要',
    response: '網路上很多人都有分享秘訣，找適合自己的就好',
    choices: [77, 78, 79],
  },
  {
    index: 71,
    question: '很不錯耶，我周圍的朋友有在運動的沒幾個，都揪不到人去健身房',
    response: '我也是欸，所以才很少去健身房',
    choices: [74, 75, 76],
  },
  {
    index: 72,
    question: '那曲線應該不錯？我就是喜歡曲線好的女生',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 73,
    question: '自己做多無聊，我們可以一起練雙人瑜珈',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 74,
    question: '我常去的健身房是朋友開的，可以打折，有興趣的話下次一起去啊',
    response: '好啊，有人一起運動的話也比較不會怠惰',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 75,
    question: '什麼爛藉口，一個人也可以去啊',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 76,
    question: '一起去啊，記得穿辣一點，不然我的肌肉就白被你看了',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 77,
    question: '最近減脂好像是一種流行',
    response: '身體的狀態真的會比較好，心情也會跟著好',
    choices: [80, 81, 82],
  },
  {
    index: 78,
    question: '小氣耶 幹嘛不直接講怎麼減？',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 79,
    question: '簡單講解一下就好啦，我懶得去找',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 80,
    question: '我有朋友也熱衷減脂，但我超怕自己半途而廢',
    response: '不要想的那麼困難啦，有維持運動就好',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 81,
    question: '那麼厲害的話怎麼會到現在還單身？',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 82,
    question: '減脂傳教士？感覺只是一種跟流行',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 83,
    question: '我也是貓派的',
    response: '我有養一隻三花貓',
    choices: [86, 87, 88],
  },
  {
    index: 84,
    question: '狗狗永遠難波萬！！！',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 85,
    question: '其實我是不喜歡貓才說你像貓',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 86,
    question: '是喔！我也想養貓，可是租的房是不能養寵物的',
    response: '我是特別找可寵的套房，真的滿難找的',
    choices: [89, 90, 91],
  },
  {
    index: 87,
    question: '我是喜歡貓啦，但覺得要住一起的話有點髒',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 88,
    question: '雖然我是貓派，但我家是養狗嗚嗚',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [95, 96, 97],
  },
  {
    index: 89,
    question: '房東都是怕傢俱被弄壞吧，有教好就不會',
    response: '我其實也沒什麼在教她，她就滿乖的',
    choices: [92, 93, 94],
  },
  {
    index: 90,
    question: '嗯嗯',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 91,
    question: '你自己住嗎？想去你家看貓',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 92,
    question: '都說寵物會跟主人像，應該是一種耳濡目染',
    response: '哈哈，是在說我乖嗎？',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 93,
    question: '所以是沒家教的三花貓嗎哈哈',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 94,
    question: '很多主人都覺得寵物很乖，但其實別人不覺得耶',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 95,
    question: '為什麼那麼多女生都很愛柯基啊？',
    response: '因為腿和尾巴的短短的，有一種呆萌感',
    choices: [98, 99, 100],
  },
  {
    index: 96,
    question: '⋯愛柯基的不都是瞎妹嗎',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 97,
    question: '你的品味實在是讓我很無言',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 98,
    question: '所以擇偶條件也是呆萌感嗎？',
    response: '哈哈哈哈哈有可能喔，外表呆萌實際可靠',
    gameStatus: gameStatus.win,
    choices: [],
  },
  {
    index: 99,
    question: '啊，你不是像貓啦，是像柯基',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
  {
    index: 100,
    question: '我的腿也短短的，有一種呆萌感喔',
    response: showerCard,
    gameStatus: gameStatus.lose,
    choices: [],
  },
];

const lineMap = new Map(
  lines.map(ele => [
    ele.index,
    { ...ele, questionStatus: questionStatus.notAnswerYet },
  ])
);

export default lineMap;
