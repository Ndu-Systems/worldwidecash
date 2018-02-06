-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2018 at 08:59 PM
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
  `email` varchar(150) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `fromEmail` varchar(150) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bonus`
--

INSERT INTO `bonus` (`id`, `email`, `amount`, `fromEmail`, `status`) VALUES
(1, 'ndu@mail.com', '200', 'hkdsagk@hoasha', 'active'),
(2, 'ndu@mail.com', '150', 'hkdsagk@hoasha', '');

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
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `senderEmail`, `senderName`, `receiverEmail`, `receiverName`, `timeRead`, `timeSent`, `status`, `message`) VALUES
(1, 'ndu@mail.com', 'Ndumiso', 'admin@mail.com', 'Ndumiso', '2018-02-06 00:00:00', '2018-02-07 00:00:00', 'read', 'Hey there '),
(2, 'admin@mail.com', 'Admin', 'admin@mail.com', 'Admin', '2018-02-06 00:00:00', '2018-02-07 00:00:00', 'read', 'Hey it Admin here'),
(3, 'ndu@mail.com', 'Ndumiso', 'admin@mail.com', 'Ndumiso', '2018-02-06 00:00:00', '2018-02-07 00:00:00', 'read', 'Can I ask'),
(4, 'lol@lol.lol', 'Lol', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-02-06 20:13:07', '', ''),
(5, 'lol@lol.lol', 'Lol', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-02-06 20:13:32', '', 'sa'),
(6, 'lol@lol.lol', 'Lol', 'admin@mail.com', 'Admin', '0000-00-00 00:00:00', '2018-02-06 20:14:39', '', 'Sorry , how to give help?'),
(7, 'admin@mail.com', 'Admin', 'admin@mail.com', 'Admin', '2018-02-06 00:00:00', '2018-02-07 00:00:00', 'read', 'Ok I will call you now now !');

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

CREATE TABLE `investment` (
  `id` int(10) NOT NULL,
  `dateInvested` datetime NOT NULL,
  `amountInvested` varchar(20) NOT NULL,
  `status` text NOT NULL,
  `doc` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `package` int(3) NOT NULL,
  `dream` text NOT NULL,
  `name` varchar(50) NOT NULL,
  `keeperemail` varchar(100) NOT NULL,
  `keepername` varchar(50) NOT NULL,
  `keepercell` varchar(20) NOT NULL,
  `keeperacc` varchar(50) NOT NULL,
  `keeperbrancode` varchar(20) NOT NULL,
  `keeperbankname` varchar(30) NOT NULL,
  `timeallocated` datetime NOT NULL,
  `datepaid` datetime NOT NULL,
  `expecedDate` datetime NOT NULL,
  `cell` varchar(15) NOT NULL DEFAULT '0785414455'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `parentlink` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `cell`, `address`, `idnum`, `bankname`, `accountType`, `branch`, `accountnumber`, `password`, `createdate`, `role`, `country`, `city`, `code`, `isEmailVerified`, `userstatus`, `mylink`, `parentlink`) VALUES
(5, 'Ndumiso', 'MtlaHSJKL', 'test@test.com', '6546', '6546', '4444636546546', 'Capitec Bank', 'Savings', '65454', '5436543543', 'pass', '2018-01-20 09:59:56', 'Client', 'Unite States', 'fgdgd', 0, 0, 'active', '', ''),
(7, 'FADSF', 'FDSF', 'FDS@ASDDF', '', '', '', '', '', '', '', 'FF', '2018-01-20 10:00:35', 'Client', '', '', 0, 0, 'active', '', ''),
(8, 'fdsf', 'fdsf', 'fdsf@asd', '5345435', 'Eyethu', '54543543534', '', '', '', '', 'ff', '2018-01-20 10:03:48', 'Client', 'South Africa', 'JHB', 0, 0, 'active', '', ''),
(9, 'ggfdg', 'gdfg', 'dfgdf@asd', '534543', 'sdffsa', '4325345', 'African Bank Limited', '', '', '432532563532', 'ggg', '2018-01-20 10:45:40', 'Client', 'South Africa', 'rewtg', 0, 0, 'active', '', ''),
(10, 'John', 'Smith', 'john@mail.com', '083546547', '270 Marshall St, City and Suburban, Johannesburg, 2094', '74893274983724', 'First National Bank', 'Cheque', 'Ranburg', '548787421', 'pass', '2018-01-20 11:08:02', 'Client', 'South Africa', 'Johannesburg', 5080, 1, 'active', '', ''),
(11, 'sdffsd', 'gdfsg', 'dfgdf@sdfds', '', '', '', '', '', '', '', 'gg', '2018-01-21 05:22:27', 'Client', '', '', 0, 0, 'active', '', ''),
(12, 'fg', 'gdfg', 'SA@r', '', '', '', '', '', '', '', 'ff', '2018-01-21 05:26:42', 'Client', '', '', 7511, 0, 'active', '', ''),
(13, 'dsad', 'dsa', 'asd@dasf', '', '', '', '', '', '', '', 'd', '2018-01-21 05:29:45', 'Client', '', '', 7990, 0, 'active', '', ''),
(14, 'fsdf', 'fdsfs', 'asdfs@dasfsd', '', '', '', '', '', '', '', 'f', '2018-01-21 05:31:34', 'Client', '', '', 6454, 0, 'active', '', ''),
(15, 'faqf', 'fdsf', 'dsadfas@dasf', '', '', '', '', '', '', '', 'd', '2018-01-21 05:35:13', 'Client', '', '', 4964, 0, 'active', '', ''),
(16, 'sdf', 'fsdf', 'sxdf@sdf', '', '', '', '', '', '', '', 'gg', '2018-01-21 05:40:01', 'Client', '', '', 6211, 0, 'active', '', ''),
(17, 'fasdf', 'f', 'sdff@sa', '', '', '', '', '', '', '', 'f', '2018-01-21 05:51:06', 'Client', '', '', 4716, 0, 'active', '', ''),
(18, 'rwer', 'erwr', 'we@awsf', '', '', '', '', '', '', '', 'gg', '2018-01-21 05:51:54', 'Client', '', '', 5380, 0, 'active', '', ''),
(19, 'Dude', 'Jele', 'dude.jele@hotmail.com', '0248454144', '270 Marshall St, City and Suburban, Johannesburg, 2094', '9865444444', 'African Bank Limited', 'Cheque', '4154564', '556554846487', 'pass', '2018-01-23 11:32:00', 'Client', 'South Africa', 'Johannesburg', 7292, 0, 'active', '', ''),
(20, 'fdsf', 'fdsf', 'fds@fds', '', '', '', '', '', '', '', 'f', '2018-01-23 11:43:21', 'Client', '', '', 5479, 0, 'active', '', ''),
(21, 'sdf', 'dfsf', 'sad@df', '', '', '', '', '', '', '', 'f', '2018-01-23 11:47:10', 'Client', '', '', 4094, 0, 'active', '', ''),
(22, 'Ndumiso', 'Mthembu', 'ndu@mail.co.za', '464654', '6464', '7444646', 'Capitec Bank', 'Savings', '241', '213454', 'pass', '2018-01-23 11:59:46', 'Client', 'South Africa', 'jhb', 4879, 1, 'active', '', ''),
(23, 'duncan', 'Nyawo', 'admin@mail.com', '5463542', 'GDFGFGDFGFG', '986524648512554', 'First National Bank', 'Savings', '5634245', '856231.6565', 'pass', '2018-01-23 21:05:31', 'admin', 'South Africa', 'ASDSAFSADFS', 7544, 1, 'active', '', ''),
(24, 'Musa', 'Zulu', 'musa@mail.com', '324324324', 'sdfffd', '4324324', 'First National Bank', 'Savings', '1313213', '654564646', 'pass', '2018-01-25 17:02:24', 'Client', 'Unite States', 'dffdsf', 4879, 1, 'active', '', ''),
(25, 'Zama', 'Mnguni', 'mrnnmthembu@gmail.com', '02413464', 'EYETHU', '43444646', 'Bidvest Bank Limited', 'Savings', '445656', '264556464', 'pass', '2018-02-01 12:51:46', 'Client', 'South Africa', 'JHB', 7850, 1, 'active', '', ''),
(26, 'Teat', 'sasa', 'saSa@wqsA', '', '', '', '', '', '', '', 'NDUMISO01', '2018-02-02 05:20:50', 'Client', '', '', 4727, 0, 'active', '15175776504727', ''),
(27, 'sAS', 'SAs', 'saS@WQEQ', '', '', '', '', '', '', '', 'EEEEEEEEE', '2018-02-02 05:24:39', 'Client', '', '', 6828, 0, 'active', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828', ''),
(28, 'Child', 'oNE', 'child@mail.com', '', '', '', '', '', '', '', 'Sign up for ', '2018-02-02 05:35:10', 'Client', '', '', 5270, 0, 'active', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828?link=15175785105270', ''),
(29, 'Child', 'Two', 'child2@mail.com', '', '', '', '', '', '', '', 'parentlink', '2018-02-02 05:36:29', 'Client', '', '', 5974, 0, 'active', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828?link=15175785895974', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828'),
(30, 'Base2', 'hqkhsk', 'sjahks@hkjdhsak', '124646', 'CDSVSDDSGSDGSDGGSDG', '65546464', 'Capitec Bank', 'Cheque', 'R443534', '5461', 'sjahks@hkjdhsak', '2018-02-02 05:42:01', 'Client', 'South Africa', 'FEWFS', 4625, 1, 'active', 'http://localhost:8080/sfiso?link=15175789217111', 'http://localhost:8080/sfiso/Get-Started?link=15175778796828'),
(32, 'Ndumiso', 'Mthembu', 'ndu@mail.com', '464646', '4646', '15465446', 'First National Bank', 'Cheque', '1212121', '21212', '12345678', '2018-02-04 08:33:50', 'Client', 'South Africa', '4646', 5118, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177620305118', ''),
(33, 'Sipho', 'Zulu', 'sipho@mail.com', '54545', '4545', '5645454', 'Capitec Bank', 'Cheque', '5512', '212', '12345678', '2018-02-04 09:11:51', 'Client', 'South Africa', '44', 5399, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177643115399', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177620305118'),
(34, 'Lol', 'lol', 'lol@lol.lol', '101010101010', 'loooooooooooooooool', '11010101010', 'Bidvest Bank Limited', 'Savings', '10010101010', '101010101010', 'looooooool', '2018-02-05 01:22:46', 'Client', 'Unite States', 'lolol', 6296, 1, 'active', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15178225666296', 'http://localhost:8080/worldwidecash/web/Get-Started?link=15177620305118');

-- --------------------------------------------------------

--
-- Table structure for table `withdraw`
--

CREATE TABLE `withdraw` (
  `id` int(10) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `package` int(10) NOT NULL,
  `createdate` datetime NOT NULL,
  `email` varchar(100) NOT NULL,
  `donneremail` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `investemntId` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `balance` varchar(120) NOT NULL,
  `pendingbalance` varchar(10) NOT NULL,
  `dream` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Indexes for table `investment`
--
ALTER TABLE `investment`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `withdraw`
--
ALTER TABLE `withdraw`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
