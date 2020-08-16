module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args){
        message.channel.send('!tester => recieve the Tester role to be able to view and test projects' + '\n' + '!fan => recieve the Fans And Supporters role to show your support'
        + '\n' + '!itch => after getting the Tester role you can use this command to view Sieber Studios itch.io page to view any and all projects currently posted'
        + '\n' + '!patreon => link to my OnlyFans page where you can check out some posts and possibly donate if you feel so inclined!');
    }
}