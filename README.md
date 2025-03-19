## Overivew

This project is a data processing pipeline that reads JSON, CSV, PDF and PPTX files, proesses them,
and serves the data via a Flask API. The frontend fetches the processed data and displays it to users. The backend is implemented in Python, while the frontend utilizes HTML and JavaScript.

## Setup Instructions

### Backend (Flask API)

Ensure yoou have Python installed (recommended: Python 3.8 or later).

### Run the Flask server:

Navigate to the backend directory
key in `python app.py` in the command panel

### Frontend (HTML and JavaScript)

Install Live Server in VSCode Extensions by searching for `Live Server`
Open the project in VSCode and run with the live server application, button is located at the bottom righ hand corner of the screen

### Syncronisation

After running the Frontend using `Live Server`, ensure that the port that is running it is different from the backends servers port

## Testing Instructions

## Assumptions or Challenges

The input files with the format (JSON, CSV, PDF, PPTX) follow a standard structure
File parsing may have edge cases, such as incorrect formatting or missing fields
CORS policies may require configuration when making API requests from the frontend
Large datasets could impact performance; optimizations may be required
Proper error handling should be implemented to handle invalid files or API failures
