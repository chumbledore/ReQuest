## Welcome to ReQuest (working title)
ReQuest is a ticket submission system that is currently focused on the perspective of vending machine companies.
It is designed with communication in mind, where users can create tickets that an admin (be it their supervisor, an operations manager, whomever the company decides) can view, confirm, deny, or edit.
The goal is to encourage communication, while also creating a centralized reference point for both parties to keep drivers and managers on the same page.
ReQuest's API is designed to handle tickets containing information for maintenance calls, merchandising requests, or scheduling changes, delivered to a central front end dashboard.


## Current Tools
### API
* C#/ASP.NET Core 5.0
* EntityFrameWork Core
* SQLServer
* CQRS Pattern with Mediator and AutoMapper.

### Front end
* React/Typescript
* Redux and ReduxJS Toolkit for Global State Management
* Material UI components and custom light/dark theme toggling

## As of 8/4/21
ReQuest is fully CRUD functional, with all data being transfered to a persisting datastore.

##  The Future
The current vision and immediate goals are implementing user authentication and admin role.
Ticket confirmation is still something I am contemplating how to handle, perhaps removing from the dashboard and creating another route for completed tickets for instance.
