function bossRush(array) {
    let numInputs = Number(array.shift());
    
    for (let i = 0; i < numInputs; i++) {
        let line = array[i];
        let pattern = /^\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#$/;
        let matches = line.match(pattern);
        
        if (matches) {
            let bossName = matches[1];
            let title = matches[2];
            console.log(`${bossName}, The ${title}\n>> Strength: ${bossName.length}\n>> Armor: ${title.length}`);
           
        } else {
            console.log("Access denied!");
        }
    }
}
bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#']);