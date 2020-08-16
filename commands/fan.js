module.exports = {
    name: 'fan',
    description: "fan command",
    execute(message, args){

        let role = message.guild.roles.cache.find(r => r.name === "Fans And Supporters");

        if(!message.member.roles.cache.some(r => r.name === "Fans And Supporters")){
            message.member.roles.add(role).catch(console.error);
            message.channel.send('Welcome and thank you for being a fan and supporter of Sieber Studios');
        }else{
            message.member.roles.remove(role).catch(console.error);
            message.channel.send('Thank you for being a fan and supporter, it is sad to see you leave this role. Join again anytime with the same command');
        }
    }
}