import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from data_processor import *

def test_get_data():
    csv_data = CSVData(path="../data/test_data/dataset2.csv")
    data = csv_data.get_data()

    assert isinstance(data, list)
    assert len(data) > 0

def test_set_data():
    csv_data = CSVData(path="../data/test_data/dataset2.csv")
    csv_data.set_data(path="../data/test_data/new_dataset2.csv")

    assert csv_data.path == "../data/test_data/new_dataset2.csv"