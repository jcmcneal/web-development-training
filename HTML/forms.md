## HTML Forms
> Using HTML only, create a form with the requirements below:

#### Form
    - has an id
    - post to https://httpbin.org/post
    - has a hidden field with name token and a unique value

#### Create a fieldset, "Basic Info", around:
    - first name
    - last name
    - email
    - password and confirm password fields

#### Create a fieldset, "Additional Info", around:
    - birthday - should have a calendar selector
    - age - max length 3 and only allow numbers
    - state field - max length 2
    - 2 radio buttons for "New to development"
        - Yes / No

#### Create a fieldset around:
    - Dropdown for "Favorite Food" with 3 options
        - First option should be disabled that says, "Select an option"
    - Dropdown with multi-select for "Top 3 Colors"
    - checkbox for "I accept the terms and conditions"
        - wrap "terms and conditions" in an anchor tag with an empty href
    - submit button

#### Requirements
* All input fields should have placeholders and be required
* Email field should be a valid email address
* Password should have a minimum of 8 characters
* Birthday should have
    - min date of 1900-01-01
    - max date of current date
