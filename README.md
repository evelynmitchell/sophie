# sophie
A personal assistant

Using Claude Sonnet, writing a React component to display Sophie, a personal assistant, within a web page.

This uses github actions to test the react component. To do this you will need to set Actions to have read and write access to the repository. (This is a security risk, so be sure to understand the implications of this.)

```

    Going to the repository settings.

    Navigating to "Actions" > "General".
    s
    Verifying that the "Workflow permissions" are set to "Read and write permissions".
```

The GITHUB_TOKEN secret token should created automatically. 

[ ] deploy to (github pages? Netlify? Vercel?, digital ocean droplet?)

[ ] add some durable storage for the data (sqlite? turso? cloudflare?) ```If you need to persist data or add more complex features, you would need to:

Set up a backend server (Node.js, Python, etc.)
Add a database (MongoDB, PostgreSQL, etc.)
Create API endpoints for data operations
Modify the React component to use these APIs```

[ ] 