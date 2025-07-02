controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 8 8 . . . . . . 
        . . . . . . . f 8 8 f . . . . . 
        . . . . . . . f d d f . . . . . 
        . . . . . . . 8 8 8 8 . . . . . 
        . . . . . . . 8 8 8 8 . . . . . 
        . . . . . . . f 8 8 f . . . . . 
        . . . . . . . f 8 8 f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f 8 8 f f . . . 
        . . . . . . 8 8 d 8 8 8 8 . . . 
        . . . . . . 8 8 d 8 8 8 8 . . . 
        . . . . . . . f f 8 8 f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.anyButton.onEvent(ControllerButtonEvent.Repeated, function () {
    controller.moveSprite(mySprite, 150, 150)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f 8 8 f f . . . . . . . 
        . . . 8 8 8 8 d 8 8 . . . . . . 
        . . . 8 8 8 8 d 8 8 . . . . . . 
        . . . f f 8 8 f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 8 8 f . . . . . . . 
        . . . . . f 8 8 f . . . . . . . 
        . . . . . 8 8 8 8 . . . . . . . 
        . . . . . 8 8 8 8 . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . . f 8 8 f . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . f 8 8 f . . . . . . . 
    . . . . . f d d f . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . f 8 8 f . . . . . . . 
    . . . . . f 8 8 f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(74, 58)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(7)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
