import os
from flask import Flask, jsonify
from flask_cors import CORS
from data_processor import *


app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = data_processor.get_data()
    return jsonify(data)


@app.route('/api/data/<file_type>', methods=['GET'])
def get_data_file_type(file_type):
    data = data_processor.get_data_file_type(filetype=file_type)
    return jsonify(data)

if __name__ == "__main__":
    # Load files
    json_data = JSONData("../data/dataset1.json")
    csv_data = CSVData("../data/dataset2.csv")
    pdf_data = PDFData("../data/dataset3.pdf")
    pptx_data = PPTXData("../data/dataset4.pptx")
    
    # Compile all files and run API server side
    data_processor = DataProcessor(json=json_data, csv=csv_data, pdf=pdf_data, pptx=pptx_data)
    port = int(os.getenv("FLASK_RUN_PORT", 5019))
    app.run(host="0.0.0.0", port=port, debug=True)