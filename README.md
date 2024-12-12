# Unhandled 'error' Event on Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: not handling the 'error' event.  The provided `bug.js` file showcases this issue, and `bugSolution.js` provides a corrected version.

## Bug Description

The `bug.js` example creates a simple HTTP server. However, it lacks error handling.  If an error occurs (e.g., port in use), the server crashes without any indication. 

## Bug Solution

The `bugSolution.js` file demonstrates how to properly handle the 'error' event.  This prevents unexpected crashes and allows for graceful handling of errors.