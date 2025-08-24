import os

# Backend folder structure
structure = {
    "food-delivery-backend": {
        "src": {
            "config": ["database.js", "cloudinary.js", "jwt.js", "redis.js", "index.js"],
            "models": ["User.js", "Restaurant.js", "MenuItem.js", "Order.js", "Category.js", "Review.js", "index.js"],
            "controllers": {
                "auth": ["authController.js", "passwordController.js", "index.js"],
                "user": ["userController.js", "profileController.js", "index.js"],
                "restaurant": ["restaurantController.js", "menuController.js", "index.js"],
                "order": ["orderController.js", "customerOrderController.js", "shopOrderController.js", "deliveryOrderController.js", "index.js"],
                "admin": ["adminController.js", "analyticsController.js", "index.js"],
                "common": ["uploadController.js", "searchController.js"]
            },
            "routes": {
                "v1": ["auth.js", "users.js", "restaurants.js", "orders.js", "admin.js", "upload.js", "index.js"],
                "index.js": None
            },
            "middleware": {
                "auth": ["authenticate.js", "authorize.js", "index.js"],
                "validation": ["authValidation.js", "userValidation.js", "orderValidation.js", "index.js"],
                "common": ["errorHandler.js", "logger.js", "cors.js", "rateLimiter.js", "upload.js", "index.js"],
                "index.js": None
            },
            "services": {
                "auth": ["authService.js", "tokenService.js", "index.js"],
                "user": ["userService.js", "index.js"],
                "restaurant": ["restaurantService.js", "menuService.js", "index.js"],
                "order": ["orderService.js", "paymentService.js", "index.js"],
                "notification": ["emailService.js", "smsService.js", "pushService.js", "index.js"],
                "external": ["paymentGateway.js", "mapsService.js", "index.js"],
                "common": ["uploadService.js", "cacheService.js", "index.js"]
            },
            "utils": {
                "constants": ["roles.js", "status.js", "messages.js", "index.js"],
                "helpers": ["response.js", "pagination.js", "encryption.js", "validation.js", "dateTime.js", "index.js"],
                "errors": ["AppError.js", "ValidationError.js", "index.js"],
                "database": {
                    "seeders": ["adminSeeder.js", "categorySeeder.js", "index.js"],
                    "migrations": ["index.js"]
                }
            },
            "validators": {
                "schemas": ["authSchema.js", "userSchema.js", "restaurantSchema.js", "orderSchema.js", "index.js"],
                "index.js": None
            },
            "jobs": ["emailJobs.js", "orderJobs.js", "index.js"],
            "socket": ["socketHandler.js", "orderEvents.js", "index.js"],
            "app.js": None
        },
        "tests": {
            "unit": {"controllers": [], "services": [], "models": [], "utils": []},
            "integration": ["auth.test.js", "orders.test.js", "restaurants.test.js"],
            "fixtures": ["users.json", "restaurants.json"],
            "helpers": ["testDb.js", "testHelpers.js"]
        },
        "uploads": {"images": [], "documents": [], "temp": []},
        "logs": ["error.log", "combined.log", "access.log"],
        "docs": {"api.md": None, "postman": [], "swagger": []},
        "scripts": ["seed.js", "migrate.js", "backup.js"],
        ".env.example": None,
        ".env": None,
        ".gitignore": None,
        ".eslintrc.json": None,
        ".prettierrc": None,
        "package.json": None,
        "package-lock.json": None,
        "server.js": None,
        "nodemon.json": None,
        "README.md": None
    }
}

# Recursive function to create files/folders
def create_structure(base, struct):
    if isinstance(struct, dict):
        for name, content in struct.items():
            path = os.path.join(base, name)
            if isinstance(content, dict):
                os.makedirs(path, exist_ok=True)
                create_structure(path, content)
            elif isinstance(content, list):
                os.makedirs(path, exist_ok=True)
                for f in content:
                    open(os.path.join(path, f), 'w').close()
            elif content is None:
                open(path, 'w').close()
    elif isinstance(struct, list):
        os.makedirs(base, exist_ok=True)
        for f in struct:
            open(os.path.join(base, f), 'w').close()

# Run the script
create_structure(".", structure)
