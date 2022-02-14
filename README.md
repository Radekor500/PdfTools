# PdfTools

PdfTools is a simple WebApp which offers some useful pdf utilities. You can:

* merge pdf files,
* split pdf document into multiple files and download them as zip archive,
* extract multiple page ranges from single pdf document.

PdfTools can be deployed locally or in a docker container.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

The things you need before installing the software.

* .NET 6.0
* Node.js

## Installing locally

You can run the project locally with a few simple steps:

```
git clone https://github.com/Radekor500/PdfTools.git
cd cd PdfTools/PdfMergerApi
dotnet run
```

## Running with docker

```
docker run -d -p 5000:5000 chupacabra500/pdf_tools
```

## Used technologies

* ASP.NET Core
* Angular
