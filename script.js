// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


const courseFilter=(min, max) => {

        if (min === null) {
            min = 0
        }
        
        if (max === null) {
            max = Infinity
        }
    
    return courses.filter(i => {
        if (i.prices[0] >= min && i.prices[0] < max && i.prices[1] <= max) {
            console.log(i.prices)
            return i;
        }
    })
}

courseFilter()

// В задании я исходил из того, что диапазон prices: [null, null] является соответственно диапазоном [0, Infinity]