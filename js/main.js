createBotMessage("this is a message from the Bot");
createUserMessage("This is a message from the userkj kjhakijasfd;kjhasdflk; jhdasf lkj hasd flkj hasdf khasd flk jhas dflk as f agfl kjaflk jas dflk jaf");
createBotMessage("this is a message from the Bot");
createUserMessage("This is a message from the userkj kjhakijasfd;kjhasdflk; jhdasf lkj hasd flkj hasdf khasd flk jhas dflk as f agfl kjaflk jas dflk jaf");
createBotMessage("this is a message from the Bot");
createUserMessage("This is a message from the userkj kjhakijasfd;kjhasdflk; jhdasf lkj hasd flkj hasdf khasd flk jhas dflk as f agfl kjaflk jas dflk jaf");
createBotMessage("this is a message from the Bot");
createUserMessage("This is a message from the userkj kjhakijasfd;kjhasdflk; jhdasf lkj hasd flkj hasdf khasd flk jhas dflk as f agfl kjaflk jas dflk jaf");
createBotMessage("this is a message from the Bot");
createUserMessage("This is a message from the userkj kjhakijasfd;kjhasdflk; jhdasf lkj hasd flkj hasdf khasd flk jhas dflk as f agfl kjaflk jas dflk jaf");

function createBotMessage(message_text) {
    var botMessage = document.createElement("div");
    botMessage.style = "width:max-content; max-width:80%; margin-right:20%; border-radius:15px 15px 15px 0; padding:10px; margin-top:15px";
    botMessage.className = "flow-text blue white-text";
    botMessage.innerHTML = message_text;
    document.getElementById("conversation").appendChild(botMessage);
}

function createUserMessage(message_text) {
    var botMessage = document.createElement("div");
    botMessage.style = "width:max-content;max-width:80%; margin-left:20%; border-radius:15px 15px 0 15px; padding:10px; margin-top:15px; border:1px solid lightgrey";
    botMessage.className = "flow-text white";
    botMessage.innerHTML = message_text;
    document.getElementById("conversation").appendChild(botMessage);
}
