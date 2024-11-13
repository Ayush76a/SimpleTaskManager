## Task Manager
Task Manager is a React-based web application that allows users to manage tasks efficiently. Users can add, edit, and delete tasks, mark them as complete or incomplete, and view tasks by category: Upcoming, Overdue, and Completed. Additionally, a search feature allows users to filter tasks by title date and priority. Toast notifications provide real-time feedback on task actions.

# Features
Add, Edit, and Delete Tasks: Add new tasks with a title, description, due date, and priority.
Mark Tasks as Complete or Incomplete: Toggle tasks between complete and incomplete.
Search Functionality: Filter tasks by title.
Toast Notifications: Real-time feedback for actions like adding, editing, and deleting tasks.
Categorized Task Sections: Tasks are categorized as Upcoming, Overdue, and Completed based on due dates.

# Getting Started
# Prerequisites
Node.js (version 14 or higher recommended)
npm (version 6 or higher)

## Installation
# Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/task-manager.git
cd task-manager

# Install dependencies:

bash
Copy code
npm install

# Run the application:

bash
Copy code
npm start
The app will start on http://localhost:3000. You can access it in your browser.

# Folder Structure
src/components: Contains reusable components like TaskForm, TaskSection, and Dashboard.
src/utils: Contains utility functions, including getTasks and saveTasks for local storage management.
src/styles: Contains CSS files for styling components.

# Usage
Add Task: Enter task details in the "Add Task" form, including title, description, due date, and priority. Click "Add Task" to save.
Edit Task: Click the edit icon next to any task to update its details.
Delete Task: Click the delete icon next to any task to remove it from the list.
Search Tasks: Use the search bar to find tasks by title.
Categorize Tasks: Tasks are automatically categorized into Upcoming, Overdue, and Completed based on due date.

# Technologies Used
React: For building the user interface.
React Toastify: For displaying notifications.
CSS: For styling the application.

# Additional Information
Future Enhancements
User Authentication: Allow multiple users to create and manage personal tasks.
Deadline Reminders: Notify users as deadlines approach.
Task Dependencies: Link related tasks together.

# Known Issues
Local Storage Limitations: Task data is stored in the browser's local storage, which may have storage limitations.
