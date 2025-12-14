const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ---------- DESIGN ----------
function showHeader() {
  console.clear();
  console.log("====================================");
  console.log("      SIMPLE CONSOLE MATH APP        ");
  console.log("           SOLO PROJECT              ");
  console.log("====================================\n");
}

// ---------- MATH FUNCTIONS ----------
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

function average(a, b) {
  return (a + b) / 2;
}

// ---------- MENU ----------
function showMenu() {
  console.log("Choose an operation:");
  console.log("[1] Addition");
  console.log("[2] Subtraction");
  console.log("[3] Multiplication");
  console.log("[4] Division");
  console.log("[5] Average");
  console.log("[0] Exit\n");
}

// ---------- APP LOGIC ----------
function startApp() {
  showHeader();
  showMenu();

  rl.question("Enter your choice: ", (choice) => {
    if (choice === "0") {
      console.log("\nThank you for using the app!");
      return rl.close();
    }

    rl.question("\nEnter first number: ", (num1) => {
      rl.question("Enter second number: ", (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        try {
          if (isNaN(a) || isNaN(b)) {
            throw new Error("Invalid input. Numbers only.");
          }

          let result;
          let operation;

          switch (choice) {
            case "1":
              result = add(a, b);
              operation = "Addition";
              break;
            case "2":
              result = subtract(a, b);
              operation = "Subtraction";
              break;
            case "3":
              result = multiply(a, b);
              operation = "Multiplication";
              break;
            case "4":
              result = divide(a, b);
              operation = "Division";
              break;
            case "5":
              result = average(a, b);
              operation = "Average";
              break;
            default:
              throw new Error("Invalid menu choice.");
          }

          console.log("\n------------------------------------");
          console.log(`Operation : ${operation}`);
          console.log(`Result    : ${result}`);
          console.log("------------------------------------\n");

        } catch (error) {
          console.error("\nError:", error.message, "\n");
        }

        rl.question("Press ENTER to continue...", () => {
          startApp();
        });
      });
    });
  });
}

startApp();
