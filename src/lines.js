const showerCard = '嗯嗯，我先去洗澡';
export const gameStatus = {
  win: 1,
  lose: 0,
};

export const questionStatus = {
  continue: 1,
  notAnswerYet: 0,
};

const lines = [
  {
    index: 1,
    choices: [2, 3, 4],
  },
  {
    index: 2,
    question: '台北現在還一直在下，你住哪裡啊？',
    response: '我在新竹，現在雨已經停了',
    choices: [5, 6, 7],
  },
  {
    index: 3,
    question: '我看到你的大頭貼想到一種動物',
    response: '什麼動物啊',
    choices: [],
  },
  {
    index: 4,
    question: '安安你長得好漂亮 交個朋友嗎？',
    response: showerCard,
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
    choices: [],
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
    choices: [],
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
];

const lineMap = new Map(
  lines.map(ele => [
    ele.index,
    { ...ele, questionStatus: questionStatus.notAnswerYet },
  ])
);

export default lineMap;
