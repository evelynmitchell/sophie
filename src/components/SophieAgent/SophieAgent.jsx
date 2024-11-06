// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;from 'react';
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent; CardHeader, CardTitle } from '@/components/ui/card';
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;endar, CheckSquare, Star, Plus } from 'lucide-react';
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent; useState([]);
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;k] = useState('');
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ity] = useState('medium');
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;e] = useState('');
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ges] = useState([
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent; => {
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;'') {
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ask]);
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ges, {
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;> {
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent; => 
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;.task, completed: !task.completed } : task
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;(t => t.id === id);
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ges, {
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;eted ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;xl mx-auto p-4 space-y-4">
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ame="flex items-center gap-2">
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;className="w-6 h-6 text-blue-500" />
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;pace-y-4">
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;"space-y-2 mb-4">
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;((message, index) => (
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;x}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;={`p-3 rounded-lg ${
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;.sender === 'sophie'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;-blue-100 ml-auto max-w-[80%]'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;-gray-100 mr-auto max-w-[80%]'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;text}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;Form */}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;{handleAddTask} className="space-y-2">
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;e="flex gap-2">
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;t"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;wTask}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;{(e) => setNewTask(e.target.value)}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;er="Enter a new task..."
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;="flex-1 p-2 border rounded"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;iority}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;{(e) => setPriority(e.target.value)}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;="p-2 border rounded"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;alue="low">Low Priority</option>
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;alue="medium">Medium Priority</option>
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;alue="high">High Priority</option>
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;e"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;eDate}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;{(e) => setDueDate(e.target.value)}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;="p-2 border rounded"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;mit"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ssName="w-5 h-5" />
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;/}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;"space-y-2">
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;sk => (
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;.id}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;={() => toggleTask(task.id)}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;me="p-1 hover:bg-gray-200 rounded"
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;quare
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;Name={`w-5 h-5 ${
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;k.completed ? 'text-green-500' : 'text-gray-400'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ssName={task.completed ? 'line-through text-gray-500' : ''}>
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ext}
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;me={`w-5 h-5 ${
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;priority === 'high'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;text-red-500'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ask.priority === 'medium'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;text-yellow-500'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;text-gray-300'
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent; className="w-5 h-5 text-gray-400" />
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;ssName="text-sm text-gray-500">{task.dueDate}</span>
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;
// SophieAgent.jsx
import React, { useState } from 'react';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

const SophieAgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sophie, and I'm here to help you stay organized. Let's start with your tasks - just tell me about them along with how important they are and when they're due!",
      sender: 'sophie'
    }
  ]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        priority,
        dueDate,
        completed: false
      };
      setTasks([...tasks, task]);
      setMessages([...messages, {
        text: `Great! I've added "${newTask}" to your tasks. Would you like to break this down into smaller steps or connect it to any of your existing tasks?`,
        sender: 'sophie'
      }]);
      setNewTask('');
      setPriority('medium');
      setDueDate('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === id);
    if (task) {
      setMessages([...messages, {
        text: `${task.completed ? 'Unchecked' : 'Completed'} "${task.text}". ${!task.completed ? 'Great job! Would you like to move on to related tasks?' : ''}`,
        sender: 'sophie'
      }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            Sophie Agent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Messages */}
            <div className="space-y-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === 'sophie'
                      ? 'bg-blue-100 ml-auto max-w-[80%]'
                      : 'bg-gray-100 mr-auto max-w-[80%]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Task Input Form */}
            <form onSubmit={handleAddTask} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 p-2 border rounded"
                  data-testid="task-input"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="priority-select"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="p-2 border rounded"
                  data-testid="date-input"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  data-testid="add-task-button"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
                  data-testid="task-item"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                    data-testid="toggle-task-button"
                  >
                    <CheckSquare
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                  <Star
                    className={`w-5 h-5 ${
                      task.priority === 'high'
                        ? 'text-red-500'
                        : task.priority === 'medium'
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    data-testid={`priority-star-${task.priority}`}
                  />
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SophieAgent;