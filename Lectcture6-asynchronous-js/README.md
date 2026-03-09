# Lecture 06 – Asynchronous JavaScript

## Features implemented
- setTimeout (async timeout with 500ms delay)
- Promises with .then() (2 second delay)
- async/await pattern with logging
- fetch API with error handling (HTTP 404 test)
- try/catch for network errors
- response.ok validation

## How to test
- Click "1. Async Timeout" → logs show "End" appears before timeout completes
- Click "2. Async Promise" → waits 2 seconds, then shows resolved message
- Click "3. Async Await" → shows "Before await" → waits → "After await"
- Click "4. Async Fetch" → attempts to fetch invalid ID, shows HTTP error

## Changes made from original code
- Part B: Timeout changed from 2000ms to 500ms
- Part C1: Promise message changed to "Promise resolved after 2 seconds!"
- Part C2: Promise delay changed from 1000ms to 2000ms
- Part D1: Status message changed to "Please wait, async/await running..."
- Part D2: Added logs before and after await
- Part E1: Changed output to show ID and Title
- Part E2: Changed URL to invalid ID (999999) to test error handling

# Lecture 6 – Async JavaScript Reflection

## Part B — Async Timeout
**What changed?**
The timeout now completes faster (500ms instead of 2000ms).

**Did "End" still appear before "Timeout finished"?**
Yes. "End" still appears first.

**Why?**
Because setTimeout does not block JavaScript execution. The code continues immediately after scheduling the timeout, so "End" logs first, and the timeout callback runs later.

---

## Part C — Promise
**Did the button click immediately freeze the page?**
No, the page did not freeze.

**When does .then(...) run?**
.then() runs after the Promise resolves (after 2 seconds in this case).

**When does .then execute?**
.then() executes asynchronously after the Promise completes, allowing other code to run in the meantime.

---

## Part D — Async/Await
**What is the order of the three logs?**
1. "Before await"
2. "Promise resolved after 2 seconds!"
3. "After await"

**What does await do inside this function?**
await pauses the execution of the async function until the Promise resolves, but it does not freeze the browser or block other JavaScript code.

---

## Part E — Fetch
**What message is printed when the item does not exist?**
"Error: HTTP Error: 404"

**Why do we check response.ok?**
We check response.ok to determine if the HTTP request was successful (status 200-299). Without this check, we would try to parse JSON from error responses, which could cause unexpected behavior.

---

## Part F — Short Reflection

### Why do we use async/await?
We use async/await to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and understand. It allows us to wait for Promises to resolve without using nested .then() callbacks, which can become messy in complex scenarios.

### Why do we use try/catch with fetch?
We use try/catch with fetch to handle errors that might occur during the network request, such as network failures, timeouts, or HTTP errors. This prevents our application from crashing and allows us to display meaningful error messages to users.

### Why do we check response.ok?
We check response.ok because fetch() does not automatically throw an error for HTTP error status codes (like 404 or 500). By checking response.ok, we can detect these errors and handle them appropriately, ensuring we only process successful responses.