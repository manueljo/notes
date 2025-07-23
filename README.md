# NOTES - A Next.js Firebase Note-Taking App

A full-featured note-taking application built with Next.js and Firebase, allowing users to securely manage their notes with CRUD operations and authentication.

## Features

- 🔐 **User Authentication**
  - Sign up with email/password
  - Sign in with email/password
  - Secure sign out
- 📝 **Note Management**
  - Create new notes
  - Edit existing notes
  - Delete notes
  - View all your notes in one place
- 🚀 **Modern Tech Stack**
  - Next.js for server-side rendering and routing
  - Firebase for backend services
    <!-- - Firebase Authentication for user management
    - Firestore database for note storage -->
- 📱 **Responsive Design**
  - Works on desktop, tablet, and mobile devices

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- Firebase account (for project configuration)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manueljo/notes.git
   cd notes
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Firebase configuration:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Email/Password authentication in the Authentication section
   - Create a Firestore database
   <!-- - Copy your Firebase config and create a `.env.local` file in the root directory:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ``` -->

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

To deploy this project to Vercel (recommended for Next.js apps):

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Add your Firebase environment variables in Vercel's project settings
4. Deploy!

Alternatively, you can deploy to other platforms following Next.js deployment guides.

## Contact

Your Name - [@ejo_manuel](https://x.com/ejo_manuel)

Project Link: [https://github.com/manueljo/notes](https://github.com/manueljo/notes)
