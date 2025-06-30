# ADM-VPC
Faddom ADM-VPC Project
Creating apps within a VPC for app dependency mapping POC

Create a 3-tier application with network traffic across subnets, suitable for dependency mapping with Faddom. 
Application Architecture 
•	Build a simple VPC with average availability and performance
•	Deploy a Node.js web app on Elastic Beanstalk (or IIS on Win2022-Server-1) for the web tier.
•	Run a PowerShell script on Win2019-Server-1 for the application tier, listening on port 8080.
•	Run a  PowerShell script on Win2016-Server-1 for the data tier, serving data on port 8081.
•	Update ServerSecurityGroup to allow ports 8080 and 8081 within the VPC.
•	Test the application and verify traffic in VPC Flow Logs for Faddom analysis.
