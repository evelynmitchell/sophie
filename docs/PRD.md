# Product Requirements Document
## Table of Contents
1. [Introduction](#introduction)
2. [Objective](#objective)
3. [Features](#features)
4. [User Stories](#user-stories)
5. [Use Cases](#use-cases)
6. [Non-Functional Requirements](#non-functional
7. [Assumptions](#assumptions)
8. [Constraints](#constraints)
9. [Dependencies](#dependencies)
10. [Acceptance Criteria](#acceptance-criteria)
11. [Appendix](#appendix)
## Introduction
This document describes the requirements for the sophie, task assistant. It includes the objective, features, user stories, use cases, non-functional requirements, assumptions, constraints, dependencies, and acceptance criteria.
## Objective
The objective of this product is to create a simple llm backed app which provides a friendly, skilled personal assistant which helps with gathering todos and prioritizing the with the person using the app. The app should allow users to create lists of tasks, discuss the priorities of them with the llm, and to generate an ordered list of tasks to be done. Also, once a task is done, the list should be reviewed by the llm to help the user come up with the next task thet want to do. Initially the workflow will use only a single task list within the UI, but future versions will support markdown todos, grouping into projects, creation of calendar events, and perhaps tools integration such as taskwarrior.
## Features
The product should have the following features:
- Todo list creation
- Task prioritization
- Task ordering
- Task review
- Task completion
# User Stories
As a user, I want to be able to create a list of tasks so that I can keep track of what needs to be done.
As a user, I want to be able to prioritize tasks so that I can focus on the most important ones.
As a user, I want to be able to order tasks so that I can plan my day effectively.
As a user, I want to be able to review tasks so that I can see what I have accomplished.
As a user, I want to be able to mark tasks as done so that I can keep track of my progress.
## Use Cases
1. User creates a list of tasks
- User enters task name and description
- User clicks on the add task button
- System adds the task to the list
2. User prioritizes tasks
- User selects a task
- User selects a priority level
- User clicks on the set priority button
- System sets the priority level for the task
3. User orders tasks
- User selects a task
- User selects a position
- User clicks on the move task button
- System moves the task to the selected position
4. User reviews tasks
- User selects a task
- User marks the task as done
- User clicks on the mark as done button
- System marks the task as done
5. User marks tasks as done
- User selects a task
- User marks the task as done
- User clicks on the mark as done button
- System marks the task as done
## Non-Functional Requirements
- The app should be responsive and work on all devices
- The app should be user-friendly and easy to use
- The app should be secure and protect user data
- The app should be scalable and able to handle a large number of users
- The app should be reliable and available 24/7
## Assumptions
- Users have basic computer skills
- Users have access to the internet
- Users have a valid email address
## Constraints
- The app should be developed within the given budget
- The app should be developed within the given timeline
## Dependencies
- The platform depends on the availability of the internet
- The platform depends on the availability of the server
## Acceptance Criteria
- Users should be able to register and login
- Users should be able to create a list of tasks
- Users should be able to prioritize tasks
- Users should be able to order tasks
- Users should be able to review tasks
- Users should be able to mark tasks as done
- Users should be able to track the progress of tasks
- Users should be able to track the progress of projects

## Appendix
```
- [User Login Wireframe](docs/wireframes/user_login.png)
- [User Registration Wireframe](docs/wireframes/user_registration.png)
- [Project Creation Wireframe](docs/wireframes/project_creation.png)
- [Task Creation Wireframe](docs/wireframes/task_creation.png)
- [Task Assignment Wireframe](docs/wireframes/task_assignment.png)
- [Task Tracking Wireframe](docs/wireframes/task_tracking.png)
- [Project Progress Tracking Wireframe](docs/wireframes/project_progress_tracking.png)
```

