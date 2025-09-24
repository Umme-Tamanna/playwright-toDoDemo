# TodoMVC Demo Automation (Playwright, JavaScript)

This project demonstrates **end-to-end UI automation** of the Playwright **TodoMVC demo app** using Playwright with JavaScript. It covers the core functionality of a typical todo list application and showcases structured, data-driven test automation.

---

## 📝 Project Overview

The TodoMVC demo app allows users to:
- Add new todos
- Mark tasks as completed
- Filter todos by **All**, **Active**, or **Completed**
- Clear completed tasks
- See the dynamic **items left counter**

This project automates all these functionalities to demonstrate a complete UI test workflow.

---

## ⚙️ Automation Workflow

The automated UI tests on the [TodoMVC app](https://demo.playwright.dev/todomvc) perform the following steps:

1. **Add Todos**
   - Adds single or multiple todos using a flexible `todos[]` array.
   - Verifies that todos appear in the list.
   - Checks that the **items left counter** updates correctly.

2. **Mark Completed**
   - Marks one or more tasks as completed.
   - Verifies the completed tasks have the appropriate CSS class
   - Confirms the **items left counter** decreases accordingly.

3. **Filter Todos**
   - Tests the **Active** filter to show only incomplete tasks.
   - Tests the **Completed** filter to show only completed tasks.
   - Tests the **All** filter to show all tasks.

4. **Clear Completed**
   - Clears all completed tasks.
   - Verifies that only active tasks remain.

5. **Reporting & Visualization**
   - Generates **HTML reports** for all test runs.
   - Captures **screenshots** at key steps to provide visual evidence of test execution.

---
