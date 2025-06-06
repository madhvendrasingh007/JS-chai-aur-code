# 🌐 API (Application Programming Interface) - Complete Guide

A comprehensive guide to understanding APIs, their architecture, and practical implementation for medium-level developers.

## 🤔 What is an API? (Simple Explanation)

**API = Application Programming Interface**

Think of an API as a **waiter in a restaurant**:
- **You (Client)** want food but can't go directly to the kitchen
- **Waiter (API)** takes your order and brings it to the kitchen  
- **Kitchen (Server)** prepares your food
- **Waiter (API)** brings the food back to you

### 📱 Real-World API Example

When you use a weather app on your phone:

```
📱 Weather App  ←→  🌐 Weather API  ←→  🖥️ Weather Database
    (Client)           (Interface)         (Server)

1. App asks: "What's the weather in Delhi?"
2. API receives request and processes it
3. API queries weather database
4. Database returns weather data
5. API formats data and sends back to app
6. App displays: "Delhi: 28°C, Sunny"
```

## 🏗️ API Architecture

### Basic API Architecture

```
┌─────────────────┐    HTTP Request     ┌─────────────────┐
│                 │ ──────────────────→ │                 │
│   CLIENT        │                     │   API SERVER   │
│                 │ ←────────────────── │                 │
│ • Web Browser   │    HTTP Response    │ • REST API      │
│ • Mobile App    │                     │ • GraphQL       │
│ • Desktop App   │                     │ • WebSocket     │
└─────────────────┘                     └─────────────────┘
                                                 │
                                                 │ Database Query
                                                 ▼
                                        ┌─────────────────┐
                                        │                 │
                                        │    DATABASE     │
                                        │                 │
                                        │ • MySQL         │
                                        │ • MongoDB       │
                                        │ • PostgreSQL    │
                                        └─────────────────┘
```

### Detailed API Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT SIDE                              │
├─────────────────┬─────────────────┬─────────────────────────────┤
│   Web Browser   │   Mobile App    │      Desktop App            │
│                 │                 │                             │
│ • JavaScript    │ • React Native  │ • Electron                  │
│ • React/Vue     │ • Flutter       │ • Java/C#                   │
│ • HTML/CSS      │ • Native iOS    │ • Python                    │
└─────────────────┴─────────────────┴─────────────────────────────┘
         │                    │                         │
         └────────────────────┼─────────────────────────┘
                              │ HTTP/HTTPS Requests
                              │ (GET, POST, PUT, DELETE)
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY                               │
├─────────────────────────────────────────────────────────────────┤
│ • Authentication & Authorization                                │
│ • Rate Limiting                                                 │
│ • Request/Response Logging                                      │
│ • Load Balancing                                                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     API SERVER                                 │
├─────────────────┬─────────────────┬─────────────────────────────┤
│   REST API      │   GraphQL API   │      WebSocket API          │
│                 │                 │                             │
│ • Node.js       │ • Apollo Server │ • Socket.io                 │
│ • Express       │ • Prisma        │ • WebSocket                 │
│ • FastAPI       │ • Hasura        │ • SignalR                   │
│ • Spring Boot   │ • GraphQL Yoga  │ • Sockjs                    │
└─────────────────┴─────────────────┴─────────────────────────────┘
         │                    │                         │
         └────────────────────┼─────────────────────────┘
                              │ Database Queries
                              │ (SQL, NoSQL, etc.)
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATABASE LAYER                            │
├─────────────────┬─────────────────┬─────────────────────────────┤
│  Relational DB  │    NoSQL DB     │      Cache Layer            │
│                 │                 │                             │
│ • MySQL         │ • MongoDB       │ • Redis                     │
│ • PostgreSQL    │ • Cassandra     │ • Memcached                 │
│ • SQLite        │ • DynamoDB      │ • ElastiCache               │
│ • Oracle        │ • CouchDB       │ • Hazelcast                 │
└─────────────────┴─────────────────┴─────────────────────────────┘
```

## 🎯 API Types & Examples

### 1. 🌐 REST API (Most Common)
**RESTful** - Representational State Transfer

```javascript
// GET request - Fetch user data
fetch('https://api.example.com/users/123')
  .then(response => response.json())
  .then(data => console.log(data));

// Response:
{
  "id": 123,
  "name": "Madhvendra Singh",
  "email": "madhvendra@example.com",
  "status": "active"
}

// POST request - Create new user
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: "New User",
    email: "user@example.com"
  })
})
```

### 2. 🔍 GraphQL API
Query exactly what you need:

```javascript
// GraphQL Query
const query = `
  query {
    user(id: 123) {
      name
      email
      posts {
        title
        createdAt
      }
    }
  }
`;

fetch('https://api.example.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
});
```

### 3. ⚡ WebSocket API
Real-time communication:

```javascript
// WebSocket connection
const ws = new WebSocket('wss://api.example.com/chat');

ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'join',
    room: 'general'
  }));
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('New message:', message);
};
```

## 🔧 API Components Explained

### 1. 🎯 Endpoints
**URL paths** where API can be accessed:

```
https://api.example.com/v1/users          ← Users endpoint
https://api.example.com/v1/users/123      ← Specific user
https://api.example.com/v1/users/123/posts ← User's posts
```

### 2. 📝 HTTP Methods
Different **actions** you can perform:

| Method | Purpose | Example |
|--------|---------|---------|
| **GET** | Retrieve data | Get user profile |
| **POST** | Create new data | Create new user |
| **PUT** | Update entire resource | Update user profile |
| **PATCH** | Partial update | Update user email only |
| **DELETE** | Remove data | Delete user account |

### 3. 📊 Request/Response Format

**Request Example:**
```http
POST /api/v1/users HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
  "name": "Madhvendra Singh",
  "email": "madhvendra@example.com",
  "role": "developer"
}
```

**Response Example:**
```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 456,
  "name": "Madhvendra Singh",
  "email": "madhvendra@example.com",
  "role": "developer",
  "createdAt": "2025-06-07T10:30:00Z",
  "status": "active"
}
```

## ✅ API Advantages

### 1. 🔄 **Reusability**
```javascript
// Same API used by multiple clients
// Web app
fetch('https://api.example.com/products');

// Mobile app  
fetch('https://api.example.com/products');

// Desktop app
fetch('https://api.example.com/products');
```

### 2. 🛡️ **Security & Control**
```javascript
// API controls access
headers: {
  'Authorization': 'Bearer YOUR_TOKEN',
  'API-Key': 'your-secret-key'
}
```

### 3. 🔧 **Separation of Concerns**
```
Frontend Developer  ← → API ← → Backend Developer
(Focuses on UI)           (Focuses on Logic/Database)
```

### 4. 📈 **Scalability**
```
Multiple Servers can handle API requests:

Client → Load Balancer → API Server 1
                     ↘ API Server 2  
                     ↘ API Server 3
```

### 5. 🌍 **Platform Independence**
```javascript
// Same API works everywhere:
// ✅ JavaScript (Web)
// ✅ Swift (iOS)  
// ✅ Kotlin (Android)
// ✅ Python (Desktop)
// ✅ C# (.NET)
```

## 🎮 Practical Example: Social Media API

```javascript
// ========== SOCIAL MEDIA API EXAMPLE ==========

class SocialMediaAPI {
  constructor(baseURL, apiKey) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  // GET: Fetch user profile
  async getUserProfile(userId) {
    const response = await fetch(`${this.baseURL}/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

  // POST: Create new post
  async createPost(postData) {
    const response = await fetch(`${this.baseURL}/posts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    return response.json();
  }

  // PUT: Update post
  async updatePost(postId, updatedData) {
    const response = await fetch(`${this.baseURL}/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    return response.json();
  }

  // DELETE: Remove post
  async deletePost(postId) {
    const response = await fetch(`${this.baseURL}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
    return response.status === 204; // 204 = No Content (success)
  }
}

// Usage Example
const api = new SocialMediaAPI('https://api.socialmedia.com/v1', 'your-api-key');

// Fetch user data
const user = await api.getUserProfile(123);
console.log(user);

// Create a new post
const newPost = await api.createPost({
  title: "Learning APIs!",
  content: "APIs are amazing for connecting applications",
  tags: ["programming", "javascript", "api"]
});
console.log('Post created:', newPost);
```

## 🌟 Popular APIs for Practice

### 🔥 Free APIs to Try:
1. **JSONPlaceholder**: `https://jsonplaceholder.typicode.com/`
2. **OpenWeather**: `https://openweathermap.org/api`
3. **GitHub API**: `https://api.github.com/`
4. **REST Countries**: `https://restcountries.com/`
5. **Cat Facts**: `https://catfact.ninja/`

### 🧪 Quick Test:
```javascript
// Try this in your browser console
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => console.log(data));
```

---
© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)