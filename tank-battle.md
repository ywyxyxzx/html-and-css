# 坦克大战功能文档（对应 `ewshop/v.html`）

> 这是对当前项目中 `ewshop/v.html` 的「坦克大战」小游戏功能做的结构化说明，便于后续扩展/复用。

## 游戏概述

1. 玩家使用坦克在画布中移动，并且可以发射子弹。
2. 屏幕存在固定障碍墙（walls），坦克与子弹会与墙发生碰撞/阻挡。
3. 画面中会不断生成敌方坦克（enemies），敌人会随机移动并偶尔射击。
4. 玩家得分：玩家子弹命中敌方坦克会移除敌人并增加分数。
5. 玩家生命：敌人子弹命中玩家会减少生命；生命耗尽则游戏结束。

## UI 与状态

- 画布：`canvas#gameCanvas`，大小为 `600 x 600`。
- 分数：`#score`，初始 `0`。
- 生命：`#lives`，初始 `3`。
- 游戏结束遮罩：`#game-over`，显示最终得分并提供「重新开始」按钮。
- 游戏运行状态：`gameRunning`（结束后停止更新逻辑）。
- 最高分/持久化：当前版本不使用本地存储，直接展示本局分数。

## 控制方式

- 移动：`W/A/S/D`
  - `W`：up
  - `S`：down
  - `A`：left
  - `D`：right
- 射击：`Space`（空格）
  - 调用玩家坦克的 `shoot()`，冷却时间由 `shootDelay=500ms` 控制。

## 核心数据结构

### Tank（坦克类）

定义：`class Tank`

关键属性：

- `x, y`：坦克左上角坐标
- `color`：坦克颜色
- `dir`：朝向（`up/down/left/right`）
- `speed`：移动速度（玩家 `3`，敌人 `2`）
- `size`：坦克尺寸（由 `tileSize-4` 决定）
- `isPlayer`：是否为玩家坦克（决定子弹归属与颜色）
- `lastShot`、`shootDelay`：射击冷却

关键方法：

- `draw()`：绘制坦克主体（矩形）与炮管（方向对应的细长矩形）
- `move(newDir, walls)`：
  - 根据 `dir` 计算下一帧位置
  - 边界检查：超出画布则不移动
  - 墙壁碰撞检测：与 `walls` 任一矩形相交则不移动
- `shoot()`：
  - 根据冷却时间判断是否能开火
  - 创建并返回 `new Bullet(bx, by, this.dir, this.isPlayer)`

### Bullet（子弹类）

定义：`class Bullet`

关键属性：

- `x, y`：子弹位置
- `dir`：子弹方向（与坦克朝向一致）
- `speed=6`：子弹速度
- `isPlayer`：用于区分「玩家子弹」或「敌人子弹」
- `active`：是否仍在有效存在

关键方法：

- `update()`：
  - 按 `dir` 移动
  - 超出画布范围则 `active=false`
- `draw()`：
  - 玩家子弹：黄色 `#ff0`
  - 敌人子弹：红色 `#f00`

## 场景元素：墙壁 walls

墙壁由数组 `walls` 定义，每个墙是一个矩形：

- `{ x, y, w, h }`

当前版本的 walls 为 5 个固定障碍：
- 两条横向墙
- 中间一个大方块墙
- 以及左右两处横向墙

墙壁参与两类碰撞：

- 坦克移动：相交则阻止坦克前进
- 子弹更新：子弹落入墙矩形范围则 `active=false`

## 敌人 AI 与生成

### 敌人生成：spawnEnemy()

- 函数：`spawnEnemy()`
- 生成条件：`enemies.length < 4`
- 生成位置：随机在顶部附近（`y=50`，`x` 取随机）

更新频率：

- 在每帧 `update()` 末尾调用 `spawnEnemy()`，因此敌人会逐步补齐到最多 4 个。

### 敌人移动/射击

- 敌人移动方向：
  - 每帧以一定概率随机选择 `nextDir`（概率 `0.02`）
  - 若 `nextDir` 未设置，则默认 `down`
- 敌人射击：
  - 每帧以更小概率开火（概率 `0.01`）
  - 调用 `en.shoot()`，若返回子弹则 push 到 `bullets`

## 碰撞判定与输赢

### 子弹 vs 墙壁

- 在 `bullets.forEach(...)` 的循环中遍历 walls
- 若子弹点位（`b.x, b.y`）落入任一墙矩形范围，则 `b.active=false`

### 子弹 vs 敌人（玩家子弹命中）

- 条件：`if (b.isPlayer)`
- 遍历 `enemies`，若子弹点位落入敌方坦克矩形范围：
  - `enemies.splice(ei, 1)` 移除敌人
  - 子弹 `b.active=false`
  - `score += 100`
  - 更新 UI：`$('#score').text(score)`

### 子弹 vs 玩家（敌人子弹命中）

- 条件：`else`（非玩家子弹）
- 若子弹点位落入玩家坦克矩形范围：
  - `lives--`
  - 子弹 `b.active=false`
  - 更新 UI：`$('#lives').text(lives)`
  - 若 `lives <= 0`：
    - `gameRunning=false`
    - 设置最终得分：`$('#final-score').text(score)`
    - 显示游戏结束遮罩：`$('#game-over').fadeIn()`
  - 若仍有生命：
    - 玩家位置重置到起点（`player.x = 200; player.y = 500;`）

## 清理逻辑

- 在每帧末尾清理失效子弹：
  - 从后往前遍历 bullets
  - 若 `!bullets[i].active` 则 `bullets.splice(i, 1)`

## 游戏循环（update/draw）

1. `draw()` 每帧执行：
   - `ctx.clearRect(...)` 清屏
   - 先画墙、再画玩家坦克、敌人坦克与所有子弹
   - 使用 `requestAnimationFrame()` 调度下一帧
2. 在 `requestAnimationFrame` 回调中：
   - 先执行 `update()`（玩家控制、敌人 AI、碰撞判定、得分/生命变化）
   - 再执行 `draw()`（重绘画面）

## 可扩展点（建议）

- 增加坦克与子弹的更精确碰撞（当前为矩形与点位近似）
- 给子弹加入与墙的“反弹/穿透”规则（当前是命中即销毁）
- 增加敌人难度等级（提升 `nextDir` 概率、射击概率或子弹速度）
- 增加关卡/时间限制或敌人数量随时间增长

