# ConnectFour

## Explication / Explanation

#### French version

c'est un puissance 4 utilisant nodeJS et la commande "prompt-sync", une fois le projet lancer vous pouvez taper le chiffre de votre choix.

Les parties se lance au tour par tour, une fois les lettres "R" ou "Y" aligné, de droite à gauche / haut en bas / en diagonal alors le joueur "R" ou "Y" remporte la partie sinon la partie continue jusqu'à que les deux joueurs ne puisse plus jouer, à ce moment là un message s'affichera disant "aucun joueur ne peut plus jouer"

#### English version 

it's a connectFour using nodeJS and the "prompt-sync" command, once the project is launched you can type in the number of your choice.

Once the letters "R" or "Y" are lined up, from right to left / top to bottom / diagonally, the "R" or "Y" player wins the game. Otherwise, the game continues until both players can no longer play, at which point a message will appear saying "no longer able to play".

## installation

### pre-requie 
- [Node.js](https://nodejs.org/fr)

#### French version

après avoir installer nodeJS vous pouvez taper lancer la commande 
``` npm i ```
suivie de 
``` node  gameloop```
vérifiez que vous êtes dans le bon dossier pour le lancer

#### English version

after installing nodeJS you can type the command 
``` npm i ```
followed by
``` node  gameloop```
check that you are in the right folder to launch it

## the game 

### lancement de la partie 

#### French version

après avoir fait la commande ``` node  gameloop.js``` vous aurez cette image qui s'affiche, il ne vous restera plus qu'a rentrer le numero qui vous intéresse pour laisser le joueur suivant jouer 
```
0 1 2 3 4 5 6
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
Player R, enter your next move:
```

#### English version

after running ``` node  gameloop.js``` you'll see this code displayed, all you have to do is enter the number you're interested in to let the next player play 

```
0 1 2 3 4 5 6
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
Player R, enter your next move:
```

### game over / win 

#### French version 

la partie se finit quand l'un des joueurs à remplit une ligne, on peut alors voir le message suivant apparaitre ``` (the player) won this game. ```

si les deux joueurs ne peuvent plus jouer alors nous obtiendrons le message d'erreur suivant ``` Nobody won this game. ```

#### English version 

the game ends when one of the players has completed a line, and the following message appears ``` (the player) won this game. ```

if both players can no more play, we get the following message ``` Nobody won this game. ```

