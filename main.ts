namespace SpriteKind {
    export const pet = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`pinkcake`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    cakebear.startEffect(effects.hearts)
})
let cakebear: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setCurrentTilemap(tilemap`level1`)
cakebear = sprites.create(assets.image`cake bear`, SpriteKind.Player)
controller.moveSprite(cakebear)
let cake = sprites.create(assets.image`cake`, SpriteKind.pet)
cakebear.setPosition(45, 100)
cake.setPosition(55, 120)
cake.follow(cakebear)
scene.cameraFollowSprite(cakebear)
music.playMelody("A F E F D G E F ", 140)
