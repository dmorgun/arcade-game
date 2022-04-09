namespace SpriteKind {
    export const pet = SpriteKind.create()
}
let cakebear = sprites.create(assets.image`cake bear`, SpriteKind.Player)
controller.moveSprite(cakebear)
let cake = sprites.create(assets.image`cake`, SpriteKind.pet)
