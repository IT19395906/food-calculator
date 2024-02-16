# food-calculator
React.js web

_dependencies_

```bash
npm install body-parser
npm install express
npm install cors
```

Node.js backend with frontend for the pizza calculator

cors is a security feature implemented by web browsers to control access to resources on a web page from a different origin (domain, protocol, or port). 
When your React frontend, running on one domain, makes a request to a Node.js backend on a different domain, the browser enforces the same-origin policy. CORS headers provide a way for the server to indicate which origins are allowed to access its resources. the cors middleware is used to automatically add the necessary CORS headers to the responses from your server. It allows your React frontend, running on a different domain, to make requests to your Node.js backend.
