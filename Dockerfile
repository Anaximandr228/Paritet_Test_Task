FROM python:3.9

WORKDIR /app
COPY requirements.txt requirements.txt

RUN python -m pip install --upgrade pip && python -m pip install -r requirements.txt

COPY Test_Task/ .