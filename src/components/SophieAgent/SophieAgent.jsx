import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Calendar, CheckSquare, Star, Plus } from 'lucide-react';

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
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="p-2 border rounded"
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
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="p-1 hover:bg-gray-200 rounded"
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