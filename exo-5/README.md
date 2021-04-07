## Exercice 5 : Pierre, feuille, ciseau avec une interface graphique

Précédemment, nous avons réalisé un programme permettant de jouer à ce fameux jeu.
L'objectif de cette partie est de faire une interface graphique web permettant à l'utilisateur de faire son choix.

Dans l'idéal, il ne faudra pas modifier le code précédemment écrit, l'objectif étant de séparer la partie Vue de la partie Logique (après tout, on pourra vous demander de faire une nouvelle interface graphique sur téléphone par exemple et la logique restera la même) :

1. Trouvez sur internet trois images : une de pierre, une de feuille et l'autre de ciseaux ;
2. Créez dans votre page HTML une section qui contient ces trois images sur une même ligne ;
3. L'utilisateur va cliquer sur une image afin de faire son choix. En utilisant des sélecteurs jQuery, faites-en sorte que lorsque l'utilisateur clique sur une image, son choix s'affiche dans la console ;
4. Maintenant créez une div avec l'id userChoice, et remplacez le contenu de cette div par le choix de l'utilisateur ;
5. Créez une div avec l'id computerChoice et y mettre dedans le choix de l'ordinateur que vous avez obtenu suite à l'appel de la fonction getComputerChoice créée dans le cours précédent ;
6. Ajoutez une div pour afficher le résultat, le texte doit être vert si vous avez gagné, gris en cas d'égalité et rouge si vous avez perdu.

Bonus : essayez de recréer (à votre sauce !) l'interface de [cette page web](https://www.handcramp.lol/) avec le nombre de rounds, le calcul du score, etc.
