# 小實驗： server response logger
  利用紀錄從request傳入伺服器第一個到最後一個middleware的timestamp來判斷request -> response的耗費時間。

---
- ## 運行環境需求:
  Node.js

- ## 插件需求 :
1. npm
2. Express
3. Nodemon

- ## 功能 :
  除了每次伺服器收到請求時都會log出日期、時間、請求方法與路由以外，計算一個request從進入middleware到離開middleware所花的時間。

- ## 應用程式安裝前導 :
1. ### 請用 Mac users: 終端機 / Windows users: Git Bash 輸入以下內容：

2. 將專案從GitHub複製到你的本機中：
```
git clone https://github.com/etheriuman/middleware-time-spent.git
```
3. 進入到該資料夾中：
```
cd middleware-time-spent
```
4. 安裝npm：
```
npm init -y
```
5. 用npm指令安裝所有所需的插件：
```
npm i
```
6. 開始運行伺服器：
```
npm run dev
```
7. 將回傳的網址貼到瀏覽器中：
```
App running on http://localhost:3000
```