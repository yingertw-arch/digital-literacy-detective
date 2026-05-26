const stages = [
  {
    "type": "intro",
    "num": "序章",
    "title": "從校園實境到數位偵探社",
    "img": "assets/hero.png",
    "caption": "你們把前兩節課完成的偵探任務手冊送回圖書館角落，交給數位素養偵探社社長沈知夏。",
    "news": "長達兩節課的校園實境解謎剛落幕。你們曾閱讀三句詩、推敲校園地點，在 quiz-game 中作答，也曾因答錯被鎖定三分鐘，只能重新討論線索。為了取得 PictureQR 進階提示，你們還運用文學工具箱補寫第 4 句詩。當你們把手冊交給沈知夏時，她提醒：校園實境解謎訓練的是肉眼觀察，但真正的數位世界裡，文字、照片、影片都可能被操弄。",
    "mission": "任務：確認你已用「然而」解開初始密語，準備進入藍色檔案夾的數位案件。",
    "prompt": "沈知夏說：「然而」代表事情並不單純，背後可能另有隱情。看見訊息，先停一下；多方查證，保持理性。"
  },
  {
    "type": "clues",
    "num": "第一案",
    "title": "深夜群組的蜂鳴警報",
    "img": "assets/case-message.png",
    "caption": "玩法：社交工程・情緒代碼抓漏。左右對照爆料文本與官方通報，圈出情緒操弄字眼。",
    "news": "左側爆料寫著：『🚨海山國小全校緊急互助！攸關性命請立刻轉傳！！剛剛收到內部絕對可靠的管道消息！明天早上校門口會出現一個身穿黑皮衣、手持危險尖銳凶器的可疑中年男子！如果你看見了這則警報卻不轉傳，就是在害你的同學陷入危險！』右側官方通報指出：校警隊 22:00-06:00 巡邏與監視器皆無異常；警方也提醒萬年罐頭恐慌訊息常使用模糊時間與罪惡感威脅。",
    "mission": "任務：點出 2 個最能對應警方通報的情緒代碼。",
    "targetCount": 2,
    "items": [
      {
        "text": "明天早上",
        "ok": true
      },
      {
        "text": "在害你的同學",
        "ok": true
      },
      {
        "text": "黑皮衣",
        "ok": false
      },
      {
        "text": "流浪狗三隻",
        "ok": false
      },
      {
        "text": "學校高層",
        "ok": false
      }
    ],
    "success": "查證報告通過。你們找出「明天早上」的模糊時間，以及「在害你的同學」的道德綁架。沈知夏提醒：恐慌訊息最怕讀者停下來對照來源。"
  },
  {
    "type": "sort",
    "num": "第二案",
    "title": "長得很像真的釣魚迷宮",
    "img": "assets/case-website.png",
    "caption": "玩法：網址微觀除錯與個資防線矩陣。漂亮頁面不等於可信來源。",
    "news": "學弟傳來 N1KE 贈鞋網站：www.n1ke-giveaway-free.top。活動須知聲稱由「全球潮流體育文化多元推廣基金會」主辦，並要求填寫姓名、手機、導師姓名、家長電話、住宅地址與身分證字號。頁面下方還有無法點擊驗證的安全標章。沈知夏說：天底下沒有白吃的午餐，如果有，那午餐裡一定埋著魚鉤。",
    "mission": "任務：把個資項目放進正確風險分類。補充線索：該釣魚網站使用的頂級網域是 top。",
    "bins": [
      {
        "id": "reasonable",
        "label": "合理索取"
      },
      {
        "id": "risky",
        "label": "過度索取（高風險）"
      },
      {
        "id": "danger",
        "label": "危險個資（絕不可填）"
      }
    ],
    "items": [
      {
        "text": "真實姓名",
        "bin": "reasonable"
      },
      {
        "text": "個人手機",
        "bin": "reasonable"
      },
      {
        "text": "導師姓名",
        "bin": "risky"
      },
      {
        "text": "家長電話",
        "bin": "risky"
      },
      {
        "text": "住宅地址",
        "bin": "risky"
      },
      {
        "text": "身分證字號",
        "bin": "danger"
      }
    ],
    "success": "防護網啟動。你們守住了個資最小化原則：領獎不該索取身分證字號、家長電話與住址。網址中的 n1ke 與 .top 也是釣魚警訊。"
  },
  {
    "type": "sort",
    "num": "第三案",
    "title": "數位偵探的武器箱",
    "img": "assets/case-algorithm.png",
    "caption": "玩法：事實查核・資訊武器分流。不同謠言要交給適合的查核工具。",
    "news": "長輩 LINE 群組瘋傳：『下個月起所有機車沒裝新型排氣偵測器，一律重罰一萬元！』另一則訊息宣稱：『空腹喝苦瓜水加檸檬可以根治糖尿病，連化療都不用做。』沈知夏打開三個武器箱：台灣事實查核中心 TFC、Cofacts 真的假的、MyGoPen 麥擱騙。",
    "mission": "任務：將流言分流到最適合的查核武器。公共政策查官方與專業查核；健康偏方可先交給常見謠言資料庫。",
    "bins": [
      {
        "id": "tfc",
        "label": "TFC 事實查核中心"
      },
      {
        "id": "cofacts",
        "label": "Cofacts 真的假的"
      },
      {
        "id": "mygopen",
        "label": "MyGoPen 麥擱騙"
      }
    ],
    "items": [
      {
        "text": "機車新法重罰一萬元",
        "bin": "tfc"
      },
      {
        "text": "苦瓜檸檬水根治糖尿病",
        "bin": "mygopen"
      },
      {
        "text": "LINE 轉傳罐頭謠言備查",
        "bin": "cofacts"
      }
    ],
    "success": "武器指派完成。重大政策要查政府官方網站與專業查核報告；健康偏方不可取代醫療，應交由查核平台與專業資料比對。"
  },
  {
    "type": "hotspot",
    "num": "第四、五案",
    "title": "時空錯亂的照片與圖片鑑識桌",
    "img": "assets/case-photo.png",
    "caption": "玩法：圖片微觀找碴與多文本時空鎖。「有圖」不等於「有真相」。",
    "news": "班級社群 爆料稱：今天下午 13:30，海山國小後門校外人士鬧事，黑衣人砸車鬧事、煙霧瀰漫，校方封鎖消息。可是右側校刊資料寫著：2022 年 11 月 15 日，國片《熱血街頭》曾借用本校後門拍攝動作戲；店家歷史貼文也寫著「歡慶2022年開幕慶」。照片可能是真照片，然而文字脈絡被移花接木。",
    "mission": "任務：在照片上找出 4 個鑑識點，破解時空鎖。正確結論：年份 2022，事件主體是電影拍攝。",
    "hotspots": [
      {
        "x": 18,
        "y": 26,
        "label": "2022"
      },
      {
        "x": 63,
        "y": 25,
        "label": "後門"
      },
      {
        "x": 76,
        "y": 58,
        "label": "裁切"
      },
      {
        "x": 38,
        "y": 70,
        "label": "電影拍攝"
      }
    ],
    "success": "闢謠成功。這不是今天下午的校外人士鬧事，而是 2022 年電影拍攝現場被舊圖新用。造謠者裁掉劇組道具車與攝影器材，讓真照片說出假故事。"
  },
  {
    "type": "clues",
    "num": "第六案",
    "title": "AI 深偽與社群來源標記",
    "img": "assets/case-algorithm.png",
    "caption": "玩法：深度偽造辨識與數位來源標記。現在連影片與聲音都可能被生成。",
    "news": "全校 班級社群 突然出現「校長宣布取消社團與下課，強制留校到傍晚六點」的影片。畫面、聲音、嘴型都像真的，但沙盒分析顯示：檔名 principal_speech_generated_final_render.mp4；帳號 @holy_justice_2026 今日 13:10 才創立；元數據包含 [Source: Disguised]、[AI-Generated-Flag: True]、[Digital-Watermark: AI-Synthesized-Content]。影片中校長眨眼每分鐘僅 2 次，嘴唇邊緣也有像素鋸齒。",
    "mission": "任務：點出 2 個能拆穿深偽影片的關鍵判斷。",
    "targetCount": 2,
    "items": [
      {
        "text": "[AI-Generated-Flag: True]",
        "ok": true
      },
      {
        "text": "取得當事人知情同意並明確標註 AI 生成",
        "ok": true
      },
      {
        "text": "影片看起來很清楚所以一定是真的",
        "ok": false
      },
      {
        "text": "為了正義可以用 AI 編造影片",
        "ok": false
      },
      {
        "text": "新帳號粉絲數 0 不需要理會",
        "ok": false
      }
    ],
    "success": "AI 偽造標籤已解碼。沈知夏提醒：使用 AI 模擬他人聲音或影像，必須取得知情同意並標註來源，不可蓄意誤導大眾。"
  },
  {
    "type": "balance",
    "num": "第七案",
    "title": "留言之前與隱形的校園刀刃",
    "img": "assets/case-response.png",
    "caption": "玩法：同理心與理性・行動值平衡矩陣。你的選擇會決定傷害是否繼續擴大。",
    "news": "校內留言板偷拍林同學在輔導室門口哭泣，標題惡意造謠她作弊被抓。留言區開始嘲諷、肉搜、公開社群帳號。右側輔導室核實紀錄顯示：林同學是因爺爺病逝而情緒崩潰，學校本週也沒有任何作弊懲處紀錄。沈知夏說：文字和點讚是會傷人的。現在要阻斷霸凌，而不是增加熱度。",
    "mission": "任務：精準分配 100% 行動值。網路戰鬥值 0%；隱私保護值 50%；官方協助值 50%。",
    "success": "行動成功。你們沒有跟酸民對嗆，也沒有公開林同學家庭隱私；而是檢舉肉搜、截圖存證，並通報學務處與輔導室。理性與同理心阻斷了一場校園網路霸凌。"
  }
];

const ranks = [
  { min: 250, label: "數位素養總探長" },
  { min: 220, label: "冷靜判讀者" },
  { min: 185, label: "查證偵探" },
  { min: 140, label: "線索整理員" },
  { min: 0, label: "見習偵探" }
];

const state = {
  score: 100,
  stage: 0,
  maxUnlocked: 0,
  playerName: "",
  solved: new Set(),
  selectedChip: null,
  selectedClues: new Set(),
  sort: {},
  sequence: [],
  hotspots: new Set(),
  meters: { stop: 75, privacy: 75, help: 75 },
  balance: { battle: 35, privacy: 35, official: 30 }
};

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
  if (!s || s.type === "intro" || s.type === "caseIntro") return "";
  return `stage${index}`;
}

function renderFrame(s, inner) {
  stageEl.innerHTML = `
    <div class="game-scene" style="--scene-img: url('${s.img}')">
      <div class="scene-shade"></div>
      <header class="scene-hud">
        <strong>${s.num}：${s.title}</strong>
        <span>偵探素養 ${state.score}</span>
      </header>
      <article class="scene-panel">
        <p class="case-num">${s.num}</p>
        <h2>${s.title}</h2>
        <p class="scene-caption">${s.caption}</p>
        <div class="news-box"><h3>案例閱讀</h3><p>${s.news}</p></div>
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

function renderStage(index) {
  state.stage = index;
  state.selectedChip = null;
  updateHeader();
  if (index >= stages.length) return renderCertificate();
  const s = stages[index];
  if (s.type === "intro") {
    renderFrame(s, `
      <p>${s.prompt}</p>
      <button class="primary-btn" type="button" onclick="goNext()">打開藍色檔案夾</button>
    `);
  }
  if (s.type === "caseIntro") {
    renderFrame(s, `
      <p>${s.mission}</p>
      <button class="primary-btn" type="button" onclick="goNext()">${s.nextText}</button>
    `);
  }
  if (s.type === "clues") {
    state.selectedClues.clear();
    renderFrame(s, `
      <div class="tools">${s.items.map((item, i) => `<button class="tool" type="button" data-i="${i}">${item.text}</button>`).join("")}</div>
      <button class="primary-btn" type="button" onclick="validateCluesStage()">送出判斷</button>
    `);
    document.querySelectorAll(".tool").forEach(btn => btn.addEventListener("click", () => chooseClue(btn)));
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
  }
  if (s.type === "sequence") {
    state.sequence = [];
    const all = [...s.order, ...s.distractors].sort(() => Math.random() - 0.5);
    renderFrame(s, `<div class="sequence">${all.map(text => `<button class="seq-btn" type="button">${text}</button>`).join("")}</div><p id="sequenceNow">目前順序：尚未選擇</p>`);
    document.querySelectorAll(".seq-btn").forEach(btn => btn.addEventListener("click", () => pickSequence(btn)));
  }
  if (s.type === "hotspot") {
    renderFrame(s, `
      <div class="photo-board">
        <img src="${s.img}" alt="圖片鑑識桌">
        ${s.hotspots.map((h, i) => `<button class="hotspot" style="left:${h.x}%;top:${h.y}%;" data-i="${i}" type="button">?</button>`).join("")}
      </div>
    `);
    state.hotspots.clear();
    document.querySelectorAll(".hotspot").forEach(btn => btn.addEventListener("click", () => findHotspot(btn)));
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
  }
  if (s.type === "meters") {
    renderFrame(s, `
      <div class="meters">
        <div class="meter"><label>停止轉傳 <input type="range" min="0" max="100" value="${state.meters.stop}" data-meter="stop"></label></div>
        <div class="meter"><label>保護隱私 <input type="range" min="0" max="100" value="${state.meters.privacy}" data-meter="privacy"></label></div>
        <div class="meter"><label>尋求協助 <input type="range" min="0" max="100" value="${state.meters.help}" data-meter="help"></label></div>
      </div>
      <div class="actions">
        <button class="action-card" type="button" data-ok="true">停止轉傳，檢舉肉搜留言，通報學務處與輔導室協助。</button>
        <button class="action-card" type="button">截圖轉傳到更多群組，讓大家一起評理。</button>
        <button class="action-card" type="button">用更尖銳的留言反擊匿名發文者。</button>
      </div>
    `);
    document.querySelectorAll("input[type='range']").forEach(input => input.addEventListener("input", () => state.meters[input.dataset.meter] = Number(input.value)));
    document.querySelectorAll(".action-card").forEach(btn => btn.addEventListener("click", () => chooseAction(btn)));
  }
}

function feedback(text) {
  document.querySelector("#feedback").textContent = text;
}

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
  const allCorrect = s.items.every((item, idx) => state.sortPlacements[idx] === item.bin);
  if (allCorrect) {
    document.querySelectorAll(".chip").forEach(chip => chip.classList.add("correct"));
    award(35, requiredSolvedKey());
    feedback(s.success);
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

function pickSequence(btn) {
  const s = stages[state.stage];
  const text = btn.textContent;
  btn.disabled = true;
  const expected = s.order[state.sequence.length];
  if (text === expected) {
    btn.classList.add("correct");
    state.sequence.push(text);
  } else {
    btn.classList.add("wrong");
    state.score = Math.max(0, state.score - 5);
    updateHeader();
  }
  document.querySelector("#sequenceNow").textContent = "目前順序：" + (state.sequence.join(" → ") || "尚未選擇");
  if (state.sequence.length === s.order.length) {
    award(35, requiredSolvedKey());
    feedback(s.success);
  } else if (text !== expected) {
    feedback("順序不對。查證通常先讀脈絡，再找可比對的證據。");
  }
}

function findHotspot(btn) {
  const s = stages[state.stage];
  const idx = Number(btn.dataset.i);
  const h = s.hotspots[idx];
  state.hotspots.add(idx);
  btn.classList.add("found");
  btn.textContent = h.label;
  btn.disabled = true;
  if (state.hotspots.size === s.hotspots.length) {
    award(30, requiredSolvedKey());
    feedback(s.success);
  } else {
    feedback(`已標記 ${state.hotspots.size}/${s.hotspots.length} 個鑑識點。`);
  }
}

function chooseAction(btn) {
  const okMeters = state.meters.stop >= 65 && state.meters.privacy >= 65 && state.meters.help >= 65;
  const ok = btn.dataset.ok === "true" && okMeters;
  document.querySelectorAll(".action-card").forEach(b => b.disabled = true);
  btn.classList.add(ok ? "correct" : "wrong");
  if (ok) {
    award(40, requiredSolvedKey());
    feedback(stages[state.stage].success);
  } else {
    state.score = Math.max(0, state.score - 5);
    updateHeader();
    feedback("還不夠安全。面對霸凌，三個行動值都要偏高，且不能用轉傳或攻擊回應攻擊。");
  }
}

function updateBalance(input) {
  const key = input.dataset.balance;
  state.balance[key] = Number(input.value);
  const valueEl = document.querySelector(`#balance-${key}`);
  if (valueEl) valueEl.textContent = `${state.balance[key]}%`;
  const total = state.balance.battle + state.balance.privacy + state.balance.official;
  feedback(`目前總精力值：${total}%。目標是 100%，且比例為 0 / 50 / 50。`);
}

function validateBalanceStage() {
  const total = state.balance.battle + state.balance.privacy + state.balance.official;
  const ok = state.balance.battle === 0 && state.balance.privacy === 50 && state.balance.official === 50;
  if (ok) {
    award(40, requiredSolvedKey());
    feedback(stages[state.stage].success);
    return;
  }
  state.score = Math.max(0, state.score - 5);
  updateHeader();
  if (total !== 100) {
    feedback(`❌ 行動失敗！目前總精力值是 ${total}%，必須剛好分配 100%。`);
  } else {
    feedback("❌ 行動失敗！如果把精力拿去跟酸民對嗆，只會拉高熱度並造成二次傷害。請調成：網路戰鬥 0%、隱私保護 50%、官方協助 50%。");
  }
}

function renderCertificate() {
  state.stage = stages.length;
  updateHeader();
  const name = state.playerName || nameEl.value.trim() || "新進偵探";
  const rank = rankFor(state.score);
  stageEl.innerHTML = `
    <article class="certificate">
      <p class="case-num">終章｜結案證書與偵探的誕生</p>
      <h2>數位素養偵探社・結案證書</h2>
      <p>窗外夜幕垂下，海山國小的圖書館亮起溫暖燈光。沈知夏將證書遞到你手中：${name} 偵探在「藍色檔案夾」系列校園數位案件中，成功破解深夜情緒勒索謠言、識破精美個資釣魚陷阱、指派數位事實查核武器、還原時空錯亂照片、拆穿 AI 深偽影片，並以同理心阻斷校園網路霸凌。</p>
      <div class="seal">🏆 ${rank} 🏆</div>
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
  coverScreen.classList.add("hidden");
  gameApp.classList.remove("hidden");
  renderStage(0);
}

function restart() {
  state.score = 100;
  state.maxUnlocked = 0;
  state.solved.clear();
  renderStage(0);
}

hintBtn.addEventListener("click", () => {
  state.score = Math.max(0, state.score - 5);
  updateHeader();
  const hints = [
    "「然而」提醒我們：表面線索背後可能另有隱情。",
    "第一案看警方通報：模糊時間與罪惡感威脅是重點。",
    "第二案想個資最小化：領獎不該要身分證、住址與家長電話。",
    "第三案看流言類型：公共政策交給官方來源與專業查核。",
    "第四五案看時間烙印：照片上的 2022 與電影拍攝紀錄最關鍵。",
    "第六案看元數據與倫理：AI 生成標籤、知情同意、明確標註。",
    "第七案不要對嗆：0% 戰鬥、50% 隱私保護、50% 官方協助。"
  ];
  feedback(hints[state.stage] || "結案頁沒有提示。");
});

nameEl.addEventListener("input", updateHeader);
nameEl.addEventListener("change", () => {
  state.playerName = nameEl.value.trim();
  updateHeader();
});
renderStage(0);
