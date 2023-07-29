# **Oblivion<sup>-1</sup>** ~ A Simple E-mail Tracker

🎯️ Oblivion-Inverse is a simple e-mail tracking solution which based on the usage of web beacons or tracking pixels.

<!-- Shield Badges -->

![GitHub license](https://img.shields.io/github/license/Dilshan-H/Oblivion-Inverse?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Dilshan-H/Oblivion-Inverse?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Dilshan-H/Oblivion-Inverse?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Dilshan-H/Oblivion-Inverse?style=for-the-badge)

![GitHub stars](https://img.shields.io/github/stars/Dilshan-H/Oblivion-Inverse?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Dilshan-H/Oblivion-Inverse?style=for-the-badge)

# 📢 New Upgrade is Now Available!

🚀 **We have moved onto `Render` platform + Databases, Authentication is now handled using `Firebase`! This branch (`main`) contains the code for the latest stable release of this project now.**

💻 **You can also use the initial version from [v1 branch](https://github.com/Dilshan-H/Oblivion-Inverse/tree/v1) which is ready to be deployed on Heroku Cloud Platform or on a self hosted environment.**

🔴 **Several sections in this README needs to be updated with the new changes.**

🌟 Here we have a list of features that need to be implemented to enhance the overall experience. If you are willing to contribute, you can [check available open issues](https://github.com/Dilshan-H/Oblivion-Inverse/issues) or [open new issues](https://github.com/Dilshan-H/Oblivion-Inverse/issues/new).

| Feature \| Task                                        | Status |
| ------------------------------------------------------ | :----: |
| 🔐 Authentication handling - **Firebase Auth**         |   ✅   |
| 📋 Better database handling - **Firebase Realtime DB** |   ✅   |
| 🏃 Migration to **Render**                             |   ✅   |
| 🕶️ Theme Management (**UI**)                           |   🚧   |
| 🔎 Tracking link _Search_ functionality                |   🚧   |
| 💻 **PWA** functionality                               |   🚧   |
| 📖 Update Docs & Readme                                |   🚧   |

<hr />

![banner](https://user-images.githubusercontent.com/77499497/163841581-eb792235-3f8d-4998-a430-c4b2ffeda036.png)

- [What can I achieve using this?](#what-can-i-achieve-using-this)
- [Setup & Usage](#setup--usage)
  - [Basic Requirements](#basic-requirements)
  - [Installation](#installation)
  - [Testing/Using on your Local Machine | Network](#testingusing-on-your-local-machine--network)
  - [Deploying on Heroku Cloud Platform](#deploying-on-heroku-cloud-platform)
- [Steps to create a tracking link for your email](#steps-to-create-a-tracking-link-for-your-email)
- [How to use a Geo Location API](#how-to-use-a-geo-location-api)
- [Special note about G-Mail](#special-note-about-g-mail)
- [Why not using cookies for tracking?](#why-not-using-cookies-for-tracking)
- [Contributing](#contributing)
- [License & Copyrights](#license--copyrights)
- [Disclaimer](#disclaimer)

## What is a web beacon?

> A web beacon (web bug) is a technique used on web pages and emails to unobtrusively (usually invisibly) allow checking that a user has accessed some content. Web beacons are typically used by third parties to monitor the activity of users at a website for the purpose of web analytics or page tagging. They can also be used for email tracking. - Wikipedia

## What can I achieve using this?

Basically using this pixel tracking method you can obtain vast amount of information about the targets. But, when it comes to emails there are few restrictions. For an instance, JavaScripts are not generally allowed in email clients.

- ✅ IP address of the recipient's device (or the proxy)

- ✅️ Request Header - User-Agent (_Browser, Operating System, Device information_)  
  Ex: `Mozilla/5.0 (Linux; Android 11; Nokia G10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36`

- ✅️ Additionally, you can use a Geo Location API to obtain information such as _approximate location, country, ISP ( Internet Service Provider), whether the user is using a VPN/Tor and so on..._ ) [Read how to use a Geo Location API section](#how-to-use-a-geo-location-api)

## Screenshots

|                                                 Desktop View                                                  |                                                  Mobile View                                                  |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| ![001](https://user-images.githubusercontent.com/77499497/164163278-a17b7cb8-996d-4da2-9840-027651b380a0.png) | ![002](https://user-images.githubusercontent.com/77499497/164163325-10aeea2f-f343-4708-a413-8bf36994bf6b.png) |

|                                                   Dashboard                                                   |                                                 Tracking Data                                                 |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| ![005](https://user-images.githubusercontent.com/77499497/164166439-acf8f86a-9dbd-48f1-af14-a5d3e7828fde.png) | ![006](https://user-images.githubusercontent.com/77499497/164166448-fa7a0ff2-54bd-48a6-929d-7029b21646d4.png) |

## Setup & Usage

### Basic Requirements

- Python3 and Pip
- Git

  - [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - [Setup Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

- Heroku Account & Heroku CLI (or suitable platform)  
  If you're willing to use **Heroku**, [here](https://devcenter.heroku.com/articles/getting-started-with-python) they have explained all the steps for getting started with python apps.

- Code Editor (such as [VS Code](https://code.visualstudio.com/))

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

6. Change the time zone used in `routes.py`:
   (Default value is `Asia/Colombo`)

   ```python
   # Line 38
   TIMEZONE = "Your-Timezone"
   ```

   To choose the correct time zone, you can query all the supported time zones like this; open a separate python shell and run the following code.

   ```python
   import pytz
   pytz.all_timezones
   ```

7. As we use Firebase Realtime Database and Firebase Authentication, you have to create a Firebase project and obtain the credentials. Visit [Firebase Console](https://console.firebase.google.com/) and create a new project.  
   Then go to the project settings and click on the `Service Accounts` tab. Then click on the `Generate New Private Key` button. This will download a JSON file containing the credentials. Rename the file to `credentials.json` and place it in the root directory of the project.

8. Now you have to create a new Firebase Authentication user. To do that, you have to go to the `Authentication` tab in the Firebase Console. Then click on the `Set up sign-in method` button. Then click on the `Email/Password` tab and enable it. Then click on the `Users` tab and click on the `Add User` button. Enter the email and password of the user account you want to create. Then click on the `Add User` button.

9. Now you have to create a new Firebase Realtime Database. To do that, you have to go to the `Database` tab in the Firebase Console. Then click on the `Create Database` button. Then select the database location and click on the `Next` button. Then change the rules as follows and click on the `Enable` button:

   ```json
   {
     "rules": {
       "MailTrackData": {
         "Users": {
           "$uid": {
             ".read": "auth !== null && auth.uid === $uid",
             ".write": "auth !== null && auth.uid === $uid"
           }
         },

         "LinkHits": {
           ".read": false,
           ".write": true
         }
       }
     }
   }
   ```

10. Now go to project settings again and under the **General** tab you can find the `Web API Key`. And also,you are able to find the `Database URL` under the **SDK setup and configuration** tab there.  
    (Ex: `databaseURL: "https://your-app-default-rtdb.asia-southeast1.firebasedatabase.app"`)  
    Take a note of both of them since we will need them on the next step.

After that you can either test the application in your local machine or setup your selected platform, as you wish.

### Testing/Using on your Local Machine | Network

First you have to set the following environment variables. Create a new file named `.env` in the root directory of the project and add the following lines to it. Replace the values with your own values.

```
FIREBASE_API_KEY=Your-Firebase-API-Key
FIREBASE_DB_URL=Your-Firebase-Database-URL
SECRET_KEY=replace-this-text-with-a-suitable-key
FLASK_ENV=development
```

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

## Deploying to Render

> Instructions will be added soon.  
> Like to complete this section? Open an issue...

## Steps to create a tracking link for your email.

1. Visit the homepage of the app and sign into your account.

| Login Screen
| :-:
| ![Screenshot from 2022-04-20 12-28-33](https://user-images.githubusercontent.com/77499497/164169416-19ec9b36-9da6-47ad-b73a-d2cfdd7eeee8.png)

2. First add a suitable title for your message. You can add the subject of the specific email which will make it easier to identified at later times.

| Create Entry
| :-:
![003](https://user-images.githubusercontent.com/77499497/164166272-be810b73-c709-435a-af74-608512f9c381.png)

3. Then click '**Generate**'

4. Then, you can drag & drop the tracking image to the end of your message body. (**DO NOT copy & paste the image** since it will insert your image as a base64 image to the email body)
   Otherwise, you can manipulate the content of the email body using Developer Tools in browser.
   ![004](https://user-images.githubusercontent.com/77499497/164166346-03823760-968d-45cd-aab0-54f0c85004ab.png)

5. Everything's done! Now send your email and wait for the results to appear. (you need to refresh your browser to load new entries)

## How to use a Geo Location API

Using a Geo Location API, you can collect additional information about the recipient such as;

- Approximate location
- Country
- ISP ( Internet Service Provider)
- VPN/Tor Usage ...

In `routes.py` line 70 to 75 contains a simple API usage that can be altered according to your opinions. Please note that **ipwhois** service has certain limitations (like amount of requests) which may eventually cause errors. So, you can choose a better API which fit into your needs.

### Special note about G-Mail

Since Google uses a special technique, "Image Proxies" to deliver images; this pixel based tracking method is not suitable to gather additional information about the recipients who use G-Mail. Instead of recipient's IP address and User-Agent, you will receive Google Image Proxy’s UA (User-Agent) and IP address which looks like this:

`Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)`

But, on the bright side, you can still get the resource accessed date and time!

### Why not using cookies for tracking?

Yes, you can set cookies for additional/accurate data collection. But they represent as third party cookies within devices. Most of the web browsers/platforms block such cookies by default. [maybe not Chrome yet 😉] So, it's the death of 3<sup>rd</sup> party cookies.  
**Update:** Since some browsers/platforms allow 3<sup>rd</sup> party cookies, we are going to implement a cookie based tracking method in the future.

## Contributing

Got an idea? Found a bug? Feel free to [open an issue](https://github.com/Dilshan-H/Oblivion-Inverse/issues/new) or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us. You can also check [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for more information.

## License & Copyrights

**The MIT License**

This program is free software: you can redistribute it and/or modify it under the terms of the **MIT License**

Refer to the [LICENSE](LICENSE) file for more details.

**Heroku, GMail, ipwhois, VS Code, Chrome** are copyrights and/or trademarks of their respective owners.

## Disclaimer

Tracking other users actions across any platform may considered as violation of their privacy. So, kindly use this in a responsible manner.
