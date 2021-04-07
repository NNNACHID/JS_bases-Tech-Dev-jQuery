## Exercice 1 : Au commencement

1. En haut du fichier `script.js`, écrivez un commentaire qui explique la différence entre Javascript et jQuery (c'est fondamental de comprendre avant d'aller plus loin !). Pour vous aider, cette [vidéo](http://learn.onemonth.com/jquery-vs-javascript/) est très bien.
2. Pour pouvoir utiliser jQuery nous devons l'ajouter en tant que librarie externe dans notre application. Ajouter donc une balise `script` qui permet d'inclure jQuery. Où placer vous cette balise script par rapport à la balise existante `<script src="script.js"></script>` et pourquoi ?
3. Vérifier que vous avez bien ajouté la librarie en insérant le code ci-dessous et assurez-vous que le message s'affiche dans la console de votre navigateur.

```js
$(document).ready(function () {
  console.log("Je peux maintenant écrire du code jQuery");
});
```

4. Expliquer (avec un commentaire) les lignes de code ci-dessus.
5. En quoi cette ligne est indispensable ?
6. Quel symbole permet de repérer dans un programme Javascript que du jQuery est utilisé ? (attention, ce n'est pas toujours le cas...)
