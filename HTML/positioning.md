### Positioning
Build a view with a nav, main body, 3 columns, and footer

#### Manually Convert This Jade Syntax Into HTML5
```jade
!!! 5
html
    head
        title= My Cool Page
    body
        header.container-fluid
            nav.navbar.navbar-dark.bg-dark
                a.navbar-brand(href=#) Navbar
                ul.navbar-nav
                    li.nav-item
                        a.nav-link Home
                    li.nav-item
                        a.nav-link About Us
                    li.nav-item
                        a.nav-link Contact Us
        section.container
            .row
                .xs-col-12
                    .jumbotron
                        h1 Home
                        p.lead Grab some lipsum text and paste it here
                        hr
                        .text-right
                            button.btn.btn-primary Learn More
            .row
                .xs-col-12.col-sm-4
                    .card
                        img.card-img-top(alt='Card Image')
                        .card-body
                            h5.card-title Card Title
                            p.card-text Some more lipsum text
                            a.btn.btn-primary Link Somewhere
                .xs-col-12.col-sm-4
                    .card
                        img.card-img-top(alt='Card Image')
                        .card-body
                            h5.card-title Card Title
                            p.card-text Some more lipsum text
                            a.btn.btn-primary Link Somewhere
                .xs-col-12.col-sm-4
                    .card
                        img.card-img-top(alt='Card Image')
                        .card-body
                            h5.card-title Card Title
                            p.card-text Some more lipsum text
                            a.btn.btn-primary Link Somewhere
        footer.container-fluid.bg-dark
            .row
                .xs-col-12
                    p.text-center &copy; Copyright (current year)
```


