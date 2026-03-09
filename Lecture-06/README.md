# Lecture 06 – Asynchronous JavaScript & API Integration

## Features implemented
- External Data Demo section with API integration
- async/await for asynchronous operations
- fetch() to retrieve data from JSONPlaceholder API
- try/catch error handling
- response.ok validation
- Dynamic DOM updates
- Theme toggle with localStorage persistence
- Skills section (6+ skills)
- Projects section
- Last updated date (auto-generated)

## How to test
- Click "Load Data" button → fetches user data from API
- Displays: Name, Email, Company name
- Shows "Loading..." while fetching
- Shows "Error loading data" if request fails
- Click "Toggle Theme" → saves preference to localStorage
- Reload page → theme preference is remembered

## API Integration Details
- **Endpoint**: https://jsonplaceholder.typicode.com/users/1
- **Method**: GET
- **Response**: User object with name, email, company info
- **Error handling**: HTTP errors, network failures

## Technical Implementation
- Uses async/await pattern for cleaner asynchronous code
- Validates response.ok before processing data
- try/catch blocks handle network and HTTP errors
- Dynamic DOM creation for user data display
- Loading states and error messages