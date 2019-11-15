
    function generateDomains (){
        var pronouns = ['the', 'our'];
        var adjectives = ['great', 'awesome', 'big', 'cool', 'blithesome'];
        var nouns = ['australia', 'racoon', 'jogger', 'engineer', 'volvo', 'friday'];        
        var possibleDomains = [];
        for (i=0; i<pronouns.length; i++){
            for (j=0; j<adjectives.length; j++){
                for (k=0; k<nouns.length; k++){
                    possibleDomains.push(pronouns[i] + adjectives[j] + nouns[k] + ".com");
                }
            }
        }
            return (possibleDomains);
    }
    console.log(generateDomains());