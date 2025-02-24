# MongoDB $inc operator error with string value
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update operations. The error occurs when attempting to increment a field with a string value, which is not supported by the `$inc` operator.
The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected code.  The issue arises from providing a string to the `$inc` operator which expects a number. Attempting to increment a field using a string value leads to an error or unexpected behavior.
## Solution
The solution involves ensuring that the value provided to the `$inc` operator is a numeric value (integer or double). This ensures the correct behavior of the increment operation.