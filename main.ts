sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.bubbles, 100)
    music.magicWand.play()
})
let projectile: Sprite = null
game.splash("\"Eat the Fruit Game\"")
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    .....88888888.......
    .....8dddddd8.......
    ....88dfddfd88......
    ....8dddddddd8......
    ....8dddddddd8......
    ........dd..........
    ........dd..........
    ......daaaad........
    ......daaaad........
    ......daaaad........
    ......daaaad........
    ......daaaad........
    .......d..d.........
    .......d..d.........
    .......d..d.........
    .......d..d.........
    ....................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.startCountdown(30)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})
