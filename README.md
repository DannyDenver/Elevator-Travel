# Elevator-Travel-Time

Functions used to calculate elevator travel time based off floors visited.
## Quick Start

Install node packages

```bash
npm i
```

## Run Tests
```bash
npm test 
```

## Improvements
- memoization - caching results

## Future Development
- Deploy to AWS using Terraform and AWS Lambda
- Create API using AWS API Gateway
- Add timestamps to when elevator reaches a floor
- Analyze elevator trips
    * place elevator at best spot to pick up people at different times of the day
    * prioritize different floors - ie shopping level has priority over offices
    * slow or speed up elevator to pick up more people or transport faster
    * use machine learning ie tensorflow to decrease distance traveled to save electricity
- Send automated messages to maintenance team if elevator is acting strangely 
- Analayze weight of passengers to update velocity or energy demand based on time of day
