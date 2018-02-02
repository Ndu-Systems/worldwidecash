-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2018 at 02:00 AM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.0.18

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
  `expecedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `investment`
--

INSERT INTO `investment` (`id`, `dateInvested`, `amountInvested`, `status`, `doc`, `email`, `package`, `dream`, `name`, `keeperemail`, `keepername`, `keepercell`, `keeperacc`, `keeperbrancode`, `keeperbankname`, `timeallocated`, `datepaid`, `expecedDate`) VALUES
(1, '2018-01-31 01:08:47', '50000', 'active', 't', 'ndu@mail.com', 12, 'car', 'Ndumiso', 'siya@mail.com', 'Siyabonga Nyawo', '078454512', '111454545', '15645', 'FNB', '2018-01-31 06:19:13', '2018-01-31 12:08:12', '0000-00-00 00:00:00'),
(2, '2018-01-31 01:42:21', '3000', 'pending', '', 'ndu@mail.com', 2, 'TV', 'Ndumiso', '', '', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '2018-01-31 02:35:23', '500', 'active', 'http://localhost/sfiso/api/uploads/15175154391.PNG\r\n', 'ndu@mail.com', 11, 'sa', 'Ndumiso', 'John@mail.com', 'John', '07454545', '44546', '46465', 'Absa', '2018-02-01 08:28:00', '2018-02-01 12:03:59', '2018-03-02 02:35:23'),
(4, '2018-01-31 02:40:51', '10000', 'paid', '', 'ndu@mail.com', 12, 's', 'Ndumiso', '', 'Val', '', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2019-01-26 02:40:51'),
(5, '2018-02-01 12:35:05', '50000', 'active', 'http://localhost/sfiso/api/uploads/15175174981.PNG\r\n', 'ndu@mail.com', 12, 'AMG', 'Ndumiso', 'siya@mailcom', 'Siya', '07445454', '4544565454', '1544', 'FNB', '0000-00-00 00:00:00', '2018-02-01 12:38:18', '2019-01-27 12:35:05'),
(6, '2018-02-01 12:53:17', '300', 'allocated', '', 'mrnnmthembu@gmail.com', 2, 'Shoes', 'Zama', 'john@mail.com', 'John', '083546547', '548787421', 'Ranburg', 'First National Bank', '2018-02-01 16:54:45', '0000-00-00 00:00:00', '2018-04-02 12:53:17');

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
  `isEmailVerified` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `cell`, `address`, `idnum`, `bankname`, `accountType`, `branch`, `accountnumber`, `password`, `createdate`, `role`, `country`, `city`, `code`, `isEmailVerified`) VALUES
(1, 'Ndumiso', 'Mtembu', 'ndu@mail.com', '0713546456456', 'eYETHU', '3132454564564', 'Capitec Bank', 'Cheque', '231423', '434324324', 'pass', '2018-01-20 07:10:56', 'Client', 'South Africa', 'JHB', 4901, 1),
(5, 'Ndumiso', 'MtlaHSJKL', 'test@test.com', '6546', '6546', '4444636546546', 'Capitec Bank', 'Savings', '65454', '5436543543', 'pass', '2018-01-20 09:59:56', 'Client', 'Unite States', 'fgdgd', 0, 0),
(6, 'FSDF', 'SDFF', 'FSD@WEWA', '', '', '', '', '', '', '', 'F', '2018-01-20 10:00:16', 'Client', '', '', 0, 0),
(7, 'FADSF', 'FDSF', 'FDS@ASDDF', '', '', '', '', '', '', '', 'FF', '2018-01-20 10:00:35', 'Client', '', '', 0, 0),
(8, 'fdsf', 'fdsf', 'fdsf@asd', '5345435', 'Eyethu', '54543543534', '', '', '', '', 'ff', '2018-01-20 10:03:48', 'Client', 'South Africa', 'JHB', 0, 0),
(9, 'ggfdg', 'gdfg', 'dfgdf@asd', '534543', 'sdffsa', '4325345', 'African Bank Limited', '', '', '432532563532', 'ggg', '2018-01-20 10:45:40', 'Client', 'South Africa', 'rewtg', 0, 0),
(10, 'John', 'Smith', 'john@mail.com', '083546547', '270 Marshall St, City and Suburban, Johannesburg, 2094', '74893274983724', 'First National Bank', 'Cheque', 'Ranburg', '548787421', 'pass', '2018-01-20 11:08:02', 'Client', 'South Africa', 'Johannesburg', 5080, 1),
(11, 'sdffsd', 'gdfsg', 'dfgdf@sdfds', '', '', '', '', '', '', '', 'gg', '2018-01-21 05:22:27', 'Client', '', '', 0, 0),
(12, 'fg', 'gdfg', 'SA@r', '', '', '', '', '', '', '', 'ff', '2018-01-21 05:26:42', 'Client', '', '', 7511, 0),
(13, 'dsad', 'dsa', 'asd@dasf', '', '', '', '', '', '', '', 'd', '2018-01-21 05:29:45', 'Client', '', '', 7990, 0),
(14, 'fsdf', 'fdsfs', 'asdfs@dasfsd', '', '', '', '', '', '', '', 'f', '2018-01-21 05:31:34', 'Client', '', '', 6454, 0),
(15, 'faqf', 'fdsf', 'dsadfas@dasf', '', '', '', '', '', '', '', 'd', '2018-01-21 05:35:13', 'Client', '', '', 4964, 0),
(16, 'sdf', 'fsdf', 'sxdf@sdf', '', '', '', '', '', '', '', 'gg', '2018-01-21 05:40:01', 'Client', '', '', 6211, 0),
(17, 'fasdf', 'f', 'sdff@sa', '', '', '', '', '', '', '', 'f', '2018-01-21 05:51:06', 'Client', '', '', 4716, 0),
(18, 'rwer', 'erwr', 'we@awsf', '', '', '', '', '', '', '', 'gg', '2018-01-21 05:51:54', 'Client', '', '', 5380, 0),
(19, 'Dude', 'Jele', 'dude.jele@hotmail.com', '0248454144', '270 Marshall St, City and Suburban, Johannesburg, 2094', '9865444444', 'African Bank Limited', 'Cheque', '4154564', '556554846487', 'pass', '2018-01-23 11:32:00', 'Client', 'South Africa', 'Johannesburg', 7292, 0),
(20, 'fdsf', 'fdsf', 'fds@fds', '', '', '', '', '', '', '', 'f', '2018-01-23 11:43:21', 'Client', '', '', 5479, 0),
(21, 'sdf', 'dfsf', 'sad@df', '', '', '', '', '', '', '', 'f', '2018-01-23 11:47:10', 'Client', '', '', 4094, 0),
(22, 'Ndumiso', 'Mthembu', 'ndu@mail.co.za', '464654', '6464', '7444646', 'Capitec Bank', 'Savings', '241', '213454', 'pass', '2018-01-23 11:59:46', 'Client', 'South Africa', 'jhb', 4879, 1),
(23, 'duncan', 'Nyawo', 'admin@mail.com', '5463542', 'GDFGFGDFGFG', '986524648512554', 'First National Bank', 'Savings', '5634245', '856231.6565', 'pass', '2018-01-23 21:05:31', 'admin', 'South Africa', 'ASDSAFSADFS', 7544, 1),
(24, 'Musa', 'Zulu', 'musa@mail.com', '324324324', 'sdfffd', '4324324', 'First National Bank', 'Savings', '1313213', '654564646', 'pass', '2018-01-25 17:02:24', 'Client', 'Unite States', 'dffdsf', 4879, 1),
(25, 'Zama', 'Mnguni', 'mrnnmthembu@gmail.com', '02413464', 'EYETHU', '43444646', 'Bidvest Bank Limited', 'Savings', '445656', '264556464', 'pass', '2018-02-01 12:51:46', 'Client', 'South Africa', 'JHB', 7850, 1);

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
  `pendingbalance` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `withdraw`
--

INSERT INTO `withdraw` (`id`, `amount`, `package`, `createdate`, `email`, `donneremail`, `status`, `investemntId`, `name`, `balance`, `pendingbalance`) VALUES
(10, '50000', 12, '2018-01-25 16:18:11', 'john@mail.com', '', 'waiting for provider', 9, 'John', '50000', '40700'),
(11, '50000', 12, '2018-01-25 16:51:19', 'john@mail.com', '', 'waiting for provider', 14, 'John', '250', '--');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `withdraw`
--
ALTER TABLE `withdraw`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
