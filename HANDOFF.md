# 數位素養偵探社｜收工交接

## 目前狀態

- 專案位置：`C:\Users\HSPS\Desktop\codex\school`
- GitHub：`https://github.com/yingertw-arch/digital-literacy-detective`
- 本機預覽網址：`http://127.0.0.1:8787/`
- 已初始化 Git，並推送到 GitHub private repository。
- 最新提交：`fa32c62 Build digital literacy detective prototype`

## 已完成

- 建立單頁前端原型：
  - `index.html`
  - `styles.css`
  - `script.js`
- 加入生成圖片素材：
  - `assets/hero.png`
  - `assets/case-message.png`
  - `assets/case-website.png`
  - `assets/case-photo.png`
  - `assets/case-algorithm.png`
  - `assets/case-response.png`
- 首頁改成 APP 式全螢幕封面。
- 首頁可輸入玩家稱謂，例如「小蘇同學」。
- 按「開始遊戲」後才進入闖關。
- 封面標題牌已移到左側，避免蓋住人物。
- 遊戲流程改成線性闖關，不能從選單任意跳關。
- 每關固定在一個平板畫面中呈現，避免整頁右側捲動。
- 新增第一關前導大圖頁，先看大圖與簡短說明，再正式進入第一關。
- 第二關改成拖放分類，按「確認分類」才判定；答錯會扣除偵探素養並重設。
- 目前有：
  - 序章
  - 第一關前導大圖
  - 第一關：點選可疑轉傳線索
  - 第二關：拖放分類
  - 第三關：查證流程排序
  - 第四關：圖片鑑識熱區
  - 第五關：留言之前，滑桿與回應選擇
  - 結案證書

## 下一步建議

- 用平板實機檢查封面與每一關是否完全不需要右側拉桿。
- 補齊每一關的前導大圖頁，不只第一關。
- 讓每一關更接近《傾城之戀》範例的多樣性，例如：
  - 第一關可疑訊息圈選
  - 第二關拖放分類
  - 第三關查證流程排序
  - 第四關圖片熱區鑑識
  - 第五關情境決策與證書
- 強化案例內容，參考中小學數位素養教育資源網主題：
  - 網路識讀
  - 網路霸凌
  - 網路隱私
  - 網路安全
  - 社交工程
  - 網路沉迷與數位康健
- 檢查圖片風格一致性，必要時重新生成主角更穩定的一組圖。
- 後續 commit / push：

```powershell
cd C:\Users\HSPS\Desktop\codex\school
git status
git add .
git commit -m "Update digital literacy detective prototype"
git push
```

## 回家續作指令

```powershell
cd C:\Users\HSPS\Desktop\codex\school
C:\Users\HSPS\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m http.server 8787 --bind 127.0.0.1
```

然後打開：

```text
http://127.0.0.1:8787/
```
