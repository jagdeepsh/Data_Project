import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from data_processor import *

def test_get_data():
    pdf_data = PDFData(path="../data/test_data/dataset3.pdf")
    data = pdf_data.get_data()

    assert isinstance(data, list)
    assert len(data) > 0

def test_set_data():
    pdf_data = PDFData(path="../data/test_data/dataset3.pdf")
    pdf_data.set_data(path="../data/test_data/new_dataset3.pdf")

    assert pdf_data.path == "../data/test_data/new_dataset3.pdf"