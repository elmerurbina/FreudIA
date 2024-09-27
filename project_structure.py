import os

# Define the main project and app names
project_name = "Freud_IA"
django_apps = ["ai_agents", "general", "users", "psychologists", "places", "patients_management", "goals"]
react_apps = ["ai_agents", "general", "users", "psychologists", "places", "patients_management", "goals"]

# Create the main project directory
os.makedirs(project_name, exist_ok=True)

# Create the Django backend directory structure
django_dir = os.path.join(project_name, "backend")
os.makedirs(django_dir, exist_ok=True)

# Create subdirectories for each Django app
for app in django_apps:
    app_path = os.path.join(django_dir, app)
    os.makedirs(os.path.join(app_path, "migrations"), exist_ok=True)
    with open(os.path.join(app_path, "__init__.py"), "w") as f:
        pass
    with open(os.path.join(app_path, "admin.py"), "w") as f:
        pass
    with open(os.path.join(app_path, "apps.py"), "w") as f:
        f.write(f"from django.apps import AppConfig\n\nclass {app.capitalize()}Config(AppConfig):\n    name = '{app}'\n")
    with open(os.path.join(app_path, "models.py"), "w") as f:
        pass
    with open(os.path.join(app_path, "tests.py"), "w") as f:
        pass
    with open(os.path.join(app_path, "views.py"), "w") as f:
        pass

# Create the manage.py file
with open(os.path.join(django_dir, "manage.py"), "w") as f:
    f.write("#!/usr/bin/env python\n")
    f.write("import os\n")
    f.write("import sys\n")
    f.write("\n")
    f.write("if __name__ == '__main__':\n")
    f.write(f"    os.environ.setdefault('DJANGO_SETTINGS_MODULE', '{project_name}.settings')\n")
    f.write("    try:\n")
    f.write("        from django.core.management import execute_from_command_line\n")
    f.write("    except ImportError as exc:\n")
    f.write("        raise ImportError(\n")
    f.write("            \"Couldn't import Django. Are you sure it's installed and \"\n")
    f.write("            \"available on your PYTHONPATH environment variable? Did you \"\n")
    f.write("            \"forget to activate a virtual environment?\"\n")
    f.write("        ) from exc\n")
    f.write("    execute_from_command_line(sys.argv)\n")

# Create the project directory inside backend
project_dir = os.path.join(django_dir, project_name)
os.makedirs(project_dir, exist_ok=True)
with open(os.path.join(project_dir, "__init__.py"), "w") as f:
    pass
with open(os.path.join(project_dir, "asgi.py"), "w") as f:
    f.write("import os\n")
    f.write("from django.core.asgi import get_asgi_application\n\n")
    f.write("os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings')\n")
    f.write("application = get_asgi_application()\n")
with open(os.path.join(project_dir, "settings.py"), "w") as f:
    f.write("from pathlib import Path\n\n")
    f.write("BASE_DIR = Path(__file__).resolve().parent.parent\n")
    f.write("SECRET_KEY = 'your-secret-key'\n")
    f.write("DEBUG = True\n")
    f.write("ALLOWED_HOSTS = []\n\n")
    f.write("INSTALLED_APPS = [\n")
    f.write("    'django.contrib.admin',\n")
    f.write("    'django.contrib.auth',\n")
    f.write("    'django.contrib.contenttypes',\n")
    f.write("    'django.contrib.sessions',\n")
    f.write("    'django.contrib.messages',\n")
    f.write("    'django.contrib.staticfiles',\n")
    f.write("    # Your apps here\n")
    for app in django_apps:
        f.write(f"    '{app}',\n")
    f.write("]\n\n")
    f.write("MIDDLEWARE = [\n")
    f.write("    'django.middleware.security.SecurityMiddleware',\n")
    f.write("    'django.contrib.sessions.middleware.SessionMiddleware',\n")
    f.write("    'django.middleware.common.CommonMiddleware',\n")
    f.write("    'django.middleware.csrf.CsrfViewMiddleware',\n")
    f.write("    'django.contrib.auth.middleware.AuthenticationMiddleware',\n")
    f.write("    'django.contrib.messages.middleware.MessageMiddleware',\n")
    f.write("    'django.middleware.clickjacking.XFrameOptionsMiddleware',\n")
    f.write("]\n\n")
    f.write("ROOT_URLCONF = '{}.urls'.format('Freud_IA')\n".format(project_name))
    f.write("TEMPLATES = [\n")
    f.write("    {\n")
    f.write("        'BACKEND': 'django.template.backends.django.DjangoTemplates',\n")
    f.write("        'DIRS': [],\n")
    f.write("        'APP_DIRS': True,\n")
    f.write("        'OPTIONS': {\n")
    f.write("            'context_processors': [\n")
    f.write("                'django.template.context_processors.debug',\n")
    f.write("                'django.template.context_processors.request',\n")
    f.write("                'django.contrib.auth.context_processors.auth',\n")
    f.write("                'django.contrib.messages.context_processors.messages',\n")
    f.write("            ],\n")
    f.write("        },\n")
    f.write("    },\n")
    f.write("]\n")
    f.write("WSGI_APPLICATION = '{}.wsgi.application'.format('Freud_IA')\n".format(project_name))
    f.write("DATABASES = {\n")
    f.write("    'default': {\n")
    f.write("        'ENGINE': 'django.db.backends.sqlite3',\n")
    f.write("        'NAME': BASE_DIR / 'db.sqlite3',\n")
    f.write("    }\n")
    f.write("}\n")
    f.write("LANGUAGE_CODE = 'en-us'\n")
    f.write("TIME_ZONE = 'UTC'\n")
    f.write("USE_I18N = True\n")
    f.write("USE_L10N = True\n")
    f.write("USE_TZ = True\n")
    f.write("STATIC_URL = '/static/'\n")

with open(os.path.join(project_dir, "urls.py"), "w") as f:
    f.write("from django.contrib import admin\n")
    f.write("from django.urls import path\n\n")
    f.write("urlpatterns = [\n")
    f.write("    path('admin/', admin.site.urls),\n")
    f.write("]\n")

with open(os.path.join(project_dir, "wsgi.py"), "w") as f:
    f.write("import os\n")
    f.write("from django.core.wsgi import get_wsgi_application\n\n")
    f.write("os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings')\n")
    f.write("application = get_wsgi_application()\n")

# Create directories for the React apps
frontend_dir = os.path.join(project_name, "frontend")
os.makedirs(frontend_dir, exist_ok=True)

for app in react_apps:
    app_path = os.path.join(frontend_dir, app)
    os.makedirs(app_path, exist_ok=True)
    with open(os.path.join(app_path, "package.json"), "w") as f:
        f.write('{\n  "name": "' + app + '",\n  "version": "1.0.0"\n}')
    os.makedirs(os.path.join(app_path, "src"), exist_ok=True)
    with open(os.path.join(app_path, "src", "index.js"), "w") as f:
        f.write('import React from "react";\nimport ReactDOM from "react-dom";\n\nReactDOM.render(\n  <h1>Hello, ' + app + '!</h1>,\n  document.getElementById("root")\n);\n')
    os.makedirs(os.path.join(app_path, "public"), exist_ok=True)
    with open(os.path.join(app_path, "public", "index.html"), "w") as f:
        f.write('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>' + app + '</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>\n')

print("Project structure created successfully!")
