const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const team = [[], [], []];
    let per = '';
    let left = 'Оставшиеся студенты:';
    for (let i = 0; i < 3; i++) {        
        let per = '';
        for (let key = 0; key < 3; key++) {
            
            team[i].push(arr[0]);
            /* console.log(per); */
            arr.shift();
             
            
        }
        /* console.log(team); */
    }
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            left += ' ' + arr[i] + ',';
        }
    } else {
        left += ' ' + '-';
    }
    console.log(left.length);
if (left.length > 22) {
    left = left.slice(0, -1);
}
    
team.push(left);
return team;
}

console.log(sortStudentsByGroups(students));