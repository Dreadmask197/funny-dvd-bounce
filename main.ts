tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    ...1111111111111.......111111111.......
    ...1111111111111.......11111111111.....
    ...11111111111111.....1111111111111....
    .........1111.111.....111......1111....
    ...111....11111111...1111111....1111...
    ...111.....111.111...111.111.....111...
    ...111.....111.1111.1111.111.....111...
    ...111....1111..111.111..111....1111...
    ...111...1111...1111111..111...1111....
    ...1111111111....11111...1111111111....
    ...111111111.....11111...111111111.....
    ...1111111........111....1111111.......
    ..................111..................
    ...................1...................
    ...........1111111111111111............
    ......111111111111111111111111111......
    ...111111111111111111111111111111111...
    .111111111111111......1111111111111111.
    11111111111111..........111111111111111
    .111111111111111......1111111111111111.
    ...111111111111111111111111111111111...
    ......111111111111111111111111111......
    ...........1111111111111111............
    .......................................
    .......................................
    ..1...1.....1...111....1111.......11...
    ..1...1.....1...1..1...1.........1..1..
    ...1.1......1...1..1...1.........1..1..
    ...1.1......1...1..1...111.......1..1..
    ...1.1......1...1..1...1.........1..1..
    ....1.......1...1..1...1.........1..1..
    ....1.......1...111....1111.......11...
    `, SpriteKind.Player)
mySprite.setVelocity(10, 10)
mySprite.setBounceOnWall(true)
scene.centerCameraAt(96, 80)
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                ...2222222222222.......222222222.......
                ...2222222222222.......22222222222.....
                ...22222222222222.....2222222222222....
                .........2222.222.....222......2222....
                ...222....22222222...2222222....2222...
                ...222.....222.222...222.222.....222...
                ...222.....222.2222.2222.222.....222...
                ...222....2222..222.222..222....2222...
                ...222...2222...2222222..222...2222....
                ...2222222222....22222...2222222222....
                ...222222222.....22222...222222222.....
                ...2222222........222....2222222.......
                ..................222..................
                ...................2...................
                ...........2222222222222222............
                ......222222222222222222222222222......
                ...222222222222222222222222222222222...
                .222222222222222......2222222222222222.
                22222222222222..........222222222222222
                .222222222222222......2222222222222222.
                ...222222222222222222222222222222222...
                ......222222222222222222222222222......
                ...........2222222222222222............
                .......................................
                .......................................
                ..2...2.....2...222....2222.......22...
                ..2...2.....2...2..2...2.........2..2..
                ...2.2......2...2..2...2.........2..2..
                ...2.2......2...2..2...222.......2..2..
                ...2.2......2...2..2...2.........2..2..
                ....2.......2...2..2...2.........2..2..
                ....2.......2...222....2222.......22...
                `)
        } else {
            mySprite.setImage(img`
                ...4444444444444.......444444444.......
                ...4444444444444.......44444444444.....
                ...44444444444444.....4444444444444....
                .........4444.444.....444......4444....
                ...444....44444444...4444444....4444...
                ...444.....444.444...444.444.....444...
                ...444.....444.4444.4444.444.....444...
                ...444....4444..444.444..444....4444...
                ...444...4444...4444444..444...4444....
                ...4444444444....44444...4444444444....
                ...444444444.....44444...444444444.....
                ...4444444........444....4444444.......
                ..................444..................
                ...................4...................
                ...........4444444444444444............
                ......444444444444444444444444444......
                ...444444444444444444444444444444444...
                .444444444444444......4444444444444444.
                44444444444444..........444444444444444
                .444444444444444......4444444444444444.
                ...444444444444444444444444444444444...
                ......444444444444444444444444444......
                ...........4444444444444444............
                .......................................
                .......................................
                ..4...4.....4...444....4444.......44...
                ..4...4.....4...4..4...4.........4..4..
                ...4.4......4...4..4...4.........4..4..
                ...4.4......4...4..4...444.......4..4..
                ...4.4......4...4..4...4.........4..4..
                ....4.......4...4..4...4.........4..4..
                ....4.......4...444....4444.......44...
                `)
        }
    } else if (mySprite.isHittingTile(CollisionDirection.Top)) {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                ...5555555555555.......555555555.......
                ...5555555555555.......55555555555.....
                ...55555555555555.....5555555555555....
                .........5555.555.....555......5555....
                ...555....55555555...5555555....5555...
                ...555.....555.555...555.555.....555...
                ...555.....555.5555.5555.555.....555...
                ...555....5555..555.555..555....5555...
                ...555...5555...5555555..555...5555....
                ...5555555555....55555...5555555555....
                ...555555555.....55555...555555555.....
                ...5555555........555....5555555.......
                ..................555..................
                ...................5...................
                ...........5555555555555555............
                ......555555555555555555555555555......
                ...555555555555555555555555555555555...
                .555555555555555......5555555555555555.
                55555555555555..........555555555555555
                .555555555555555......5555555555555555.
                ...555555555555555555555555555555555...
                ......555555555555555555555555555......
                ...........5555555555555555............
                .......................................
                .......................................
                ..5...5.....5...555....5555.......55...
                ..5...5.....5...5..5...5.........5..5..
                ...5.5......5...5..5...5.........5..5..
                ...5.5......5...5..5...555.......5..5..
                ...5.5......5...5..5...5.........5..5..
                ....5.......5...5..5...5.........5..5..
                ....5.......5...555....5555.......55...
                `)
        } else {
            mySprite.setImage(img`
                ...7777777777777.......777777777.......
                ...7777777777777.......77777777777.....
                ...77777777777777.....7777777777777....
                .........7777.777.....777......7777....
                ...777....77777777...7777777....7777...
                ...777.....777.777...777.777.....777...
                ...777.....777.7777.7777.777.....777...
                ...777....7777..777.777..777....7777...
                ...777...7777...7777777..777...7777....
                ...7777777777....77777...7777777777....
                ...777777777.....77777...777777777.....
                ...7777777........777....7777777.......
                ..................777..................
                ...................7...................
                ...........7777777777777777............
                ......777777777777777777777777777......
                ...777777777777777777777777777777777...
                .777777777777777......7777777777777777.
                77777777777777..........777777777777777
                .777777777777777......7777777777777777.
                ...777777777777777777777777777777777...
                ......777777777777777777777777777......
                ...........7777777777777777............
                .......................................
                .......................................
                ..7...7.....7...777....7777.......77...
                ..7...7.....7...7..7...7.........7..7..
                ...7.7......7...7..7...7.........7..7..
                ...7.7......7...7..7...777.......7..7..
                ...7.7......7...7..7...7.........7..7..
                ....7.......7...7..7...7.........7..7..
                ....7.......7...777....7777.......77...
                `)
        }
    } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                ...8888888888888.......888888888.......
                ...8888888888888.......88888888888.....
                ...88888888888888.....8888888888888....
                .........8888.888.....888......8888....
                ...888....88888888...8888888....8888...
                ...888.....888.888...888.888.....888...
                ...888.....888.8888.8888.888.....888...
                ...888....8888..888.888..888....8888...
                ...888...8888...8888888..888...8888....
                ...8888888888....88888...8888888888....
                ...888888888.....88888...888888888.....
                ...8888888........888....8888888.......
                ..................888..................
                ...................8...................
                ...........8888888888888888............
                ......888888888888888888888888888......
                ...888888888888888888888888888888888...
                .888888888888888......8888888888888888.
                88888888888888..........888888888888888
                .888888888888888......8888888888888888.
                ...888888888888888888888888888888888...
                ......888888888888888888888888888......
                ...........8888888888888888............
                .......................................
                .......................................
                ..8...8.....8...888....8888.......88...
                ..8...8.....8...8..8...8.........8..8..
                ...8.8......8...8..8...8.........8..8..
                ...8.8......8...8..8...888.......8..8..
                ...8.8......8...8..8...8.........8..8..
                ....8.......8...8..8...8.........8..8..
                ....8.......8...888....8888.......88...
                `)
        } else {
            mySprite.setImage(img`
                ...9999999999999.......999999999.......
                ...9999999999999.......99999999999.....
                ...99999999999999.....9999999999999....
                .........9999.999.....999......9999....
                ...999....99999999...9999999....9999...
                ...999.....999.999...999.999.....999...
                ...999.....999.9999.9999.999.....999...
                ...999....9999..999.999..999....9999...
                ...999...9999...9999999..999...9999....
                ...9999999999....99999...9999999999....
                ...999999999.....99999...999999999.....
                ...9999999........999....9999999.......
                ..................999..................
                ...................9...................
                ...........9999999999999999............
                ......999999999999999999999999999......
                ...999999999999999999999999999999999...
                .999999999999999......9999999999999999.
                99999999999999..........999999999999999
                .999999999999999......9999999999999999.
                ...999999999999999999999999999999999...
                ......999999999999999999999999999......
                ...........9999999999999999............
                .......................................
                .......................................
                ..9...9.....9...999....9999.......99...
                ..9...9.....9...9..9...9.........9..9..
                ...9.9......9...9..9...9.........9..9..
                ...9.9......9...9..9...999.......9..9..
                ...9.9......9...9..9...9.........9..9..
                ....9.......9...9..9...9.........9..9..
                ....9.......9...999....9999.......99...
                `)
        }
    } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                ...aaaaaaaaaaaaa.......aaaaaaaaa.......
                ...aaaaaaaaaaaaa.......aaaaaaaaaaa.....
                ...aaaaaaaaaaaaaa.....aaaaaaaaaaaaa....
                .........aaaa.aaa.....aaa......aaaa....
                ...aaa....aaaaaaaa...aaaaaaa....aaaa...
                ...aaa.....aaa.aaa...aaa.aaa.....aaa...
                ...aaa.....aaa.aaaa.aaaa.aaa.....aaa...
                ...aaa....aaaa..aaa.aaa..aaa....aaaa...
                ...aaa...aaaa...aaaaaaa..aaa...aaaa....
                ...aaaaaaaaaa....aaaaa...aaaaaaaaaa....
                ...aaaaaaaaa.....aaaaa...aaaaaaaaa.....
                ...aaaaaaa........aaa....aaaaaaa.......
                ..................aaa..................
                ...................a...................
                ...........aaaaaaaaaaaaaaaa............
                ......aaaaaaaaaaaaaaaaaaaaaaaaaaa......
                ...aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...
                .aaaaaaaaaaaaaaa......aaaaaaaaaaaaaaaa.
                aaaaaaaaaaaaaa..........aaaaaaaaaaaaaaa
                .aaaaaaaaaaaaaaa......aaaaaaaaaaaaaaaa.
                ...aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...
                ......aaaaaaaaaaaaaaaaaaaaaaaaaaa......
                ...........aaaaaaaaaaaaaaaa............
                .......................................
                .......................................
                ..a...a.....a...aaa....aaaa.......aa...
                ..a...a.....a...a..a...a.........a..a..
                ...a.a......a...a..a...a.........a..a..
                ...a.a......a...a..a...aaa.......a..a..
                ...a.a......a...a..a...a.........a..a..
                ....a.......a...a..a...a.........a..a..
                ....a.......a...aaa....aaaa.......aa...
                `)
        } else {
            mySprite.setImage(img`
                ...ddddddddddddd.......ddddddddd.......
                ...ddddddddddddd.......ddddddddddd.....
                ...dddddddddddddd.....ddddddddddddd....
                .........dddd.ddd.....ddd......dddd....
                ...ddd....dddddddd...ddddddd....dddd...
                ...ddd.....ddd.ddd...ddd.ddd.....ddd...
                ...ddd.....ddd.dddd.dddd.ddd.....ddd...
                ...ddd....dddd..ddd.ddd..ddd....dddd...
                ...ddd...dddd...ddddddd..ddd...dddd....
                ...dddddddddd....ddddd...dddddddddd....
                ...ddddddddd.....ddddd...ddddddddd.....
                ...ddddddd........ddd....ddddddd.......
                ..................ddd..................
                ...................d...................
                ...........dddddddddddddddd............
                ......ddddddddddddddddddddddddddd......
                ...ddddddddddddddddddddddddddddddddd...
                .ddddddddddddddd......dddddddddddddddd.
                dddddddddddddd..........ddddddddddddddd
                .ddddddddddddddd......dddddddddddddddd.
                ...ddddddddddddddddddddddddddddddddd...
                ......ddddddddddddddddddddddddddd......
                ...........dddddddddddddddd............
                .......................................
                .......................................
                ..d...d.....d...ddd....dddd.......dd...
                ..d...d.....d...d..d...d.........d..d..
                ...d.d......d...d..d...d.........d..d..
                ...d.d......d...d..d...ddd.......d..d..
                ...d.d......d...d..d...d.........d..d..
                ....d.......d...d..d...d.........d..d..
                ....d.......d...ddd....dddd.......dd...
                `)
        }
    }
})
