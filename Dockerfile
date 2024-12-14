FROM python:3.13.0-alpine
RUN pip install mkdocs-material
RUN pip install mkdocs-roamlinks-plugin
RUN pip install mkdocs-backlinks
EXPOSE 8000