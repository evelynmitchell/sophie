import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SophieAgent from './SophieAgent';

// Mock the shadcn/ui components
jest.mock('@/components/ui/card', () => ({
  Card: ({ children, className = "" }) => (
    <div data-testid="card" className={className}>{children}</div>
  ),
  CardHeader: ({ children }) => <div data-testid="card-header">{children}</div>,
  CardTitle: ({ children, className = "" }) => (
    <h2 data-testid="card-title" className={className}>{children}</h2>
  ),
  CardContent: ({ children }) => <div data-testid="card-content">{children}</div>,
}));

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  MessageCircle: () => <div data-testid="icon-message">MessageCircle</div>,
  Calendar: () => <div data-testid="icon-calendar">Calendar</div>,
  CheckSquare: () => <div data-testid="icon-check">CheckSquare</div>,
  Star: () => <div data-testid="icon-star">Star</div>,
  Plus: () => <div data-testid="icon-plus">Plus</div>,
}));

describe('SophieAgent Component', () => {
  beforeEach(() => {
    // Reset any state or mocks before each test
    jest.clearAllMocks();
  });

  // Test 1: Initial Rendering
  test('renders initial welcome message', () => {
    render(<SophieAgent />);
    const welcomeMessage = screen.getByText(/Hi! I'm Sophie/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  // Test 2: Task Input Form Elements
  test('renders task input form with all necessary elements', () => {
    render(<SophieAgent />);
    
    // Check for input field
    expect(screen.getByPlaceholderText(/enter a new task/i)).toBeInTheDocument();
    
    // Check for priority dropdown
    const prioritySelect = screen.getByRole('combobox');
    expect(prioritySelect).toBeInTheDocument();
    expect(prioritySelect).toHaveValue('medium');
    
    // Check for date input
    const dateInput = screen.getByRole('textbox', { type: 'date' });
    expect(dateInput).toBeInTheDocument();
    
    // Check for add button
    const addButton = screen.getByRole('button', { type: 'submit' });
    expect(addButton).toBeInTheDocument();
  });

  // Test 3: Adding a New Task
  test('can add a new task', async () => {
    render(<SophieAgent />);
    const user = userEvent.setup();

    // Fill out the task form
    const taskInput = screen.getByPlaceholderText(/enter a new task/i);
    const prioritySelect = screen.getByRole('combobox');
    const dateInput = screen.getByRole('textbox', { type: 'date' });
    const addButton = screen.getByRole('button', { type: 'submit' });

    // Type task details
    await user.type(taskInput, 'Test Task');
    await user.selectOptions(prioritySelect, 'high');
    await user.type(dateInput, '2024-12-31');
    
    // Submit the form
    await user.click(addButton);

    // Check if task is added to the list
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    
    // Check if Sophie responds
    expect(screen.getByText(/Great! I've added "Test Task"/)).toBeInTheDocument();
  });

  // Test 4: Task Completion
  test('can toggle task completion', async () => {
    render(<SophieAgent />);
    const user = userEvent.setup();

    // Add a task first
    const taskInput = screen.getByPlaceholderText(/enter a new task/i);
    const addButton = screen.getByRole('button', { type: 'submit' });
    
    await user.type(taskInput, 'Completable Task');
    await user.click(addButton);

    // Find and click the toggle button
    const toggleButton = screen.getByTestId('icon-check').closest('button');
    await user.click(toggleButton);

    // Check if task is marked as completed
    const taskText = screen.getByText('Completable Task');
    expect(taskText).toHaveClass('line-through');

    // Check if Sophie responds to completion
    expect(screen.getByText(/Great job!/)).toBeInTheDocument();
  });

  // Test 5: Form Validation
  test('prevents adding empty tasks', async () => {
    render(<SophieAgent />);
    const user = userEvent.setup();

    // Try to submit empty form
    const addButton = screen.getByRole('button', { type: 'submit' });
    await user.click(addButton);

    // Get initial task count
    const initialTasks = screen.queryAllByTestId('task-item');
    const initialCount = initialTasks.length;

    // Submit empty task
    await user.click(addButton);

    // Verify no new task was added
    const afterTasks = screen.queryAllByTestId('task-item');
    expect(afterTasks.length).toBe(initialCount);
  });

  // Test 6: Message History
  test('maintains message history correctly', async () => {
    render(<SophieAgent />);
    const user = userEvent.setup();

    // Initial welcome message should be present
    expect(screen.getByText(/Hi! I'm Sophie/i)).toBeInTheDocument();

    // Add a task
    const taskInput = screen.getByPlaceholderText(/enter a new task/i);
    const addButton = screen.getByRole('button', { type: 'submit' });
    
    await user.type(taskInput, 'New Task');
    await user.click(addButton);

    // Check if both messages are present
    expect(screen.getByText(/Hi! I'm Sophie/i)).toBeInTheDocument();
    expect(screen.getByText(/Great! I've added "New Task"/)).toBeInTheDocument();
  });

  // Test 7: Date Display
  test('displays due date correctly', async () => {
    render(<SophieAgent />);
    const user = userEvent.setup();

    // Add task with due date
    const taskInput = screen.getByPlaceholderText(/enter a new task/i);
    const dateInput = screen.getByRole('textbox', { type: 'date' });
    const addButton = screen.getByRole('button', { type: 'submit' });

    await user.type(taskInput, 'Dated Task');
    await user.type(dateInput, '2024-12-31');
    await user.click(addButton);

    // Check if date is displayed
    expect(screen.getByText('2024-12-31')).toBeInTheDocument();
  });

  // Test 8: Form Reset After Submission
  test('form resets after task addition', async () => {
    render(<SophieAgent />);
    const user = userEvent.setup();

    // Add a task
    const taskInput = screen.getByPlaceholderText(/enter a new task/i);
    const prioritySelect = screen.getByRole('combobox');
    const dateInput = screen.getByRole('textbox', { type: 'date' });
    const addButton = screen.getByRole('button', { type: 'submit' });

    await user.type(taskInput, 'Test Task');
    await user.selectOptions(prioritySelect, 'high');
    await user.type(dateInput, '2024-12-31');
    await user.click(addButton);

    // Check if form is reset
    expect(taskInput).toHaveValue('');
    expect(prioritySelect).toHaveValue('medium');
    expect(dateInput).toHaveValue('');
  });
});