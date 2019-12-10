# Frontend

C'est ici qu'est codée la partie "visuelle" de notre code. Vous y trouverez toutes les pages 
JavaScript ainsi que les Pages CSS correspondantes

## Installation

Après avoir effectué dans votre console GitBash les commandes du README backend, entrez :
```bash
export PORT=8000
npm start
```

Une page internet devrait donc s'ouvrir avec notre Dashboard 

## Usage

En arrivant sur le Dashboard, vous arriverez par défaut sur Home, l'Accueil de notre Dashboard.
Vous aurez au total 6 Widgets récapitulants des données suivantes :
- Les 3 derniers capteurs ajoutés
- Le nombre de capteurs installés par pièce
- Le nombre total de capteurs installés
- Le nombre de maison avec 1, 2, 3, etc... habitants
- Le nombre total de mseures prises par heure
- Un récapitulatif des dernières mesures prises 

Vous pourrez ensuite passer sur l'interface Administrateur et voir apparaître la liste totale
des utilisateurs. De là, vous pourrez :
- Ajouter un Utilisateur
- Accédez à la liste de Capteurs de chaque Utilisateur
- Lui ajouter un Capteur
- Supprimer un Utilisateur

Le Dashboard se mettra à jour en fonction des nouvelles donées.

## Documentation

Pour s'organiser durant ce projet nous avons choisi d'utiliser [Figma](https://www.figma.com/file/Tce56ElkVBjrJ45eyV7dHb/Projet-React?node-id=0%3A1) pour désigner nos Wireframes. 

Nous avons également utilisé les différenst graphes de [Recharts](http://recharts.org/en-US/) pour y insérer nos données 
afficacement.