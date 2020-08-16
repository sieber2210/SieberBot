module.exports = {
    name: 'itch',
    description: "itch command",
    execute(message, args){

        if(message.member.roles.cache.has('743907319712186420')){
            message.channel.send('https://sieber2210.itch.io/');
        }else{
            message.channel.send('You need the Tester role to send this command');
        }
    }
}