/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
const languageStrings = {
    'en': {
        translation: {
            SKILL_NAME: 'Greeter',
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
        this.emit(':tell', 'Hello, ' + name + '!');
    }, 
    'whoIsThere': function() {
        this.emit(':tell', 'Your mom.');
    },
    'ruleBot': function() {
        let num = this.event.request.intent.slots.number.value;
        switch(num) {
            
            case '1':
                this.emit(':tell', "Do the fucking work. Don't be lazy.");
                break;
            case '2':
                this.emit(':tell', "Stop fucking waiting. It's time to start.");
                break;
            case '3':
                this.emit(':tell', "Rely on yourself. The universe doesn't give a fuck.");
                break;
            case '4':
                this.emit(':tell', "Be fucking practical. Success is not a theory.");
                break;
            case '5':
                this.emit(':tell', "Be productive early. Don't fuck around all day.");
                break;
            case '6':
                this.emit(':tell', "Don't be a fucking baby. Life's hard. Get on with it.");
                break;
            case '7':
                this.emit(':tell', "Don't hangout with fuckwits.");
                break;
            case '8':
                this.emit(':tell', "Don't fucking waste your energy on shit you can't contol.");
                break;
            case '9':
                this.emit(':tell', "Stop bullshitting. It's fucking embarrassing.");
                break;
            case '10':
                this.emit(':tell', "Stop being a fucking people pleaser. It's sad.");
                break;
            case '11':
                this.emit(':tell', "Stop putting toxic shit in your body.");
                break;
            case '12':
                this.emit(':tell', "Stop doing the same fucking thing and hoping things will change.");
                break;
            default:
                this.emit(':tell', "I've run out of rules. But, you got this! You're doing great!");
                break;
        }
        
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

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};