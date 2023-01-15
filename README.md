# __TypeScript Simulation__

## ___Premise___
This is incredibly work in progress, first of all, a lot of things described here are ideas that probably aren't actually implemented yet, cause 

A game of sorts. The "player" character is a shopkeeper who has set up just inside a notorious dungeon, hoping to reap the rewards of being near the action without having to see any of it personally. 

I'm thinking as you go maybe the player slowly starts venturing in, getting stronger and obtaining better things to sell, and eventually you beat the whole dungeon

An average day on the job consists of things like selling potions, repairing armor, and fighting off any mosters that venture too far out of the depths.

To start with at least, this is just going to be a text-based simulator that doesn't involve any user input. The primary purpose of this project is to learn more about TypeScript and just writing up a code base/project from scratch. I may eventually work it into a more substantial game with more visually stimulating components, but that would be a far off happening.

The game is built off the `tick()` method in `index.ts`, which calls repeatedly at a fixed interval. At the beginning of the game, the player is the only one present in the `active` zone (also defined in `index.ts`). At each tick, there will be a chance for new characters to enter the active zone. Any characters in the active zone, including the player, has the chance to randomly perform an `Action` on each tick, by calling their own `tick()` method. Once one or more additional characters are in the active zone, there will be the chance on each tick that either the player will interact with one of them or they will interact with the player. Characters besides the player will also be able to interact with each other within the active zone. All characters besides the player also have the chance to leave the active zone on each tick.

If a single character performs an `Action` on a tick, they will simply do it. If more than one character ends up acting on a single tick, though, a calculation will be performed around the `speed` stat to determine the order of `Action`s.

Some `Action`s will initiate an `Interaction`, or a continuous state of intercharacter activity between two or more characters. Interactions include things like making a purchase/sale, having a conversation, and combat.

Characters will have different sets of actions available depending on what, if any, interaction type is currently happening. For example, during a sale, the customer would be likely to browse items, ask about prices, haggle, and produce currency. The player might suggest an item, accept or deny a haggle, or polish a potion bottle before handing it over in exchange for 10 gold coins.

An `Action` may have stages, or multiple `Action`s might be required to occur in sequence (probably only one or the other, perhaps an `ActionGroup` that contains the required sequence of `Action`s). The purpose being that doing most anything takes time and that should be reflected.

Thinking an `Action` can be interrupted but haven't thought very hard about it yet

I want there to be a behavior aspect, but trying to take it slow


## ___Types___

Types are defined in the file alongside the class or interface that makes the most sense.

### `TActionsArray`
An array of `Action`s. All instances that extend from `Being` have a property `actions` of this type. This array is used by `getPossibleActionsArray()` to determine the `Action`s that are available and how likley each is.

### `TStringKeyNumberValueObject`

### `TLevelingMatrix`

### `TStats`

## ___Interfaces___

### `IStats`

## ___Classes___

### `Action`

### `Interaction`

### `Being`
- Anywhere I say "character" I loosely mean any instance that extends from `Being`
- The base class for all living(ish) things in the game. Its definite subclasses are `Person`, `Animal`, and `Monster`. Possibly others, `Elf`, `Dwarf`, etc
- Has base stats, but these should always get overwritten in subclasses
- Should generally be the grandparent class of ones that get instantiated. For example, `Being` has the subclass `Person` and `Person` has the subclass `Player`. `Player` gets instanciated in `index.ts` and `Player` is a grandchild class to `Being`.
- Grandchild classes should generally be instanciated using the syntax `new ClassName(level)` where `level` is an integer 0 - 100 representing the character's level. The constructor is always overloaded to also take three arguments &mdash; a `TStats` type object, a `TLevelingMatrix` type object, and a numeric `level` &mdash; though I anticipate this will be a special use case, like to beef up bosses.
- Implements the `IStats` interface
- Has a leveling matrix
- Can go from level 0 to level 100
- All `Being`s are able to enter combat and therefore have stats
- All `Being`s have a `tick()` method, which polls their available `Action`s and may randomly select one to execute.
- `Being` and all extended classes must use `attachActions()` in their constructor method to add `Action`s to `actions`

### `Person`

### `Player`

### `Animal`
- Often kept by `Person`s as pets. Many people train their pets to fight with them in the dungeon
- Can also just want in from the woods or whatever (you can get a pet OWO)
- Wild animals are more likely to be aggressive, but overall `Animal`s are less aggressive than `Monster`s
- Represent light, good
- Counter `Monster`s, which represent evil, darkness
- Generally more physically inclined (vs magical)

### `Monster`
- Primarily found in dungeons, including the one the player has set up shop in.
- Generally much more aggressive than `Person`s or `Animal`s
- Represent evil, darkness, countering `Animal`s
- Generally more magically inclined (vs monsters)