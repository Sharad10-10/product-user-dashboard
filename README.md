Hello, Welcome to my documentation part of my user-product dashboard project. Documentation will include some guides for you to install the project in your system and required packages for this project and run locally on the server(of course this peoject is deployed as well you can check out the link to it.). This documentation will also help you read the project/codes very well and uderstand how the project has been structured and created. 

# Features      
User Authentication - Secure login with NextAuth     
User Management - Add, edit, delete, and view users,     
Product Management - Manage your product catalog,     
Role-Based Access - Admin and regular user roles,     
Search & Pagination - Easy navigation through data,     
Responsive Design - Works on desktop and mobile,     
Toast Notifications - User-friendly feedback messages

# Technologies Used: Next.js(React), Tailwind CSS, Next.js API Routes, MongoDB with Mongoose, NextAuth.js, bcrypt, React Toastify.    

# Installation Steps
1. Clone the repository :-  git clone https://github.com/your-username/product-user-dashboard.git
2. Go to project directory:- cd product-user-dashboard
3. Install dependencies:-  npm install
4. Set up environment variables:- Create a file called .env or .env.local in the root directory and add      
MONGODB_URI=your-mongodb-connection-string  (This will be your mongodb connection url to connect to database mongodb)         
NEXTAUTH_SECRET=your-random-secret-key  (You can create a random secret key.You can generate by running openssl rand -base64 32 in terminal)  
NEXTAUTH_URL=http://localhost:3000      
JWT_SECRET_KEY=your-jwt-secret    (You can create a random secret key.You can generate by running openssl rand -base64 32 in terminal)

4. Run the development server
npm run dev        
Open (http://localhost:3000) in your browser.

After you run the server, you can login using the provided username and password in login page. 

# Authentication 
How authentication works?          
Once user enters username and password, NEXTAUTH checks the credentials against database then password is compared using bcrypt, if everything is valid it creates a session token(JWT) and finally it redirects to dashboard.
