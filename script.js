/* ============================================================
   數位素養偵探社：藍色檔案夾的祕密
   Cinematic Detective Noir — Enhanced Game Engine
   ============================================================ */

/* ---------- Cache Buster ---------- */
const IMG_VER = "?v=" + Date.now();

/* ---------- Story Narratives ---------- */
const stories = [
  // 序章 story
  {
    chapter: "序章",
    title: "從校園實境到數位偵探社",
    paragraphs: [
      "送回偵探任務手冊的那個下午，圖書館角落的陽光正好落在一張老書桌上。你們把前兩節課完成的偵探任務手冊送回，交給數位素養偵探社社長——沈知夏。",
      "長達兩節課的校園實境解謎剛落幕。你們曾閱讀三句詩、推敲校園地點，在 quiz-game 中作答，也曾因答錯被鎖定三分鐘，只能重新討論線索。為了取得 PictureQR 進階提示，你們還運用文學工具箱補寫第 4 句詩。"
    ],
    dialogue: "沈知夏翻開手冊，看著你們寫下的答案，微微一笑：「校園實境解謎訓練的是肉眼觀察，但真正的數位世界裡，文字、照片、影片都可能被操弄。你們準備好了嗎？」她拿出一個藍色檔案夾，上面貼著六張便利貼，每張都寫著一個數位案件代號。",
    closing: "「記住這個詞——『然而』。它代表事情並不單純，背後可能另有隱情。看見訊息，先停一下；多方查證，保持理性。這是偵探社的第一條守則。」"
  },
  // 第一案 story
  {
    chapter: "第一案",
    title: "深夜群組的蜂鳴警報",
    paragraphs: [
      "晚上十點二十三分，你的手機震了一下。海山國小家長群組彈出一則訊息，滿是驚嘆號和警告符號。你揉揉眼睛，訊息寫著：有人明天早上會帶凶器到校門口。",
      "群組瞬間炸開。有人說「快轉傳給所有人」，有人說「明天不要讓孩子上學」。恐慌像野火一樣蔓延。你想起沈知夏說的「然而」——然而，這則訊息的來源是誰？消息可靠嗎？"
    ],
    dialogue: "沈知夏的聲音在你腦海中響起：「恐慌訊息有三個特徵——模糊的時間、誇張的威脅、還有讓你不轉就有罪惡感的道德綁架。冷靜下來，對照官方來源。」",
    closing: "你打開學校官網和警方公告，開始逐字比對。左邊是爆料文本，右邊是官方通報。真相就藏在字裡行間。"
  },
  // 第二案 story
  {
    chapter: "第二案",
    title: "長得很像真的釣魚迷宮",
    paragraphs: [
      "午休時間，學弟興奮地跑來：「學長學姐！N1KE 在送免費球鞋！填個資料就能抽！」他秀出手機螢幕上一個設計精美的網頁——漂亮的球鞋照片、倒數計時器、還有一堆「已中獎」的截圖。",
      "你湊近一看，網址是 www.n1ke-giveaway-free.top。頁面要求填寫的資料從姓名、手機、導師姓名、家長電話、住宅地址，一直到身分證字號。頁面下方有個安全標章，但點不動。"
    ],
    dialogue: "沈知夏曾經說過：「天底下沒有白吃的午餐，如果有，那午餐裡一定埋著魚鉤。注意看網址——n1ke 不是 nike，.top 不是 .com。一個領鞋活動，為什麼需要你的身分證字號？」",
    closing: "你決定幫學弟做一次個資風險分類，讓他看清楚哪些資料可以填、哪些絕對不行。"
  },
  // 第三案 story
  {
    chapter: "第三案",
    title: "數位偵探的武器箱",
    paragraphs: [
      "放學後，你收到阿公轉傳的 LINE 訊息：「下個月起所有機車沒裝新型排氣偵測器，一律重罰一萬元！」底下還附了一張看起來像公文的圖片。另一則來自阿姨：「空腹喝苦瓜水加檸檬可以根治糖尿病，連化療都不用做。」",
      "你知道這些很可能是假消息，但要怎麼查證？用什麼工具？沈知夏打開偵探社的武器箱，裡面有三個查核利器。"
    ],
    dialogue: "「不同的謠言要交給不同的武器。公共政策類的，查官方與專業查核機構；健康偏方類的，交給常見謠言資料庫。記住，選對工具才能事半功倍。」",
    closing: "台灣事實查核中心 TFC、Cofacts 真的假的、MyGoPen 麥擱騙——三把武器已備妥。這次，你要把武器拖進流言目標框裡，為每條謠言指派最適合的查核工具。"
  },
  // 第四、五案 story
  {
    chapter: "第四、五案",
    title: "時空錯亂的照片與圖片鑑識桌",
    paragraphs: [
      "班級社群突然有人分享一張照片，說是「今天下午一點半學校後門校外人士鬧事」。照片裡有煙霧、翻倒的車、一群黑衣人——看起來驚心動魄。",
      "然而，你把照片攤在鑑識桌上，注意到幾個奇怪的細節：放大鏡下的場記板寫著「RAVENSWOOD・SCENE 17B・TAKE 3・06/14/22」；旁邊的報紙頭條是「動作片拍攝造成交通中斷」，日期 2022 年 6 月；藍色校門招牌寫的根本不是海山國小，而是「RAVENSWOOD HIGH SCHOOL」；那群黑衣人其實是操作攝影機與燈光的劇組人員。照片是真的——但故事是假的。"
    ],
    dialogue: "沈知夏拿出放大鏡：「有圖不等於有真相。照片可能是真照片，但文字脈絡被移花接木。找出場記板、原始來源、校名與器材——真相就在細節裡。」",
    closing: "你坐到圖片鑑識桌前，開始逐一標記照片上的關鍵鑑識點。"
  },
  // 第六案 story
  {
    chapter: "第六案",
    title: "AI 深偽與社群來源標記",
    paragraphs: [
      "全校班級社群突然瘋傳一段影片——校長宣布取消所有社團活動和下課時間，強制留校到傍晚六點。影片中的校長表情嚴肅、聲音清晰、嘴型也對得上。同學們群情激憤，有人已經開始打電話給家長。",
      "但你打開沙盒分析工具，發現了不尋常的數據：檔名包含 generated、帳號是今天才創建的、元數據裡標記著 AI-Generated-Flag: True。更仔細看，影片中校長每分鐘只眨 2 次眼，嘴唇邊緣有像素鋸齒。"
    ],
    dialogue: "沈知夏的眼神變得嚴肅：「AI 深偽技術越來越強大。現在連影片和聲音都可能被生成。記住——使用 AI 模擬他人聲音或影像，必須取得當事人知情同意並明確標註 AI 生成，否則就是蓄意誤導。」",
    closing: "你打開終端分析介面，準備逐行檢視影片的元數據，找出拆穿深偽的關鍵證據。"
  },
  // 第七案 story
  {
    chapter: "第七案",
    title: "留言之前與隱形的校園刀刃",
    paragraphs: [
      "校內匿名留言板出現了一張偷拍照——林同學站在輔導室門口，眼眶紅紅的。標題寫著「作弊被抓哭成這樣」。留言區已經開始嘲諷，有人肉搜出她的社群帳號，有人用各種方式圍攻她。",
      "然而，輔導室核實紀錄顯示：林同學是因為爺爺病逝而情緒崩潰，這週學校根本沒有任何作弊懲處紀錄。一個因失去親人而悲傷的孩子，卻被網路暴力推入更深的深淵。"
    ],
    dialogue: "沈知夏的聲音帶著一絲沉痛：「文字和點讚是會傷人的。現在你們要做的，不是加入戰局、不是轉傳圍觀，而是阻斷霸凌。每一個選擇都有重量。」",
    closing: "你面前有三個行動維度：網路戰鬥值、隱私保護值、官方協助值。100% 的行動力，你要怎麼分配？"
  }
];

/* ---------- Stage Data ---------- */
const stages = [
  {
    type: "intro",
    num: "序章",
    title: "從校園實境到數位偵探社",
    img: "assets/hero.png",
    caption: "你們把前兩節課完成的偵探任務手冊送回圖書館角落，交給數位素養偵探社社長沈知夏。",
    news: "長達兩節課的校園實境解謎剛落幕。你們曾閱讀三句詩、推敲校園地點，在 quiz-game 中作答，也曾因答錯被鎖定三分鐘，只能重新討論線索。為了取得 PictureQR 進階提示，你們還運用文學工具箱補寫第 4 句詩。當你們把手冊交給沈知夏時，她提醒：校園實境解謎訓練的是肉眼觀察，但真正的數位世界裡，文字、照片、影片都可能被操弄。",
    mission: "任務：確認你已用「然而」解開初始密語，準備進入藍色檔案夾的數位案件。",
    prompt: "沈知夏說：「然而」代表事情並不單純，背後可能另有隱情。看見訊息，先停一下；多方查證，保持理性。"
  },
  {
    type: "clues",
    num: "第一案",
    title: "深夜群組的蜂鳴警報",
    img: "assets/case-message.png",
    caption: "玩法：社交工程・情緒代碼抓漏。左右對照爆料文本與官方通報，圈出情緒操弄字眼。",
    newsLeft: {
      label: "爆料文本",
      html: '🚨海山國小全校緊急互助！攸關性命<span class="highlight-word" data-key="rush">請立刻轉傳</span>！！剛剛收到<span class="highlight-word" data-key="source">內部絕對可靠的管道消息</span>！<span class="highlight-word" data-key="time">明天早上</span>校門口會出現一個身穿<span class="highlight-word" data-key="coat">黑皮衣</span>、手持危險尖銳凶器的可疑中年男子！如果你看見了這則警報卻不轉傳，<span class="highlight-word" data-key="guilt">就是在害你的同學陷入危險</span>！'
    },
    newsRight: {
      label: "官方通報",
      html: '校警隊 22:00–06:00 巡邏與監視器皆無異常。警方提醒：萬年罐頭恐慌訊息常見五大手法——❶ <em>模糊時間</em>（不給具體日期，讓人無法求證）、❷ <em>匿名可靠消息來源</em>（聲稱來自「內部管道」卻無法驗證）、❸ <em>催促轉傳</em>（製造急迫感壓縮思考時間）、❹ <em>誇大細節描述</em>（用鮮明畫面刺激恐懼）、❺ <em>罪惡感威脅</em>（不轉就是害人，進行道德綁架）。其中❶和❺屬於「情緒操弄」——直接利用讀者情感來癱瘓理性判斷。收到類似訊息，請先向學校或警方查證，勿盲目轉傳。'
    },
    news: "左側爆料寫著：『🚨海山國小全校緊急互助！攸關性命請立刻轉傳！！』右側官方通報指出：校警隊巡邏與監視器皆無異常。警方提醒恐慌訊息常見五大手法：❶模糊時間、❷匿名可靠消息來源、❸催促轉傳、❹誇大細節描述、❺罪惡感威脅。其中❶和❺屬於「情緒操弄」——直接利用讀者情感癱瘓理性判斷。",
    mission: "任務：在左側爆料文本中，點出 2 個最能對應警方通報的情緒操弄字眼。",
    correctKeys: ["time", "guilt"],
    targetCount: 2,
    items: [
      { text: "明天早上", ok: true },
      { text: "在害你的同學", ok: true },
      { text: "黑皮衣", ok: false },
      { text: "流浪狗三隻", ok: false },
      { text: "學校高層", ok: false }
    ],
    success: "查證報告通過。你們找出「明天早上」的模糊時間，以及「在害你的同學」的道德綁架。沈知夏提醒：恐慌訊息最怕讀者停下來對照來源。"
  },
  {
    type: "sort",
    num: "第二案",
    title: "長得很像真的釣魚迷宮",
    img: "assets/case-website.png",
    caption: "玩法：網址微觀除錯與個資防線矩陣。漂亮頁面不等於可信來源。",
    news: '學弟傳來 N1KE 贈鞋網站：<strong>www.n1ke-giveaway-free.top</strong>。活動須知聲稱由「全球潮流體育文化多元推廣基金會」主辦，並要求填寫：<strong>真實姓名</strong>、<strong>手機號碼</strong>、<strong>導師姓名</strong>、<strong>家長電話</strong>、<strong>住宅地址</strong>與<strong>身分證字號</strong>。頁面下方還有無法點擊驗證的安全標章。沈知夏說：天底下沒有白吃的午餐，如果有，那午餐裡一定埋著魚鉤。',
    mission: "任務：把下方的個資卡片拖進正確的風險分類。補充線索：該釣魚網站使用的頂級網域是 .top。",
    bins: [
      { id: "reasonable", label: "合理索取" },
      { id: "risky", label: "過度索取（高風險）" },
      { id: "danger", label: "危險個資（絕不可填）" }
    ],
    items: [
      { text: "真實姓名", bin: "reasonable" },
      { text: "手機號碼", bin: "reasonable" },
      { text: "導師姓名", bin: "risky" },
      { text: "家長電話", bin: "risky" },
      { text: "住宅地址", bin: "risky", altBin: "reasonable",
        feedbackReasonable: "答對了！因為要寄送實體球鞋，提供地址是合理的。但要小心，釣魚網站常利用「寄送獎品」當誘餌，填寫前還是要先確認網站的真實性喔！",
        feedbackRisky: "答對了！你非常有警覺心！雖然寄獎品需要地址，但在沒確認這是不是官方網站前，隨便給出家裡地址確實屬於高風險行為！"
      },
      { text: "身分證字號", bin: "danger" }
    ],
    success: "防護網啟動。你們守住了個資最小化原則：領獎不該索取身分證字號、家長電話與住址。網址中的 n1ke 與 .top 也是釣魚警訊。"
  },
  {
    type: "flip",
    num: "第三案",
    title: "數位偵探的武器箱",
    img: "assets/case-algorithm.png",
    caption: "玩法：翻牌配對・事實查核武器分流。不同謠言要交給適合的查核工具。",
    news: '長輩 LINE 群組瘋傳兩則訊息——<br><strong>流言 A：</strong>「下個月起所有機車沒裝新型排氣偵測器，一律重罰一萬元！」<br><strong>流言 B：</strong>「空腹喝苦瓜水加檸檬可以根治糖尿病，連化療都不用做。」<br><strong>流言 C：</strong>LINE 群組轉傳的罐頭謠言，需要備查紀錄。<br><br><strong>🎒 數位偵探武器箱——官方認證裝備庫</strong><br>1. <strong>台灣事實查核中心 (TFC)</strong>｜🌐 tfc-taiwan.org.tw｜國際認證的專業記者團隊，專門調查重大公共政策、法律、大型社會事件。<br>2. <strong>Cofacts 真的假的</strong>｜🌐 cofacts.tw｜群眾外包的 LINE 轉傳查證機器人，後台有成千上萬名志工幫忙標記罐頭流言。<br>3. <strong>MyGoPen 麥擱騙</strong>｜🌐 mygopen.com｜口號「抗老化、抗謠言」，專門對付通訊軟體上的健康養生偏方與長輩圖。',
    mission: "任務：點選卡牌翻面，將流言與對應的查核工具配對。每次翻兩張，配對成功會保持翻開。",
    pairs: [
      { group: "a", rumor: "流言 A\n機車新法重罰一萬", tool: "TFC\n事實查核中心" },
      { group: "b", rumor: "流言 B\n苦瓜水根治糖尿病", tool: "MyGoPen\n麥擱騙" },
      { group: "c", rumor: "流言 C\nLINE 罐頭謠言備查", tool: "Cofacts\n真的假的" }
    ],
    success: "武器指派完成。重大政策要查政府官方網站與專業查核報告；健康偏方不可取代醫療，應交由查核平台與專業資料比對；LINE 轉傳訊息可用 Cofacts 群眾協作查核。"
  },
  {
    type: "hotspot",
    num: "第四、五案",
    title: "時空錯亂的照片與圖片鑑識桌",
    img: "assets/case-photo.png",
    caption: "玩法：圖片微觀找碴與多文本時空鎖。「有圖」不等於「有真相」。",
    news: "班級社群爆料稱：今天下午 13:30，學校後門有校外人士鬧事，黑衣人砸車、煙霧瀰漫、車輛翻覆，校方封鎖消息！但偵探桌上的證物透露端倪：場記板寫著「RAVENSWOOD・SCENE 17B・TAKE 3・DATE 06/14/22」；右側《Bayview Daily Herald》報紙頭條是「ACTION FILM SHOOT DISRUPTS TRAFFIC（動作片拍攝造成交通中斷）」，日期 2022/6/14；藍色招牌寫的是「RAVENSWOOD HIGH SCHOOL」根本不是海山國小；現場那群「黑衣人」其實是穿著劇組制服、操作攝影機與燈光器材的工作人員。照片是真的，但「今天、海山國小、鬧事」這個脈絡是假的。",
    mission: "任務：在照片上找出 4 個鑑識點，破解時空鎖。正確結論：這是 2022 年 6 月「RAVENSWOOD」電影的拍攝現場，不是今天海山國小的鬧事。",
    hotspots: [
      { x: 58, y: 56, label: "場記板 2022" },
      { x: 87, y: 44, label: "電影報導" },
      { x: 30, y: 38, label: "校名不符" },
      { x: 53, y: 33, label: "劇組人員" }
    ],
    success: "闢謠成功！這不是今天海山國小的校外人士鬧事——四個鑑識點全部指向同一個真相：這是 2022 年 6 月電影《RAVENSWOOD》在另一所學校拍攝的動作戲。場記板的拍攝日期、報紙的電影報導、不符的校名招牌、操作器材的劇組人員，都證明造謠者把一張舊的劇照配上假脈絡，讓真照片說出假故事。記住：有圖不等於有真相。"
  },
  {
    type: "terminal",
    num: "第六案",
    title: "AI 深偽與社群來源標記",
    img: "assets/case-deepfake.png",
    caption: "玩法：深度偽造辨識與數位來源標記。現在連影片與聲音都可能被生成。",
    news: '【突發爆料！海山國小重大影音快報！】同學們快看！剛剛瘋傳的校長宣布影片！影片裡校長在中央穿堂講話，雖然聲音聽起來怪怪的、扁扁的，很像機器人在棒讀，但那確實是校長沒錯啊！仔細看影片，校長講話的時候表情超僵硬，<strong>整整講了一分鐘，眼睛卻好像瞎了一樣幾乎都沒有眨眼</strong>，看起來超級詭異！而且大家把影片放大看，<strong>當校長說到「全面取消下課」這幾個字、嘴唇閉起來又張開的時候，他的嘴唇邊緣和下巴竟然出現了像馬賽克一樣的模糊毛邊，連背景的佈告欄線條都跟著扭曲了一下！</strong>雖然影片漏洞百出，但大家都氣瘋了，根本沒人注意這些細節！大家快幫忙轉傳啊！',
    mission: "任務：在終端分析面板中，點出 2 個能拆穿深偽影片的關鍵判斷。",
    targetCount: 2,
    terminalLines: [
      { type: "comment", text: "// ===== SANDBOX ANALYSIS REPORT =====" },
      { type: "info",    text: "Filename: principal_speech_generated_final_render.mp4" },
      { type: "info",    text: "Uploader: @holy_justice_2026 (created: today 13:10)" },
      { type: "info",    text: "Followers: 0 | Posts: 1" },
      { type: "divider" },
      { type: "comment", text: "// ----- METADATA EXTRACTION -----" },
      { type: "tag",     text: "[Source: Disguised]", key: "source", ok: false },
      { type: "tag",     text: "[AI-Generated-Flag: True]", key: "ai-flag", ok: true },
      { type: "tag",     text: "[Digital-Watermark: AI-Synthesized-Content]", key: "watermark", ok: false },
      { type: "divider" },
      { type: "comment", text: "// ----- BIOMETRIC ANOMALIES -----" },
      { type: "info",    text: "Blink rate: 2/min (normal: 15-20/min)" },
      { type: "info",    text: "Lip-edge pixel artifacts detected" },
      { type: "divider" },
      { type: "comment", text: "// ----- ETHICAL ASSESSMENT -----" },
      { type: "tag",     text: "取得當事人知情同意並明確標註 AI 生成", key: "consent", ok: true },
      { type: "tag",     text: "影片看起來很清楚所以一定是真的", key: "fake-clear", ok: false },
      { type: "tag",     text: "為了正義可以用 AI 編造影片", key: "fake-justice", ok: false },
      { type: "tag",     text: "新帳號粉絲數 0 不需要理會", key: "fake-ignore", ok: false },
      { type: "comment", text: "// ===== END OF REPORT =====" }
    ],
    success: "AI 偽造標籤已解碼。沈知夏提醒：使用 AI 模擬他人聲音或影像，必須取得知情同意並標註來源，不可蓄意誤導大眾。"
  },
  {
    type: "balance",
    num: "第七案",
    title: "留言之前與隱形的校園刀刃",
    img: "assets/case-response.png",
    caption: "玩法：同理心與理性・行動值平衡矩陣。你的選擇會決定傷害是否繼續擴大。",
    news: "校內留言板偷拍林同學在輔導室門口哭泣，標題惡意造謠她作弊被抓。留言區開始嘲諷、肉搜、公開社群帳號。右側輔導室核實紀錄顯示：林同學是因爺爺病逝而情緒崩潰，學校本週也沒有任何作弊懲處紀錄。沈知夏說：文字和點讚是會傷人的。現在要阻斷霸凌，而不是增加熱度。",
    mission: "任務：分配 100% 行動值。鐵律：網路戰鬥值必須 0%（對嗆只會拉高熱度）。隱私保護值與官方協助值各至少 30%，兩者加總 100% 即可通關。",
    successPrivacy: "🏆 解鎖【隱形防護罩結局】：你們選擇將主要精力放在不轉傳、不點讚，並發動集體檢舉。這成功切斷了謠言的擴散鏈，讓惡意貼文因為沒有熱度而沉沒。林同學在一個安靜的網絡環境中得到了保護，校方隨後也順利介入處理。你們是優秀的隱形守護者！",
    successOfficial: "🏆 解鎖【正義雷達兵結局】：你們選擇第一時間截圖存證，並全力尋求學務處與輔導老師的官方協助。校方迅速啟動危機處理機制，直接施壓論壇下架貼文，並對林同學展開實體保護。你們運用體制力量精準阻斷了霸凌，做得太棒了！",
    successBalanced: "🏆 行動成功！你們均衡運用隱私保護與官方協助，雙管齊下。一邊檢舉肉搜、不轉傳不點讚切斷擴散鏈；一邊截圖存證通報學務處與輔導室。理性與同理心阻斷了一場校園網路霸凌。"
  }
];

const ranks = [
  { min: 250, label: "數位素養總探長" },
  { min: 220, label: "冷靜判讀者" },
  { min: 185, label: "查證偵探" },
  { min: 140, label: "線索整理員" },
  { min: 0, label: "見習偵探" }
];

/* ---------- State ---------- */
const state = {
  score: 100,
  stage: 0,
  maxUnlocked: 0,
  playerName: "",
  solved: new Set(),
  selectedChip: null,
  selectedClues: new Set(),
  selectedTerminalTags: new Set(),
  sort: {},
  sortPlacements: {},
  sequence: [],
  hotspots: new Set(),
  balance: { battle: 35, privacy: 35, official: 30 }
};

/* ---------- DOM refs ---------- */
const stageEl = document.querySelector("#stage");
const coverScreen = document.querySelector("#coverScreen");
const gameApp = document.querySelector("#gameApp");
const coverName = document.querySelector("#coverName");
const coverHint = document.querySelector("#coverHint");
const scoreEl = document.querySelector("#score");
const rankEl = document.querySelector("#rank");
const nameEl = document.querySelector("#playerName");
const hintBtn = document.querySelector("#hintBtn");
const progressSteps = document.querySelector("#progressSteps");
const progressLabels = ["序章", "第一案", "第二案", "第三案", "第四五案", "第六案", "第七案", "終章"];

/* ---------- Helpers ---------- */
function rankFor(score) {
  return ranks.find(r => score >= r.min).label;
}

function updateHeader() {
  scoreEl.textContent = state.score;
  rankEl.textContent = rankFor(state.score);
  if (document.activeElement !== nameEl) nameEl.value = state.playerName;
  renderProgress();
}

function renderProgress() {
  progressSteps.innerHTML = progressLabels.map((label, index) => {
    const cls = index === state.stage ? "current" : index < state.stage ? "done" : "";
    return `<div class="progress-step ${cls}">${label}</div>`;
  }).join("");
}

function award(points, key) {
  if (state.solved.has(key)) return;
  state.solved.add(key);
  state.maxUnlocked = Math.max(state.maxUnlocked, state.stage + 1);
  state.score = Math.max(0, state.score + points);
  updateHeader();
}

function requiredSolvedKey(index = state.stage) {
  const s = stages[index];
  if (!s || s.type === "intro") return "";
  return `stage${index}`;
}

function feedback(text) {
  const el = document.querySelector("#feedback");
  if (el) el.textContent = text;
}

/* ---------- Image Splash ---------- */
function showImageSplash(s, onClose) {
  stageEl.innerHTML = `
    <div class="game-scene" style="--scene-img: url('${s.img}${IMG_VER}')">
      <div class="scene-shade scene-shade--splash"></div>
      <div class="splash-content">
        <p class="splash-num">${s.num}</p>
        <h2 class="splash-title">${s.title}</h2>
        <p class="splash-caption">${s.caption}</p>
        <button class="primary-btn splash-btn" type="button">開始解謎</button>
      </div>
    </div>
  `;
  document.querySelector(".splash-btn").addEventListener("click", () => {
    onClose();
  });
}

/* ---------- Story Overlay ---------- */
function showStory(storyIndex, onClose) {
  const story = stories[storyIndex];
  if (!story) { if (onClose) onClose(); return; }

  const overlay = document.createElement("div");
  overlay.className = "story-overlay";
  overlay.innerHTML = `
    <div class="story-content">
      <p class="story-chapter">${story.chapter}</p>
      <h2 class="story-title">${story.title}</h2>
      <div class="story-text">
        ${story.paragraphs.map(p => `<p>${p}</p>`).join("")}
        ${story.dialogue ? `<blockquote class="story-dialogue">${story.dialogue}</blockquote>` : ""}
        ${story.closing ? `<p>${story.closing}</p>` : ""}
      </div>
      <button class="story-close" type="button">開始調查</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector(".story-close").addEventListener("click", () => {
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.4s ease";
    setTimeout(() => {
      overlay.remove();
      if (onClose) onClose();
    }, 400);
  });
}

/* ---------- Fade Transition ---------- */
function fadeTransition(callback) {
  stageEl.style.opacity = "0";
  stageEl.style.transition = "opacity 0.35s ease";
  setTimeout(() => {
    callback();
    stageEl.style.opacity = "1";
  }, 350);
}

/* ---------- Case Text Overlay ---------- */
function showCaseText(stageIndex) {
  const s = stages[stageIndex];
  if (!s) return;
  const overlay = document.createElement("div");
  overlay.className = "story-overlay";
  overlay.innerHTML = `
    <div class="story-content">
      <p class="story-chapter">${s.num}</p>
      <h2 class="story-title">${s.title}</h2>
      <div class="story-text">
        <p style="text-indent:0"><strong>玩法：</strong>${s.caption}</p>
        <hr style="border:0;border-top:1px solid var(--gold-dim);margin:12px 0">
        <p style="text-indent:0">${s.news}</p>
      </div>
      <button class="story-close" type="button">回到解題</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector(".story-close").addEventListener("click", () => {
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.4s ease";
    setTimeout(() => overlay.remove(), 400);
  });
}

/* ---------- Render Frame ---------- */
function renderFrame(s, inner) {
  stageEl.innerHTML = `
    <div class="game-scene" style="--scene-img: url('${s.img}${IMG_VER}')">
      <div class="scene-shade scene-shade--light"></div>
      <header class="scene-hud">
        <strong>${s.num}：${s.title}</strong>
        <span>偵探素養 ${state.score}</span>
      </header>
      <article class="scene-panel scene-panel--compact">
        <div class="panel-toolbar">
          <button class="read-story-btn" type="button" onclick="showStory(${state.stage})">📖 劇情</button>
          <button class="read-story-btn" type="button" onclick="showCaseText(${state.stage})">📋 案例資料</button>
        </div>
        <p class="mission">${s.mission}</p>
        ${inner}
        <p class="feedback" id="feedback"></p>
        <div class="next-row">
          <button class="primary-btn" type="button" onclick="goNext()">下一頁</button>
        </div>
      </article>
    </div>
  `;
}

/* ---------- Render Stage ---------- */
function renderStage(index) {
  state.stage = index;
  state.selectedChip = null;
  updateHeader();

  if (index >= stages.length) {
    fadeTransition(() => renderCertificate());
    return;
  }

  const s = stages[index];

  // Show story overlay first, then image splash, then puzzle
  const doRender = () => {
    fadeTransition(() => {
      if (s.type !== "intro" && s.img) {
        showImageSplash(s, () => renderStageContent(index));
      } else {
        renderStageContent(index);
      }
    });
  };

  // Only show story for first visit
  if (!state.solved.has(`story${index}`) && stories[index]) {
    state.solved.add(`story${index}`);
    showStory(index, doRender);
  } else {
    doRender();
  }
}

function renderStageContent(index) {
  const s = stages[index];

  if (s.type === "intro") {
    renderFrame(s, `
      <p>${s.prompt}</p>
      <button class="primary-btn" type="button" onclick="goNext()">打開藍色檔案夾</button>
    `);
    return;
  }

  if (s.type === "clues") {
    state.selectedClues.clear();
    // Dual panel for Case 1
    if (s.newsLeft) {
      renderDualPanelClues(s);
    } else {
      renderFrame(s, `
        <div class="tools">${s.items.map((item, i) => `<button class="tool" type="button" data-i="${i}">${item.text}</button>`).join("")}</div>
        <button class="primary-btn" type="button" onclick="validateCluesStage()">送出判斷</button>
      `);
      document.querySelectorAll(".tool").forEach(btn => btn.addEventListener("click", () => chooseClue(btn)));
    }
    return;
  }

  if (s.type === "terminal") {
    state.selectedTerminalTags.clear();
    renderTerminalStage(s);
    return;
  }

  if (s.type === "flip") {
    state.flip = { cards: [], flipped: [], matched: [], busy: false };
    // Build card array: each pair -> 1 rumor card + 1 tool card
    const cards = [];
    s.pairs.forEach(p => {
      cards.push({ group: p.group, side: "rumor", face: p.rumor });
      cards.push({ group: p.group, side: "tool",  face: p.tool });
    });
    // Shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    state.flip.cards = cards;

    const gridHTML = cards.map((c, i) => `
      <div class="flip-card" data-i="${i}" onclick="flipCard(${i})">
        <div class="flip-card-inner">
          <div class="flip-card-back">🔍</div>
          <div class="flip-card-front ${c.side === 'rumor' ? 'flip-rumor' : 'flip-tool'}">${c.face.replace(/\n/g, '<br>')}</div>
        </div>
      </div>
    `).join("");

    renderFrame(s, `
      <p class="flip-hint">點選卡牌翻面，找出流言與查核工具的配對。</p>
      <div class="flip-grid">${gridHTML}</div>
    `);
    return;
  }

  if (s.type === "sort") {
    state.sort = {};
    state.sortPlacements = {};
    renderFrame(s, `
      <div class="chips" id="chipPool">${s.items.map((item, i) => `<button class="chip" type="button" draggable="true" data-i="${i}">${item.text}</button>`).join("")}</div>
      <div class="bins">${s.bins.map(bin => `<div class="bin" role="button" tabindex="0" data-bin="${bin.id}"><strong>${bin.label}</strong><div></div></div>`).join("")}</div>
      <button class="primary-btn" type="button" onclick="validateSortStage()">確認分類</button>
    `);
    document.querySelectorAll(".chip").forEach(btn => btn.addEventListener("click", () => selectChip(btn)));
    document.querySelectorAll(".chip").forEach(btn => {
      btn.addEventListener("dragstart", event => dragChip(event, btn));
      btn.addEventListener("dragend", () => btn.classList.remove("dragging"));
    });
    document.querySelectorAll(".bin").forEach(bin => {
      bin.addEventListener("click", () => placeChip(bin));
      bin.addEventListener("dragover", event => { event.preventDefault(); bin.classList.add("drag-over"); });
      bin.addEventListener("dragleave", () => bin.classList.remove("drag-over"));
      bin.addEventListener("drop", event => dropChip(event, bin));
    });
    return;
  }

  if (s.type === "hotspot") {
    renderFrame(s, `
      <div class="photo-board" id="photoBoard">
        <img src="${s.img}${IMG_VER}" alt="圖片鑑識桌">
        ${s.hotspots.map((h, i) => `<div class="hotspot hotspot-hidden" style="left:${h.x}%;top:${h.y}%;" data-i="${i}"></div>`).join("")}
      </div>
      <p class="hotspot-guide">🔍 請仔細觀察照片，對照案例資料中的線索，點擊照片中你認為可疑的區域。點錯會扣分！</p>
      <p id="hotspotProgress" class="hotspot-guide" style="color:var(--gold);">已找到 0 / ${s.hotspots.length} 個鑑識點</p>
    `);
    state.hotspots.clear();
    document.getElementById("photoBoard").addEventListener("click", (e) => handlePhotoClick(e, s));
    return;
  }

  if (s.type === "balance") {
    state.balance = { battle: 35, privacy: 35, official: 30 };
    renderFrame(s, `
      <div class="meters">
        <div class="meter">
          <label>網路戰鬥值：加入戰局、對嗆酸民
            <input type="range" min="0" max="100" step="10" value="${state.balance.battle}" data-balance="battle">
          </label>
          <strong id="balance-battle">${state.balance.battle}%</strong>
        </div>
        <div class="meter">
          <label>隱私保護值：不轉發、不點讚、舉報肉搜
            <input type="range" min="0" max="100" step="10" value="${state.balance.privacy}" data-balance="privacy">
          </label>
          <strong id="balance-privacy">${state.balance.privacy}%</strong>
        </div>
        <div class="meter">
          <label>官方協助值：截圖存證，通報學務處與輔導室
            <input type="range" min="0" max="100" step="10" value="${state.balance.official}" data-balance="official">
          </label>
          <strong id="balance-official">${state.balance.official}%</strong>
        </div>
      </div>
      <button class="primary-btn" type="button" onclick="validateBalanceStage()">執行正義決策</button>
    `);
    document.querySelectorAll("input[data-balance]").forEach(input => {
      input.addEventListener("input", () => updateBalance(input));
    });
    return;
  }
}

/* ---------- Dual Panel Clues (Case 1) ---------- */
function renderDualPanelClues(s) {
  stageEl.innerHTML = `
    <div class="game-scene" style="--scene-img: url('${s.img}${IMG_VER}')">
      <div class="scene-shade scene-shade--light"></div>
      <header class="scene-hud">
        <strong>${s.num}：${s.title}</strong>
        <span>偵探素養 ${state.score}</span>
      </header>
      <article class="scene-panel scene-panel--compact">
        <div class="panel-toolbar">
          <button class="read-story-btn" type="button" onclick="showStory(${state.stage})">📖 劇情</button>
          <button class="read-story-btn" type="button" onclick="showCaseText(${state.stage})">📋 案例資料</button>
        </div>
        <p class="mission">${s.mission}</p>
        <div class="dual-panel">
          <div class="dual-left">
            <h4>${s.newsLeft.label}</h4>
            <p>${s.newsLeft.html}</p>
          </div>
          <div class="dual-right">
            <h4>${s.newsRight.label}</h4>
            <p>${s.newsRight.html}</p>
          </div>
        </div>
        <button class="primary-btn" type="button" onclick="validateDualClues()">送出判斷</button>
        <p class="feedback" id="feedback"></p>
        <div class="next-row">
          <button class="primary-btn" type="button" onclick="goNext()">下一頁</button>
        </div>
      </article>
    </div>
  `;
  // Bind highlight-word clicks
  document.querySelectorAll(".highlight-word").forEach(word => {
    word.addEventListener("click", () => toggleHighlightWord(word));
  });
}

function toggleHighlightWord(word) {
  const key = word.dataset.key;
  if (state.selectedClues.has(key)) {
    state.selectedClues.delete(key);
    word.classList.remove("selected");
  } else {
    state.selectedClues.add(key);
    word.classList.add("selected");
  }
  feedback(`已選取 ${state.selectedClues.size} 個情緒操弄字眼。確認後請按「送出判斷」。`);
}

function validateDualClues() {
  const s = stages[state.stage];
  const selected = [...state.selectedClues];
  const correct = selected.length === s.targetCount && selected.every(k => s.correctKeys.includes(k));

  document.querySelectorAll(".highlight-word").forEach(w => {
    w.classList.remove("correct", "wrong");
  });

  if (correct) {
    document.querySelectorAll(".highlight-word.selected").forEach(w => {
      w.classList.add("correct");
    });
    award(30, requiredSolvedKey());
    feedback(s.success);
  } else {
    state.score = Math.max(0, state.score - 5);
    updateHeader();
    document.querySelectorAll(".highlight-word.selected").forEach(w => {
      if (!s.correctKeys.includes(w.dataset.key)) w.classList.add("wrong");
    });
    feedback(`⚠️ 判斷尚未通過，已扣除 5 點偵探素養。請對照左右兩側，找出與警方通報對應的 ${s.targetCount} 個情緒操弄字眼。`);
  }
}

/* ---------- Terminal Stage (Case 6) ---------- */
function renderTerminalStage(s) {
  const linesHtml = s.terminalLines.map(line => {
    if (line.type === "comment") return `<div style="color:rgba(0,255,65,0.4)">${line.text}</div>`;
    if (line.type === "divider") return `<div style="color:rgba(0,255,65,0.2)">─────────────────────────────</div>`;
    if (line.type === "info") return `<div>> ${line.text}</div>`;
    if (line.type === "tag") return `<div>> <span class="code-tag" data-key="${line.key}" data-ok="${line.ok}">${line.text}</span></div>`;
    return "";
  }).join("");

  stageEl.innerHTML = `
    <div class="game-scene" style="--scene-img: url('${s.img}${IMG_VER}')">
      <div class="scene-shade scene-shade--light"></div>
      <header class="scene-hud">
        <strong>${s.num}：${s.title}</strong>
        <span>偵探素養 ${state.score}</span>
      </header>
      <article class="scene-panel scene-panel--compact">
        <div class="panel-toolbar">
          <button class="read-story-btn" type="button" onclick="showStory(${state.stage})">📖 劇情</button>
          <button class="read-story-btn" type="button" onclick="showCaseText(${state.stage})">📋 案例資料</button>
        </div>
        <p class="mission">${s.mission}</p>
        <div class="terminal-panel">
          ${linesHtml}
          <div class="cursor-blink"></div>
        </div>
        <button class="primary-btn" type="button" onclick="validateTerminalStage()">送出判斷</button>
        <p class="feedback" id="feedback"></p>
        <div class="next-row">
          <button class="primary-btn" type="button" onclick="goNext()">下一頁</button>
        </div>
      </article>
    </div>
  `;

  document.querySelectorAll(".code-tag").forEach(tag => {
    tag.addEventListener("click", () => toggleTerminalTag(tag));
  });
}

function toggleTerminalTag(tag) {
  const key = tag.dataset.key;
  if (state.selectedTerminalTags.has(key)) {
    state.selectedTerminalTags.delete(key);
    tag.classList.remove("selected");
  } else {
    state.selectedTerminalTags.add(key);
    tag.classList.add("selected");
  }
  feedback(`已選取 ${state.selectedTerminalTags.size} 個標記。確認後請按「送出判斷」。`);
}

function validateTerminalStage() {
  const s = stages[state.stage];
  const selected = [...state.selectedTerminalTags];
  const correctKeys = s.terminalLines.filter(l => l.type === "tag" && l.ok).map(l => l.key);
  const correct = selected.length === s.targetCount && selected.every(k => correctKeys.includes(k));

  document.querySelectorAll(".code-tag").forEach(t => t.classList.remove("correct", "wrong"));

  if (correct) {
    document.querySelectorAll(".code-tag.selected").forEach(t => t.classList.add("correct"));
    award(30, requiredSolvedKey());
    feedback(s.success);
  } else {
    state.score = Math.max(0, state.score - 5);
    updateHeader();
    document.querySelectorAll(".code-tag.selected").forEach(t => {
      if (t.dataset.ok !== "true") t.classList.add("wrong");
    });
    feedback(`⚠️ 判斷尚未通過，已扣除 5 點偵探素養。請從終端數據中找出 ${s.targetCount} 個能拆穿深偽影片的關鍵判斷。`);
  }
}

/* ---------- Clue Selection (fallback for non-dual stages) ---------- */
function chooseClue(btn) {
  const idx = Number(btn.dataset.i);
  if (state.selectedClues.has(idx)) {
    state.selectedClues.delete(idx);
    btn.classList.remove("active");
  } else {
    state.selectedClues.add(idx);
    btn.classList.add("active");
  }
  feedback(`已選取 ${state.selectedClues.size} 個線索。確認後請按「送出判斷」。`);
}

function validateCluesStage() {
  const s = stages[state.stage];
  const selected = [...state.selectedClues];
  const correct = selected.length === s.targetCount && selected.every(idx => s.items[idx].ok);
  document.querySelectorAll(".tool").forEach(btn => btn.classList.remove("wrong", "correct"));
  if (correct) {
    document.querySelectorAll(".tool.active").forEach(btn => {
      btn.classList.add("correct");
      btn.disabled = true;
    });
    award(30, requiredSolvedKey());
    feedback(s.success);
  } else {
    state.score = Math.max(0, state.score - 5);
    updateHeader();
    feedback(`⚠️ 判斷尚未通過，已扣除 5 點偵探素養。請重新閱讀案例與任務提示，再調整選取的線索。需要選出 ${s.targetCount} 個關鍵線索。`);
  }
}

/* ---------- Flip Card Matching ---------- */
function flipCard(i) {
  const f = state.flip;
  if (f.busy) return;
  if (f.matched.includes(i) || f.flipped.includes(i)) return;

  const card = document.querySelectorAll(".flip-card")[i];
  card.classList.add("flipped");
  f.flipped.push(i);

  if (f.flipped.length === 2) {
    f.busy = true;
    const [a, b] = f.flipped;
    const ca = f.cards[a], cb = f.cards[b];

    if (ca.group === cb.group && ca.side !== cb.side) {
      // Match!
      setTimeout(() => {
        document.querySelectorAll(".flip-card")[a].classList.add("flip-matched");
        document.querySelectorAll(".flip-card")[b].classList.add("flip-matched");
        f.matched.push(a, b);
        f.flipped = [];
        f.busy = false;
        // Check win
        if (f.matched.length === f.cards.length) {
          const s = stages[state.stage];
          award(10, `stage${state.stage}`);
          feedback(s.success);
        }
      }, 600);
    } else {
      // No match — flip back & deduct score
      state.score = Math.max(0, state.score - 5);
      updateHeader();
      setTimeout(() => {
        document.querySelectorAll(".flip-card")[a].classList.remove("flipped");
        document.querySelectorAll(".flip-card")[b].classList.remove("flipped");
        document.querySelectorAll(".flip-card")[a].classList.add("flip-wrong");
        document.querySelectorAll(".flip-card")[b].classList.add("flip-wrong");
        setTimeout(() => {
          document.querySelectorAll(".flip-card")[a].classList.remove("flip-wrong");
          document.querySelectorAll(".flip-card")[b].classList.remove("flip-wrong");
        }, 400);
        f.flipped = [];
        f.busy = false;
      }, 900);
    }
  }
}

/* ---------- Sort / Drag-Drop ---------- */
function selectChip(btn) {
  document.querySelectorAll(".chip").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  state.selectedChip = Number(btn.dataset.i);
}

function dragChip(event, btn) {
  state.selectedChip = Number(btn.dataset.i);
  btn.classList.add("dragging");
  event.dataTransfer.setData("text/plain", btn.dataset.i);
}

function dropChip(event, binBtn) {
  event.preventDefault();
  binBtn.classList.remove("drag-over");
  const idx = Number(event.dataTransfer.getData("text/plain"));
  if (!Number.isNaN(idx)) state.selectedChip = idx;
  placeChip(binBtn);
}

function placeChip(binBtn) {
  if (state.selectedChip === null) return feedback("先點選一個線索，再放進分類區。");
  const s = stages[state.stage];
  const item = s.items[state.selectedChip];
  const chip = document.querySelector(`.chip[data-i="${state.selectedChip}"]`);
  document.querySelectorAll(`.placed-chip[data-i="${state.selectedChip}"]`).forEach(el => el.remove());
  chip.classList.remove("selected");
  chip.classList.add("used");
  chip.disabled = true;
  binBtn.querySelector("div").insertAdjacentHTML("beforeend", `<span class="placed-chip" data-i="${state.selectedChip}" onclick="returnChip(${state.selectedChip})">${item.text}</span>`);
  state.sortPlacements[state.selectedChip] = binBtn.dataset.bin;
  state.selectedChip = null;
  feedback("已放入分類區。可以拖放調整，完成後按「確認分類」。");
}

function returnChip(idx) {
  delete state.sortPlacements[idx];
  document.querySelectorAll(`.placed-chip[data-i="${idx}"]`).forEach(el => el.remove());
  const chip = document.querySelector(`.chip[data-i="${idx}"]`);
  if (chip) {
    chip.classList.remove("selected", "wrong", "correct", "used");
    chip.disabled = false;
  }
  feedback("已收回線索，可以重新分類。");
}

function validateSortStage() {
  const s = stages[state.stage];
  const placedCount = Object.keys(state.sortPlacements).length;
  if (placedCount < s.items.length) {
    feedback(`還有 ${s.items.length - placedCount} 個線索尚未分類。`);
    return;
  }
  // Check correctness: support altBin for dual-pass items
  const allCorrect = s.items.every((item, idx) => {
    const placed = state.sortPlacements[idx];
    return placed === item.bin || (item.altBin && placed === item.altBin);
  });
  if (allCorrect) {
    document.querySelectorAll(".chip").forEach(chip => chip.classList.add("correct"));
    award(35, requiredSolvedKey());
    // Check for dynamic feedback on dual-pass items
    let dynamicMsg = "";
    s.items.forEach((item, idx) => {
      if (item.altBin) {
        const placed = state.sortPlacements[idx];
        if (placed === item.bin && item.feedbackRisky) dynamicMsg = item.feedbackRisky;
        else if (placed === item.altBin && item.feedbackReasonable) dynamicMsg = item.feedbackReasonable;
      }
    });
    feedback(s.success + (dynamicMsg ? `\n\n💡 偵探思維：${dynamicMsg}` : ""));
  } else {
    state.score = Math.max(0, state.score - 5);
    updateHeader();
    document.querySelectorAll(".chip").forEach(chip => chip.classList.add("wrong"));
    feedback("分類仍有錯誤，已扣除 5 點偵探素養，案件資料將重設。請重新閱讀線索再分類。");
    setTimeout(resetSortStage, 900);
  }
}

function resetSortStage() {
  state.sortPlacements = {};
  document.querySelectorAll(".placed-chip").forEach(el => el.remove());
  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.remove("selected", "wrong", "correct", "dragging", "used");
    chip.disabled = false;
  });
}

/* ---------- Hotspot (click anywhere on photo) ---------- */
function handlePhotoClick(e, s) {
  const board = document.getElementById("photoBoard");
  if (!board) return;
  // All hotspots already found — ignore further clicks
  if (state.hotspots.size === s.hotspots.length) return;
  const rect = board.getBoundingClientRect();
  const clickX = ((e.clientX - rect.left) / rect.width) * 100;
  const clickY = ((e.clientY - rect.top) / rect.height) * 100;

  // Check if click is near any undiscovered hotspot (within radius %)
  const HIT_RADIUS = 8;
  let hitIdx = -1;
  for (let i = 0; i < s.hotspots.length; i++) {
    if (state.hotspots.has(i)) continue;
    const h = s.hotspots[i];
    const dx = clickX - h.x;
    const dy = clickY - h.y;
    if (Math.sqrt(dx * dx + dy * dy) <= HIT_RADIUS) {
      hitIdx = i;
      break;
    }
  }

  if (hitIdx >= 0) {
    // Found a hotspot!
    const h = s.hotspots[hitIdx];
    state.hotspots.add(hitIdx);
    const marker = document.querySelector(`.hotspot[data-i="${hitIdx}"]`);
    if (marker) {
      marker.classList.remove("hotspot-hidden");
      marker.classList.add("found");
      marker.textContent = h.label;
    }
    // Show ripple effect at click position
    showClickRipple(board, e.clientX - rect.left, e.clientY - rect.top, true);

    const progress = document.getElementById("hotspotProgress");
    if (state.hotspots.size === s.hotspots.length) {
      award(30, requiredSolvedKey());
      feedback(s.success);
      if (progress) progress.textContent = `全部找到！共 ${s.hotspots.length} 個鑑識點 ✓`;
    } else {
      feedback(`找到「${h.label}」！`);
      if (progress) progress.textContent = `已找到 ${state.hotspots.size} / ${s.hotspots.length} 個鑑識點`;
    }
  } else {
    // Missed — deduct score
    state.score = Math.max(0, state.score - 3);
    updateHeader();
    showClickRipple(board, e.clientX - rect.left, e.clientY - rect.top, false);
    feedback("這裡沒有線索⋯再仔細看看案例資料的提示吧！（-3 素養值）");
  }
}

function showClickRipple(parent, x, y, isHit) {
  const ripple = document.createElement("div");
  ripple.className = `click-ripple ${isHit ? "click-hit" : "click-miss"}`;
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  parent.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

/* ---------- Balance ---------- */
function updateBalance(input) {
  const key = input.dataset.balance;
  state.balance[key] = Number(input.value);
  const valueEl = document.querySelector(`#balance-${key}`);
  if (valueEl) valueEl.textContent = `${state.balance[key]}%`;
  const total = state.balance.battle + state.balance.privacy + state.balance.official;
  feedback(`目前總精力值：${total}%。鐵律：戰鬥值 = 0%，隱私保護與官方協助各 ≥ 30%，加總 = 100%。`);
}

function validateBalanceStage() {
  const s = stages[state.stage];
  const { battle, privacy, official } = state.balance;
  const total = battle + privacy + official;
  const ok = battle === 0 && privacy >= 30 && official >= 30 && total === 100;

  if (ok) {
    award(40, requiredSolvedKey());
    // Dual-ending feedback
    if (privacy > official) {
      feedback(s.successPrivacy);
    } else if (official > privacy) {
      feedback(s.successOfficial);
    } else {
      feedback(s.successBalanced);
    }
    return;
  }
  state.score = Math.max(0, state.score - 5);
  updateHeader();
  if (total !== 100) {
    feedback(`❌ 行動失敗！目前總精力值是 ${total}%，必須剛好分配 100%。`);
  } else if (battle > 0) {
    feedback("❌ 行動失敗！網路戰鬥值必須等於 0%。跟酸民對嗆只會讓演算法把事情鬧大，造成二次傷害。");
  } else if (privacy < 30) {
    feedback("❌ 行動失敗！隱私保護值至少要 30%。不檢舉、不阻止轉傳，霸凌的擴散鏈就不會斷。");
  } else if (official < 30) {
    feedback("❌ 行動失敗！官方協助值至少要 30%。沒有截圖存證和通報校方，體制力量就無法介入保護。");
  }
}

/* ---------- Certificate ---------- */
function renderCertificate() {
  state.stage = stages.length;
  updateHeader();
  const name = state.playerName || nameEl.value.trim() || "新進偵探";
  const rank = rankFor(state.score);
  stageEl.innerHTML = `
    <article class="certificate" style="--scene-img: url('assets/cert-bg.png${IMG_VER}')">
      <p class="case-num">終章｜結案證書與偵探的誕生</p>
      <h2>數位素養偵探社・結案證書</h2>
      <p>窗外夜幕垂下，海山國小的圖書館亮起溫暖燈光。沈知夏將證書遞到你手中：<strong>${name}</strong> 偵探在「藍色檔案夾」系列校園數位案件中，成功破解深夜情緒勒索謠言、識破精美個資釣魚陷阱、指派數位事實查核武器、還原時空錯亂照片、拆穿 AI 深偽影片，並以同理心阻斷校園網路霸凌。</p>
      <div class="seal">${rank}</div>
      <div class="summary">
        <div><span>素養值</span><br><strong>${state.score} / 270</strong></div>
        <div><span>榮譽稱號</span><br><strong>${rank}</strong></div>
        <div><span>核心能力</span><br><strong>停一下・查證・標註・同理</strong></div>
      </div>
      <p>沈知夏提醒你：走出這扇門，真正的數位世界更加複雜。演算法會投你所好，假新聞會挑動憤怒與恐懼，AI 內容也可能偽裝成真實人物。但只要記住「看見訊息，先停一下；多方查證，保持理性」，你就是數位時代最需要的真相守護者。</p>
      <div class="next-row" style="justify-content:center">
        <button class="primary-btn" type="button" onclick="restart()">重新辦案</button>
      </div>
    </article>
  `;
}

/* ---------- Navigation ---------- */
function goNext() {
  const key = requiredSolvedKey();
  if (key && !state.solved.has(key)) {
    feedback("請先完成本關任務，才能進入下一關。");
    return;
  }
  renderStage(Math.min(stages.length, state.stage + 1));
}

function startFromCover() {
  state.playerName = (coverName.value || "").trim() || "新進偵探";
  coverHint.textContent = "藍色檔案夾已開啟。";
  state.maxUnlocked = 1;
  coverScreen.style.opacity = "0";
  coverScreen.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    coverScreen.classList.add("hidden");
    coverScreen.style.opacity = "";
    gameApp.classList.remove("hidden");
    gameApp.style.opacity = "0";
    gameApp.style.transition = "opacity 0.5s ease";
    requestAnimationFrame(() => { gameApp.style.opacity = "1"; });
    renderStage(0);
  }, 500);
}

function restart() {
  state.score = 100;
  state.maxUnlocked = 0;
  state.solved.clear();
  renderStage(0);
}

/* ---------- Hint Button ---------- */
hintBtn.addEventListener("click", () => {
  state.score = Math.max(0, state.score - 5);
  updateHeader();
  const hints = [
    "「然而」提醒我們：表面線索背後可能另有隱情。",
    "第一案看警方通報：模糊時間與罪惡感威脅是重點。點選左側爆料中的對應字眼。",
    "第二案想個資最小化：領獎不該要身分證、住址與家長電話。",
    "第三案看流言類型：公共政策交給官方來源與專業查核。",
    "第四五案提示：請對照文本，看看照片背景中紅布條上寫的「年份」和「店名」在哪裡？用眼睛找出可疑區域並點擊它！",
    "第六案看元數據與倫理：AI 生成標籤、知情同意、明確標註。在終端面板中找到它們。",
    "第七案鐵律：戰鬥值必須 0%！隱私保護與官方協助各至少 30%，加總 100% 即可通關。不同配比會解鎖不同結局喔！"
  ];
  feedback(hints[state.stage] || "結案頁沒有提示。");
});

/* ---------- Name Input ---------- */
nameEl.addEventListener("input", updateHeader);
nameEl.addEventListener("change", () => {
  state.playerName = nameEl.value.trim();
  updateHeader();
});

/* ---------- Init ---------- */
renderProgress();
