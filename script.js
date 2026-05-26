const stages = [
  {
    type: "intro",
    num: "序章",
    title: "藍色檔案夾",
    img: "assets/hero.png",
    caption: "固定主角：沈知夏。黑色齊肩短髮、細框圓眼鏡、白襯衫、墨藍背心與平板，是後續圖片生成的角色錨點。",
    news: "雨後的圖書館裡，沈知夏收到一只藍色檔案夾。平板上只有一句話：看見訊息時，先停一下。這不是考試，而是一份需要閱讀、蒐證與判斷的案件。",
    mission: "任務：閱讀案件，蒐集證據，不用急著按下一個答案。",
    prompt: "按「開始辦案」進入第一案。"
  },
  {
    type: "caseIntro",
    num: "第一關",
    title: "深夜群組的警報",
    img: "assets/case-message.png",
    caption: "第一關主視覺：班級群組、轉傳訊息與來源查證。",
    news: "今晚，沈知夏的班級群組忽然響起。有人貼出一則看似緊急的消息，要求大家立刻轉傳。真正的偵探不急著按分享，而是先閱讀、圈線索、判斷訊息是否可靠。",
    mission: "準備好了，就進入第一關正式任務：找出可疑轉傳的四個警訊。",
    nextText: "進入第一關"
  },
  {
    type: "clues",
    num: "第一案",
    title: "深夜群組的警報",
    img: "assets/case-message.png",
    caption: "案例主題：網路識讀、社交工程、轉傳前查證。",
    news: "班級群組深夜出現一則訊息：『明天校門口會有危險人物，看到一定要立刻轉傳給所有人，沒有轉傳就是害同學！』訊息附上一張模糊截圖，但沒有發布單位、沒有日期，也沒有可查證的連結。",
    mission: "任務：點出 4 個可疑線索。",
    targetCount: 4,
    items: [
      { text: "要求立刻轉傳", ok: true },
      { text: "沒有發布單位", ok: true },
      { text: "沒有日期", ok: true },
      { text: "用罪惡感逼人分享", ok: true },
      { text: "有同學看過", ok: false },
      { text: "文字很多", ok: false }
    ],
    success: "知夏把可疑點圈起來：情緒勒索、來源不明、時間不清楚、催促轉傳。"
  },
  {
    type: "sort",
    num: "第二案",
    title: "長得很像真的網站",
    img: "assets/case-website.png",
    caption: "案例主題：個資保護、假網站、網路安全。",
    news: "一個活動頁聲稱『填資料即可領限量禮物』。頁面配色很像官方網站，但網址多了一串奇怪字母，主辦單位查不到，表單要求姓名、學校、班級、電話、家長電話與生日。",
    mission: "任務：把線索分類。先點一個線索，再點下方分類區。",
    bins: [
      { id: "safe", label: "可信線索" },
      { id: "warn", label: "警訊" },
      { id: "check", label: "需要再查" }
    ],
    items: [
      { text: "網址多奇怪字母", bin: "warn" },
      { text: "索取家長電話與生日", bin: "warn" },
      { text: "主辦單位查不到", bin: "warn" },
      { text: "頁面配色像官方", bin: "check" },
      { text: "有漂亮圖片", bin: "check" },
      { text: "只要求暱稱", bin: "safe" }
    ],
    success: "分類完成。漂亮版面不能替代可信來源，過量個資索取就是警訊。"
  },
  {
    type: "sequence",
    num: "第三案",
    title: "照片裡的時間差",
    img: "assets/case-photo.png",
    caption: "案例主題：舊圖新用、圖片脈絡、反向查證。",
    news: "社群貼文寫著：『今天下午，某地發生混亂。』照片看起來很清楚，但照片中的天氣、招牌活動日期與貼文說法不一致。知夏需要建立查證順序，而不是只看照片是否清楚。",
    mission: "任務：依序選出查證流程。",
    order: ["看貼文日期", "觀察照片細節", "反向圖片搜尋", "比對不同來源"],
    distractors: ["直接轉傳提醒大家", "只看留言數", "問最常發文的人"],
    success: "流程正確：先讀脈絡，再看細節，接著反向搜尋，最後比對多個來源。"
  },
  {
    type: "hotspot",
    num: "第四案",
    title: "圖片鑑識桌",
    img: "assets/case-photo.png",
    caption: "案例主題：圖片中的證據點。這關用點擊熱區模擬鑑識。",
    news: "知夏把照片放進鑑識桌。她不急著判斷真假，而是先尋找能被查證的痕跡：時間、地點、裁切、來源。每個痕跡都可能改變一則新聞事件的解讀。",
    mission: "任務：在圖片上找出 4 個鑑識點。",
    hotspots: [
      { x: 18, y: 26, label: "日期" },
      { x: 63, y: 25, label: "地點" },
      { x: 76, y: 58, label: "裁切" },
      { x: 38, y: 70, label: "來源" }
    ],
    success: "四個鑑識點已標記。圖片不是證據的終點，而是查證的起點。"
  },
  {
    type: "meters",
    num: "第五案",
    title: "留言之前",
    img: "assets/case-response.png",
    caption: "案例主題：網路霸凌、隱私保護、合宜回應。",
    news: "有人把同學的照片截圖轉傳，留言越來越尖銳。知夏要在『幫忙釐清』與『不造成二次傷害』之間做選擇：停止轉傳、保護隱私、找可信任的大人協助。",
    mission: "任務：調整三個行動值，再選擇回應方式。",
    success: "你選擇停止擴散、保護隱私並尋求協助。這是有力量但不加害的回應。"
  }
];

const ranks = [
  { min: 145, label: "數位素養總探長" },
  { min: 115, label: "冷靜判讀者" },
  { min: 85, label: "查證偵探" },
  { min: 45, label: "線索整理員" },
  { min: 0, label: "見習偵探" }
];

const state = {
  score: 0,
  stage: 0,
  maxUnlocked: 0,
  playerName: "",
  solved: new Set(),
  selectedChip: null,
  sort: {},
  sequence: [],
  hotspots: new Set(),
  meters: { stop: 75, privacy: 75, help: 75 }
};

const stageEl = document.querySelector("#stage");
const coverScreen = document.querySelector("#coverScreen");
const gameApp = document.querySelector("#gameApp");
const coverName = document.querySelector("#coverName");
const scoreEl = document.querySelector("#score");
const rankEl = document.querySelector("#rank");
const nameEl = document.querySelector("#playerName");
const hintBtn = document.querySelector("#hintBtn");
const progressSteps = document.querySelector("#progressSteps");
const progressLabels = ["序章", "第一關", "任務一", "第二案", "第三案", "第四案", "第五案", "結案"];

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
    <div class="stage-grid">
      <aside class="visual-card">
        <img src="${s.img}" alt="${s.title}">
        <div class="caption">${s.caption}</div>
      </aside>
      <article class="task-card">
        <p class="case-num">${s.num}</p>
        <h2>${s.title}</h2>
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
  if (index === 6) return renderCertificate();
  const s = stages[index];
  if (s.type === "intro") {
    renderFrame(s, `
      <p>${s.prompt}</p>
      <button class="primary-btn" type="button" onclick="goNext()">進入第一案</button>
    `);
  }
  if (s.type === "caseIntro") {
    renderFrame(s, `
      <p>${s.mission}</p>
      <button class="primary-btn" type="button" onclick="goNext()">${s.nextText}</button>
    `);
  }
  if (s.type === "clues") {
    renderFrame(s, `<div class="tools">${s.items.map((item, i) => `<button class="tool" type="button" data-i="${i}">${item.text}</button>`).join("")}</div>`);
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
  if (s.type === "meters") {
    renderFrame(s, `
      <div class="meters">
        <div class="meter"><label>停止轉傳 <input type="range" min="0" max="100" value="${state.meters.stop}" data-meter="stop"></label></div>
        <div class="meter"><label>保護隱私 <input type="range" min="0" max="100" value="${state.meters.privacy}" data-meter="privacy"></label></div>
        <div class="meter"><label>尋求協助 <input type="range" min="0" max="100" value="${state.meters.help}" data-meter="help"></label></div>
      </div>
      <div class="actions">
        <button class="action-card" type="button" data-ok="true">停止轉傳，提醒不要公開個資，找老師或可信任的大人協助。</button>
        <button class="action-card" type="button">轉傳到更多群組，讓大家一起評論。</button>
        <button class="action-card" type="button">用更尖銳的話反擊發文者。</button>
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
  const s = stages[state.stage];
  const item = s.items[Number(btn.dataset.i)];
  btn.classList.add(item.ok ? "correct" : "wrong");
  btn.disabled = true;
  const found = [...document.querySelectorAll(".tool.correct")].length;
  if (found >= s.targetCount) {
    award(30, requiredSolvedKey());
    feedback(s.success);
  } else if (!item.ok) {
    state.score = Math.max(0, state.score - 5);
    updateHeader();
    feedback("這不是主要疑點。再看一次訊息如何催促與恐嚇。");
  } else {
    feedback(`已找到 ${found}/${s.targetCount} 個可疑線索。`);
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
  chip.classList.add("selected");
  binBtn.querySelector("div").insertAdjacentHTML("beforeend", `<span class="placed-chip" data-i="${state.selectedChip}" onclick="returnChip(${state.selectedChip})">${item.text}</span>`);
  state.sortPlacements[state.selectedChip] = binBtn.dataset.bin;
  state.selectedChip = null;
  feedback("已放入分類區。可以拖放調整，完成後按「確認分類」。");
}

function returnChip(idx) {
  delete state.sortPlacements[idx];
  document.querySelectorAll(`.placed-chip[data-i="${idx}"]`).forEach(el => el.remove());
  const chip = document.querySelector(`.chip[data-i="${idx}"]`);
  if (chip) chip.classList.remove("selected", "wrong", "correct");
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
  document.querySelectorAll(".chip").forEach(chip => chip.classList.remove("selected", "wrong", "correct", "dragging"));
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
    feedback("還不夠安全。三個行動值都要偏高，且不能用轉傳或攻擊回應攻擊。");
  }
}

function renderCertificate() {
  state.stage = 6;
  updateHeader();
  const name = state.playerName || nameEl.value.trim() || "未署名偵探";
  const rank = rankFor(state.score);
  stageEl.innerHTML = `
    <article class="certificate">
      <p class="case-num">結案證書</p>
      <h2>藍色檔案已歸檔</h2>
      <p>${name} 完成數位素養偵探社試煉。你閱讀案例、點出線索、分類證據、建立查證順序，並在留言之前選擇不擴散傷害。</p>
      <div class="seal">${rank}</div>
      <div class="summary">
        <div><span>素養值</span><br><strong>${state.score}</strong></div>
        <div><span>稱號</span><br><strong>${rank}</strong></div>
        <div><span>核心能力</span><br><strong>查證與尊重</strong></div>
      </div>
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
  state.playerName = (coverName.value || "").trim();
  if (!state.playerName) {
    coverName.focus();
    coverName.placeholder = "請先輸入稱謂，才能開始";
    return;
  }
  state.maxUnlocked = 1;
  coverScreen.classList.add("hidden");
  gameApp.classList.remove("hidden");
  renderStage(0);
}

function restart() {
  state.score = 0;
  state.maxUnlocked = 0;
  state.solved.clear();
  renderStage(0);
}

hintBtn.addEventListener("click", () => {
  state.score = Math.max(0, state.score - 5);
  updateHeader();
  const hints = [
    "先讀任務，再找能被查證的線索。",
    "可疑轉傳常見特徵：急、怕、怒、沒有來源。",
    "假網站不只看美術，還要看網址、單位與個資索取。",
    "圖片查證要先看脈絡，再比對來源。",
    "照片上的日期、地點、裁切和來源都是鑑識入口。",
    "遇到霸凌截圖，停止擴散比加入評論更重要。"
  ];
  feedback(hints[state.stage] || "結案頁沒有提示。");
});

nameEl.addEventListener("input", updateHeader);
nameEl.addEventListener("change", () => {
  state.playerName = nameEl.value.trim();
  updateHeader();
});
renderStage(0);
