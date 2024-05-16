# F&G: Feedback and Grievance System
# Live Link: https://react-fg-senpiper-1.onrender.com

This project is a feedback and grievance system for a restaurant called "Aromatic Bar". It has two tabs: one for submitting feedback and another for viewing all submissions.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/react-fg.git`
2. Navigate to the project directory: `cd react-fg`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

The application should now be running at `http://localhost:3000`.

## Features

### Feedback Form

- Form name: Aromatic Bar
- Form description: "We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you."
- Required fields:
  - Customer Name
  - Email
  - Phone
- Rating questions with four options (Excellent, Good, Fair, Bad):
  - Please rate the quality of the service you received from your host.
  - Please rate the quality of your beverage.
  - Was our restaurant clean?
  - Please rate your overall dining experience.

### Validations

- All fields are mandatory.
- Email and phone fields should be valid and properly formatted.

### Submission

- Upon successful submission, a "Thank you for completing the information" message is displayed.
- Submitted data is stored locally in the browser storage(localStorage).

### Submissions Table

- Displays a list of all submissions from the browser storage.
- Includes a detailed view of each submission, showing all fields filled in the form.
- Data persists even after reloading the page.