# Data Visualization tool

Repository for a tool to visualize bulk data generated from parallel processes.

## Installation

This tool is build with D3js, Python and React. So, We must have Python and NodeJS installed in our system.

- Clone the repo 
```git
git clone https://github.com/navik11/Data-Visualization
```
- Get into the project folder.
- Run `npm install`, to installed the dependencies.
- Setup the Python virtual enviroment by `source appenv/bin/activate`
- Run `python processor/main.py` to start the data processor, this will help us to process the data and returns a JSON data which can be plotted easly with the help of D3js (this will consume the localhost:5000).
- Start the tool by running `npm run dev`

- The application is in ready state at http://localhost:5173.