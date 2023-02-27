# Changelog

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier. Consultez [standard-version](https://github.com/conventional-changelog/standard-version) pour les lignes directrices des commits.

## [1.5.0](https://github.com/bibudem/api-communs/compare/v1.4.0...v1.5.0) (2023-02-27)


### Features

* **route:** Retrait de la route /about. Il faudra l'ajouter à chaque API ([245a899](https://github.com/bibudem/api-communs/commit/245a89941a39c5a25922ff917d859b21fe154665))


### Bug Fixes

* Ajout d'un "/" à la fin de la route /api-doc/ ([5e45f37](https://github.com/bibudem/api-communs/commit/5e45f37a1f900ce714ca9a3083277dce71edc067))

## [1.4.0](https://github.com/bibudem/api-communs/compare/v1.3.0...v1.4.0) (2023-02-24)


### Features

* **schema:** Ajout d'une route /schemas/error pour le schéma errors.json ([84acfba](https://github.com/bibudem/api-communs/commit/84acfbadf08ae7ac69bd2a014feaa040d84aafa5))


### Bug Fixes

* **schema:** Le schéma errors.json ne validait pas ([0bf52bb](https://github.com/bibudem/api-communs/commit/0bf52bba4fc393a2d90e8db71e89e6797f90b22d))

## [1.3.0](https://github.com/bibudem/api-communs/compare/v1.2.0...v1.3.0) (2023-02-21)


### Features

* Ajout de middlewares ([77b330a](https://github.com/bibudem/api-communs/commit/77b330a04fc614d8295432ce0c16121a13a6b497))
* Ajout de référencement de schemas externes ([895bc30](https://github.com/bibudem/api-communs/commit/895bc30a21b6485b15425254b3dee7f7522d8695))

## [1.2.0](https://github.com/bibudem/api-communs/compare/v1.1.0...v1.2.0) (2023-02-13)


### Features

* Possibilité de modifier les paramètres des validateurs par défaut ([e5d7c99](https://github.com/bibudem/api-communs/commit/e5d7c99d5c79edae568e488a213f7b03ca2c09d6))

## 1.1.0 (2023-02-13)


### Features

* Ajout de l'action GitHub release-please.yml ([947575b](https://github.com/bibudem/api-communs/commit/947575b82a1cd3d71848885699a927b6ff79f98c))
* **schema:** Ajout de l'action swagger-validation.yml ([9114e55](https://github.com/bibudem/api-communs/commit/9114e55aef3e24bc2fd3a146bd470eb5f33c73af))
* **schema:** RequestError#details n'est plus obligatoire ([7e6c669](https://github.com/bibudem/api-communs/commit/7e6c66979d6e96158ee3064e7c358251b5cd80b2))


### Bug Fixes

* Amélioration du traitement des erreurs ([181880a](https://github.com/bibudem/api-communs/commit/181880a366fbfffc78c58dfaa9cf1d4e8e08663d))
* **schema:** Changé errors.json#/components/schemas/Details/allOf -&gt; oneOf ([1ac3ce5](https://github.com/bibudem/api-communs/commit/1ac3ce5222080adac830f3dd5ad2e1ac0da25b50))
* **schema:** Corrections divers ([fbd6065](https://github.com/bibudem/api-communs/commit/fbd606530d6efef80bc976668003be3a0363c89d))


### Miscellaneous Chores

* release 1.1.0 ([ac21c3e](https://github.com/bibudem/api-communs/commit/ac21c3e796910d5c1b1125d94f145b4cb12ea302))
