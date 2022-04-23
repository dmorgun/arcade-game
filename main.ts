namespace SpriteKind {
    export const pet = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`pinkcake`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    oggy.startEffect(effects.hearts, 500)
    music.baDing.play()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthWest0, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`icecream`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    oggy.startEffect(effects.hearts, 500)
    music.baDing.play()
    info.changeScoreBy(1)
})
let oggy: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setCurrentTilemap(tilemap`level1`)
oggy = sprites.create(assets.image`oggy`, SpriteKind.Player)
controller.moveSprite(oggy)
let cake = sprites.create(assets.image`cake`, SpriteKind.pet)
oggy.setPosition(45, 100)
cake.setPosition(55, 120)
cake.follow(oggy)
scene.cameraFollowSprite(oggy)
music.playMelody("A F E F D G E F ", 140)
