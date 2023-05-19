# Use Case Diagram

## Client

- Create Appointment

### Admin

- Login
- Register
- Create Car
- Update Car
- Remove Car

# Activity Diagram

## Create Appointment

- Client visits Catalogue
- Client select a car
- Client do Data Entry
- Client sumbit to server
- System validate data

  - if valid

    - System save data
    - System sends succes confirmation to Client
    - Website Shows Confirmation

  - if invalid

    - System sends error message to Client
    - Website ask Client to re-enter Data

## Create Car

- Admin visits Cars page in Admin Panel
- Admin do Data Entry
- Client sumbit to server
- System validate data

  - if valid

    - Website Shows Confirmation
    - System save data
    - System sends succes confirmation to Client

  - if invalid

    - System sends error message to Client
    - Website ask Client to re-enter Data

## Update Car

- Admin visits Cars page in Admin Page
- Admin select a car to edit
- Admin edit Car data
- Client sumbit to server
- System validate data

  - if valid

    - Website Shows Confirmation
    - System save data
    - System sends succes confirmation to Client

  - if invalid

    - System sends error message to Client
    - Website ask Client to re-enter Data

## Remove Car

- Admin visits Cars page in Admin Page
- Admin select a car to delete
- Admin confirm and submit requst to System
- System delete data

  - if success

    - System sends succes confirmation to Client

  - if failed

    - System sends error message to Client
