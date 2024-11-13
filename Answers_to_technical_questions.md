# Answers to Technical Questions

## How long did you spend on the coding test?
I spent approximately 14-15 hours over a duration of 2 days developing this Task Manager app. 

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
One of the most useful features in the latest version of JavaScript (ES2021) is the Logical Assignment Operators, which allows more concise and readable code when dealing with conditions.
Here’s an example of how it’s used in the app:

const updateTask = (id, updates) => {
  const updatedTasks = tasks.map(task => 
    task.id === id ? { ...task, ...updates } : task
  );
  setTasks(updatedTasks);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

Other is, Using logical assignment operators like ||=, &&=, and ??= would make updates more concise:

let updates = {};
updates.title ||= "Default Title"; // Assign only if updates.title is false

## How would you track down a performance issue in production? Have you ever had to do this?
To track down a performance issue in production, I would take the following steps:

1. Monitor Logs and Metrics: Use logging tools (e.g., Loggly or ELK Stack) to identify any obvious errors or unusual patterns.
2. Profiling: Utilize profiling tools such as Chrome DevTools for frontend or APM tools like New Relic for backend to identify bottlenecks in code execution.
3. Analyze Network Requests: Check network activity to ensure API calls are optimized and not causing delays.
4. Optimize Resource-Intensive Operations: If issues are detected in specific areas, I would use techniques like memoization, debouncing, and caching.
   
Yes, I have previously tracked down performance issues in production for web applications(eg. "Hire me", "Mess Relay" apps, repo on my github), where I primarily used Chrome DevTools and server logs to pinpoint delays in API requests and optimize database queries.

## If you had more time, what additional features or improvements would you consider adding to the task management application?
If I had more time, I would consider adding the following features to enhance the Task Manager app:

1. UI: I think the UI needs to be more appealing somewhat like animated and font selections and color palette needs to be improved.
2. Favicon: The favicon currently used is not that good, Needed to find a better and eye catching favicon that clearly indicates a Task Manager app. 
3. User Authentication and Role Management: Enable secure user login and assign roles for shared task management among teams.
4. Push Notifications: Integrate notifications to remind users of upcoming or overdue tasks.
5. Dark Mode: It reduces eye strain, especially in low-light environments. Additionally, its more aesthetically pleasing and easier to read.
6. Data Synchronization with a Database: Move from local storage to a database like MongoDB, enabling multi-device access and more robust data persistence.
7. Task Prioritization and Sorting Options: Add priority levels and sorting options for tasks to allow users to organize tasks based on urgency or due date.
8. Analytics and Reports: Provide insights into completed tasks, overdue tasks, and productivity metrics.

These additions would improve the app’s scalability, accessibility, and usability for a broader range of users.
