# Inhouse Job Postings - JobHub

## Description 
Provides the recruiter the ability to create and manage postings for applicants to apply.

## Job Posting Model

Each job posting has the following attributes:

- `id` : A unique ID generated for each user.  
    Type: `String`,
- `recruiter` : A Global Unique Identifier for the recruiter.  
    Type: `String`, Required: `true`
- `title` : The title of the position of the job.  
    Type: `String`, Required: `true`
- `description` : The description of the job position.  
    Type: `String`, Required: `true`
- `location` : The location of the job.  
    Type: `String`, Required: `true`
- `salary` : The yearly salary for the position.  
    Type: `Number`, Required: `true`
- `requirements` : All the requirements needed for the job.  
    Type: `String`, Required: `true`
- `company` : The company name.  
    Type: `String`, Required: `true`
- `start date` : The date the applicant will start working.  
    Type: `String`, Required: `true`
- `end date` : The date the applicant will finish working if it is a contract position.  
    Type: `String`
- `posting date` : Generated date of the posting.  
    Type: `String`, Required: `true`
- `deadline` : The deadline for the applicant to apply.  
    Type: `String`, Required: `true`

## Getting Started

git clone https://github.com/scrum-gang/inhouse-postings.git  
cd inhouse-postings  
npm install  
npm start  

## Deployement

Builds are automated using Travis and deployed on Heroku.

There is one Heroku deployments:

-  <https://inhouse-jobpostings.herokuapp.com/>

## Endpoints

| Endpoint | Method | Header | Body | Output |
|----------|--------|--------|------|--------|
| /posting/create | POST | "Authorization": "Bearer [INSERT_JWT]" | recruiter: String
title: String
description: String | Creates a new job posting, returns the posting with the generated id |
| /posting/id/:id  | GET |  | Body | Output |
| /posting/recruiter/:recruiter | GET |  | Body | Output |
| /posting/allpostings| GET |  | Body | Output |
| /posting/:id | PUT | "Authorization": "Bearer [INSERT_JWT]" | Body | Output |
| /posting/dropall  | DELETE | "Authorization": "Bearer [INSERT_JWT]" | Body | Output |
| /posting/id/:id  | DELETE | "Authorization": "Bearer [INSERT_JWT]" | Body | Output |





