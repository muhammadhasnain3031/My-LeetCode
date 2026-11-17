/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // 1. Har course ke liye alag khaali array banao (yeh batayega ke is course ke baad kaunse courses khulenge)
    const adj = Array.from({ length: numCourses }, () => []);
    
    // 2. Ek single array banao jo ginti rakhega ke har course se pehle kitne courses zaroori hain
    const inDegree = new Array(numCourses).fill(0);

    // 3. Prerequisites list se graph aur inDegree counts build karo
    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course); // prereq complete hone par 'course' unlock hoga
        inDegree[course]++;       // 'course' par ek aur shart (prerequisite) ka izafa ho gaya
    }

    // 4. Woh saare free courses queue mein daalo jin par koi shart nahi (inDegree 0 hai)
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // 5. Final valid sequence store karne ke liye array banao
    const order = [];

    // 6. Jab tak queue mein free courses maujood hain, ek-ek karke unhe complete karo
    while (queue.length > 0) {
        const curr = queue.shift(); // Queue ke aage se ek course nikalo
        order.push(curr);           // Is course ko final order list mein shamil karo

        // Ab check karo ke is course ke complete hone se kaun-kaun se agle courses unlock hotay hain
        for (const nextCourse of adj[curr]) {
            inDegree[nextCourse]--; // Agle course ki ek shart poori ho gayi, is liye count 1 kam karo

            // Agar agle course ki saari shartein poori ho gayin (0 ho gaya), to usay queue mein daal do
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }

    // 7. Agar saare courses order array mein aa gaye to order return karo, warna cycle ki wajah se [] return karo
    return order.length === numCourses ? order : [];
};
