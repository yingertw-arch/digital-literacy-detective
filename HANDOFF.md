# 數位素養偵探社｜收工交接

## 目前狀態

- 專案位置：`C:\Users\HSPS\Desktop\codex\school`
- 本機預覽網址：`http://127.0.0.1:8787/`
- 目前資料夾不是 Git repository，尚無法 commit / push。

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
- 遊戲流程改成線性闖關，不能從選單任意跳關。
- 每關固定在一個平板畫面中呈現，避免整頁右側捲動。
- 目前有：
  - 序章
  - 第一關前導大圖
  - 第一關：點選可疑轉傳線索
  - 第二關：拖放分類，錯誤扣除偵探素養並重設
  - 第三關：查證流程排序
  - 第四關：圖片鑑識熱區
  - 第五關：留言之前，滑桿與回應選擇
  - 結案證書

## 下一步建議

- 檢查平板實機畫面高度，確認每一關是否完全不需要捲動。
- 調整封面標題牌位置，確保不蓋住主角。
- 補齊每一關的前導大圖頁，而不只第一關。
- 讓每一關都更接近《傾城之戀》範例的遊戲多樣性與沉浸感。
- 若要 push：
  - 需要先建立 git repo，或把這個資料夾放入既有 repo。
  - 需要提供 GitHub remote URL 或指定要推到哪個 repository。

## 回家續作指令

```powershell
cd C:\Users\HSPS\Desktop\codex\school
C:\Users\HSPS\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m http.server 8787 --bind 127.0.0.1
```

然後打開：

```text
http://127.0.0.1:8787/
```
