
//////////////////////////////2222222Chart.js
// const data = [
//     {
//         "r030": 203,
//         "txt": "Чеська крона",
//         "rate": 1.5969,
//         "cc": "CZK",
//         "exchangedate": "25.09.2023"
//     },
//     // {
//     //     "r030": 398,
//     //     "txt": "Теньге",
//     //     "rate": 0.077226,
//     //     "cc": "KZT",
//     //     "exchangedate": "25.09.2023"
//     // },
//     {
//         "r030": 578,
//         "txt": "Норвезька крона",
//         "rate": 3.4037,
//         "cc": "NOK",
//         "exchangedate": "25.09.2023"
//     },
//     {
//         "r030": 826,
//         "txt": "Фунт стерлінгів",
//         "rate": 44.8185,
//         "cc": "GBP",
//         "exchangedate": "25.09.2023"
//     },
//     {
//         "r030": 840,
//         "txt": "Долар США",
//         "rate": 36.5686,
//         "cc": "USD",
//         "exchangedate": "25.09.2023"
//     },
//     {
//         "r030": 978,
//         "txt": "Євро",
//         "rate": 38.898,
//         "cc": "EUR",
//         "exchangedate": "25.09.2023"
//     },
//     // {
//     //     "r030": 959,
//     //     "txt": "Золото",
//     //     "rate": 70436.61,
//     //     "cc": "XAU",
//     //     "exchangedate": "25.09.2023"
//     // },
//     // {
//     //     "r030": 961,
//     //     "txt": "Срібло",
//     //     "rate": 867.55,
//     //     "cc": "XAG",
//     //     "exchangedate": "25.09.2023"
//     // }
// ];

// // Отримання списку назв валют та їх курсів
// const currencies = data.map(item => item.txt);
// const exchangeRates = data.map(item => item.rate);

// // Отримання елемента Canvas
// const canvas = document.getElementById('myChart');
// const ctx = canvas.getContext('2d');

// // Створення графіку
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: currencies,
//         datasets: [{
//             label: 'Обмінний курс',
//             data: exchangeRates,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });






/////////////////////////22222
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// api
let currencyData = [
        {
        "r030": 203,
        "txt": "Чеська крона",
        "rate": 1.5969,
        "cc": "CZK",
        "exchangedate": "25.09.2023"
    },

    {
        "r030": 578,
        "txt": "Норвезька крона",
        "rate": 3.4037,
        "cc": "NOK",
        "exchangedate": "25.09.2023"
    },
    {
        "r030": 826,
        "txt": "Фунт стерлінгів",
        "rate": 44.8185,
        "cc": "GBP",
        "exchangedate": "25.09.2023"
    },
    {
        "r030": 840,
        "txt": "Долар США",
        "rate": 36.5686,
        "cc": "USD",
        "exchangedate": "25.09.2023"
    },
    {
        "r030": 978,
        "txt": "Євро",
        "rate": 38.898,
        "cc": "EUR",
        "exchangedate": "25.09.2023"
    },
];

// Функція для малювання графіка на основі даних
function drawChart(data) {


    canvas.width = 800;
    canvas.height = 400;

    // Малюємо ос! координат
    ctx.beginPath();
    ctx.moveTo(50, 350); // Початок ос! X
    ctx.lineTo(750, 350); // К!нець осі X
    ctx.moveTo(50, 50); // Початок ос! Y
    ctx.lineTo(50, 350); // К!нець ос! Y
    ctx.stroke();

    // Малюємо м!тки на ос! X
    for (let i = 0; i < data.length; i++) {
        let x = 50 + (i + 1) * 100;
        ctx.fillText(data[i].cc, x, 370);
    }

    // Знаходимо максимальне значення курсу
    let maxRate = Math.max(...data.map(item => item.rate));

    
    for (let i = 0; i < data.length; i++) {
        let x = 50 + (i + 1) * 100;
        let height = (data[i].rate / maxRate) * 250;
        ctx.fillStyle = 'rgba(75, 192, 192, 1)';
        ctx.fillRect(x - 20, 350 - height, 40, height);


         // ц!на
         ctx.fillStyle = 'black';
         ctx.font = '12px Arial';
         ctx.textAlign = 'center';
         ctx.fillText(data[i].rate.toFixed(2), x, 350 - height - 10);
    }

}


drawChart(currencyData);
