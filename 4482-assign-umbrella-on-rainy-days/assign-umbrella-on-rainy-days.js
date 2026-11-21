/**
 * @param {number[]} rain
 * @return {string[]}
 */
var assignUmbrella = function(rain) {
    const n = rain.length;
    const answer = [];
    
    // Dono ke umbrella lene ki ginti shuru mein 0 hai
    let aliceCount = 0;
    let bobCount = 0;

    for (let i = 0; i < n; i++) {
        // Check karo ke kya aaj Alice ko umbrella chahiye (aaj aur kal dono din barish ho)
        const aliceNeeds = (i < n - 1) && (rain[i] === 1 && rain[i + 1] === 1);
        
        // Check karo ke kya aaj Bob ko umbrella chahiye (aaj barish ho)
        const bobNeeds = (rain[i] === 1);

        if (aliceNeeds && bobNeeds) {
            // Dono ko chahiye: jiska count kam ya barabar hai (tie par Alice ko milega)
            if (aliceCount <= bobCount) {
                answer.push("Alice");
                aliceCount++;
            } else {
                answer.push("Bob");
                bobCount++;
            }
        } else if (aliceNeeds) {
            answer.push("Alice");
            aliceCount++;
        } else if (bobNeeds) {
            answer.push("Bob");
            bobCount++;
        } else {
            // Kisi ko nahi chahiye
            answer.push("None");
        }
    }

    return answer;
};
