# Print Manzil

## Greetings,

I am Afreed Bin Haque. I have developed **Print Manzil** for a code interview. The project is divided into two sections:

1. **Frontend** (Next.js)
2. **Backend** (Laravel)

---

## How to Run the Project

### Running the Frontend (Next.js)

After cloning the project, navigate to the frontend folder using the following command:

```sh
cd frontend-next-js
```

Then install dependencies and start the development server:

```sh
npm install
npm run dev
```

### Running the Backend (Laravel)

After cloning the project, navigate to the backend folder using the following command:

```sh
cd backend-laravel
```

Then follow these steps:

```sh
composer install
```

If the `.env` file does not exist, copy `.env.example` to `.env`:

```sh
cp .env.example .env
```

Then, clear and cache configurations if needed:

```sh
php artisan cache:clear
php artisan config:cache
php artisan route:clear
```

Finally, start the Laravel development server:

```sh
php artisan serve
```

---

## Database Setup

Copy the database data from `print_manjil.sql` and set up a database with the name **print_manjil**, or run the following command to migrate the database:

```sh
php artisan migrate
```

Now, the project should be up and running!

---
