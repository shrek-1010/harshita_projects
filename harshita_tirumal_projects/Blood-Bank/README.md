# 🩸 Blood Bank Application

A modern, responsive, and professional blood donation management system that connects blood donors with hospitals in need.

![Blood Bank Website](https://img.shields.io/badge/Blood%20Bank-Website-red)
![PHP](https://img.shields.io/badge/PHP-7.4+-blue)
![MySQL](https://img.shields.io/badge/MySQL-5.7+-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.0-lightgrey)

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [User Interface](#user-interface)
- [Email Notifications](#email-notifications)
- [Security Considerations](#security-considerations)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modern UI/UX**: Sleek, responsive design with smooth animations and transitions
- **Donor Registration**: Easy registration process for blood donors
- **Donor Search**: Hospitals can search for donors by blood group and city
- **Real-time Notifications**: Email notifications for blood requests
- **Hospital Verification**: Secure hospital login system
- **Responsive Design**: Works seamlessly on all devices (desktop, tablet, mobile)
- **Interactive Elements**: Engaging UI elements with hover effects and animations
- **Blood Type Visualization**: Visual representation of different blood types
- **Statistics Dashboard**: Display of key metrics and statistics

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5.3, Font Awesome 6.0
- **Backend**: PHP 7.4+
- **Database**: MySQL 5.7+
- **Email**: PHPMailer for sending notifications
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome

🖼️Project Images

![image](https://github.com/user-attachments/assets/ab25a395-0a24-4bd8-ada7-3f17ab95ad55)
![image](https://github.com/user-attachments/assets/6b2bb16b-e5bf-4982-9e2e-0b83e526e70a)
![image](https://github.com/user-attachments/assets/9ba29f97-a9e3-44d2-9656-0d68993524ab)


## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blood_bank_website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd blood_bank_website
   ```

3. Set up a local web server (XAMPP, WAMP, or MAMP)

4. Place the project files in your web server's document root (e.g., `htdocs` for XAMPP)

5. Import the database schema (see [Database Setup](#database-setup))

6. Configure the database connection in `config/db.php`

7. Configure email settings in `send_request.php` (see [Email Notifications](#email-notifications))

8. Access the website through your web browser:
   ```
   http://localhost/blood_bank_website
   ```

## 💾 Database Setup

1. Create a new MySQL database named `blood_bank`

2. Import the database schema from `database.sql`:
   ```sql
   CREATE DATABASE blood_bank;
   USE blood_bank;

   CREATE TABLE donors (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       age INT,
       phone VARCHAR(15),
       email VARCHAR(100),
       blood_group VARCHAR(10),
       city VARCHAR(100),
       address TEXT
   );
   ```

3. Create a table for hospitals (if not included in the schema):
   ```sql
   CREATE TABLE hospitals (
       id INT AUTO_INCREMENT PRIMARY KEY,
       hospital_name VARCHAR(100),
       username VARCHAR(50),
       password VARCHAR(255)
   );
   ```

## 💁 Project Structure

```
blood_bank_website/
├── config/
│   └── db.php                 # Database configuration
├── css/
│   └── style.css              # Custom CSS styles
├── js/
│   └── script.js              # JavaScript functionality
├── donor.php                  # Donor registration page
├── receiver.php               # Donor search page
├── search_donors.php          # Donor search functionality
├── send_request.php           # Email notification system
├── verify_hospital.php        # Hospital verification
├── index.php                  # Landing page
├── database.sql               # Database schema
└── composer.json              # Composer configuration
```

## 🔑 Key Components

### Donor Registration (`donor.php`)
- Form for collecting donor information
- Input validation
- Database insertion
- Display of registered donors

### Donor Search (`receiver.php`)
- Search form for hospitals
- Real-time search results
- Hospital login modal
- Request sending functionality

### Email Notifications (`send_request.php`)
- PHPMailer integration
- SMTP configuration
- Email template for blood requests

### Hospital Verification (`verify_hospital.php`)
- Secure hospital authentication
- Database verification
- Session management

## 🎨 User Interface

- **Landing Page**: Hero section, features, blood types visualization, statistics dashboard
- **Donor Registration**: Clean form layout with validation
- **Donor Search**: Intuitive search, modern table layout, hospital login modal

## 📧 Email Notifications

Configure SMTP settings in `send_request.php`:
```php
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-email@gmail.com';
$mail->Password = 'your-app-password';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
```

## 🔒 Security Considerations

- **SQL Injection Prevention**: Prepared statements
- **Input Validation**: Client-side and server-side validation
- **Password Security**: Secure storage
- **Email Security**: SMTP authentication
- **XSS Prevention**: Proper input escaping

## 🚀 Future Enhancements

- Donor authentication
- Blood donation history tracking
- Hospital dashboard
- Admin panel
- Mobile app integration
- SMS notifications
- Appointment scheduling

## 👥 Contributing

Contributions are welcome! Please submit a Pull Request.


---

## 📞 Support
Having trouble? We're here to help!  

- **Email**: tirumalharshita@gamil.com.com  

## 🤝 Contributing
Want to improve this project? Fork the repo, make your changes, and create a pull request! 🙌

```sh
git clone https://github.com/shrek-1010/AI-Powered-Medical-Assistant.git
```
---

## 📞 Contact
For any queries, feel free to reach out:  
📧 **Email:** tirumalharshita@gmail.com 
🔗 **GitHub:** [Your Profile](https://github.com/shrek-1010)  

---
Give a ⭐ if you like this project! 🔥

💛 *Made with love for saving lives through blood donation*

