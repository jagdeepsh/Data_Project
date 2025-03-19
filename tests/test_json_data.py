import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from data_processor import *

def test_get_data():
    json_data = JSONData(path="../data/test_data/dataset1.json")
    data = json_data.get_data()

    assert isinstance(data, list)
    assert len(data) > 0

def test_set_data():
    json_data = JSONData(path="../data/test_data/dataset1.json")
    json_data.set_data(path="../data/test_data/new_dataset1.json")

    assert json_data.path == "../data/test_data/new_dataset1.json"