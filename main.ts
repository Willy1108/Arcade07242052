namespace SpriteKind {
    export const 寶物 = SpriteKind.create()
    export const 精靈 = SpriteKind.create()
    export const 圓圈 = SpriteKind.create()
    export const 圓圈1 = SpriteKind.create()
    export const 圓圈2 = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Math.abs(sprite.vx) == 50) {
        if (Math.percentChance(50)) {
            sprite.vy = 50
        } else {
            sprite.vy = -50
        }
    } else {
        if (Math.percentChance(50)) {
            sprite.vx = 50
        } else {
            sprite.vx = -50
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.精靈, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.powerUp.play()
})
function 寶物設定 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
function 寶物設定2 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (子彈數量 == 0) {
        if (方向 == "U") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, player1, 0, -100)
        } else if (方向 == "D") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, player1, 0, 100)
        } else if (方向 == "L") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, player1, -100, 0)
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, player1, 100, 0)
        }
        子彈數量 += 1
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
function 玩家設定 (直欄: number, 橫列: number) {
    player1 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f f 2 2 f f f . . . 
        . . f f f 2 2 2 2 f f f . . 
        . f f f e e e e e e f f f . 
        . f f e 2 2 2 2 2 2 e e f . 
        . f e 2 f f f f f f 2 e f . 
        . f f f f e e e e f f f f . 
        f f e f b f 4 4 f b f e f f 
        f e e 4 1 f d d f 1 4 e e f 
        . f e e d d d d d d e e f . 
        . . f e e 4 4 4 4 e e f . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(player1, tiles.getTileLocation(直欄, 橫列))
    方向 = "D"
    controller.moveSprite(player1)
    scene.cameraFollowSprite(player1)
}
function 產生敵人 (數量: number) {
    for (let index = 0; index < 數量; index++) {
        if (關卡 == 0) {
            敵人 = sprites.create(img`
                . . . . . . . . b b b b . . . . 
                . . . . b b b b 3 3 3 3 b . . . 
                . c c b b 1 1 3 3 3 3 3 b b . . 
                c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
                c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
                f b b c c c 3 3 3 3 3 3 3 c . . 
                f b c c c b b b b 3 3 3 3 3 c . 
                f b c c d d d d d b b 3 3 3 3 c 
                . c c d c d d d d d d b c 3 3 c 
                . c b d c d d d c d d c c c 3 f 
                . f d d d d d c d d d c c c b f 
                . f d b b b d d d d d c c c b f 
                . . c d d d d d d d b c b b f f 
                . . f f d d d d c c b f f f f . 
                . f f b b f f c c b d d b f . . 
                . f b b b f f . . b d d d f . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(敵人, sprites.castle.tilePath5)
            if (Math.percentChance(50)) {
                敵人.setVelocity(50, 0)
            } else {
                敵人.setVelocity(0, 50)
            }
            敵人.setFlag(SpriteFlag.BounceOnWall, true)
        }
    }
}
function 圓圈4 (num: number, num2: number) {
    mySprite = sprites.create(assets.tile`myTile7`, SpriteKind.圓圈)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(num, num2))
}
function 圓圈5 (num: number, num2: number) {
    mySprite = sprites.create(assets.tile`myTile9`, SpriteKind.圓圈1)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(num, num2))
}
function 寶物設定9 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.圓圈1, function (sprite, otherSprite) {
    otherSprite.destroy()
    player1.destroy()
    敵人.destroy()
    level2()
})
function 寶物設定8 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    方向 = "L"
    player1.setImage(img`
        . . . f f f f f f . . . . 
        . . f 2 f e e e e f f . . 
        . f 2 2 2 f e e e e f f . 
        . f e e e e f f e e e f . 
        f e 2 2 2 2 e e f f f f . 
        f 2 e f f f f 2 2 2 e f . 
        f f f e e e f f f f f f f 
        f e e 4 4 f b e 4 4 e f f 
        . f e d d f 1 4 d 4 e e f 
        . . f d d d e e e e e f . 
        . . f e 4 e d d 4 f . . . 
        `)
})
function 食物設定 (直欄: number, 橫列: number) {
    食物 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(食物, tiles.getTileLocation(直欄, 橫列))
    tiles.placeOnRandomTile(食物, sprites.castle.tilePath5)
}
function level2 () {
    敵人.destroy(effects.spray, 100)
    tiles.setTilemap(tilemap`層級11`)
    玩家設定(1, 0)
}
function 寶物設定5 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
function 小精靈設定 (num: number, num2: number) {
    小精靈 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.精靈)
    tiles.placeOnTile(小精靈, tiles.getTileLocation(num, num2))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.圓圈, function (sprite, otherSprite) {
    otherSprite.destroy()
    player1.destroy()
    Level()
    敵人.destroy()
})
function 寶物設定4 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
function 小精靈設定4 (num: number, num2: number) {
    小精靈 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.精靈)
    tiles.placeOnTile(小精靈, tiles.getTileLocation(num, num2))
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    mySprite.destroy()
    level0()
    玩家設定(4, 1)
    圓圈5(3, 7)
})
function level0 () {
    tiles.setTilemap(tilemap`層級7`)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    方向 = "U"
    player1.setImage(img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e f f e e e f . . 
        . f f f f f 2 2 f f f f f . 
        . f f e 2 e 2 2 e 2 e f f . 
        . f e 2 f 2 f f 2 f 2 e f . 
        . f f f 2 2 e e 2 2 f f f . 
        f f e f 2 f e e f 2 f e f f 
        f e e f f e e e e f e e e f 
        . f e e e e e e e e e e f . 
        . . f e e e e e e e e f . . 
        `)
})
function Level () {
    mySprite.destroy(effects.disintegrate, 500)
    tiles.setTilemap(tilemap`層級1`)
    game.showLongText("找到樓梯前往下一個階層吧", DialogLayout.Full)
    game.splash("按\"A\"可以打倒敵人")
    game.splash("寶物可以幫助你")
    game.splash("小精靈可以幫助你到達下一個關卡喔")
    玩家設定(2, 2)
    食物設定(2, 5)
    產生敵人(5)
    寶物設定(1, 6)
    寶物設定2(13, 1)
    寶物設定3(6, 30)
    寶物設定4(19, 17)
    寶物設定5(12, 33)
    寶物設定6(23, 22)
    寶物設定7(28, 33)
    寶物設定8(32, 2)
    寶物設定9(23, 31)
    小精靈設定(7, 12)
    小精靈設定2(16, 24)
    小精靈設定3(18, 32)
    小精靈設定4(27, 30)
    info.startCountdown(800)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    方向 = "R"
    player1.setImage(img`
        . . . . f f f f f f . . . 
        . . f f e e e e f 2 f . . 
        . f f e e e e f 2 2 2 f . 
        . f e e e f f e e e e f . 
        . f f f f e e 2 2 2 2 e f 
        . f e 2 2 2 f f f f e 2 f 
        f f f f f f f e e e f f f 
        f f e 4 4 e b f 4 4 e e f 
        f e e 4 d 4 1 f d d e f . 
        . f e e e e e d d d f . . 
        . . . f 4 d d e 4 e f . . 
        `)
})
function 寶物設定7 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
info.onLifeZero(function () {
    if (info.score() >= 3) {
        game.over(true, effects.smiles)
    } else {
        game.over(false, effects.clouds)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(otherSprite, sprites.castle.tilePath5)
    music.baDing.play()
})
function 寶物設定6 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.寶物, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    music.playMelody("E G G F A A B B ", 120)
    music.playMelody("A B C5 - - - - - ", 120)
    otherSprite.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    方向 = "D"
    player1.setImage(img`
        . . . . . f f f f . . . . . 
        . . . f f f 2 2 f f f . . . 
        . . f f f 2 2 2 2 f f f . . 
        . f f f e e e e e e f f f . 
        . f f e 2 2 2 2 2 2 e e f . 
        . f e 2 f f f f f f 2 e f . 
        . f f f f e e e e f f f f . 
        f f e f b f 4 4 f b f e f f 
        f e e 4 1 f d d f 1 4 e e f 
        . f e e d d d d d d e e f . 
        . . f e e 4 4 4 4 e e f . . 
        `)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    子彈數量 = 0
})
function 小精靈設定2 (num: number, num2: number) {
    小精靈 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.精靈)
    tiles.placeOnTile(小精靈, tiles.getTileLocation(num, num2))
}
function 寶物設定3 (num: number, num2: number) {
    preasure = sprites.create(img`
        d d b b b b b b b b b b b b 1 1 
        d b e 4 4 4 4 4 4 4 4 4 4 e b 1 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b b b b b b b b b b 
        1 b b 1 1 1 1 d d d d d d b b d 
        `, SpriteKind.寶物)
    tiles.placeOnTile(preasure, tiles.getTileLocation(num, num2))
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    music.jumpUp.play()
})
function 小精靈設定3 (num: number, num2: number) {
    小精靈 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.精靈)
    tiles.placeOnTile(小精靈, tiles.getTileLocation(num, num2))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let 隨機數 = 0
let 小精靈: Sprite = null
let 食物: Sprite = null
let mySprite: Sprite = null
let 敵人: Sprite = null
let player1: Sprite = null
let projectile: Sprite = null
let 方向 = ""
let 子彈數量 = 0
let preasure: Sprite = null
let 關卡 = 0
關卡 = 0
level0()
玩家設定(1, 1)
圓圈4(4, 1)
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        隨機數 = randint(1, 4)
        if (隨機數 == 1) {
            value.setVelocity(0, 50)
        } else if (隨機數 == 2) {
            value.setVelocity(0, -50)
        } else if (隨機數 == 3) {
            value.setVelocity(50, 0)
        } else {
            value.setVelocity(-50, 0)
        }
    }
})
