module.exports = {
    name: 'ready', // event neve,
    once: true, // hanyszor listeningeljen az event.
    execute(client) {
        console.log(`Sikeresen bejeletkezett ${client.user.tag} néven.`)
        setInterval(()=>{
            client.user.setActivity("DreamCloud.hu", { type: "WATCHING"})
        },30000)
        client.user.setActivity("DreamCloud.hu", { type: "WATCHING"})
    }
}