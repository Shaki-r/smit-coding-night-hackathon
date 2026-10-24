# HCM Lite

A responsive HTML, CSS and JavaScript HR-management prototype based on the HCM Lite Beginner Track brief. It uses `localStorage` and starts with empty data; no sample employees or demo records are added.

## Run it
1. Extract the ZIP.
2. Open `index.html` in a modern browser, or serve this folder with a local static server (recommended for browser crypto support).
3. On first launch, create the company and Administrator account.
4. Sign in as Administrator and open **Employees → Add an employee** to create each employee's login.
5. Employees sign in on the same browser/origin using the email and password the Administrator created. They see their own dashboard, profile, attendance, leave requests, and payslip.

## Main pages
- `index.html` — sign in and first-run setup
- `admin.html` — Admin dashboard, attendance overview, Smart Helper and announcements
- `employees.html` — add employee accounts and search the directory
- `leaves.html` — approve/reject leave requests with a comment
- `settings.html` — company attendance and leave settings
- `employee.html` — personal dashboard, profile, check-in/out, leave requests and helper
- `payslip.html` — monthly estimated payslip and print/save as PDF

## Code structure
- `css/style.css` — responsive styling and day/night mode
- `js/storage.js` — shared localStorage helpers
- `js/auth.js` — password hashing helper and logout
- `js/employees.js` — employee account data helpers
- `js/attendance.js` — attendance and weekend/absence rules
- `js/leave.js` — weekday counting helper
- `js/helper.js` — Smart Helper text normalization
- `js/app.js` — page controller and UI interactions

## Account management
Use **Manage account** in the signed-in user's sidebar profile to view account details, log out, or permanently delete the signed-in account. Deleting an Employee removes that employee and their attendance/leave records. Deleting the Administrator account requires typing `DELETE COMPANY` and clears the company and all records stored by this app in this browser. The administrator can create a new company/account after that. An Admin can create new Employee accounts at any time from the Employees page.

## Important limitation
This is a learning/hackathon prototype, not a production-secure HR system. Browser `localStorage` is tied to one browser and can be inspected or modified by its user. Real deployments require a backend, database, and server-side authorization.
