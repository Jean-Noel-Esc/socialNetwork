CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `UserId` int(11) NOT NULL,
  `PostId` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `text`, `UserId`, `PostId`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'Le lorem ipsum est, en imprimerie, une suite de mots.', 3, 2, 1, '2022-02-03 13:10:30', '2022-02-03 13:13:10'),
(3, 'Le lorem ipsum est, en imprimerie, une suite de mots.', 3, 1, 1, '2022-02-03 13:11:10', '2022-02-03 13:13:15'),
(5, 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification.', 4, 2, 1, '2022-02-03 13:16:06', '2022-02-03 13:18:46'),
(7, 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification.', 4, 1, 1, '2022-02-03 13:16:37', '2022-02-03 13:19:00'),
(8, 'Lorem ipsum est.', 1, 2, 0, '2022-02-03 17:00:37', '2022-02-03 17:00:37'),
(9, 'Le texte de remplissage Lorem ipsum est utilisé par les graphistes.', 3, 4, 1, '2022-02-04 13:33:30', '2022-02-04 13:41:17');

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `UserId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `picture` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `title`, `text`, `UserId`, `createdAt`, `updatedAt`, `picture`, `status`) VALUES
(1, 'Lorem ipsum', 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée.', 2, '2022-02-03 13:00:13', '2022-02-03 13:06:10', 'http://localhost:3000/images/computer_1.jpg1643893213856.jpg', 1),
(2, 'Lorem ', 'Le texte de remplissage Lorem ipsum est utilisé par les graphistes, les programmeurs et les imprimeurs.', 2, '2022-02-03 13:01:00', '2022-02-04 13:46:16', 'http://localhost:3000/images/computer_2.jpg1643893260591.jpg', 1),
(4, 'Lorem ipsum', 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée.', 3, '2022-02-03 13:02:55', '2022-02-04 13:36:09', 'http://localhost:3000/images/computer_4.jpg1643981265014.jpg', 1),
(5, 'Lorem ipsum', 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée.', 3, '2022-02-03 13:03:20', '2022-02-04 13:36:09', 'http://localhost:3000/images/computer_1.jpg1643893400845.jpg', 1),
(6, 'Lorem ipsum', 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée.', 3, '2022-02-03 13:03:40', '2022-02-04 13:36:09', 'http://localhost:3000/images/computer_2.jpg1643893420453.jpg', 1),
(7, 'Lorem ', 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée.', 2, '2022-02-04 12:38:43', '2022-02-04 13:46:16', 'http://localhost:3000/images/computer_3.jpg1643978323617.jpg', 1),
(8, 'Lorem ', 'Le texte de remplissage Lorem ipsum est utilisé par les graphistes, les programmeurs et les imprimeurs dans le but d\'occuper les éspaces d\'un site internet,', 2, '2022-02-04 12:52:56', '2022-02-04 13:46:16', 'http://localhost:3000/images/computer_4.jpg1643979176732.jpg', 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `role`, `createdAt`, `updatedAt`, `picture`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com', '$2b$10$hHIc5NNasCM.NKyYAVf1wON90Ierq1pNil2xSi2I6js9Xpx0mtsgm', 2, '2022-02-03 12:04:45', '2022-02-03 12:04:45', NULL),
(2, 'Victor', 'Buisson', 'vbuisson@gmail.com', '$2b$10$c45G5/vqBxKRPdIWMj6cye.EHf9aYgOHes3USWyjZBtEW03gkxlPO', 1, '2022-02-03 12:18:03', '2022-02-03 12:51:12', NULL),
(3, 'Jean', 'Michel', 'jmichel@gmail.com', '$2b$10$59trp.X7fps2lDmIOgNlG.CJN.4sctkM/egqYAVzxzzjvarKgxHyy', 1, '2022-02-03 12:23:18', '2022-02-03 12:51:43', NULL),
(4, 'Maud', 'Catte', 'mcatte@gmail.com', '$2b$10$WMrsP7zrQBm0PVIKAKnKr.HR/8DRDMtwBbxPIJCAklpnqXfP2qOTO', 1, '2022-02-03 12:25:54', '2022-02-03 12:52:00', NULL),
(5, 'Julien', 'Chenu', 'jchenu@gmail.com', '$2b$10$cXh6IxaGwlNac5MYI0KjSe8n79g1yW5zmSsC6Ev./UMTRM..VGJzy', 0, '2022-02-03 12:27:22', '2022-02-03 12:27:22', NULL),
(6, 'Juliette', 'Berton', 'jberton@gmail.com', '$2b$10$hTK0OlL3Y5nFn/QMtXMmkuqHUNHuVlu3noLVb6LnYlmQGmuwqHiz6', 0, '2022-02-03 12:30:15', '2022-02-03 12:30:15', NULL),
(7, 'Vincent', 'Antonin', 'vantonin@gmail.com', '$2b$10$xVjbTfHMefBwZ/180l8DMO.U9fGyyHsODjF8hkm/YpnZcZ23LmWVO', 0, '2022-02-03 12:33:50', '2022-02-03 12:33:50', NULL),
(8, 'Marie', 'Claire', 'mclaire@gmail.com', '$2b$10$Fn.QfU8AsffR5dtz.7Y1dukEWlNTdSJlOG.QV.Jj2zOwMl7XAUMWy', 0, '2022-02-03 12:35:12', '2022-02-03 12:35:12', NULL),
(9, 'Edouard', 'Monta', 'emonta@gmail.com', '$2b$10$YL8lkLjojbnaEnbtqCP4AuqfgjqEQcvjpzkyBQDFta0tLFL4yx6xG', 0, '2022-02-03 12:37:54', '2022-02-03 12:37:54', NULL),
(10, 'Sophie', 'Perez', 'sperez@gmail.com', '$2b$10$3s1gxAEcHbrGVdXUM8VZMOmVSS4OIfij996e3cEeaDx9qAQkwNIOq', 0, '2022-02-03 12:39:58', '2022-02-03 12:39:58', NULL),
(11, 'Alexis', 'Stale', 'astale@gmail.com', '$2b$10$nUO.3AhOCgizGsP62bHhOesZHETXCMTDAmk0/gnGcDxHbZ7qB67u.', 0, '2022-02-03 12:42:48', '2022-02-03 12:42:48', NULL),
(12, 'Julie', 'Maison', 'jmaison@gmail.com', '$2b$10$/p.QDecijN9jlyoRqo29Cu2fEMPY6S6sX7TpFgOnKt3nod1bkW34a', 0, '2022-02-03 12:48:26', '2022-02-03 12:48:26', NULL),
(13, 'Jean', 'Marc', 'jmarc@gmail.com', '$2b$10$qZClwJXfatnD/nOeQQDKWeUWylK2kHytYLxafLzGATS27YjMV2Si6', 0, '2022-02-04 12:59:01', '2022-02-04 12:59:01', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_comment_user1_idx` (`UserId`),
  ADD KEY `fk_comment_post1_idx` (`PostId`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_post_user1_idx` (`UserId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fkpostid` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fkuserid2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fkuserid` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

