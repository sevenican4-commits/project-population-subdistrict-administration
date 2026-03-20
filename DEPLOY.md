# Deployment Instructions

## GitHub Pages Frontend Deployment

1. **Build Your Application**: First, ensure your application is ready for deployment by building it with the necessary commands (e.g., `npm run build`).

2. **Navigate to the Build Directory**: Go to the directory where your build files are located, usually `dist` or `build`.

3. **Push to GitHub Pages**:
   - If you're using the `gh-pages` branch:
     ```bash
     git checkout gh-pages
     git add -A
     git commit -m "Deploying to GitHub Pages"
     git push origin gh-pages
     ```
   - If you're deploying through the `main` branch, make sure your `CNAME` file is set if you have a custom domain.

4. **Enable GitHub Pages in Repository Settings**:
   - Go to your repository settings.
   - Under the "Pages" section, select the source to be `gh-pages` branch or `main` branch as applicable.

5. **Access Your Deployed Site**: Navigate to `https://<username>.github.io/<repository-name>/` to see your deployed site.

## Supabase Backend Setup

1. **Create a Supabase Account**: Go to [Supabase](https://supabase.io/) and sign up for an account.

2. **Create a New Project**:
   - After logging in, click on "New Project".
   - Fill in your project details (name, organization, password) and choose the database region.

3. **Set Up Database Schema**:
   - Navigate to the "Database" section and create the necessary tables according to your application requirements.
   - Use SQL queries or the graphical interface to define your schema.

4. **Configure Authentication**:
   - Go to the "Auth" section and set up authentication settings based on your application needs (email, social logins).

5. **Get API Keys**:
   - Go to the "Settings" > "API" section to retrieve your API URL and Project API keys.

6. **Connect Your Frontend and Backend**:
   - In your frontend project, implement the Supabase client using the API keys:
     ```javascript
     import { createClient } from '@supabase/supabase-js';

     const supabaseUrl = 'https://your-project-ref.supabase.co';
     const supabaseKey = 'your-anon-key';
     const supabase = createClient(supabaseUrl, supabaseKey);
     ```

7. **Test Your Application**: Finally, test the integration to ensure everything is working correctly. Run your frontend app and check if it communicates with the Supabase backend successfully.

---

*Last updated: 2026-03-20 16:15:42 UTC*