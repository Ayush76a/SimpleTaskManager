# Simple Task Manager App
Task Manager is a React-based web application that allows users to manage tasks efficiently. Users can add, edit, and delete tasks, mark them as complete or incomplete, and view tasks by category: Upcoming, Overdue, and Completed. Additionally, a search feature allows users to filter tasks by title date and priority. Toast notifications provide real-time feedback on task actions.

## Features
  1. Add, Edit, and Delete Tasks: Add new tasks with a title, description, due date, and priority.
  2. Mark Tasks as Complete or Incomplete: Toggle tasks between complete and incomplete.
  3. Search Functionality: Filter tasks by title.
  4. Toast Notifications: Real-time feedback for actions like adding, editing, and deleting tasks.
  5. Categorized Task Sections: Tasks are categorized as Upcoming, Overdue, and Completed based on due dates.

# Getting Started
## Prerequisites
  Node.js (version 14 or higher recommended)
  npm (version 6 or higher)

# Installation
 1. Clone the repository:
  Copy code
  git clone https://github.com/yourusername/task-manager.git
  cd task-manager

 2. Install dependencies:
  Copy code
  npm install

 3. Run the application:
  Copy code
  npm start
  The app will start on http://localhost:3000. You can access it in your browser.

# Folder Structure
 1. src/components: Contains reusable components like TaskForm, TaskSection, and Dashboard.
 2. src/utils: Contains utility functions, including getTasks and saveTasks for local storage management.
 3. src/styles: Contains CSS files for styling components.

# Usage
 1. Add Task: Enter task details in the "Add Task" form, including title, description, due date, and priority. Click "Add Task" to save.
 2. Edit Task: Click the edit icon next to any task to update its details.
 3. Delete Task: Click the delete icon next to any task to remove it from the list.
 4. Search Tasks: Use the search bar to find tasks by title.
 5. Categorize Tasks: Tasks are automatically categorized into Upcoming, Overdue, and Completed based on due date.

# Technologies Used
 1.. React: For building the user interface.
 2. React Toastify: For displaying notifications.
 3. CSS: For styling the application.

# Additional Information
 1. Future Enhancements
 2. User Authentication: Allow multiple users to create and manage personal tasks.
 3. Deadline Reminders: Notify users as deadlines approach.
 4. Task Dependencies: Link related tasks together.

# Known Issues
Local Storage Limitations: Task data is stored in the browser's local storage, which may have storage limitations.
