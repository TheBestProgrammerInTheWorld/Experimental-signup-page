
//I used the comments to section off code.
//I indented the code and not the comments to make it easier to locate the sections.

// OPENING
    function input_deck(){
        // Grabs all the elements needed to be animated
        let title = document.getElementById('title');
        let signupBtn = document.getElementById('signupBtn');
        let username = document.getElementById('sign_username');
        let password = document.getElementById('sign_password');
        let con_password = document.getElementById('confirm_password');
        let email = document.getElementById('sign_email');

        // Uses objects to determind how the animation plays out
        // I chose to put these variables inside the function as it doesnt need to be used anywhere else, and it only plays once.
        let user_ani = {
            'transform': 'translate(0, 0)',
            'opacity': '1'
        }
        let pass_ani = {
            'transform': 'translate(0, 0)',
            'opacity': '1'
        }
        let conPass_ani = {
            'transform': 'translate(0, 0)',
            'opacity': '1'
        }
        let email_ani = {
            'transform': 'translate(0, 0)',
            'opacity': '1'
        }

        // The title and the signupBtn only have 1 condition changing at the start, and thus do not need to be in an object
        title.style.opacity = "1"
        signupBtn.style.opacity = "1"

        // Applys the animations to the elements
        Object.assign(username.style, user_ani);
        Object.assign(password.style, pass_ani);
        Object.assign(con_password.style, conPass_ani);
        Object.assign(email.style, email_ani);
    }

// SIGN UP CHANGES
    // When switching to the login, it fires these two functions
    function disable_sign(){
        // Grabs the title and the container for the form
        let sign_contain = document.getElementById('signup_form_container');
        let title = document.getElementById('title');

        // Moves the contents to the left and fades it out
        sign_contain.style.left = '0';
        sign_contain.style.opacity = '0';

        // I did not swap out the title element.
        // I hid the title for a moment and changed the text inside the element.
        title.style.transitionDelay = '0s';
        title.style.opacity = '0';

        //The rest is relatively repetitive.
        //Same functionality just reversed.
    }
    function enable_sign(){
        let sign_contain = document.getElementById('signup_form_container');
        let title = document.getElementById('title');

        sign_contain.style.left = '50%';
        sign_contain.style.opacity = '1';

        title.style.transitionDelay = '0.8s';
        title.style.opacity = '1';

        document.getElementById('switch').innerHTML = "Login"
        document.getElementById('title').innerHTML = "Create an account"
    }

// LOGIN CHANGES
    // When switching to the signup, it fires these two functions
    function disable_log(){
        let log_contain = document.getElementById('login_form_container');
        let title = document.getElementById('title');

        log_contain.style.left = '100%';
        log_contain.style.opacity = '0';

        title.style.transitionDelay = '0s';
        title.style.opacity = '0';
    }
    function enable_log(){
        let log_contain = document.getElementById('login_form_container');
        let title = document.getElementById('title');

        log_contain.style.left = '50%'
        log_contain.style.opacity = '1'

        title.style.transitionDelay = '0.8s'
        title.style.opacity = '1';

        document.getElementById('switch').innerHTML = "Sign Up"
        document.getElementById('title').innerHTML = "Login to your account"

    }

// SWITCH INTERFACE
    let trigger = 0
    function switch_interface(){
        if(trigger == 0){
            disable_sign();
            setTimeout(enable_log, 600)
            trigger = 1
        }else if(trigger == 1){
            disable_log();
            setTimeout(enable_sign, 600)
            trigger = 0
        }
    }