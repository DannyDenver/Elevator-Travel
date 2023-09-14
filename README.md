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
    * Negotiate with energy company to get special rates for specific time slots of high elevator electrical use
- Analyze passenger behavior
    * many trips with high weight to shopping floor but low revenue
    * many trips to rooftop patio at night but not during the day 
        - invest in night lighting not umbrellas
- Send automated messages to maintenance team if elevator is acting strangely
    * elevator doesn't arrive at floors at expected times
- Analayze weight of passengers 
    * Update velocity based on weight
    * continuous monitoring 
        - if weight oscillates very quickly and travel time is off, send urgent automated text message to maintenance team
