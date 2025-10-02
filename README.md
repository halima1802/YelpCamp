# YelpCamp

YelpCamp is a full-stack, cross-platform web application inspired by Yelp, designed for **campsites around the world**. Users can browse campsites, post new ones, upload images, leave reviews and ratings, and manage their contributions. It’s a social platform for camping enthusiasts to discover, share, and interact.

---

## Features

- 🌍 **Browse & Discover**: Explore campsites submitted by the community with details, images, and reviews.
- 🏕️ **Add New Campsites**: Create new campsite entries with images and descriptions.
- ⭐ **Reviews & Ratings**: Leave feedback and rate campsites to help other users.
- 📸 **Image Upload / Cloud Storage Integration**: Upload photos for campsites using Cloudinary.
- 🔒 **Authentication & Authorization**: Secure login/signup system; only owners can edit/delete their content.
- 🧪 **Seed Data**: Predefined campsites and users for quick setup and testing.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend / Templating**: EJS, HTML, CSS, JavaScript
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Passport.js / JWT
- **Image Storage**: Cloudinary
- **Validation**: Joi / custom schemas
- **Middleware**: Auth, error-handling, and utility middleware

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/halima1802/YelpCamp.git
cd YelpCamp
````

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
CLOUDINARY_CLOUD_NAME="YOUR_CLOUD_NAME"
CLOUDINARY_KEY="YOUR_CLOUDINARY_API_KEY"
CLOUDINARY_SECRET="YOUR_CLOUDINARY_API_SECRET"
MAPBOX_TOKEN="YOUR_MAPBOX_TOKEN"
```

### 4. Seed the Database (Optional)

Populate sample campsites and users:

```bash
node seeds/index.js
```

### 5. Run the Application

```bash
npm start
```

Access the app at `http://localhost:3000`.

---

## Usage

1. Sign up or log in.
2. Browse existing campsites with details and reviews.
3. Add a new campsite with description and images.
4. Leave reviews and ratings on campsites.
5. Edit or delete your own campsites and reviews.
6. Use seed scripts to reset or populate sample data.


