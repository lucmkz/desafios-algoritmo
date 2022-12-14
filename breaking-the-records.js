// challange -> https://www.hackerrank.com/challenges/breaking-best-and-worst-records
// solution -> https://youtu.be/VYvdtAOWyUU

function breakingRecords(scores) {
    // Write your code here
    
    const scoreArray = [0, 0]
    const records = {
        max: scores[0],
        min: scores[0]
    }
    
    scores.forEach(score => {
        if(score > records.max){
            records.max = score
            scoreArray[0]++
        }
        
        if (score < records.min) {
            records.min = score
            scoreArray[1]++
        }
    })
    
    return scoreArray
}
