from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import os
import pandas as pd
import re

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

def check_folder_exists(folder_path):
    if os.path.exists(folder_path) and os.path.isdir(folder_path):
        return True
    else:
        return False

def numerical_sort(value):
    parts = re.split(r'(\d+)', value)
    return [int(part) if part.isdigit() else part for part in parts]

@app.route('/api/process_data', methods=['POST'])
def run_script():
    data = request.json
    folderPath = data.get('folderPath')
    if not check_folder_exists(folderPath):
        return make_response(jsonify({"error":'Folder does not exist'}), 404)

    result = process_data(folderPath)
    return result

def process_data(folderPath):
    data_files = sorted([file for file in os.listdir(folderPath) if file.endswith('.txt') and file != 'execution_time.txt'], key=numerical_sort)

    if not data_files:
        return {"error": "No data files found"}
    
    dataframes = {}

    cnt = 0

    for file in data_files:
        file_path = os.path.join(folderPath, file)

        try:
            df = pd.read_csv(file_path)
            grouped_data = df.groupby(['tag', 'func_name']).agg({'start': 'min', 'end': 'max', 'msg_size': 'sum'}).reset_index()
            min_start = df['start'].min()
            max_end = df['end'].max()
            dataframes[file[:-4]] = {
                'start': int(min_start),
                'end': int(max_end),
                'data': grouped_data.to_dict(orient='records')
            }
        except Exception as e:
            return {"error": f"Error processing file {file_path}"}
        
        cnt = cnt + 1
        if(cnt == 10):
            break

    return dataframes

if __name__ == '__main__':
    app.run(debug=True)
