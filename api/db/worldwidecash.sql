-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2018 at 06:40 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `worldwidecash`
--

-- --------------------------------------------------------

--
-- Table structure for table `bonus`
--

CREATE TABLE `bonus` (
  `id` int(11) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `status` varchar(20) NOT NULL,
  `createdate` datetime NOT NULL,
  `fromID` int(10) NOT NULL,
  `userID` int(10) NOT NULL,
  `modifydate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bonus`
--

INSERT INTO `bonus` (`id`, `amount`, `status`, `createdate`, `fromID`, `userID`, `modifydate`) VALUES
(1, '300', 'active', '2018-04-15 12:30:54', 32, 5, '0000-00-00 00:00:00'),
(2, '20', 'active', '2018-04-15 12:33:36', 32, 5, '0000-00-00 00:00:00'),
(3, '100', 'active', '2018-04-16 10:42:11', 32, 5, '0000-00-00 00:00:00'),
(4, '100', 'active', '2018-04-16 10:44:30', 32, 5, '0000-00-00 00:00:00'),
(5, '20', 'active', '2018-04-19 23:13:49', 32, 5, '0000-00-00 00:00:00'),
(6, '10', 'active', '2018-04-19 23:13:49', 32, 5, '0000-00-00 00:00:00'),
(7, '10', 'active', '2018-04-19 23:13:49', 32, 5, '0000-00-00 00:00:00'),
(8, '20', 'active', '2018-04-20 13:54:08', 32, 5, '0000-00-00 00:00:00'),
(9, '20', 'active', '2018-04-20 13:55:36', 32, 5, '0000-00-00 00:00:00'),
(10, '20', 'active', '2018-04-20 13:56:41', 32, 5, '0000-00-00 00:00:00'),
(11, '20', 'active', '2018-04-20 13:57:18', 32, 5, '0000-00-00 00:00:00'),
(12, '20', 'active', '2018-04-20 13:58:47', 32, 5, '0000-00-00 00:00:00'),
(13, '20', 'active', '2018-04-20 14:00:05', 32, 5, '0000-00-00 00:00:00'),
(14, '20', 'active', '2018-04-20 14:02:00', 32, 5, '0000-00-00 00:00:00'),
(15, '20', 'active', '2018-04-20 14:02:33', 32, 5, '0000-00-00 00:00:00'),
(16, '10', 'active', '2018-04-20 14:02:33', 32, 5, '0000-00-00 00:00:00'),
(17, '20', 'active', '2018-04-20 14:03:02', 32, 5, '0000-00-00 00:00:00'),
(18, '10', 'active', '2018-04-20 14:03:02', 32, 5, '0000-00-00 00:00:00'),
(19, '20', 'active', '2018-04-20 14:03:02', 32, 5, '0000-00-00 00:00:00'),
(20, '10', 'active', '2018-04-20 14:03:02', 32, 5, '0000-00-00 00:00:00'),
(21, '20', 'active', '2018-04-20 14:05:36', 32, 5, '0000-00-00 00:00:00'),
(22, '10', 'active', '2018-04-20 14:05:36', 32, 5, '0000-00-00 00:00:00'),
(23, '20', 'active', '2018-04-20 14:05:36', 32, 5, '0000-00-00 00:00:00'),
(24, '10', 'active', '2018-04-20 14:05:36', 32, 5, '0000-00-00 00:00:00'),
(25, '10', 'active', '2018-04-20 16:13:01', 32, 5, '0000-00-00 00:00:00'),
(26, '100', 'cashedout', '2018-04-21 07:30:20', 44, 32, '2018-04-21 08:13:15'),
(27, '100', 'cashedout', '2018-04-21 08:08:10', 46, 32, '2018-04-21 08:13:15'),
(28, '4000', 'cashedout', '2018-04-21 08:12:44', 47, 32, '2018-04-21 08:13:15'),
(29, '100', 'active', '2018-04-30 00:04:02', 24, 5, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(10) NOT NULL,
  `senderEmail` varchar(120) NOT NULL,
  `senderName` varchar(150) NOT NULL,
  `receiverEmail` varchar(150) NOT NULL,
  `receiverName` varchar(150) NOT NULL,
  `timeRead` datetime NOT NULL,
  `timeSent` datetime NOT NULL,
  `status` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `clientId` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `senderEmail`, `senderName`, `receiverEmail`, `receiverName`, `timeRead`, `timeSent`, `status`, `message`, `clientId`) VALUES
(1, 'ndu@mail.co.za', 'Ndumiso', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-04-06 09:51:20', 'unread', 'h', 'ndu@mail.co.za'),
(2, 'ndu@mail.co.za', 'Ndumiso', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-04-06 09:51:26', 'unread', '8', 'ndu@mail.co.za'),
(3, 'ndu@mail.com', 'Ndumiso', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-04-21 08:51:42', 'unread', 'a', 'ndu@mail.com'),
(4, 'ndu@mail.com', 'Ndumiso', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-04-21 08:52:04', 'unread', 'Here new app', 'ndu@mail.com'),
(5, 'ndu4@mail.com', 'Ndumiso4', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-04-21 08:53:28', 'unread', 'Hi ndu 4', 'ndu4@mail.com'),
(6, 'admin@mail.com', 'Admin', 'ndu@mail.com', 'Ndumiso', '0000-00-00 00:00:00', '2018-04-21 09:04:00', 'unread', 'hey hud Nduhh', 'ndu@mail.com'),
(7, 'ndu@mail.com', 'Ndumiso', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-04-23 11:31:23', 'unread', 'sA', 'ndu@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `id` int(11) NOT NULL,
  `doc` text NOT NULL,
  `keeperID` int(11) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`id`, `doc`, `keeperID`, `createdate`) VALUES
(1, 'http://localhost:8080/worldwidecash/web/api/uploads/15237882058acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', 1, '2018-04-15 12:30:05'),
(2, 'http://localhost:8080/worldwidecash/web/api/uploads/15237883798cf98604-73e6-4f01-8bf8-5d2d1833a51e.jpeg\r\n', 2, '2018-04-15 12:32:59'),
(3, 'http://localhost:8080/worldwidecash/web/api/uploads/15237948008acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', 3, '2018-04-15 14:20:00'),
(4, 'http://localhost:8080/worldwidecash/web/api/uploads/15237952438acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', 4, '2018-04-15 14:27:23'),
(5, 'http://localhost:8080/worldwidecash/web/api/uploads/15238640478acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', 5, '2018-04-16 09:34:07'),
(6, 'http://localhost:8080/worldwidecash/web/api/uploads/152386584964d1efe9-cf8b-4bb9-af45-18f1387c2483.jpeg\r\n', 1, '2018-04-16 10:04:09'),
(7, 'http://localhost:8080/worldwidecash/web/api/uploads/152386835664d1efe9-cf8b-4bb9-af45-18f1387c2483.jpeg\r\n', 2, '2018-04-16 10:45:56'),
(8, 'http://localhost:8080/worldwidecash/web/api/[object Object]', 3, '2018-04-19 18:27:51'),
(9, 'http://localhost:8080/worldwidecash/web/api/[object Object]', 3, '2018-04-19 18:27:55'),
(10, 'http://localhost:8080/worldwidecash/web/api/[object Object]', 3, '2018-04-19 18:35:45'),
(11, 'http://localhost:8080/worldwidecash/web/api/[object Object]', 3, '2018-04-19 18:40:07'),
(12, 'http://localhost:8080/worldwidecash/web/api/[object Object]', 3, '2018-04-19 18:40:29'),
(13, 'http://localhost:8080/worldwidecash/web/api/[object Object]', 4, '2018-04-19 18:46:00'),
(14, 'http://localhost:8080/worldwidecash/web/api/[object Object]', 4, '2018-04-19 18:47:23'),
(15, 'http://localhost:8080/worldwidecash/web/api/uploads/152415647864d1efe9-cf8b-4bb9-af45-18f1387c2483.jpeg\r\n', 4, '2018-04-19 18:47:58'),
(16, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15242885621.PNG\r\n', 14, '2018-04-21 07:29:22'),
(17, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15242885701.PNG\r\n', 15, '2018-04-21 07:29:30'),
(18, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15242907551.PNG\r\n', 16, '2018-04-21 08:05:55'),
(19, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15242911111.PNG\r\n', 17, '2018-04-21 08:11:51'),
(20, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15243403861.PNG\r\n', 18, '2018-04-21 21:53:06'),
(21, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15243404491.PNG\r\n', 19, '2018-04-21 21:54:09'),
(22, 'http://localhost:8080/future-life/fundersLife/api/uploads/152503929220180211_154805.jpg\r\n', 13, '2018-04-30 00:01:32'),
(23, 'http://localhost:8080/future-life/fundersLife/api/uploads/1525039307fl.PNG\r\n', 5, '2018-04-30 00:01:47'),
(24, 'http://localhost:8080/future-life/fundersLife/api/uploads/152503932420180211_154805.jpg\r\n', 6, '2018-04-30 00:02:04'),
(25, 'http://localhost:8080/future-life/fundersLife/api/uploads/152503939220180211_154803.jpg\r\n', 21, '2018-04-30 00:03:12'),
(26, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15253726499512.zoom.cropped.jpg\r\n', 23, '2018-05-03 20:37:29'),
(27, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/152537274820180211_154802.jpg\r\n', 24, '2018-05-03 20:39:08'),
(28, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/152537275720180211_154803.jpg\r\n', 25, '2018-05-03 20:39:17'),
(29, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/152537276720180211_154803.jpg\r\n', 26, '2018-05-03 20:39:27'),
(30, 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/152551451820180211_154803.jpg\r\n', 30, '2018-05-05 12:01:58');

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

CREATE TABLE `investment` (
  `id` int(10) NOT NULL,
  `dateInvested` datetime NOT NULL,
  `expecedDate` datetime NOT NULL,
  `amountInvested` varchar(20) NOT NULL,
  `status` text NOT NULL,
  `package` int(3) NOT NULL,
  `dream` text NOT NULL,
  `amountkept` varchar(10) NOT NULL DEFAULT '0',
  `amountkeepable` varchar(10) NOT NULL,
  `amount_requested_to_keep` varchar(10) NOT NULL,
  `comment` text NOT NULL,
  `isAkeeper` varchar(10) NOT NULL,
  `userID` int(11) NOT NULL,
  `timeAllocated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `investment`
--

INSERT INTO `investment` (`id`, `dateInvested`, `expecedDate`, `amountInvested`, `status`, `package`, `dream`, `amountkept`, `amountkeepable`, `amount_requested_to_keep`, `comment`, `isAkeeper`, `userID`, `timeAllocated`) VALUES
(1, '2018-04-16 09:43:45', '2018-05-16 09:43:45', '1000', 'active', 1, 'dd', '0', '', '', '', '0', 32, '2018-04-23 14:04:00'),
(2, '2018-04-16 09:44:50', '2026-07-03 09:44:50', '150000', 'special', 100, 'Special Dream', '0', '', '', '', 'Yes', 10, '0000-00-00 00:00:00'),
(3, '2018-04-16 10:44:47', '2018-05-16 10:44:47', '500', 'keepfunds', 1, 'Keep Funds', '0', '', '', '', 'Yes', 32, '0000-00-00 00:00:00'),
(4, '2018-04-16 10:45:00', '2018-05-16 10:45:00', '500', 'active_from_kept', 1, 'Keep Funds Allocated to another dreamer', '0', '', '', '', 'Yes', 32, '2018-04-19 10:45:08'),
(5, '2018-04-19 07:39:29', '2018-06-18 07:39:29', '1000', 'active', 2, 'a', '0', '', '', '', 'Yes', 32, '2018-04-23 14:03:53'),
(6, '2018-04-19 07:40:57', '2018-11-15 07:40:57', '1000', 'paid', 7, 'sa', '0', '', '', '', 'Yes', 32, '2018-04-22 18:45:11'),
(7, '2018-04-19 07:41:29', '2018-10-16 07:41:29', '1000', 'paid', 6, 'WQ', '0', '', '', '', 'Yes', 32, '2018-04-22 07:45:59'),
(8, '2018-04-19 07:42:31', '2018-07-18 07:42:31', '1500', 'paid', 3, 'sa', '0', '', '', '', 'Yes', 32, '2018-04-22 18:45:26'),
(9, '2018-04-19 07:52:43', '2018-09-16 07:52:43', '2000', 'locked', 5, 'aA', '0', '', '', '', 'Yes', 32, '2018-04-22 21:07:48'),
(10, '2018-04-19 07:53:26', '2018-08-17 07:53:26', '500', 'active', 4, 'tESTREF', '0', '', '', '', 'Yes', 32, '2018-04-23 14:03:57'),
(11, '2018-04-19 07:55:59', '2018-12-15 07:55:59', '1500', 'paid', 8, 'wq', '0', '', '', '', 'Yes', 32, '2018-04-24 07:28:32'),
(12, '2018-04-19 07:58:17', '2018-08-17 07:58:17', '1000', 'locked', 4, 'sA', '0', '', '', '', 'Yes', 32, '2018-04-23 13:33:03'),
(13, '2018-04-19 08:02:52', '2018-07-18 08:02:52', '500', 'active', 3, 'aS', '0', '', '', '', 'Yes', 32, '2018-04-23 16:12:55'),
(14, '2018-04-19 21:29:23', '2026-07-06 21:29:23', '50000', 'special', 100, 'Special Dream', '0', '', '', '', 'Yes', 5, '0000-00-00 00:00:00'),
(15, '2018-04-19 21:29:52', '2026-07-06 21:29:52', '1200000', 'special', 100, 'Special Dream', '0', '', '', '', 'Yes', 5, '0000-00-00 00:00:00'),
(16, '2018-04-19 21:30:44', '2026-07-06 21:30:44', '1500', 'special', 100, 'Special Dream', '0', '', '', '', 'Yes', 5, '0000-00-00 00:00:00'),
(17, '2018-04-20 13:32:42', '2026-07-07 13:32:42', '150', 'special', 100, 'Special Dream', '0', '', '', '', 'Yes', 5, '0000-00-00 00:00:00'),
(18, '2018-04-20 16:07:12', '2018-05-20 16:07:12', '100', 'keepfunds', 1, 'Keep Funds', '0', '', '', '', 'Yes', 32, '0000-00-00 00:00:00'),
(19, '2018-04-20 16:07:31', '2018-05-20 16:07:31', '500', 'keepfunds', 1, 'Keep Funds', '0', '', '', '', 'Yes', 32, '0000-00-00 00:00:00'),
(20, '2018-04-20 16:10:23', '2018-05-20 16:10:23', '100', 'locked', 1, 'Keep Funds Allocated to another dreamer', '0', '', '', '', 'Yes', 32, '2018-05-06 21:16:20'),
(21, '2018-04-20 16:13:04', '2018-05-20 16:13:04', '500', 'keepfunds', 1, 'Keep Funds', '0', '', '', '', 'Yes', 32, '0000-00-00 00:00:00'),
(22, '2018-04-20 16:13:16', '2018-05-20 16:13:16', '500', 'locked', 1, 'Keep Funds Allocated to another dreamer', '0', '', '', '', 'Yes', 32, '2018-05-06 21:09:34'),
(23, '2018-04-20 16:14:03', '2018-05-20 16:14:03', '500', 'locked', 1, 'Keep Funds Allocated to another dreamer', '0', '', '', '', 'Yes', 32, '2018-04-23 16:14:11'),
(24, '2018-04-21 07:28:18', '2018-09-18 07:28:18', '1000', 'active', 5, 'aS', '0', '', '', '', 'Yes', 44, '2018-04-24 07:29:09'),
(25, '2018-04-21 07:57:55', '2018-05-21 07:57:55', '1000', 'active', 1, 'Ndu 3', '0', '', '', '', 'Yes', 46, '2018-04-24 07:58:20'),
(26, '2018-04-21 08:11:25', '2018-07-20 08:11:25', '40000', 'active', 3, 'd', '0', '', '', '', 'Yes', 47, '2018-04-24 08:11:40'),
(27, '2018-04-21 08:13:15', '2018-05-21 08:13:15', '4200', 'bonus', 1, 'Cash Out A bonus', '0', '', '', '', 'Yes', 32, '0000-00-00 00:00:00'),
(28, '2018-04-21 11:14:16', '2018-05-21 11:14:16', '500', 'keepfunds', 1, 'Keep Funds', '0', '', '', '', 'Yes', 32, '0000-00-00 00:00:00'),
(29, '2018-04-21 11:14:45', '2018-05-21 11:14:45', '500', 'keepfunds', 1, 'Keep Funds', '0', '', '', '', 'Yes', 32, '0000-00-00 00:00:00'),
(30, '2018-04-21 21:48:10', '2018-06-20 21:48:10', '1000', 'locked', 2, 'a', '0', '', '', '', 'Yes', 47, '2018-04-24 21:52:34'),
(31, '2018-04-30 00:02:36', '2018-09-27 00:02:36', '1000', 'active', 5, 'k', '0', '', '', '', 'Yes', 24, '2018-05-03 00:02:58'),
(32, '2018-04-30 10:46:53', '2018-05-30 10:46:53', '400', 'locked', 1, 'ads', '0', '', '', '', 'Yes', 32, '2018-05-03 10:47:07'),
(33, '2018-05-03 20:34:14', '2018-08-31 20:34:14', '5000', 'active', 4, 'car', '0', '', '', '', 'Yes', 33, '2018-05-06 20:36:15'),
(34, '2018-05-03 20:47:21', '2018-08-01 20:47:21', '1000', 'locked', 3, 'saHKJ', '0', '', '', '', 'Yes', 33, '2018-05-06 20:47:38'),
(35, '2018-05-03 21:21:32', '2018-07-02 21:21:32', '1500', 'locked', 2, 'Test', '0', '', '', '', 'Yes', 32, '2018-05-06 21:21:52');

-- --------------------------------------------------------

--
-- Table structure for table `keeper`
--

CREATE TABLE `keeper` (
  `id` int(10) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `status` varchar(35) NOT NULL,
  `investmentID` int(11) NOT NULL,
  `witdrawalID` int(11) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `keeper`
--

INSERT INTO `keeper` (`id`, `amount`, `status`, `investmentID`, `witdrawalID`, `createdate`) VALUES
(1, '1000', 'reversed', 1, 1, '2018-04-16 09:44:56'),
(2, '500', 'reversed', 4, 1, '2018-04-16 10:45:05'),
(3, '1000', 'reversed', 7, 1, '2018-04-19 07:45:56'),
(4, '1000', 'reversed', 5, 1, '2018-04-19 18:43:38'),
(5, '1000', 'reversed', 6, 1, '2018-04-19 18:45:08'),
(6, '1500', 'reversed', 8, 1, '2018-04-19 18:45:23'),
(7, '2000', 'reversed', 9, 1, '2018-04-19 21:06:51'),
(8, '500', 'confirmed', 10, 2, '2018-04-19 21:08:06'),
(9, '500', 'confirmed', 13, 2, '2018-04-19 21:12:56'),
(10, '150', 'reversed', 12, 6, '2018-04-20 13:32:55'),
(11, '850', 'reversed', 12, 5, '2018-04-20 13:33:00'),
(12, '500', 'reversed', 23, 1, '2018-04-20 16:14:08'),
(13, '1500', 'reversed', 11, 1, '2018-04-21 07:28:30'),
(14, '650', 'reversed', 24, 5, '2018-04-21 07:28:59'),
(15, '350', 'confirmed', 24, 8, '2018-04-21 07:29:04'),
(16, '1000', 'reversed', 25, 1, '2018-04-21 07:58:18'),
(17, '40000', 'confirmed', 26, 4, '2018-04-21 08:11:39'),
(18, '100', 'confirmed', 30, 7, '2018-04-21 21:48:38'),
(19, '100', 'confirmed', 30, 7, '2018-04-21 21:48:41'),
(20, '800', 'reversed', 30, 1, '2018-04-21 21:52:32'),
(21, '1000', 'reversed', 31, 1, '2018-04-30 00:02:56'),
(22, '400', 'reversed', 32, 1, '2018-04-30 10:47:05'),
(23, '500', 'confirmed', 33, 9, '2018-05-03 20:36:01'),
(24, '150', 'confirmed', 33, 8, '2018-05-03 20:36:09'),
(25, '500', 'confirmed', 33, 11, '2018-05-03 20:36:12'),
(26, '3850', 'confirmed', 33, 4, '2018-05-03 20:36:13'),
(27, '1000', 'reversed', 34, 1, '2018-05-03 20:47:35'),
(28, '500', 'reversed', 22, 1, '2018-05-03 21:09:29'),
(29, '100', 'reversed', 20, 1, '2018-05-03 21:16:18'),
(30, '1500', 'paid', 35, 1, '2018-05-03 21:21:50');

-- --------------------------------------------------------

--
-- Table structure for table `keptamounts`
--

CREATE TABLE `keptamounts` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `investmentID` int(10) NOT NULL,
  `createdate` datetime NOT NULL,
  `email` varchar(50) NOT NULL,
  `userID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `keptamounts`
--

INSERT INTO `keptamounts` (`id`, `name`, `amount`, `status`, `investmentID`, `createdate`, `email`, `userID`) VALUES
(3, 'Ndumiso Mthembu', '500', 'allocated', 1, '2018-04-16 10:44:30', 'ndu@mail.com', 32),
(4, 'Ndumiso Mthembu', '500', 'unkept', 5, '2018-04-19 23:13:49', 'ndu@mail.com', 32),
(5, 'Ndumiso Mthembu', '100', 'allocated', 1, '2018-04-20 13:54:08', 'ndu@mail.com', 32),
(6, 'Ndumiso Mthembu', '500', 'allocated', 1, '2018-04-20 13:55:36', 'ndu@mail.com', 32),
(7, 'Ndumiso Mthembu', '500', 'allocated', 1, '2018-04-20 13:56:41', 'ndu@mail.com', 32),
(8, 'Ndumiso Mthembu', '500', 'kept', 5, '2018-04-20 13:57:18', 'ndu@mail.com', 32),
(9, 'Ndumiso Mthembu', '500', 'kept', 5, '2018-04-20 13:58:47', 'ndu@mail.com', 32),
(10, 'Ndumiso Mthembu', '500', 'unkept', 5, '2018-04-20 14:00:05', 'ndu@mail.com', 32),
(11, 'Ndumiso Mthembu', '500', 'unkept', 5, '2018-04-20 14:02:00', 'ndu@mail.com', 32),
(12, 'Ndumiso Mthembu', '500', 'unkept', 5, '2018-04-20 14:02:33', 'ndu@mail.com', 32),
(13, 'Ndumiso Mthembu', '500', 'unkept', 5, '2018-04-20 14:03:02', 'ndu@mail.com', 32),
(14, 'Ndumiso Mthembu', '500', 'unkept', 1, '2018-04-20 14:03:02', 'ndu@mail.com', 32),
(15, 'Ndumiso Mthembu', '500', 'unkept', 1, '2018-04-20 14:05:36', 'ndu@mail.com', 32),
(16, 'Ndumiso Mthembu', '500', 'unkept', 5, '2018-04-20 14:05:36', 'ndu@mail.com', 32),
(17, 'Ndumiso1 Mthembu1', '500', 'unkept', 24, '2018-04-21 07:30:20', 'ndu1@mail.com', 44),
(18, 'Ndumiso3 Mthembu3', '500', 'unkept', 25, '2018-04-21 08:08:10', 'ndu3@mail.com', 46),
(19, 'Ndumiso4 Mthembu4', '20000', 'unkept', 26, '2018-04-21 08:12:44', 'ndu4@mail.com', 47),
(20, 'Musa Zulu', '500', 'unkept', 31, '2018-04-30 00:04:02', 'musa@mail.com', 24),
(21, 'Sipho Zulu', '2500', 'unkept', 33, '2018-05-03 20:43:18', 'sipho@mail.com', 33);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(10) NOT NULL,
  `senderEmail` varchar(50) NOT NULL,
  `senderName` varchar(50) NOT NULL,
  `senderCell` varchar(50) NOT NULL,
  `toEmail` varchar(50) NOT NULL,
  `toName` varchar(50) NOT NULL,
  `msg` text NOT NULL,
  `status` varchar(10) NOT NULL,
  `doc` text NOT NULL,
  `amount` varchar(50) NOT NULL,
  `keeperID` int(11) NOT NULL,
  `createdate` datetime NOT NULL,
  `modifieddate` datetime NOT NULL,
  `investmentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `senderEmail`, `senderName`, `senderCell`, `toEmail`, `toName`, `msg`, `status`, `doc`, `amount`, `keeperID`, `createdate`, `modifieddate`, `investmentID`) VALUES
(1, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/152311996664d1efe9-cf8b-4bb9-af45-18f1387c2483.jpeg\r\n', '200', 46, '2018-04-07 18:52:46', '0000-00-00 00:00:00', 0),
(2, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15231200966fe747f7-017b-44cc-b710-e2467fca4550.jpg\r\n', '4200', 47, '2018-04-07 18:54:56', '0000-00-00 00:00:00', 0),
(3, '', 'Ndumiso Mthembu', '', 'mrnnmthembu@gmail.com', 'Zama', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15231874948acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '1000', 52, '2018-04-08 13:38:14', '0000-00-00 00:00:00', 0),
(4, '', 'Ndumiso Mthembu', '', 'chil@mail.com', 'My', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15232507308acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '16900', 51, '2018-04-09 07:12:10', '0000-00-00 00:00:00', 0),
(5, '', 'Ndumiso Mthembu', '', 'chil@mail.com', 'My', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15232510768acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '8000', 50, '2018-04-09 07:17:56', '0000-00-00 00:00:00', 0),
(6, '', 'Ndumiso Mthembu', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/1523274271302.jpg\r\n', '1000', 53, '2018-04-09 13:44:31', '0000-00-00 00:00:00', 0),
(7, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233513048acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '5000', 1, '2018-04-10 11:08:24', '0000-00-00 00:00:00', 0),
(8, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233514958acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '1000', 2, '2018-04-10 11:11:35', '0000-00-00 00:00:00', 0),
(9, '', 'Sipho Zulu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233527088acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '1000', 3, '2018-04-10 11:31:48', '0000-00-00 00:00:00', 0),
(10, '', 'Sipho Zulu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233546828acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '1000', 2, '2018-04-10 12:04:42', '0000-00-00 00:00:00', 0),
(11, '', 'Sipho Zulu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/152335965764d1efe9-cf8b-4bb9-af45-18f1387c2483.jpeg\r\n', '1000', 3, '2018-04-10 13:27:37', '0000-00-00 00:00:00', 0),
(12, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233860121.jpg\r\n', '400', 4, '2018-04-10 20:46:52', '0000-00-00 00:00:00', 0),
(13, '', 'Ndumiso Mthembu', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233863448acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '700', 5, '2018-04-10 20:52:24', '0000-00-00 00:00:00', 0),
(14, '', 'Ndumiso Mthembu', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233864248acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '300', 6, '2018-04-10 20:53:44', '0000-00-00 00:00:00', 0),
(15, '', 'Ndumiso Mthembu', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233865518acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '400', 7, '2018-04-10 20:55:51', '0000-00-00 00:00:00', 0),
(16, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233865648acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '1100', 8, '2018-04-10 20:56:04', '0000-00-00 00:00:00', 0),
(17, '', 'Ndumiso Mthembu', '', 'mrnnmthembu@gmail.com', 'Zama', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15233866718acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '8000', 9, '2018-04-10 20:57:51', '0000-00-00 00:00:00', 0),
(18, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/uploads/15237179808cf98604-73e6-4f01-8bf8-5d2d1833a51e.jpeg\r\n', '6200', 14, '2018-04-14 16:59:40', '0000-00-00 00:00:00', 0),
(19, '', 'Ndumiso Mthembu', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15237882058acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '3000', 1, '2018-04-15 12:30:05', '0000-00-00 00:00:00', 0),
(20, '', 'Ndumiso Mthembu', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15237883798cf98604-73e6-4f01-8bf8-5d2d1833a51e.jpeg\r\n', '1000', 2, '2018-04-15 12:32:59', '0000-00-00 00:00:00', 0),
(21, '', 'Ndumiso Mthembu', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15237948008acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '200', 3, '2018-04-15 14:20:00', '0000-00-00 00:00:00', 0),
(22, '', 'Ndumiso Mthembu', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15237952438acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '3000', 4, '2018-04-15 14:27:23', '0000-00-00 00:00:00', 0),
(23, '', 'Ndumiso Mthembu', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/15238640478acd13c7cd9d0017942b2aba3ad37ae6.jpg\r\n', '1000', 5, '2018-04-16 09:34:07', '0000-00-00 00:00:00', 0),
(24, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/152386584964d1efe9-cf8b-4bb9-af45-18f1387c2483.jpeg\r\n', '1000', 1, '2018-04-16 10:04:09', '0000-00-00 00:00:00', 0),
(25, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/web/api/uploads/152386835664d1efe9-cf8b-4bb9-af45-18f1387c2483.jpeg\r\n', '500', 2, '2018-04-16 10:45:56', '0000-00-00 00:00:00', 0),
(26, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/[object Object]', '1000', 3, '2018-04-19 18:27:51', '0000-00-00 00:00:00', 0),
(27, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/[object Object]', '1000', 3, '2018-04-19 18:27:55', '0000-00-00 00:00:00', 0),
(28, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/[object Object]', '1000', 3, '2018-04-19 18:35:45', '0000-00-00 00:00:00', 0),
(29, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/[object Object]', '1000', 3, '2018-04-19 18:40:07', '0000-00-00 00:00:00', 0),
(30, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/[object Object]', '1000', 3, '2018-04-19 18:40:29', '0000-00-00 00:00:00', 0),
(31, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/[object Object]', '1000', 4, '2018-04-19 18:46:00', '0000-00-00 00:00:00', 0),
(32, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/[object Object]', '1000', 4, '2018-04-19 18:47:23', '0000-00-00 00:00:00', 0),
(33, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/web/api/uploads/152415647864d1efe9-cf8b-4bb9-af45-18f1387c2483.jpeg\r\n', '1000', 4, '2018-04-19 18:47:58', '0000-00-00 00:00:00', 0),
(34, '', 'Ndumiso1 Mthembu1', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15242885621.PNG\r\n', '650', 14, '2018-04-21 07:29:22', '0000-00-00 00:00:00', 0),
(35, '', 'Ndumiso1 Mthembu1', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15242885701.PNG\r\n', '350', 15, '2018-04-21 07:29:30', '0000-00-00 00:00:00', 0),
(36, '', 'Ndumiso3 Mthembu3', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15242907551.PNG\r\n', '1000', 16, '2018-04-21 08:05:55', '0000-00-00 00:00:00', 0),
(37, '', 'Ndumiso4 Mthembu4', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15242911111.PNG\r\n', '40000', 17, '2018-04-21 08:11:51', '0000-00-00 00:00:00', 0),
(38, '', 'Ndumiso4 Mthembu4', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15243403861.PNG\r\n', '100', 18, '2018-04-21 21:53:06', '0000-00-00 00:00:00', 0),
(39, '', 'Ndumiso4 Mthembu4', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15243404491.PNG\r\n', '100', 19, '2018-04-21 21:54:09', '0000-00-00 00:00:00', 0),
(40, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/future-life/fundersLife/api/uploads/152503929220180211_154805.jpg\r\n', '1500', 13, '2018-04-30 00:01:32', '0000-00-00 00:00:00', 0),
(41, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/future-life/fundersLife/api/uploads/1525039307fl.PNG\r\n', '1000', 5, '2018-04-30 00:01:47', '0000-00-00 00:00:00', 0),
(42, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/future-life/fundersLife/api/uploads/152503932420180211_154805.jpg\r\n', '1500', 6, '2018-04-30 00:02:04', '0000-00-00 00:00:00', 0),
(43, '', 'Musa Zulu', '', 'john@mail.com', 'John', '', 'old', 'http://localhost:8080/future-life/fundersLife/api/uploads/152503939220180211_154803.jpg\r\n', '1000', 21, '2018-04-30 00:03:12', '0000-00-00 00:00:00', 0),
(44, '', 'Sipho Zulu', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/15253726499512.zoom.cropped.jpg\r\n', '500', 23, '2018-05-03 20:37:29', '0000-00-00 00:00:00', 0),
(45, '', 'Sipho Zulu', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/152537274820180211_154802.jpg\r\n', '150', 24, '2018-05-03 20:39:08', '0000-00-00 00:00:00', 0),
(46, '', 'Sipho Zulu', '', 'ndu@mail.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/152537275720180211_154803.jpg\r\n', '500', 25, '2018-05-03 20:39:17', '0000-00-00 00:00:00', 0),
(47, '', 'Sipho Zulu', '', 'test@test.com', 'Ndumiso', '', 'old', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/152537276720180211_154803.jpg\r\n', '3850', 26, '2018-05-03 20:39:27', '0000-00-00 00:00:00', 0),
(48, '', 'Ndumiso Mthembu', '', 'john@mail.com', 'John', '', 'new', 'http://localhost:8080/worldwidecash/fundersLife/api/uploads/152551451820180211_154803.jpg\r\n', '1500', 30, '2018-05-05 12:01:58', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `transiction`
--

CREATE TABLE `transiction` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `user` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL,
  `doc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transiction`
--

INSERT INTO `transiction` (`id`, `name`, `date`, `user`, `amount`, `doc`) VALUES
(1, 'John', '2018-02-21 13:31:34', 'john@mail.com', '400', 'http://localhost:8080/worldwidecash/web/api/uploads/1519212694card front.jpg\r\n'),
(2, 'John', '2018-02-21 13:31:43', 'john@mail.com', '400', 'http://localhost:8080/worldwidecash/web/api/uploads/1519212703card front.jpg\r\n'),
(3, 'Penalty fee', '2018-02-21 13:35:25', 'john@mail.com', '400', 'http://localhost:8080/worldwidecash/web/api/uploads/1519212925DMkiAdBXUAEGv4V.jpg\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cell` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `idnum` varchar(20) NOT NULL,
  `bankname` varchar(50) NOT NULL,
  `accountType` varchar(20) NOT NULL,
  `branch` varchar(20) NOT NULL,
  `accountnumber` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `createdate` text NOT NULL,
  `role` varchar(10) NOT NULL,
  `country` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `code` int(10) NOT NULL,
  `isEmailVerified` int(2) NOT NULL,
  `userstatus` varchar(20) NOT NULL DEFAULT 'active',
  `mylink` varchar(250) NOT NULL,
  `parentlink` varchar(250) NOT NULL,
  `isAkeeper` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `cell`, `address`, `idnum`, `bankname`, `accountType`, `branch`, `accountnumber`, `password`, `createdate`, `role`, `country`, `city`, `code`, `isEmailVerified`, `userstatus`, `mylink`, `parentlink`, `isAkeeper`) VALUES
(5, 'Ndumiso', 'MtlaHSJKL', 'test@test.com', '6546', '6546', '4444636546546', 'Capitec Bank', 'Cheque', '65454', '5436543543', 'pass', '2018-01-20 09:59:56', 'Client', 'Unite States', 'fgdgd', 0, 1, 'active', '', '', 'Yes'),
(10, 'John', 'Smith', 'john@mail.com', '083546547', '270 Marshall St, City and Suburban, Johannesburg, 2094', '74893274983724', 'First National Bank', 'Cheque', 'Ranburg', '548787421', 'pass', '2018-01-20 11:08:02', 'Client', 'South Africa', 'Johannesburg', 5080, 1, 'active', '', '', 'Yes'),
(12, 'fg', 'gdfg', 'SA@r', '', '', '', '', '', '', '', 'ff', '2018-01-21 05:26:42', 'Client', '', '', 7511, 0, 'active', '', '', 'Yes'),
(13, 'dsad', 'dsa', 'asd@dasf', '', '', '', '', '', '', '', 'd', '2018-01-21 05:29:45', 'Client', '', '', 7990, 0, 'active', '', '', 'Yes'),
(14, 'fsdf', 'fdsfs', 'asdfs@dasfsd', '', '', '', '', '', '', '', 'f', '2018-01-21 05:31:34', 'Client', '', '', 6454, 0, 'active', '', '', 'Yes'),
(15, 'faqf', 'fdsf', 'dsadfas@dasf', '', '', '', '', '', '', '', 'd', '2018-01-21 05:35:13', 'Client', '', '', 4964, 0, 'active', '', '', 'Yes'),
(16, 'sdf', 'fsdf', 'sxdf@sdf', '', '', '', '', '', '', '', 'gg', '2018-01-21 05:40:01', 'Client', '', '', 6211, 0, 'active', '', '', 'Yes'),
(17, 'fasdf', 'f', 'sdff@sa', '', '', '', '', '', '', '', 'f', '2018-01-21 05:51:06', 'Client', '', '', 4716, 0, 'active', '', '', 'Yes'),
(18, 'rwer', 'erwr', 'we@awsf', '', '', '', '', '', '', '', 'gg', '2018-01-21 05:51:54', 'Client', '', '', 5380, 0, 'active', '', '', 'Yes'),
(19, 'Dude', 'Jele', 'dude.jele@hotmail.com', '0248454144', '270 Marshall St, City and Suburban, Johannesburg, 2094', '9865444444', 'African Bank Limited', 'Cheque', '4154564', '556554846487', 'pass', '2018-01-23 11:32:00', 'Client', 'South Africa', 'Johannesburg', 7292, 0, 'active', '', '', 'Yes'),
(20, 'fdsf', 'fdsf', 'fds@fds', '', '', '', '', '', '', '', 'f', '2018-01-23 11:43:21', 'Client', '', '', 5479, 0, 'active', '', '', 'Yes'),
(21, 'sdf', 'dfsf', 'sad@df', '', '', '', '', '', '', '', 'f', '2018-01-23 11:47:10', 'Client', '', '', 4094, 0, 'active', '', '', 'Yes'),
(22, 'Ndumiso', 'Mthembu', 'ndu@mail.co.za', '464654', '6464', '7444646', 'Capitec Bank', 'Savings', '241', '213454', 'pass', '2018-01-23 11:59:46', 'Client', 'South Africa', 'jhb', 4879, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=1517762030511888', '', 'Yes'),
(23, 'duncan', 'Nyawo', 'admin@mail.com', '5463542', 'GDFGFGDFGFG', '986524648512554', 'First National Bank', 'Savings', '5634245', '856231.6565', 'pass', '2018-01-23 21:05:31', 'admin', 'South Africa', 'ASDSAFSADFS', 7544, 1, 'active', '', '', 'Yes'),
(24, 'Musa', 'Zulu', 'musa@mail.com', '324324324', 'sdfffd', '4324324', 'First National Bank', 'Savings', '1313213', '654564646', 'pass', '2018-01-25 17:02:24', 'Client', 'Unite States', 'dffdsf', 4879, 1, 'active', '', '', 'Yes'),
(25, 'Zama', 'Mnguni', 'mrnnmthembu@gmail.com', '02413464', 'EYETHU', '43444646', 'Bidvest Bank Limited', 'Savings', '445656', '264556464', 'pass', '2018-02-01 12:51:46', 'Client', 'South Africa', 'JHB', 7850, 1, 'active', '', '', 'Yes'),
(26, 'Teat', 'sasa', 'saSa@wqsA', '', '', '', '', '', '', '', 'NDUMISO01', '2018-02-02 05:20:50', 'Client', '', '', 4727, 0, 'active', '15175776504727', '', 'Yes'),
(27, 'sAS', 'SAs', 'saS@WQEQ', '', '', '', '', '', '', '', 'EEEEEEEEE', '2018-02-02 05:24:39', 'Client', '', '', 6828, 0, 'active', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828', '', 'Yes'),
(28, 'Child', 'oNE', 'child@mail.com', '', '', '', '', '', '', '', 'Sign up for ', '2018-02-02 05:35:10', 'Client', '', '', 5391, 1, 'active', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828?link=15175785105270', '', 'Yes'),
(29, 'Child', 'Two', 'child2@mail.com', '', '', '', '', '', '', '', 'parentlink', '2018-02-02 05:36:29', 'Client', '', '', 5974, 0, 'active', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828?link=15175785895974', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828', 'Yes'),
(30, 'Base2', 'hqkhsk', 'sjahks@hkjdhsak', '124646', 'CDSVSDDSGSDGSDGGSDG', '65546464', 'Capitec Bank', 'Cheque', 'R443534', '5461', 'sjahks@hkjdhsak', '2018-02-02 05:42:01', 'Client', 'South Africa', 'FEWFS', 4625, 1, 'active', 'http://localhost:8080/sfiso?link=15175789217111', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828', 'Yes'),
(32, 'Ndumiso', 'Mthembu', 'ndu@mail.com', '464646', '4646', '15465446', 'African Bank Limited', 'Savings', '1212121', '32134213525', 'ndumiso01', '2018-02-04 08:33:50', 'Client', 'South Africa', '4646', 7787, 1, 'active', 'http://localhost:55116/index.html#!/Get-Started?link=15177620305118', '', 'Yes'),
(33, 'Sipho', 'Zulu', 'sipho@mail.com', '54545', '4545', '5645454', 'Capitec Bank', 'Cheque', '5512', '212', '12345678', '2018-02-04 09:11:51', 'Client', 'South Africa', '44', 5399, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177643115399', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177620305118', 'Yes'),
(34, 'Lol', 'lol', 'lol@lol.lol', '101010101010', 'loooooooooooooooool', '11010101010', 'Bidvest Bank Limited', 'Savings', '10010101010', '101010101010', 'looooooool', '2018-02-05 01:22:46', 'Client', 'Unite States', 'lolol', 6296, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15178225666296', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177620305118', 'Yes'),
(35, 'John', 'Doe', 'john2@mail.com', '321414', '3 Sandton drive', '3214214', 'Capitec Bank', 'Savings', '164545', '454654646', 'john2@mail.com', '2018-02-12 04:59:33', 'Client', 'South Africa', 'Sandton', 6109, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15184043736109', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177620305118', 'Yes'),
(36, 'xdsafd', 'sdfawef', 'swdqs@dfs', '534654654', 'xdcsfgb', '423523', 'First National Bank', 'Savings', '432534', '6553543', 'swdqs@dfs', '2018-03-17 16:00:15', 'Client', 'South Africa', 'swertgr', 6258, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15212952156258', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177620305118', 'Yes'),
(37, 'Pdo', 'test', 'pdo@mail.com', '44214124', 'dsad', '32134213', 'Nedbank Limited', 'Savings', '21321', '3213', 'pdo@mail.com', '2018-03-21 11:42:37', 'Client', 'Unite States', 'dsd', 6334, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15216253576334', '', 'Yes'),
(38, 'My', 'Child', 'chil@mail.com', '5325345', '235345', '43254324', 'Capitec Bank', 'Savings', '321421', '42142', 'chil@mail.com', '2018-03-27 12:38:17', 'Client', 'South Africa', 'fsaf', 4218, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15221470974218', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177620305118', 'Yes'),
(39, 'Test', 'Reg', 'testmail@maui.com', '784545', 'Tets aff', '32131231313', 'African Bank Limited', 'Cheque', '3214', '312312321', 'testmail@maui.com', '2018-04-07 07:44:43', 'Client', 'South Africa', 'jhb', 5055, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15230798835055', '', 'Yes'),
(40, 'Joef', 'fej', 'feg@feg.koll', '', '', '', '', '', '', '', 'feg@feg.koll', '2018-04-20 19:33:19', 'Client', '', '', 7202, 0, 'active', 'http://localhost:8080/worldwidecash/fundersLife/Get-Started?link=15242455997202', '', 'Yes'),
(41, 'zAASWQ', 'WQ', 'EWQEWQE@WSDA', '332', '321S', '321312', 'Capitec Bank', 'Cheque', '214324', '32432', 'EWQEWQE@WSDA', '2018-04-20 19:35:19', 'Client', 'Unite States', 'S', 5194, 0, 'active', 'http://localhost:8080/worldwidecash/fundersLife/Get-Started?link=15242457195194', '', 'Yes'),
(42, 'Test', 'After', 'test@afaft.com', '423423', 'fdsafsda', '4324324', 'Capitec Bank', 'Savings', '33123', '323213', 'test@afaft.com', '2018-04-20 19:46:51', 'Client', 'South Africa', 'fsdfsd', 4167, 0, 'active', 'http://localhost:8080/worldwidecash/fundersLife/Get-Started?link=15242464114167', '', 'Yes'),
(43, 'WQ', 'WQ', 'saS@WEDSADDCZd', '4124', 'ewe', '3214', 'First National Bank', 'Cheque', '3421', '3421', 'saS@WEDSADDCZ', '2018-04-20 20:20:58', 'Client', 'South Africa', 'dsa', 4254, 0, 'active', 'http://localhost:55116/index.html#!/Get-Started?link=15242484584254', 'http://localhost:55116/Index.Html#!/Get-Started?Link=15177620305118', 'Yes'),
(44, 'Ndumiso1', 'Mthembu1', 'ndu1@mail.com', '24754545', 'Eyeteeth house', '9306542245445', 'African Bank Limited', 'Cheque', '1254', '11135875', 'ndu1@mail.com', '2018-04-21 06:43:32', 'Client', 'South Africa', 'Johannesburg', 6379, 0, 'active', 'http://localhost:55116/index.html#!/Get-Started?link=15242858126379', 'http://localhost:55116/index.html#!/get-started?link=15177620305118', 'Yes'),
(45, 'Ndumiso2', 'Mthembu2', 'ndu2@mail.com', '3213213', 'Eyethu house', '421423523525', 'Capitec Bank', 'Cheque', '321312', '321321', 'ndu2@mail.com', '2018-04-21 07:32:12', 'Client', 'South Africa', 'Johanesburg', 5857, 0, 'active', 'http://localhost:55116/index.html#!/Get-Started?link=15242887325857', 'http://localhost:55116/index.html#!/get-started?link=15177620305118', 'Yes'),
(46, 'Ndumiso3', 'Mthembu3', 'ndu3@mail.com', '432432', 'dZD', '423432143', 'Bidvest Bank Limited', 'Cheque', '3214', '32134214', 'ndu3@mail.com', '2018-04-21 07:38:53', 'Client', 'South Africa', 'dss', 5197, 1, 'active', 'http://localhost:55116/index.html#!/Get-Started?link=15242891335197', 'http://localhost:55116/index.html#!/get-started?link=15177620305118', 'Yes'),
(47, 'Ndumiso4', 'Mthembu4', 'ndu4@mail.com', '543543', 'fddc', '421443', 'Capitec Bank', 'Cheque', '32432', '431243243', 'ndu4@mail.com', '2018-04-21 08:10:37', 'Client', 'Unite States', 'fdsf', 4144, 1, 'locked', 'http://localhost:55116/index.html#!/Get-Started?link=15242910374144', 'http://localhost:55116/index.html#!/get-started?link=15177620305118', 'Yes'),
(48, 'sdsad', 'sadas', 'sadas@waDSAD', '', '', '', '', '', '', '', 'sadas@waDSAD', '2018-05-05 11:18:31', 'Client', '', '', 6349, 0, 'active', 'http://localhost:55116/index.html#!/Get-Started?link=15255119116349', '', 'Yes'),
(49, 'SAsa', 'SAsaS', 'SAsASas@wsdwasd', '', '', '', '', '', '', '', 'SAsASas@wsdwasd', '2018-05-05 11:22:24', 'Client', '', '', 4445, 0, 'active', 'http://localhost:55116/index.html#!/Get-Started?link=15255121444445', '', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `withdraw`
--

CREATE TABLE `withdraw` (
  `id` int(10) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `createdate` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `investmentID` int(10) NOT NULL,
  `pendingbalance` varchar(10) NOT NULL,
  `balance` varchar(11) NOT NULL,
  `notes` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `withdraw`
--

INSERT INTO `withdraw` (`id`, `amount`, `createdate`, `status`, `investmentID`, `pendingbalance`, `balance`, `notes`) VALUES
(1, '153400', '2018-04-16 09:44:50', 'pending', 2, '', '133700', 'Special Withdrawal'),
(2, '500', '2018-04-16 10:44:47', 'pending', 3, '', '0', 'Special Withdrawal'),
(3, '50000', '2018-04-19 21:29:23', 'pending', 14, '', '50000', 'Special Withdrawal'),
(4, '1200000', '2018-04-19 21:29:52', 'pending', 15, '', '1156150', 'Special Withdrawal'),
(5, '2350', '2018-04-19 21:30:44', 'pending', 16, '', '0', 'Special Withdrawal'),
(6, '300', '2018-04-20 13:32:42', 'pending', 17, '', '0', 'Special Withdrawal'),
(7, '100', '2018-04-20 16:07:12', 'pending', 18, '', '0', 'Special Withdrawal'),
(8, '500', '2018-04-20 16:07:31', 'pending', 19, '', '0', 'Special Withdrawal'),
(9, '500', '2018-04-20 16:13:04', 'pending', 21, '', '0', 'Special Withdrawal'),
(10, '4200', '2018-04-21 08:13:15', 'pending', 27, '', '4200', 'Cash Out A bonus'),
(11, '500', '2018-04-21 11:14:16', 'pending', 28, '', '0', 'Special Withdrawal'),
(12, '500', '2018-04-21 11:14:45', 'pending', 29, '', '500', 'Special Withdrawal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bonus`
--
ALTER TABLE `bonus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investment`
--
ALTER TABLE `investment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keeper`
--
ALTER TABLE `keeper`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keptamounts`
--
ALTER TABLE `keptamounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transiction`
--
ALTER TABLE `transiction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdraw`
--
ALTER TABLE `withdraw`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bonus`
--
ALTER TABLE `bonus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `keeper`
--
ALTER TABLE `keeper`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `keptamounts`
--
ALTER TABLE `keptamounts`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `transiction`
--
ALTER TABLE `transiction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `withdraw`
--
ALTER TABLE `withdraw`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
