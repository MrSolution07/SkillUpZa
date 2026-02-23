-- SkillUpZa Database Schema
-- Run this in phpMyAdmin or MySQL client against your database (e.g. if0_41230122_skillup)
-- Tables must be created in order due to foreign key dependencies

-- ============================================
-- 1. credentials (user accounts)
-- ============================================
CREATE TABLE credentials (
    Username VARCHAR(255) PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Mobile_Number VARCHAR(50) DEFAULT NULL,
    ProfilePicture LONGBLOB DEFAULT NULL,
    ImageName VARCHAR(255) DEFAULT NULL,
    ImageType VARCHAR(100) DEFAULT NULL,
    ImageSize INT DEFAULT NULL
);

-- ============================================
-- 2. business (business accounts)
-- ============================================
CREATE TABLE business (
    BusinessName VARCHAR(255) PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Mobile_number VARCHAR(50) DEFAULT NULL,
    ProfilePicture LONGBLOB DEFAULT NULL,
    imageName VARCHAR(255) DEFAULT NULL,
    imageType VARCHAR(100) DEFAULT NULL,
    imageSize INT DEFAULT NULL
);

-- ============================================
-- 3. images (for post attachments)
-- Must be created before posts (foreign key)
-- ============================================
CREATE TABLE images (
    ImageId INT AUTO_INCREMENT PRIMARY KEY,
    ImageContent LONGBLOB,
    ImageType VARCHAR(100) DEFAULT NULL
);

-- ============================================
-- 4. courses
-- ============================================
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    courseName VARCHAR(255) DEFAULT NULL,
    courseHeading VARCHAR(255) DEFAULT NULL,
    coursePrice VARCHAR(50) DEFAULT NULL,
    courseOfferPrice VARCHAR(50) DEFAULT NULL,
    courseRating VARCHAR(20) DEFAULT NULL,
    courseReviews VARCHAR(50) DEFAULT NULL,
    courseImg VARCHAR(500) DEFAULT NULL
);

-- ============================================
-- 5. jobs
-- ============================================
CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobName VARCHAR(255) DEFAULT NULL,
    jobDescription TEXT,
    jobImage LONGBLOB DEFAULT NULL,
    imageName VARCHAR(255) DEFAULT NULL,
    imageType VARCHAR(100) DEFAULT NULL,
    imageSize INT DEFAULT NULL,
    BusinessName VARCHAR(255) DEFAULT NULL
);

-- ============================================
-- 6. posts (references images)
-- ============================================
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) DEFAULT NULL,
    Content TEXT,
    ImageId INT DEFAULT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ImageId) REFERENCES images(ImageId) ON DELETE SET NULL
);
