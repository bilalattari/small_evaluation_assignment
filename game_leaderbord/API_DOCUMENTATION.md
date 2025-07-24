# PADEL UG Game Leaderboard API Documentation

This document provides comprehensive API documentation for the PADEL UG Game Leaderboard backend, designed for mobile app integration.

## Base URL
```
http://localhost:3000/api
```

## Authentication
Currently, the API doesn't require authentication. In production, you should implement proper authentication mechanisms.

## API Endpoints

### 1. Get All Users
**GET** `/users`

Returns a list of all users with pagination support.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Number of items per page (default: 10)
- `search` (optional): Search term for name, title, or ogCode
- `approval` (optional): Filter by approval status (Approved, Pending, Rejected)
- `status` (optional): Filter by user status (Scull, Ripple, Jail, Active)
- `sortBy` (optional): Sort field (points, name, matches, won)
- `sortOrder` (optional): Sort order (asc, desc)

**Example Request:**
```bash
GET /api/users?page=1&limit=10&search=brandon&approval=Approved&sortBy=points&sortOrder=desc
```

**Response:**
```json
{
  "players": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "ogCode": 34034474,
      "name": "Brandon Clark",
      "title": "Hitman",
      "rank": "Gold",
      "points": 66.2,
      "attack": {
        "greenBomb": 2,
        "blackBomb": 1,
        "redBomb": 0
      },
      "defence": 1,
      "status": "Scull",
      "matches": 3403,
      "won": 3403,
      "approval": "Approved",
      "profilePicture": "",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-20T14:45:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "pages": 15
  }
}
```

### 2. Get Single User
**GET** `/users/{ogCode}`

Returns detailed information about a specific user.

**Path Parameters:**
- `ogCode`: The user's OG Code (number)

**Example Request:**
```bash
GET /api/users/34034474
```

**Response:**
```json
{
  "player": {
    "_id": "507f1f77bcf86cd799439011",
    "ogCode": 34034474,
    "name": "Brandon Clark",
    "title": "Hitman",
    "rank": "Gold",
    "points": 66.2,
    "attack": {
      "greenBomb": 2,
      "blackBomb": 1,
      "redBomb": 0
    },
    "defence": 1,
    "status": "Scull",
    "matches": 3403,
    "won": 3403,
    "approval": "Approved",
    "profilePicture": "",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-20T14:45:00.000Z"
  }
}
```

### 3. Create New User
**POST** `/users`

Creates a new user in the system.

**Request Body:**
```json
{
  "ogCode": 12345678,
  "name": "John Doe",
  "title": "Outsider",
  "rank": "Bronze",
  "points": 0,
  "attack": {
    "greenBomb": 0,
    "blackBomb": 0,
    "redBomb": 0
  },
  "defence": 1,
  "status": "Active",
  "matches": 0,
  "won": 0,
  "approval": "Pending",
  "profilePicture": ""
}
```

**Required Fields:**
- `ogCode` (number): Unique identifier for the user
- `name` (string): User's full name
- `points` (number): User's points

**Response:**
```json
{
  "player": {
    "_id": "507f1f77bcf86cd799439012",
    "ogCode": 12345678,
    "name": "John Doe",
    "title": "Outsider",
    "rank": "Bronze",
    "points": 0,
    "attack": {
      "greenBomb": 0,
      "blackBomb": 0,
      "redBomb": 0
    },
    "defence": 1,
    "status": "Active",
    "matches": 0,
    "won": 0,
    "approval": "Pending",
    "profilePicture": "",
    "createdAt": "2024-01-21T10:00:00.000Z",
    "updatedAt": "2024-01-21T10:00:00.000Z"
  }
}
```

### 4. Update User
**PUT** `/users/{ogCode}`

Updates an existing user's information.

**Path Parameters:**
- `ogCode`: The user's OG Code (number)

**Request Body:**
```json
{
  "name": "John Doe Updated",
  "points": 100,
  "status": "Active",
  "approval": "Approved"
}
```

**Response:**
```json
{
  "player": {
    "_id": "507f1f77bcf86cd799439012",
    "ogCode": 12345678,
    "name": "John Doe Updated",
    "title": "Outsider",
    "rank": "Bronze",
    "points": 100,
    "attack": {
      "greenBomb": 0,
      "blackBomb": 0,
      "redBomb": 0
    },
    "defence": 1,
    "status": "Active",
    "matches": 0,
    "won": 0,
    "approval": "Approved",
    "profilePicture": "",
    "createdAt": "2024-01-21T10:00:00.000Z",
    "updatedAt": "2024-01-21T10:30:00.000Z"
  }
}
```

### 5. Delete User
**DELETE** `/users/{ogCode}`

Deletes a user from the system.

**Path Parameters:**
- `ogCode`: The user's OG Code (number)

**Response:**
```json
{
  "message": "Player deleted successfully"
}
```

### 6. Search Users
**GET** `/users/search`

Advanced search and filtering endpoint.

**Query Parameters:**
- `search` (optional): Search term for name, title, or ogCode
- `approval` (optional): Filter by approval status
- `status` (optional): Filter by user status
- `sortBy` (optional): Sort field
- `sortOrder` (optional): Sort order (asc, desc)
- `page` (optional): Page number
- `limit` (optional): Items per page

**Example Request:**
```bash
GET /api/users/search?search=brandon&approval=Approved&sortBy=points&sortOrder=desc&page=1&limit=10
```

**Response:**
```json
{
  "players": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "pages": 15
  }
}
```

## Data Models

### User Object
```json
{
  "_id": "ObjectId",
  "ogCode": "number (required, unique)",
  "name": "string (required, max 50 chars)",
  "title": "string (enum: Hitman, Don, Phantom, Boogeyman, Outsider)",
  "rank": "string (default: Bronze)",
  "points": "number (required)",
  "attack": {
    "greenBomb": "number (default: 0)",
    "blackBomb": "number (default: 0)",
    "redBomb": "number (default: 0)"
  },
  "defence": "number (default: 1)",
  "status": "string (enum: Scull, Ripple, Jail, Active)",
  "matches": "number (default: 0)",
  "won": "number (default: 0)",
  "approval": "string (enum: Approved, Pending, Rejected)",
  "profilePicture": "string (optional)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "OG Code, name and points are required"
}
```

### 404 Not Found
```json
{
  "error": "Player not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Database connection error"
}
```

## Mobile App Integration Examples

### React Native Example
```javascript
// Get all users
const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();
    return data.players;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// Create new user
const createUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data.player;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

// Update user
const updateUser = async (ogCode, userData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${ogCode}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data.player;
  } catch (error) {
    console.error('Error updating user:', error);
  }
};
```

### Flutter Example
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

class UserService {
  static const String baseUrl = 'http://localhost:3000/api';

  // Get all users
  static Future<List<Map<String, dynamic>>> getUsers() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/users'));
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return List<Map<String, dynamic>>.from(data['players']);
      }
    } catch (e) {
      print('Error fetching users: $e');
    }
    return [];
  }

  // Create new user
  static Future<Map<String, dynamic>?> createUser(Map<String, dynamic> userData) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/users'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(userData),
      );
      if (response.statusCode == 201) {
        final data = json.decode(response.body);
        return data['player'];
      }
    } catch (e) {
      print('Error creating user: $e');
    }
    return null;
  }
}
```

## Environment Setup

1. **MongoDB Connection**: Update the `MONGODB_URI` in `.env.local` file
2. **CORS**: For production, configure CORS to allow your mobile app domain
3. **Rate Limiting**: Consider implementing rate limiting for production use
4. **Authentication**: Implement proper authentication for production

## Development

To run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api` 