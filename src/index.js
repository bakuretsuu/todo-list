// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import { addTask } from "./todo.js";
import { displayTask } from "./DOM.js";

console.log(greeting);

// ✅ add 3 example tasks
addTask({ title: "Buy groceries", description: "Milk, eggs, bread", dueDate: "2025-08-25", priority: true, notes: "Check discounts", id: "1" });
addTask({ title: "Finish project", description: "Submit by deadline", dueDate: "2025-08-30", priority: false, notes: "Review with team", id: "2" });
addTask({ title: "Workout", description: "Leg day at gym", dueDate: "2025-08-22", priority: true, notes: "Don't skip!", id: "3" });

// ✅ render on page load
displayTask();
