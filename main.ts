input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let nom: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(500)
    nom.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (sprite.isTouching(nom)) {
        nom.delete()
    }
})
basic.forever(function () {
    nom = game.createSprite(randint(0, 4), 0)
    basic.pause(2000)
})
