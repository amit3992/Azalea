'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = "amzn1.ask.skill.72cf969f-3580-49cb-be71-2c465c7599a3";  // TODO replace with your app ID (OPTIONAL).
const languageStrings = {
    'en': {
        translation: {
            SKILL_NAME: 'Night King',
            HELP_MESSAGE: 'You can say exit to quit skill',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

/*
For these keys, run this bit of code (value)
*/
const handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'SayHello': function () {
        let name = this.event.request.intent.slots.name.value;
        if(name) {
          this.emit(':tell', 'Hello, ' + name + '!');
        } else {
          this.emit('Hello');
        }

    },
    'whoIsThere': function() {
        this.emit(':tell', 'Your mom.');
    },
    'ruleBot': function() {
        let num = this.event.request.intent.slots.number.value;
        var speechData = ruleFuncton(num);
        this.emit(':tell', speechData);
    },
    'whoIs': function() {
        let fName = this.event.request.intent.slots.fName.value;
        let lName = this.event.request.intent.slots.lName.value;

        this.emit(':tell', "Getting information for " + fName + " " + lName + ". She is from House Stark.");
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};


var ruleFuncton = (num) => {

    switch(num) {

            case '1':
                return "Do the fucking work. Don't be lazy.";
            case '2':
                return "Stop fucking waiting. It's time to start.";
            case '3':
                return "Rely on yourself. The universe doesn't give a fuck.";
            case '4':
                return "Be fucking practical. Success is not a theory.";
            case '5':
                return "Be productive early. Don't fuck around all day.";
            case '6':
                return "Don't be a fucking baby. Life's hard. Get on with it.";
            case '7':
                return "Don't hangout with fuckwits.";
            case '8':
                return "Don't fucking waste your energy on shit you can't control.";
            case '9':
                return "Stop bullshitting. It's fucking embarrassing.";
            case '10':
                return "Stop being a fucking people pleaser. It's sad.";
            case '11':
                return "Stop putting toxic shit in your body.";
            case '12':
                return "Stop doing the same fucking thing and hoping things will change.";
            default:
                return "I've run out of rules. But, you got this! You're doing great!";

        }

}

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
