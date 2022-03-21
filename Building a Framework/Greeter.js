(function(global, $) {
    const Greeter = (firstName, lastName, language) => {
        return new Greeter.init(firstName, lastName, language);
    }

    const supportedLangs = ["en", "es"];

    var greetings = {
        en: "Hello",
        es: "Hola"
    }

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    }

    var logMessages = {
        en: "Logged in",
        es: "Inicio sesion"
    }

    Greeter.prototype = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + " " + this.firstName + "!"
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + " " + this.fullName() + "!"
        },

        greet: function(formal) {
            let msg;

            //if undefined or null it will be coerced to "false"
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting()
            }

            if (console) {
                console.log(msg);
            }

            //"this" refers to the calling object at execution time
            //makes the method chainable

            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ": " + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw "jQuery not loaded";
            }

            if (!selector) {
                throw "Missing jQuery selector";
            }

            let msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    }

    Greeter.init = function(firstName, lastName, language) {
        
        let self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

        self.validate();

    }

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = Greeter;

}(window, jQuery))
