# Design Doc for sophie

## Introduction
This document describes the design of the sophie app. It includes the architecture, components, data flow, and user interface design.

## Architecture
The app will be built using a client-server architecture. The client will be a web app built using React, and the server will be a RESTful API built using Node.js and Express. The client and server will communicate using JSON.

## Components
The app will consist of the following components:
- User Interface: The web app will have a simple and intuitive user interface that allows users to create, prioritize, order, review, and mark tasks as done.
- Task List: The app will have a task list component that displays the user's tasks and allows them to interact with them.
- Task Form: The app will have a task form component that allows users to create new tasks.
- Task Item: The app will have a task item component that displays a single task and allows users to interact with it.

## Data Flow
The data flow in the app will be as follows:
1. User creates a task using the task form.
2. Task form sends a request to the server to create the task.
3. Server creates the task and sends a response to the client.
4. Client updates the task list with the new task.
5. User interacts with the task list to prioritize, order, review, and mark tasks as done.

## User Interface Design
The user interface will be designed to be simple and intuitive. It will consist of the following elements:
- Task List: A list of tasks that the user has created.
- Task Form: A form that allows users to create new tasks.
- Task Item: A single task that the user can interact with.

The user interface will be responsive and work on all devices. It will be user-friendly and easy to use, with clear instructions and feedback for the user.

## Conclusion

The design of the sophie app will be simple and intuitive, with a client-server architecture, components for the user interface, data flow for creating and interacting with tasks, and a responsive and user-friendly user interface design. The app will be built using React, Node.js, and Express, and will communicate using JSON. The design will be scalable, reliable, and secure, with a focus on ease of use for the user.

# Claude version of Design Doc

# Sophie Design Document: LLM-Assisted Task Prioritization Demo

## Overview

Sophie is a demonstration app showing how to build a simple task management system that leverages Large Language Models (LLMs) for task prioritization. This app serves as an educational example for developers interested in building LLM-enhanced web applications.

### Purpose
- Demonstrate integration of LLMs into a web application
- Provide a working example of secure API key management
- Show deployment process for a simple full-stack application
- Serve as a reference implementation for similar projects

### Target Audience
- Developers learning to work with LLMs
- Students exploring modern web application architecture
- Developers interested in secure API key management
- Anyone looking to understand basic task management app implementation

## Technical Architecture

### High-Level Components
1. **Frontend (Current Implementation)**
   - React-based single-page application
   - Simple task management interface
   - Real-time interaction with Sophie's responses
   - Tailwind CSS for styling

2. **Backend (Planned)**
   - Node.js/Express server
   - API key management for LLM service
   - Task persistence
   - LLM prompt management

3. **External Services**
   - Anthropic Claude API for LLM functionality
   - Digital Ocean App Platform for hosting

### Data Flow
1. User creates/updates tasks in the frontend
2. Frontend sends task data to backend
3. Backend processes request and interacts with LLM if needed
4. LLM response is processed and sent back to frontend
5. Frontend updates UI with new task state and LLM suggestions

## Component Details

### Frontend Components
1. **Task Input Form**
   - Text input for task description
   - Priority selector (High/Medium/Low)
   - Due date picker
   - Submit button

2. **Task List**
   - Displays all tasks
   - Shows priority and due date
   - Completion toggle
   - Sorting/filtering options

3. **Sophie Chat Interface**
   - Displays Sophie's suggestions and responses
   - Shows task prioritization rationale
   - Offers next steps after task completion

### Backend API (Planned)
```javascript
POST /api/tasks          // Create new task
GET /api/tasks           // List all tasks
PUT /api/tasks/:id       // Update task
DELETE /api/tasks/:id    // Delete task
POST /api/sophie/suggest // Get Sophie's suggestions
```

## Security Considerations

### API Key Management
1. Store API keys in environment variables
2. Never expose keys in frontend code
3. Use backend proxy for LLM API calls
4. Implement rate limiting

### Data Protection
1. Validate all input data
2. Sanitize LLM responses
3. Implement CORS policies
4. Use HTTPS for all communications

## Development and Deployment

### Local Development
1. React development server with hot reloading
2. Environment variable management with .env files
3. Jest/React Testing Library for frontend tests

### Deployment Process
1. GitHub Actions for CI/CD
2. Automated testing before deployment
3. Digital Ocean App Platform configuration
4. Environment variable management in production

## Future Enhancements
1. User authentication
2. Persistent storage
3. Multiple task lists
4. Calendar integration
5. Markdown support
6. Project grouping
7. Export/import functionality

## Learning Outcomes
Developers following this example will learn:
1. Basic React application structure
2. LLM integration patterns
3. Secure API key management
4. Deployment to cloud platforms
5. Testing practices
6. CI/CD setup

## Current Status and Next Steps
- ✅ Frontend implementation complete
- ✅ Digital Ocean deployment working
- 🟡 Writing comprehensive documentation
- 🔲 Backend implementation
- 🔲 LLM integration
- 🔲 API key management
- 🔲 Testing suite
- 🔲 CI/CD pipeline

## Resources and References
1. GitHub Repository: [URL]
2. Live Demo: [URL]
3. Setup Guide: [URL]
4. API Documentation: [URL]
5. Contributing Guidelines: [URL]

This design document will evolve as the project progresses and more features are implemented. It serves as both a planning tool and a learning resource for developers following the project.

# Claude revised

# Sophie Design Document: LLM-Assisted Task Prioritization Demo

## Overview

Sophie is a demonstration app showing how to build a simple task management system that leverages Large Language Models (LLMs) for task prioritization. This app serves as an educational example for developers interested in building LLM-enhanced web applications.

### Purpose
- Demonstrate integration of LLMs into a web application
- Provide a working example of secure API key management
- Show deployment process for a simple full-stack application
- Serve as a reference implementation for similar projects

### Target Audience
- Developers learning to work with LLMs
- Students exploring modern web application architecture
- Developers interested in secure API key management
- Anyone looking to understand basic task management app implementation

## Technical Architecture

### High-Level Components
1. **Static Single-Page Application**
   - React-based static site built with webpack
   - No server-side components required
   - Local browser storage for data persistence
   - Direct LLM API interactions (with key stored in environment variables)
   - Hosted on Digital Ocean App Platform as a static site

2. **Build and Bundle System**
   - Webpack for bundling and optimization
   - Environment variable handling during build
   - Static asset optimization
   - Development hot-reloading support

3. **External Services**
   - Anthropic Claude API for LLM functionality
   - Digital Ocean App Platform for static site hosting

### Data Flow
1. User creates/updates tasks in the frontend
2. Tasks are stored in browser's localStorage
3. When LLM assistance is needed:
   - Frontend makes direct API calls to Anthropic's Claude API
   - Responses are processed and stored locally
4. UI updates with new task state and LLM suggestions
5. All data persists locally between sessions

### Data Storage
```javascript
// localStorage structure
{
  "tasks": [
    {
      id: string,
      text: string,
      priority: "high" | "medium" | "low",
      dueDate: string,
      completed: boolean,
      created: timestamp,
      updated: timestamp
    }
  ],
  "conversations": [
    {
      id: string,
      taskId: string,
      messages: [
        {
          role: "user" | "assistant",
          content: string,
          timestamp: number
        }
      ]
    }
  ]
}
```

## Build and Deployment

### Webpack Configuration
```javascript
// Key webpack features needed
module.exports = {
  // Static site optimization
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  
  // Environment variable handling
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ANTHROPIC_API_KEY': JSON.stringify(process.env.ANTHROPIC_API_KEY)
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // Development server
  devServer: {
    static: './dist',
    hot: true
  }
}
```

### Development Workflow
1. Local development
   - `npm start` runs webpack dev server
   - Environment variables loaded from .env file
   - Hot reloading for rapid development

2. Production build
   - `npm run build` creates optimized static bundle
   - Environment variables injected during build
   - Output ready for static hosting

### Deployment Process
1. GitHub Actions builds static assets
2. Runs tests on built assets
3. Deploys to Digital Ocean App Platform as static site
4. Environment variables configured in Digital Ocean dashboard

## Security Considerations

### API Key Management in Static Site
1. API key stored in Digital Ocean environment
2. Injected during build process
3. Never committed to source control
4. Rate limiting handled by Anthropic's API
5. Consider implementing proxy service if API usage grows

### Data Security
1. All data stored locally in browser
2. No server-side attack surface
3. Clear data storage policies for users
4. Optional data export/import functionality

[Rest of sections remain largely the same...]

## Implementation Details

### Local Storage Management
```javascript
// Example storage utilities
const Storage = {
  getTasks: () => JSON.parse(localStorage.getItem('tasks') || '[]'),
  saveTasks: (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks)),
  getConversations: () => JSON.parse(localStorage.getItem('conversations') || '[]'),
  saveConversations: (conversations) => localStorage.setItem('conversations', JSON.stringify(conversations))
};
```

### LLM Integration
```javascript
// Direct API call to Anthropic
const getSophieResponse = async (prompt) => {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
    },
    body: JSON.stringify({
      model: 'claude-3-opus-20240229',
      messages: [{ role: 'user', content: prompt }]
    })
  });
  return response.json();
};
```

[Previous conclusion and resources sections remain the same...]

## Component Details

### Frontend Components
1. **Task Input Form**
   - Text input for task description
   - Priority selector (High/Medium/Low)
   - Due date picker
   - Submit button

2. **Task List**
   - Displays all tasks
   - Shows priority and due date
   - Completion toggle
   - Sorting/filtering options

3. **Sophie Chat Interface**
   - Displays Sophie's suggestions and responses
   - Shows task prioritization rationale
   - Offers next steps after task completion

### Backend API (Planned)
```javascript
POST /api/tasks          // Create new task
GET /api/tasks           // List all tasks
PUT /api/tasks/:id       // Update task
DELETE /api/tasks/:id    // Delete task
POST /api/sophie/suggest // Get Sophie's suggestions
```

## Security Considerations

### API Key Management
1. Store API keys in environment variables
2. Never expose keys in frontend code
3. Use backend proxy for LLM API calls
4. Implement rate limiting

### Data Protection
1. Validate all input data
2. Sanitize LLM responses
3. Implement CORS policies
4. Use HTTPS for all communications

## Development and Deployment

### Local Development
1. React development server with hot reloading
2. Environment variable management with .env files
3. Jest/React Testing Library for frontend tests

### Deployment Process
1. GitHub Actions for CI/CD
2. Automated testing before deployment
3. Digital Ocean App Platform configuration
4. Environment variable management in production

## Future Enhancements
1. User authentication
2. Persistent storage
3. Multiple task lists
4. Calendar integration
5. Markdown support
6. Project grouping
7. Export/import functionality

## Learning Outcomes
Developers following this example will learn:
1. Basic React application structure
2. LLM integration patterns
3. Secure API key management
4. Deployment to cloud platforms
5. Testing practices
6. CI/CD setup

## Current Status and Next Steps
- ✅ Frontend implementation complete
- ✅ Digital Ocean deployment working
- 🟡 Writing comprehensive documentation
- 🔲 Backend implementation
- 🔲 LLM integration
- 🔲 API key management
- 🔲 Testing suite
- 🔲 CI/CD pipeline

## Resources and References
1. GitHub Repository: [URL]
2. Live Demo: [URL]
3. Setup Guide: [URL]
4. API Documentation: [URL]
5. Contributing Guidelines: [URL]

This design document will evolve as the project progresses and more features are implemented. It serves as both a planning tool and a learning resource for developers following the project.
