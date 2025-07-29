# MoodTracker 

## Table of Contents:

- [Project description](#description)

- [Why I built it](#why-i-built-it)

- [How to run the project locally](#how-to-run)

- [Tech stack and project features](#stack--features)

- [What I learned through building the project](#what-i-learned)

- [Next steps for further development](#next-steps)

- [UI preview](#ui-preview)

## Description:

MoodTracker is a personal wellness application built so users can keep track of their emotional wellbeing and sleep patterns. 
Users are able to securely sign up and start logging their daily moods which includes input about their overall mood for the day, what feelings
they are currently experiencing, an optional recap of their day, and how many hours of sleep they got. MoodTracker then uses the user's data to 
show them their average mood and sleep over their last 5 entries as well as showing the user their sleep and mood trends. This way the user has more 
personal insight to how they've been feeling and how they've been sleeping in hopes they find trends and patterns that can guide them to taking action
to care more for their emotional health!

## Why I Built It:

I feel emotional wellbeing is one of the most ignored categories of personal care and development. We trudge through every day telling ourselves "I'm fine. It's fine." Until
we ultimately reach a breaking point. But what if we didn't have to reach that breaking point before we noticed trends and patterns in our moods and possibly even our sleep?
When I saw this project on the site FrontendMentor.com I knew I had to try and build it as a fully functional full-stack application! Allowing users to log their daily moods, sleep
as well as view their trends and patterns could be just what some people need in order to catch up quick and avoid that bitter-sweet mental breakdown. 

For example: a user logs 5 days of moods, sleep and daily reflections. Then, they recieve their averages and can clearly see that perhaps the reason they feel chronically
sad is because they have a lot of work stress that has been building up and that has been leading them to only be getting approximately 3-4 hours of sleep a night. Which 
may explain why they feel tired, sluggish, sad, anxious, etc. The user can see this trend and decide to try to do something within their scope of control about it such as setting
healthier work/life boundaries or deciding that after a certain time of day, they will stop thinking about work and try to relax. Now the user has some insight into why they've been
feeling off and can try to better manage their emotional wellbeing which can impact other areas of their mental and physical health as well!

## How To Run:


## Stack & Features:
**Tech Stack:**

Backend:
- Java
- Spring Boot
- MySQL

Frontend:
- React.js
- Tailwind CSS

**Features**
- Secure sign up and login process implemented with Spring Security, JWT, and cookies.
- MySQL database for scalable and organized data storage.
- Personalization featured in the UI using the user's name in the greeting header to make it feel more personal.
- Clean, user-friendly UI featuring a calming color palette and clear components for best user experience.
- Multi-step, modal form for users to input their data in a clear step-by-step format.
- Mood and sleep averages so the user can view how they've been feeling and sleeping over the course of 5 logs.
- Mood and sleep trends graph to show the user the relationship between their mood and sleep in hopes to recognize patterns.
- Scalable and modular backend: separating entities, DTOs, services and controller endpoints to allow for future building.

## What I Learned:

-    Improved my understanding of common Spring Boot annotations and how they work together with Java to create scalable APIs.
-    Integrated production-ready authentication using **Spring Security** and **JWT tokens** to ensure secure access to protected endpoints.
-    Got hands-on experience building a frontend UI using React.js and Tailwind CSS.
-    Implemented some small animations to make the user experience more seamless and enjoyable.
-    Experience connecting a frontend UI to a backend API on different ports to build a functional full-stack service.

## Next Steps: 

**Ideas For Future Features/Additions:**

- Monthly recaps to show the user their mood, sleep and feelings trends from the previous month to give them a broader insight on their wellbeing.
- A feature that holds the user's daily refelections in a similar style as a notes app so they can go back and see what they logged almost like a digital diary.
- Responsiveness to allow cross-platform use.

## UI preview

**NOTE: at the time of viewing this project, there still may be features in progress!**

**Screenshot of the Login page:**
![Screenshot](https://github.com/user-attachments/assets/788b037e-aeb5-4bd8-9209-ebe13f920b1c)

**Screenshot of the Login page with sign in errors:**
![Screenshot](https://github.com/user-attachments/assets/36a7f376-2a37-4d06-aa89-74529dc88ee6)

**Screenshot of the Sign-up page:**
![Screenshot](https://github.com/user-attachments/assets/96dc1ce1-902a-4d48-b45f-5bddc4d64a3e)

**Screenshot of the Sign-up page with errors:**
![Screenshot](https://github.com/user-attachments/assets/81d25ca7-ef66-4a3e-b19c-1366b157fca9)

**Screenshot of the User Dashboard:**
![Screenshot](https://github.com/user-attachments/assets/d8b91e5f-e008-4536-a936-13329ba67eef)

**Screenshot of the Mood Input modal:**
![Screenshot](https://github.com/user-attachments/assets/ccd8eac6-068f-4a56-a82a-448f3c598223)

**Screenshot of the Feelings Input modal:**
![Screenshot](https://github.com/user-attachments/assets/f3120994-01ee-44c1-ab7a-98301e8a34d6)

**Screenshot of the Reflection Input modal:**
![Screenshot](https://github.com/user-attachments/assets/f00054c0-c6fe-400e-b453-72d02fd5dd42)

**Screenshot of the Sleep Input modal:**
![Screenshot](https://github.com/user-attachments/assets/219f50a5-5c2e-4b23-98fa-ad45e6f68219)

**Screenshot of the Successful Log Message modal:**
![Screenshot](https://github.com/user-attachments/assets/8e555b45-4ff8-49ea-8bd0-a24817508b20)

**UPDATE: screenshot of the User Dashboard with graph:**
![Screenshot](https://github.com/user-attachments/assets/7b025d49-4388-4061-9211-9a8a678a67b4)
