## Random Fear ##
Random Fear is a package used to generate random fears and sexual pleasures

## What do we mean by fears? ##
When we say "Fear" we refer to phobia. 
**Phobia**: *an extreme or irrational fear of or aversion to something*

## What do I mean by pleasures? ##
When we say "Pleasure" we refer to philia. 
**Philia**: *denoting fondness, especially an abnormal love for a specified thing*

## **Usage** ##

```
const randomFear = require('random-fear');  //import Module

console.log(randomFear.randomFear())
//Returns an object with { base: "phobia", explanation: "What the fear is"}

console.log(randomFear.randomPleasure())
//Returns an object with { base: "philia", explanation: "What the pleasure is"}
```

#### Information ####

```
Uses a list of over 200 philias and over 200 phobias and returns that in a nice object
```

## Functions ##
__randomFear__
*Returns a random fear and an description*
__Usage:__`randomFear()`

__randomPleasure__
*Returns a random pleasure and an description*
__Usage:__`randomPleasure()`
