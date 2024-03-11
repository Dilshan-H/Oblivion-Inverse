# **Oblivion<sup>-1</sup>** ~ A Simple E-mail Tracker

🎯️ Oblivion-Inverse is a simple e-mail tracking solution which based on the usage of web beacons or tracking pixels.

![Oblivion-Inverse Open Source Email Tracker - Cover](https://github.com/Dilshan-H/Oblivion-Inverse/assets/77499497/b0a8d0d8-386b-41af-a61c-afa59ed10629)


<!-- Shield Badges -->

![GitHub license](https://img.shields.io/github/license/Dilshan-H/Oblivion-Inverse?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Dilshan-H/Oblivion-Inverse?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Dilshan-H/Oblivion-Inverse?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Dilshan-H/Oblivion-Inverse?style=for-the-badge)

![GitHub stars](https://img.shields.io/github/stars/Dilshan-H/Oblivion-Inverse?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Dilshan-H/Oblivion-Inverse?style=for-the-badge)

# 📢 New UI Updates + Features

🚀 **We have moved onto `Cyclic` platform! This branch (`main`) contains the code for the latest stable release of this project now.**

💻 **You can also use the initial versions from:**

- [v1 branch](https://github.com/Dilshan-H/Oblivion-Inverse/tree/v1): Ready to be deployed on Heroku Cloud Platform or on a self hosted environment with a SQL database.
- [v2 branch](https://github.com/Dilshan-H/Oblivion-Inverse/tree/v2): Ready to be deployed on Render Cloud Platform or on a self hosted environment with Firebase Realtime Database and Firebase Authentication.

🌟 We are working on new features and improvements on 'dev' branch. You can check the progress and contribute to the project by visiting the [dev branch](https://github.com/Dilshan-H/Oblivion-Inverse/tree/dev).

## Table of Contents

- [What can I achieve using this?](#what-can-i-achieve-using-this)
- [Setup & Usage](#setup--usage)
  - [Basic Requirements](#basic-requirements)
  - [Installation](#installation)
  - [Testing/Using on your Local Machine | Network](#testingusing-on-your-local-machine--network)
  - [Deploying on Cyclic](#deploying-to-cyclic)
- [Steps to create a tracking link for your email](#steps-to-create-a-tracking-link-for-your-email)
- [How to use a Geo Location API](#how-to-use-a-geo-location-api)
- [Special note about some email services](#special-note-about-g-mail--several-other-email-clients)
- [Why not using cookies for tracking?](#why-not-using-cookies-for-tracking)
- [Contributing](#contributing)
- [License & Copyrights](#license--copyrights)
- [Disclaimer](#disclaimer)

## What is a web beacon?

> A web beacon (web bug) is a technique used on web pages and emails to unobtrusively (usually invisibly) allow checking that a user has accessed some content. Web beacons are typically used by third parties to monitor the activity of users at a website for the purpose of web analytics or page tagging. They can also be used for email tracking. - _Wikipedia_

## What can I achieve using this?

Basically using this pixel tracking method you can obtain vast amount of information about the targets. But, when it comes to emails there are few restrictions. For an instance, JavaScripts are not generally allowed in email clients.

- ✅ IP address of the recipient's device (or the proxy)

- ✅️ Request Header - User-Agent (_Browser, Operating System, Device information_)  
  Ex: `Mozilla/5.0 (Linux; Android 11; Nokia G10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36`

- ✅️ Additionally, you can use a Geo Location API to obtain information such as _approximate location, country, ISP ( Internet Service Provider), whether the user is using a VPN/Tor and so on..._ ) [Read how to use a Geo Location API section](#how-to-use-a-geo-location-api)

## Screenshots

|                                                    **Login Screen**                                                   |                                                   **Add New Track Record**                                                  |
|:---------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
| ![Login Screen](https://github.com/Dilshan-H/Oblivion-Inverse/assets/77499497/96b18ddc-330a-4381-80d2-8c719723d3d4)   | ![Create Tracking Link](https://github.com/Dilshan-H/Oblivion-Inverse/assets/77499497/99b13295-d8f2-4f75-816c-8a4e369b354a) |
|                                                   **Link Dashboard**                                                  |                                                      **Tracking Info**                                                      |
| ![Link Dashboard](https://github.com/Dilshan-H/Oblivion-Inverse/assets/77499497/627f50b3-96c5-4c49-b53e-f2491ad27ee8) | ![Tracking Info](https://github.com/Dilshan-H/Oblivion-Inverse/assets/77499497/5bbf102d-2686-48ef-a1db-c05a78ef492c)        |

## Setup & Usage

### Basic Requirements

- Python3 and Pip
- Git

  - [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - [Setup Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

- Code Editor (such as [VS Code](https://code.visualstudio.com/))
- [Cyclic Account](https://www.cyclic.sh/) (if you plan to deploy on a remote server)

  \[Shoutout to Cyclic! 🎉️\]: **Cyclic is one of the best startup platforms to deploy your web apps. It's really easy to use and has a generous free tier + flexible pricing for your own cool projects. Consider to [check it out](https://app.cyclic.sh/api/login)!**

### Installation

1. First clone or download this repository as a Zip file to your local machine.

2. Navigate to the directory.

   ```bash
   cd Oblivion-Inverse
   ```

3. Create a virtual environment.

   ```python
   python3 -m venv venv
   ```

4. Activate virtual environment.

   _Linux:_

   ```bash
    source venv/bin/activate
   ```

   _Windows:_

   ```bash
   venv\Scripts\activate
   ```

5. Install dependencies.

   ```bash
   pip install -r requirements.txt
   ```

6. As we use Firebase Realtime Database and Firebase Authentication, you have to create a Firebase project and obtain the credentials. Visit [Firebase Console](https://console.firebase.google.com/) and create a new project.  
   Then go to the project settings and click on the `Service Accounts` tab. Then click on the `Generate New Private Key` button. This will download a JSON file containing the credentials. Rename the file to `credentials.json` and place it in the root directory of the project. (This file is already added to `.gitignore` so it won't be pushed to the repository)

7. Now you have to create a new Firebase Authentication user. To do that, you have to go to the `Authentication` tab in the Firebase Console. Then click on the `Set up sign-in method` button. Then click on the `Email/Password` tab and enable it. Then click on the `Users` tab and click on the `Add User` button. Enter the email and password of the user account you want to create. Then click on the `Add User` button.

8. Now you have to create a new Firebase Realtime Database. To do that, you have to go to the `Database` tab in the Firebase Console. Then click on the `Create Database` button. Then select the database location and click on the `Next` button and `Enable` the database.

9. Now go to project settings again and under the **General** tab you can find the `Web API Key`. And also,you are able to find the `Database URL` under the **SDK setup and configuration** tab there.  
   (Ex: `databaseURL: "https://your-app-default-rtdb.asia-southeast1.firebasedatabase.app"`)  
   Take a note of both of them since we will need them on the next step.

After that you can either test the application in your local machine or setup your selected platform, as you wish.

### Testing/Using on your Local Machine | Network

First you have to set the following environment variables. Create a new file named `.env` in the root directory of the project and add the following lines to it. Replace the values with your own values.

```
FIREBASE_API_KEY=Your-Firebase-API-Key
FIREBASE_DB_URL=Your-Firebase-Database-URL
SECRET_KEY=replace-this-text-with-a-suitable-key
FLASK_DEBUG=true
TIMEZONE=Your-Timezone (ex:Asia/Colombo)
```

**Note:**

- FLASK_DEBUG should be set to `true` only in development environments. It should be set to `false` in production environments.
- TIMEZONE should be set to your local timezone. You can find the list of timezones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

Then run the application using the following command:

```bash
flask run
```

If another program is already utilizing port 5000 (default port), `Address already in use` error will be displayed.
If that happens you can specify a different port like this:

```bash
flask run --port 5001
```

Navigate to `localhost:<port_number>` (default: http://localhost:5000) in your browser.
A login page will be displayed.  
Input your newly created account's email & password and that's it!

## Deploying to Cyclic

### Single Click Deployment

[![Deploy to Cyclic](https://deploy.cyclic.sh/button.svg)](https://deploy.cyclic.sh/)

Click the button above and follow the instructions to deploy the app to Cyclic.
(Follow the below section for environment variable setup)

### Manual Deployment

1. Push the code to your GitHub repository.
2. [Sign in to your Cyclic account](https://app.cyclic.sh/api/login) and click `Deploy New App` button.
3. Connect your GitHub account and select the repository.
4. Select app runtime as `Python` and the branch you want to deploy and click `Connect` button.
5. Go to the `Settings` tab and click on the `Variables` tab.
6. Select `Bulk` option and paste the following environment variables and their values and click `Save`.

```
FIREBASE_API_KEY=Your-Firebase-API-Key
FIREBASE_DB_URL=Your-Firebase-Database-URL
SECRET_KEY=replace-this-text-with-a-suitable-key
FLASK_DEBUG=true
TIMEZONE=Your-Timezone (ex:Asia/Colombo)
```

Also, you have to add the Firebase Admin SDK credentials to the environment variables as well. You can append the following environment variables with the values from the `credentials.json` file you downloaded from the Firebase Console.

```
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=Your-Firebase-Project-ID
FIREBASE_PRIVATE_KEY_ID=Your-Firebase-Private-Key-ID
FIREBASE_PRIVATE_KEY=Your-Firebase-Private-Key
FIREBASE_CLIENT_EMAIL=Your-Firebase-Client-Email
FIREBASE_CLIENT_ID=Your-Firebase-Client-ID
FIREBASE_AUTH_URI=Your-Firebase-Auth-URI
FIREBASE_TOKEN_URI=Your-Firebase-Token-URI
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=Your-Firebase-Auth-Provider-X509-Cert-URL
FIREBASE_CLIENT_X509_CERT_URL=Your-Firebase-Client-X509-Cert-URL
FIREBASE_UNIVERSE_DOMAIN=googleapis.com
```

7. Go to the `Overview` tab and click on your app link to view your app.

## Steps to create a tracking link for your email.

1. Visit the homepage of the app and sign into your account.

2. Add the subject of the specific email (which will make it easier to identified at later times) and the recipient's email address.

3. Click '**Generate**'

4. Then, you can drag & drop the tracking image to the end of your message body. (**DO NOT copy & paste the image** since it will insert your image as a base64 image to the email body) -- Otherwise, you can manipulate the content of the email body using Developer Tools in browser.

5. Everything's done! Now send your email and wait for the results to appear. (you need to refresh your browser to load new entries)

## How to use a Geo Location API

Using a Geo Location API, you can collect additional information about the recipient such as;

- Approximate location
- Country
- ISP ( Internet Service Provider)
- VPN/Tor Usage ...

**This feature will be available in the next version.** - Till then, you can use a service like `ipwhois` to obtain the location information using the recorded IP address.

### Special note about G-Mail + several other email clients

Since some clients use a special technique, "Image Proxies" to deliver images; this pixel based tracking method is not suitable to gather additional information about the recipients who use such services. Instead of recipient's IP address and User-Agent, you will receive Google Image Proxy’s UA (User-Agent) (+IP address) which looks like this:

`Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)`

But, on the bright side, you can still get the resource accessed date and time!

### Why not using cookies for tracking?

Yes, you can set cookies for additional/accurate data collection. But they represent as third party cookies within devices. Most of the web browsers/platforms block such cookies by default. [maybe not Chrome yet 😉] So, it's the death of 3<sup>rd</sup> party cookies.

## Contributing

Got an idea? Found a bug? Feel free to [open an issue](https://github.com/Dilshan-H/Oblivion-Inverse/issues/new) or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us. You can also check [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for more information.

## License & Copyrights

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

This program is free software: you can redistribute it and/or modify it under the terms of the **MIT License**

Refer to the [LICENSE](LICENSE) file for more details.

**Heroku, Render, Cyclic, GMail, ipwhois, VS Code, Chrome** are copyrights and/or trademarks of their respective owners.

## Disclaimer

Tracking other users actions across any platform may considered as violation of their privacy. So, kindly use this in a responsible manner. Authors of this repository are not responsible for any misuse of the provided information.
