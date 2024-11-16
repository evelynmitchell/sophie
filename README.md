# sophie
A personal assistant

Using Claude Sonnet, writing a React component to display Sophie, a personal assistant, within a web page.

This uses github actions to test the react component. To do this you will need to set Actions to have read and write access to the repository. (This is a security risk, so be sure to understand the implications of this.)

https://claude.ai/chat/397839f1-fa96-4957-99e3-f932563bf4e7

```

    Going to the repository settings.

    Navigating to "Actions" > "General".
    s
    Verifying that the "Workflow permissions" are set to "Read and write permissions".
```

The GITHUB_TOKEN secret token should created automatically. 

The first run of the generate-lockfile workflow will succeed, but you will need to pull the changes to your local repository, and then re-run the action to get the lockfile to pass.

[/] deploy to (github pages? Netlify? Vercel?, digital ocean droplet?)
Trying to get a webpack static build using gh-pages working.

[ ] add some durable storage for the data (sqlite? turso? cloudflare?) ```If you need to persist data or add more complex features, you would need to:

Set up a backend server (Node.js, Python, etc.)
Add a database (MongoDB, PostgreSQL, etc.)
Create API endpoints for data operations
Modify the React component to use these APIs```

[x] Write PRD (Product Requirements Document)
[x] Write Project Plan
[x] Write Design doc
[x] Write Interfaces doc
[x] Write Runbook, Monitoring, Telemetry, Deployment and Testing docs
[x] Write Launch plan
