const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let res = "";
        let time = {};
        const copyPlan = {};
        Object.assign(copyPlan, plan);
        /* console.log(copyPlan);  */ 
        for (let key in copyPlan) {
            /* console.log(key);   */      
            if (key === 'skills') {
                for (let j in copyPlan[key]) {
                    /* console.log(j); */
                    if (j === 'languages') {
                        Object.assign(time, copyPlan[key][j]);
                        /* time = {...copyPlan[key][j]}; */
                        }
                    }
                }               
            }
            /* console.log(time);   */
            let ans = '';
            /* console.log(time); */
            for (let j in time) {
                ans += time[j] + ' ';
            }  
            ans = ans.toUpperCase().trim(); 
            /* trim удаляет пробелы */   
        res += `Мне ${copyPlan.age} и я владею языками: ${ans}`;
                    
    return res;
    }
};
/* console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); */



function showExperience(plan) {
    const copy = /* {...plan} */{}; 
    Object.assign(copy, plan);   
    let res = '';
    res += copy.skills.exp;
    return res;
}
/* console.log(showExperience(personalPlanPeter)); */



function showProgrammingLangs(plan) {
    let res = "";
    let time = {};
    const copyPlan = /* {...plan} */{};
    Object.assign(copyPlan, plan);  
    for (let key in copyPlan) {
        /* console.log(key);   */      
        if (key === 'skills') {
            for (let j in copyPlan[key]) {
                /* console.log(j); */
                if (j === 'programmingLangs') {
                    /* time = {...copyPlan[key][j]} */ 
                    Object.assign(time, copyPlan[key][j]);
                    }
                }
            }               
        }
        /* console.log(time);   */  
    for (let k in time) {
        res += `Язык ${k} изучен на ${time[k]}\n`;
                }
    return res;
}
/* console.log((showProgrammingLangs(personalPlanPeter))); */