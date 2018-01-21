-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2018 at 05:58 AM
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
-- Table structure for table `dream`
--

CREATE TABLE `dream` (
  `id` int(10) NOT NULL,
  `dream` varchar(150) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `peroid` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `datecreated` datetime NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dream`
--

INSERT INTO `dream` (`id`, `dream`, `amount`, `peroid`, `status`, `datecreated`, `email`) VALUES
(1, 'house', '15000', '12 Months', 'Pending', '2018-01-20 20:57:57', 'john@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

CREATE TABLE `investment` (
  `id` int(10) NOT NULL,
  `dateInvested` text NOT NULL,
  `amountInvested` varchar(20) NOT NULL,
  `status` text NOT NULL,
  `doc` text NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `investment`
--

INSERT INTO `investment` (`id`, `dateInvested`, `amountInvested`, `status`, `doc`, `email`) VALUES
(1, '2018/01/20', '100000', 'Verification pending', 'http://localhost/sfiso/api/uploads/1516475451proof of payment.jpg\r\n', 'john@mail.com'),
(2, '2018/01/20', '20000', 'Verification pending', 'http://localhost/sfiso/api/uploads/1516475892proof of payment.jpg\r\n', 'john@mail.com'),
(3, '2018/01/20', '2', 'Verification pending', 'http://localhost/sfiso/api/uploads/151647795219260305_1907291062842927_1409545387070698866_n.jpg\r\n', 'john@mail.com'),
(4, '2018/01/21', '500', 'Verification pending', '', 'john@mail.com');

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
  `accountnumber` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `createdate` text NOT NULL,
  `role` varchar(10) NOT NULL,
  `country` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `cell`, `address`, `idnum`, `bankname`, `accountnumber`, `password`, `createdate`, `role`, `country`, `city`) VALUES
(1, 'Ndumiso', 'Mtembu', 'ndu@mail.com', '', '', '', '', '', 'pass', '2018-01-20 07:10:56', 'Client', '', ''),
(5, 'Ndumiso', 'MtlaHSJKL', 'hsaldh@hAASZHA', '', '', '', '', '', 'FF', '2018-01-20 09:59:56', 'Client', '', ''),
(6, 'FSDF', 'SDFF', 'FSD@WEWA', '', '', '', '', '', 'F', '2018-01-20 10:00:16', 'Client', '', ''),
(7, 'FADSF', 'FDSF', 'FDS@ASDDF', '', '', '', '', '', 'FF', '2018-01-20 10:00:35', 'Client', '', ''),
(8, 'fdsf', 'fdsf', 'fdsf@asd', '5345435', 'Eyethu', '54543543534', '', '', 'ff', '2018-01-20 10:03:48', 'Client', 'South Africa', 'JHB'),
(9, 'ggfdg', 'gdfg', 'dfgdf@asd', '534543', 'sdffsa', '4325345', 'African Bank Limited', '432532563532', 'ggg', '2018-01-20 10:45:40', 'Client', 'South Africa', 'rewtg'),
(10, 'John', 'Smith', 'john@mail.com', '083546547', '270 Marshall St, City and Suburban, Johannesburg, 2094', '74893274983724', 'Nedbank Limited', '11121321321', 'pass', '2018-01-20 11:08:02', 'Client', 'South Africa', 'Johannesburg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dream`
--
ALTER TABLE `dream`
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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dream`
--
ALTER TABLE `dream`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
