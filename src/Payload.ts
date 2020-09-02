const Payload = {
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "Container",
            "style": "emphasis",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Quick Poll",
                    "wrap": true
                }
            ],
            "padding": "Default"
        },
        {
            "type": "Container",
            "id": "d96d06ec-2a33-c8cc-4698-430ae87f772f",
            "padding": "Default",
            "items": [
                {
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": "Take 2 minutes to help us plan the upcoming conference",
                    "wrap": true
                }
            ],
            "spacing": "None",
            "separator": true
        },
        {
            "type": "Container",
            "id": "885220a9-5ab1-95dd-5b66-20f42c452fa9",
            "padding": "Default",
            "items": [
                {
                    "type": "TextBlock",
                    "weight": "Bolder",
                    "text": "Where should we host the conference?",
                    "wrap": true
                }
            ],
            "separator": true,
            "spacing": "None"
        },
        {
            "type": "Container",
            "id": "10017c5a-5ee9-46c5-537a-bdd9ab61225c",
            "padding": {
                "top": "None",
                "bottom": "Default",
                "left": "Default",
                "right": "Default"
            },
            "items": [
                {
                    "type": "Input.ChoiceSet",
                    "id": "Options",
                    "spacing": "None",
                    "placeholder": "Placeholder text",
                    "choices": [
                        {
                            "title": "Radisson",
                            "value": "Radisson"
                        },
                        {
                            "title": "Hilton",
                            "value": "Hilton"
                        },
                        {
                            "title": "Sheraton Downtown",
                            "value": "Sheraton Downtown"
                        },
                        {
                            "title": "W Downtown",
                            "value": "W Downtown"
                        },
                        {
                            "title": "Clarks",
                            "value": "Clarks"
                        }
                    ],
                    "style": "expanded"
                }
            ],
            "spacing": "None"
        },
        {
            "type": "Container",
            "spacing": "None",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Other:",
                    "wrap": true,
                    "horizontalAlignment": "Left"
                }
            ],
            "padding": {
                "top": "None",
                "bottom": "None",
                "left": "Default",
                "right": "Default"
            }
        },
        {
            "type": "Container",
            "id": "3734939f-dd4d-79be-cf3c-2ad791f382ba",
            "padding": {
                "top": "Default",
                "bottom": "None",
                "left": "Default",
                "right": "Default"
            },
            "items": [
                {
                    "type": "Input.Text",
                    "id": "Suggestions",
                    "placeholder": "Have another suggestion?"
                }
            ],
            "spacing": "None"
        },
        {
            "type": "Container",
            "id": "a27409f1-a48e-982f-8e26-594bdd1468e8",
            "padding": "Default",
            "items": [
                {
                    "type": "ActionSet",
                    "horizontalAlignment": "Left",
                    "actions": [
                        {
                            "type": "Action.Submit",
                            "title": "Submit",
                            "method": "POST",
                            "url": "https://messagecardplaygroundfn.azurewebsites.net/api/HttpPost?code=zJaYHdG4dZdPK0GTymwYzpaCtcPAPec8fTvc2flJRvahwigYWg3p0A==&message=The Poll is submitted successfully",
                            "body": "{Option: {{Options.value}}, SuggestionText: {{Suggestions.value}}}",
                            "isPrimary": true,
                            "style": "positive"
                        }
                    ]
                }
            ],
            "spacing": "None"
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.0",
    "padding": "None"
};

export default Payload;