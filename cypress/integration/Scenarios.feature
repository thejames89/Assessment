Feature: Space X Assessment
I want to go to the Space X Website

Scenario: Data should load onto the page

Given the page loads
Then a screen will appear with a list of Space API results

Scenario: Filter by year

When setting filter by year to 2015
Then return a list of only launches in 2015

Scenario: Order should be done alphabetically

Given no year filter is on
When ordering is done descending
Then items should be ordered alphabetically