import os

# Define the structure of the project
project_name = 'Freud IA'  # Change this to your project name
apps = [
    'general',
    'usuarios',
    'psicologos',
    'lugares',
    'planes',
    'agentesIA',
    'manejopaciente',
    'seguros'
]

app_structure = {
    'general': {
        'static': ['css', 'js', 'images'],
        'templates': ['partials'],
        'migrations': ['__init__.py'],  # migrations folder usually contains migration files
        'views': [],
        'serializers': [],
        'urls': [],
        'models': [],
        'tests': [],
        'scripts': [],
        'notebooks': []
    },
    # Repeat the structure for other apps
    'usuarios': {
        'static': ['css', 'js', 'images'],
        'templates': ['partials'],
        'migrations': ['__init__.py'],
        'views': [],
        'serializers': [],
        'urls': [],
        'models': [],
        'tests': [],
        'scripts': [],
        'notebooks': []
    },
    # Add the same structure for other apps
    # ...
}

def create_file(path):
    """Create a file if it does not exist."""
    if not os.path.exists(path):
        with open(path, 'w') as f:
            pass

def create_app_files(app_name):
    """Create the directories and files for a Django app based on predefined structure."""
    app_path = os.path.join(project_name, app_name)

    # Create subdirectories
    structure = app_structure.get(app_name, {})
    for directory, subdirs in structure.items():
        dir_path = os.path.join(app_path, directory)
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
        for subdir in subdirs:
            subdir_path = os.path.join(dir_path, subdir)
            if not os.path.exists(subdir_path):
                os.makedirs(subdir_path)
        # Create __init__.py to make directories packages if it's the migrations folder
        if directory == 'migrations':
            create_file(os.path.join(dir_path, '__init__.py'))

    # Create base files
    base_files = ['admin.py', 'apps.py', 'models.py', 'tests.py', 'urls.py', 'views.py']
    for file_name in base_files:
        file_path = os.path.join(app_path, file_name)
        create_file(file_path)

def create_project_structure():
    """Create the entire project structure, including subdirectories and files."""
    # Create the main project directory and subdirectories
    if not os.path.exists(project_name):
        os.makedirs(project_name)

    # Create project-level files
    project_files = ['__init__.py', 'asgi.py', 'settings.py', 'urls.py', 'wsgi.py']
    for file_name in project_files:
        file_path = os.path.join(project_name, file_name)
        create_file(file_path)

    # Create settings subdirectory and files
    settings_dir = os.path.join(project_name, 'settings')
    if not os.path.exists(settings_dir):
        os.makedirs(settings_dir)
    settings_files = ['__init__.py', 'base.py', 'local.py', 'production.py']
    for file_name in settings_files:
        file_path = os.path.join(settings_dir, file_name)
        create_file(file_path)

    # Create manage.py if it doesn't exist
    if not os.path.exists('manage.py'):
        with open('manage.py', 'w') as f:
            f.write("""#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "my_project.settings.base")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
""")

    # Create each app structure
    for app in apps:
        create_app_files(app)

if __name__ == '__main__':
    create_project_structure()
    print("Django project structure with detailed subdirectories and files created or updated successfully.")
