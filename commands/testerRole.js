module.exports = {
    name: 'tester',
    description: "tester command",
    execute(message, args){

        let role = message.guild.roles.cache.find(r => r.name === "Testers");

        if(!message.member.roles.cache.some(r => r.name === "Testers")){
            message.member.roles.add(role).catch(console.error);
            message.channel.send('Congrats you are now a Tester! Thank you for your upcoming serivce :)');
        }else{
            message.member.roles.remove(role).catch(console.error);
            message.channel.send('Thank you for your help, it is sad to see you leave the position. Join again anytime with the same command');
        }
    }
}