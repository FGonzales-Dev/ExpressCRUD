# Express and MongoDB CRUD API

This is a simple CRUD API built using Express.js and MongoDB. It allows you to perform basic CRUD operations (Create, Read, Update, Delete) on notes.

## Table of Contents

## Features

- Create a new note
- Read a list of notes
- Update an existing note
- Delete a note

## Installation
1 Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB connection by modifying the mongoose.connect line in `db/connection.js`.

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Access the API using http://localhost:4500 (or the port you've configured).

## Endpoints

- `POST /api/v1/note/new`: Create a new note.
- `GET /api/v1/notes`: Fetch a list of all notes.
- `PUT /api/v1/note/:id`: Update a note by ID.
- `DELETE /api/v1/note/:id`: Delete a note by ID.
