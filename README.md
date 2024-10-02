# Hexagonal Architecture - Frontend

We need to divide our project in modules such as user module, post module, etc. In addition, we'll have a Shared Module that contains the same 3 sections of the Hexagonal Architecture (Domain, Application and Infrastructure Layer).

We could use Object Oriented Programming or Functional Programming, it's more common to use Functional Programming in the Frontend.

## Domain Layer

All our business logic is here.

- Entity: It owns the interface or type about our Model.

- Entity Validations: It works like a Value Objects of the Backend Side. Sometimes, we'll use them as a mapper for some property.

- Errors: We can return custom errors just by extending the Error or AxiosError constructor.

- Repositories: It contains the interface of the Infrastructure Repositories. Every function in the Infrastructure Repository will return this Repository.

## Application Layer

We found our services or use cases in this layer.

- Use cases / Services: We'll handle our errors or Entity Validations on the Frontend Side. Besides, we must inject our repositories as a param into the Service Function.

- DTOs: They're models in order to return a specific data to the client so it makes sense.

- Mappers: They transform from DTOs to Entity Interface or vice versa.

## Infrastructure Layer

We'll have our Repositories and Schemas here. We can use third party libraries in this layer.

- Repositories: It implements and returns the Base Repository that will be injected into the Services / Use Cases. It's usually made up of an HTTP Request by means of which we'll use Axios, Fetch or React Query.

- Schemas: They contains the structure of our Model and will have our Data Type Validations (what the user will send through the form)

### Shared Module

We found the same folders or layers (Domain, Application and Infrastructre one). It'll have the shared DTOs, mappers, repositories, and so on
