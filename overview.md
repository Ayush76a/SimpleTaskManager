# Basic Idea of the Task Manager App:
The Task Manager App helps users efficiently organize and manage their daily tasks through a streamlined dashboard. Users can add, edit, delete, and categorize tasks with functionalities that improve user experience, including search and notifications. This app is built with React and stores data locally to preserve user inputs even after page refreshes.

# Key Functionalities and Implementation

## 1. Adding Tasks Implementation: 
The TaskForm component allows users to input task details, including title, description, due date, and priority level. Upon submission, the addTask function is triggered, adding the task to the list and saving it to local storage. Each task is assigned a unique ID based on the current timestamp to help manage updates and deletions.

## 2. Editing and Deleting Tasks Implementation: 
Tasks can be edited or removed via buttons in the task list. The editTask function replaces the selected task with updated details, while deleteTask removes it from the list. Both actions update local storage and trigger a notification for confirmation using Toast notifications.

## 3. Task Completion Toggle Implementation: 
Users can toggle the completion status of each task using a checkbox. The toggleTaskCompletion function updates the completed status of the task, stores the change, and updates the display sections (Upcoming, Overdue, and Completed).

## 4. Categorizing Tasks (Upcoming, Overdue, Completed) Implementation: 
Tasks are automatically categorized based on their dueDate and completed status. Upcoming tasks have future due dates, overdue tasks have past due dates, and completed tasks are marked as completed. These are displayed in separate sections managed by the TaskSection component.

## 5. Search Functionality Implementation: 
The search bar allows users to filter tasks by title. The searchTerm state stores user input, and a filtered list of tasks is displayed by checking if each task's title includes the search term. This functionality makes it easy for users to locate specific tasks quickly.

## 6. Notifications Implementation: 
Using the react-toastify library, notifications appear when tasks are added, edited, deleted, or updated. These notifications provide users with immediate feedback, improving the overall user experience.

## 7. Persistent Storage Implementation: 
The app uses the localStorage API to save tasks, ensuring persistence even after the browser is refreshed or reopened. The getTasks and saveTasks utility functions manage storage interactions, loading tasks on app load and saving any updates or additions.

