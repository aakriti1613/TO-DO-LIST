# TO-DO-LIST
**Overview**
This project is a fully functional and responsive To-Do List website built using HTML, CSS, Bootstrap, JavaScript, FontAwesome, and Popper.js. The website allows users to manage their tasks efficiently, with features such as task categorization (ongoing, delayed, and completed tasks), task addition through a modal, and local storage for data persistence across browser sessions. The project focuses on providing a simple, clean, and intuitive user interface that works seamlessly across different devices.

**Features**
1. Task Management System: Add, delete, edit, and categorize tasks into ongoing, delayed, and completed.
2. Responsive Design: The website adapts to different screen sizes (desktop, tablet, mobile) using Bootstrap.
3. Local Storage: Tasks are stored in the browser’s local storage in JSON format, ensuring data persistence across sessions.
4. Interactive UI: Add tasks through a modal form, dynamically update the task list, and view tasks based on their status.
5. Task Sections: Navigate through different task categories (ongoing, delayed, and completed) via the navbar.
6. FontAwesome Integration: Icons used for better visual representation and user interaction.
7. Modal for Adding Tasks: Add new tasks through a modal interface to keep the main task table clean and organized.
   
**Technologies Used**
1.HTML5: For structuring the website content.
2. CSS3: For custom styling of the website.
3. Bootstrap 5: For responsive design and layout.
4. JavaScript: For dynamic interactivity and local storage management.
5. FontAwesome: For icons used throughout the interface.
6. Popper.js: For handling popups and tooltips, particularly in modals and interactive elements.

**Installation**
To get a local copy of this project up and running, follow these simple steps:

**Prerequisites**
Git should be installed on your machine.
A modern web browser (Chrome, Firefox, Edge, etc.) is recommended for testing.

**Steps to Install**
1. Clone the repository:
   git clone https://github.com/aakriti1613/TO-DO-LIST.git

2. On macOS or Linux:
      open index.html
   On Windows:
      start index.html
    
**Usage**
Once the project is loaded in the browser:
1. Add a Task:
Click the "Add Task" button to open the modal window.
Fill out the task details (name, description, due date) and submit the form.
The task will appear in the task list.

2. Edit or Delete a Task:
Use the edit button next to each task to modify it.
Use the delete button to remove a task from the list.

3. Task Categorization:
Ongoing, delayed, and completed tasks can be viewed by clicking the appropriate section in the navbar.
Tasks are automatically moved to the delayed section if the due date has passed.

4. Local Storage:
All tasks are stored locally in your browser. They will persist even after refreshing or closing the browser.

**Dependencies**
This project requires the following libraries, which are loaded via CDNs:
1. Bootstrap 5: For responsive layout and design components.
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="path/to/bootstrap.bundle.min.js"></script>
2. FontAwesome: For icons used in the UI.
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
3. Popper.js: For handling modals and tooltips.
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>

**Contributing**
Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request. Ensure your changes are well-documented and tested.
