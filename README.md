# 🪜 Step-Flow

A partitioned task management system designed for linear problem-solving. Unlike traditional Jira boards, Step-Flow ensures focus by unlocking tasks sequentially.

## 🎯 The Concept
Complex problems are easier to solve when broken into rigid steps. Step-Flow enforces this "One Step at a Time" philosophy.

## 🛠️ Tech Stack
* **Runtime:** Node.js (via Babel for ES6+ & JSX)
* **Framework:** Express.js
* **Database:** MongoDB (Schema-based progression)

## 🚀 Step-by-Step Installation
1. `npm install`
2. Set `MONGO_URI` in your environment.
3. `npm start` 

## 🏗️ Core Logic
- **Project Schema:** Contains metadata and a list of `Steps`.
- **Progress Logic:** A step is only `unlockable` if the `previousStep.status === 'done'`.