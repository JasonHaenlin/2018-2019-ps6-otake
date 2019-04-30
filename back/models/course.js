const BaseModel = require('./base-model');

module.exports = new BaseModel('course', t => {
  t.increments('id').primary();
  t.integer('major_spec_id').references('id').inTable('major_speciality');
  t.string('ue');
  t.string('semester');
  t.string('title');
  t.string('description');
},
[
  { id: 0, major_spec_id: 0, ue: 'UE3', semester: 'S7', title: 'Anglais', description: '' },
  { id: 1, major_spec_id: 0, ue: 'UE3', semester: 'S7', title: 'Gestion de projet', description: '' },
  { id: 2, major_spec_id: 0, ue: 'UE3', semester: 'S7', title: 'Gestion d\'entreprise', description: '' },
  { id: 3, major_spec_id: 0, ue: 'UE1', semester: 'S7', title: 'Conception Logiciel', description: '' },
  { id: 4, major_spec_id: 0, ue: 'UE1', semester: 'S7', title: 'Algorithme & Compléxité', description: '' },
  { id: 5, major_spec_id: 0, ue: 'UE1', semester: 'S7', title: 'Programmation multi paradigme', description: '' },
  { id: 6, major_spec_id: 0, ue: 'UE2', semester: 'S7', title: 'Sécurité Logicielle', description: 'option' },
  { id: 7, major_spec_id: 0, ue: 'UE2', semester: 'S7', title: 'Langages XML & Documents', description: 'option' },
  { id: 8, major_spec_id: 0, ue: 'UE2', semester: 'S7', title: 'Compilation', description: 'option' },
  { id: 9, major_spec_id: 0, ue: 'UE2', semester: 'S7', title: 'Finite State Machine', description: 'option' },
  { id: 10, major_spec_id: 0, ue: 'UE3', semester: 'S8', title: 'Communication 2', description: '' },
  { id: 11, major_spec_id: 0, ue: 'UE3', semester: 'S8', title: 'Anglais', description: '' },
  { id: 12, major_spec_id: 0, ue: 'UE2', semester: 'S8', title: 'Programmation fonctionnnelle et logique', description: '' },
  { id: 13, major_spec_id: 0, ue: 'UE2', semester: 'S8', title: 'IA', description: '' },
  { id: 14, major_spec_id: 0, ue: 'UE2', semester: 'S8', title: 'Algorithmique Avancé', description: '' },
  { id: 15, major_spec_id: 0, ue: 'UE2', semester: 'S8', title: 'Programmation parallèle', description: '' },
  { id: 16, major_spec_id: 0, ue: 'UE1', semester: 'S8', title: 'Valorisation de données', description: 'option' },
  { id: 17, major_spec_id: 0, ue: 'UE1', semester: 'S8', title: 'Serv.Oriented Computing', description: 'option' },
  { id: 18, major_spec_id: 0, ue: 'UE1', semester: 'S8', title: 'Résx. avancés & Middleware', description: 'option' },
  { id: 20, major_spec_id: 0, ue: 'UE1', semester: 'S8', title: 'Réalité Augmenté', description: 'option' },
  { id: 21, major_spec_id: 0, ue: 'UE1', semester: 'S8', title: 'Introduction to software architecture', description: 'option' },
  { id: 22, major_spec_id: 0, ue: 'UE1', semester: 'S8', title: 'ISLE', description: 'option' },
  { id: 23, major_spec_id: 0, ue: 'UE1', semester: 'S8', title: 'DevOps&Continuous Testing', description: 'option' },
  { id: 24, major_spec_id: 0, ue: 'UE1', semester: 'S8', title: 'Capteurs/actionneurs', description: 'option' },
  { id: 25, major_spec_id: 0, ue: '', semester: 'S9', title: 'Intégrations de services', description: '' },
  { id: 26, major_spec_id: 0, ue: '', semester: 'S9', title: 'Peer to peer', description: '' },
  { id: 27, major_spec_id: 0, ue: '', semester: 'S9', title: 'Systèmes d\'exploitation avancés', description: '' },
  { id: 28, major_spec_id: 0, ue: '', semester: 'S9', title: 'Performance evaluation of networks', description: '' },
  { id: 29, major_spec_id: 0, ue: '', semester: 'S9', title: 'Administration réseau', description: '' },
  { id: 30, major_spec_id: 0, ue: '', semester: 'S9', title: 'ingénierie des connaissances', description: '' },
  { id: 31, major_spec_id: 0, ue: '', semester: 'S9', title: 'Techniques moderne de programmation', description: '' },
  { id: 32, major_spec_id: 0, ue: '', semester: 'S9', title: 'Objets connectés et services', description: '' },
  { id: 33, major_spec_id: 0, ue: '', semester: 'S9', title: 'Interagir dans un monde 3D', description: '' },
  { id: 34, major_spec_id: 0, ue: '', semester: 'S9', title: 'Sécurité des applications web', description: '' },
  { id: 35, major_spec_id: 0, ue: '', semester: 'S9', title: 'Techniques d\'interactions', description: '' },
  { id: 36, major_spec_id: 0, ue: '', semester: 'S9', title: 'Architectures logicielles', description: '' },
  { id: 37, major_spec_id: 0, ue: '', semester: 'S9', title: 'Archi log pour le cloud computing', description: '' },
  { id: 38, major_spec_id: 0, ue: '', semester: 'S9', title: 'Technologies pour les données massives', description: '' },
  { id: 39, major_spec_id: 0, ue: '', semester: 'S9', title: 'Conception des IHM', description: '' },
  { id: 40, major_spec_id: 0, ue: '', semester: 'S9', title: 'Algorithmic approach to distributed computing', description: '' },
  { id: 41, major_spec_id: 0, ue: '', semester: 'S9', title: 'Web de données', description: '' },
  { id: 42, major_spec_id: 0, ue: '', semester: 'S9', title: 'Programmation fine et complexité empirique', description: '' },
  { id: 43, major_spec_id: 0, ue: '', semester: 'S9', title: 'Content distribution in wireless network', description: '' },
  { id: 44, major_spec_id: 0, ue: '', semester: 'S9', title: 'Management', description: '' },
  { id: 45, major_spec_id: 0, ue: '', semester: 'S10', title: 'Virtualized cloud computing', description: '' },
  { id: 46, major_spec_id: 0, ue: '', semester: 'S10', title: 'Programable web: server side', description: '' },
  { id: 47, major_spec_id: 0, ue: '', semester: 'S10', title: 'Algorithms for telecom', description: '' },
  { id: 48, major_spec_id: 0, ue: '', semester: 'S10', title: 'Interprétation de langages', description: '' },
  { id: 49, major_spec_id: 0, ue: '', semester: 'S10', title: 'Sécurité dans les réseaux', description: '' },
  { id: 50, major_spec_id: 0, ue: '', semester: 'S10', title: 'Rétroingénierie, maintenance et evolution', description: '' },
  { id: 51, major_spec_id: 0, ue: '', semester: 'S10', title: 'Web semantique', description: '' },
  { id: 52, major_spec_id: 0, ue: '', semester: 'S10', title: 'Large scale distributed systems', description: '' },
  { id: 53, major_spec_id: 0, ue: '', semester: 'S10', title: 'Langages spécifiques aux modèles', description: '' },
  { id: 54, major_spec_id: 0, ue: '', semester: 'S10', title: 'Security and privacy 3.0', description: '' },
  { id: 55, major_spec_id: 0, ue: '', semester: 'S10', title: 'Programable web: client side', description: '' },
  { id: 56, major_spec_id: 0, ue: '', semester: 'S10', title: 'Blockchain and privacy', description: '' },
  { id: 57, major_spec_id: 0, ue: '', semester: 'S10', title: 'Smart Cards', description: '' },
  { id: 58, major_spec_id: 0, ue: '', semester: 'S10', title: 'Modèlisation et conception des systèmes embarqués', description: '' },
  { id: 59, major_spec_id: 0, ue: '', semester: 'S10', title: 'Réalité virtuelle', description: '' },
  { id: 60, major_spec_id: 0, ue: '', semester: 'S10', title: 'Interfaces tactiles', description: '' },
  { id: 61, major_spec_id: 0, ue: '', semester: 'S10', title: 'Virtualized cloud computing', description: '' },
  { id: 62, major_spec_id: 0, ue: '', semester: 'S10', title: 'Ingénierie 3D', description: '' },
  { id: 63, major_spec_id: 6, ue: '', semester: 'S7', title: 'Processus stochastiques', description: '' },
  { id: 64, major_spec_id: 6, ue: '', semester: 'S7', title: 'Modélisation et optimisation en apprentissage automatique', description: '' },
  { id: 65, major_spec_id: 6, ue: '', semester: 'S7', title: 'Equations aux Dérivées Partielles', description: '' },
  { id: 66, major_spec_id: 6, ue: '', semester: 'S7', title: 'Analyse Conception orientée Objet', description: '' },
  { id: 67, major_spec_id: 6, ue: '', semester: 'S7', title: 'Bases de Données Relationnelles', description: '' },
  { id: 68, major_spec_id: 6, ue: '', semester: 'S7', title: 'Computer vision & Machine learning', description: '' },
  { id: 69, major_spec_id: 6, ue: '', semester: 'S7', title: 'Programmation C++', description: '' },
  { id: 70, major_spec_id: 6, ue: '', semester: 'S7', title: 'Anglais 7', description: '' },
  { id: 71, major_spec_id: 6, ue: '', semester: 'S7', title: 'Gestion d’entreprise', description: '' },
  { id: 72, major_spec_id: 6, ue: '', semester: 'S7', title: 'Gestion de projet', description: '' },
  { id: 73, major_spec_id: 6, ue: '', semester: 'S7', title: 'Projet 3', description: '' },
  { id: 74, major_spec_id: 6, ue: '', semester: 'S8', title: 'Interpolation numérique', description: '' },
  { id: 75, major_spec_id: 6, ue: '', semester: 'S8', title: 'Optimisation', description: '' },
  { id: 76, major_spec_id: 6, ue: '', semester: 'S8', title: 'Méthodes Numériques pour les EDP', description: '' },
  { id: 77, major_spec_id: 6, ue: '', semester: 'S8', title: 'Mathématiques pour la biologie', description: 'option' },
  { id: 78, major_spec_id: 6, ue: '', semester: 'S8', title: 'Satellites', description: 'option' },
  { id: 79, major_spec_id: 6, ue: '', semester: 'S8', title: 'Mécanique des milieux continus', description: 'option' },
  { id: 80, major_spec_id: 6, ue: '', semester: 'S8', title: 'Mathématiques appliquées à la finance', description: 'option' },
  { id: 81, major_spec_id: 6, ue: '', semester: 'S8', title: 'Séries temporelles IMAFA', description: 'option' },
  { id: 82, major_spec_id: 6, ue: '', semester: 'S8', title: 'Programmation parallèle', description: 'option' },
  { id: 83, major_spec_id: 6, ue: '', semester: 'S8', title: 'Valorisation des données', description: 'option' },
  { id: 84, major_spec_id: 6, ue: '', semester: 'S8', title: 'Réalité augmentée', description: 'option' },
  { id: 85, major_spec_id: 6, ue: '', semester: 'S8', title: 'Séries temporelles GMD', description: 'option' },
  { id: 86, major_spec_id: 6, ue: '', semester: 'S8', title: 'Anglais 8', description: '' },
  { id: 87, major_spec_id: 6, ue: '', semester: 'S8', title: 'Jeu d’entreprise', description: '' },
  { id: 88, major_spec_id: 6, ue: '', semester: 'S8', title: 'Communication 2', description: '' },
  { id: 89, major_spec_id: 6, ue: '', semester: 'S8', title: 'Projet 4', description: '' },
]);
