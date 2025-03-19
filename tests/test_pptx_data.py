import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from data_processor import *

def test_get_data():
    pptx_data = PPTXData(path="../data/test_data/dataset4.pptx")
    data = pptx_data.get_data()

    assert isinstance(data, list)
    assert len(data) > 0

def test_set_data():
    pptx_data = PPTXData(path="../data/test_data/dataset4.pptx")
    pptx_data.set_data(path="../data/test_data/new_dataset4.pptx")

    assert pptx_data.path == "../data/test_data/new_dataset4.pptx"