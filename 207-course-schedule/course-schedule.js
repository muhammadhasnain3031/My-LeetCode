/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    const adj = Array.from({length : numCourses},()=>[]);
    const inDegree = new Array(numCourses).fill(0);
    for(const [courses , prereq] of prerequisites){
        adj[prereq].push(courses);
        inDegree[courses]++
    }
    const queue = [];
    for(let i=0; i<numCourses; i++){
        if(inDegree[i]=== 0){
            queue.push(i);
        }
    }
    let completedCourses = 0;
    while(queue.length > 0){
        const curr = queue.shift();
        completedCourses++;
        for(const nextCourses of adj[curr]){
            inDegree[nextCourses]--;
            if(inDegree[nextCourses]===0){
                queue.push(nextCourses);
            }
        }
    }
    return completedCourses === numCourses

    
};