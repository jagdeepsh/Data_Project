## Overivew

This project is a data processing pipeline that reads JSON, CSV, PDF and PPTX files, proesses them,
and serves the data via a Flask API. The frontend fetches the processed data and displays it to users. The backend is implemented in Python, while the frontend utilizes HTML and JavaScript.

The project has features of OOP style programming in the backend primarily with functional programming in the frontend.

## Setup Instructions

### Backend (Flask API)

Ensure yoou have Python installed (recommended: Python 3.8 or later).

#### Run the Flask server:

- Navigate to the backend directory
- key in `python app.py` in the command panel

### Frontend (HTML and JavaScript)

- Install Live Server in VSCode Extensions by searching for `Live Server`
- Open the project in VSCode and run with the live server application, button is located at the bottom righ hand corner of the screen

### Syncronisation

After running the Frontend using `Live Server`, ensure that the port that is running it is different from the backends servers port. This port can be displayed at the same button found from the `Live Server`

Make sure that the JavaScript file in frontend has the same `const BASE_URL` last 4 digits as the one being used in the backends local server host. By default it has been set to port 5000 in app.py.

However, if you are facing issues where that port is already being used up after first running `app.py`, switch the value `5018` (this can be found at the bottom of the script, the last two lines or app.py) to another port that is able to run on the backend server first, afterwhich, set the frontends JavaScript `const BASE_URL` last 4 digits to be the exact same number so that you can make API requests.

## Testing Instructions

The test cases are created for backend tesing. Navigate to your tests folder and run: `pytest`

## Assumptions or Challenges

- The input files with the format (JSON, CSV, PDF, PPTX) follow a standard structure
- File parsing may have edge cases, such as incorrect formatting or missing fields
- CORS policies may require configuration when making API requests from the frontend
- Large datasets could impact performance; optimizations may be required
- Proper error handling should be implemented to handle invalid files or API failures
