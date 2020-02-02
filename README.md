# m-agents

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Notes

Le Compteur ne marche pas parfaitement. Il compte seulement les messages non lus dans la vitrine actuelle. Quand le autoscroll fait un appel au API il se met à jour. Mais vous pouvez cliquer sur un message pour marquer le message read = true et le compteur le prendra en compte.

J'ai essayé de faire un PUT et update le message mais ça m'a donné un NOT ALLOWED. J'ai laissé le travail sur le branch update-message.

## Taches

- [x]  Intégrer la version mobile
- [x]  Intégrer la liste des messages
- [x]  Intégrer la lecture d'un message
- [x]  Intégrer la possibilité de changer d'agence (dropdown HTML classique)
- [x]  Gérer le compteur de message non-lus
- [x]  Gérer la pagination (infinite scroll)

## Bonus de points

- [ ]  Pouvoir accéder à un message directement depuis l'URL (routing)
- [x]  Respecter les maquettes graphiques
    - [x]  Element lus/non lus
    - [x]  Compteur grisé si 0 message non lu
- [x]  Implémenter des dates relatives sur la liste des messages
- [x]  Intégrer la version desktop
- [ ]  Tests unitaires

