### Positioning
Build a view with a nav, main body, 3 columns, and footer. Add your code to `index.html` and test in the browser.

#### Manually Convert This Jade Syntax Into HTML5
```jade
doctypes
html
    head
        title My Cool Page
        link(href='/css/styles.css', rel='stylesheet')
    body
        header
            nav.navbar.navbar-dark.bg-dark.navbar-expand-lg
                a.navbar-brand(href='#') Navbar
                ul.navbar-nav.mr-auto
                    li.nav-item
                        a.nav-link Home
                    li.nav-item
                        a.nav-link About Us
                    li.nav-item
                        a.nav-link Contact Us
        section.container.mt-4
            .jumbotron
                h1 Home
                p.lead Grab some lipsum text and paste it here
                hr
                .text-right
                    button.btn.btn-primary Learn More
            .row
                .xs-col-12.col-sm-4
                    .card
                        img.card-img-top(alt='Card Image', src='http://via.placeholder.com/300x180')
                        .card-body
                            h5.card-title Card Title
                            p.card-text Some more lipsum text
                            a.btn.btn-primary Link Somewhere
                .xs-col-12.col-sm-4
                    .card
                        img.card-img-top(alt='Card Image', src='http://via.placeholder.com/300x180')
                        .card-body
                            h5.card-title Card Title
                            p.card-text Some more lipsum text
                            a.btn.btn-primary Link Somewhere
                .xs-col-12.col-sm-4
                    .card
                        img.card-img-top(alt='Card Image', src='http://via.placeholder.com/300x180')
                        .card-body
                            h5.card-title Card Title
                            p.card-text Some more lipsum text
                            a.btn.btn-primary Link Somewhere
        footer.bg-dark.mt-5
            div.text-center.text-white
                div.pt-2.pb-5 &copy; Copyright (current year)
```

### Styling
Style the HTML to match this mockup:

![Mockup](https://raw.githubusercontent.com/jcmcneal/web-development-training/master/HTML/positioning/css/styles.png)
