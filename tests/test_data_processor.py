import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from data_processor import *

def test_get_file_type():
    json_data = JSONData(path="../data/test_data/dataset1.json")
    csv_data = CSVData(path="../data/test_data/dataset2.csv")
    data_processor = DataProcessor(json=json_data, csv=csv_data)

    json_data_result = data_processor.get_data_file_type("json")
    assert isinstance(json_data_result, list)
    assert len(json_data_result) > 0

    csv_data_result = data_processor.get_data_file_type("csv")
    assert isinstance(csv_data_result, list)
    assert len(csv_data_result) > 0


def test_set_file():
    json_data = JSONData(path="../data/test_data/dataset1.json")
    csv_data = CSVData(path="../data/test_data/dataset2.csv")
    data_processor = DataProcessor(json=json_data, csv=csv_data)

    json_data_replace = JSONData(path="../data/test_data/new_dataset1.json")
    data_processor.set_file(json=json_data_replace)

    json_data_replace_result = data_processor.get_data_file_type("json")
    assert isinstance(json_data_replace_result, list)
    assert len(json_data_replace_result) > 0