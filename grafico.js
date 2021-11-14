
const Transaction = {
    all: [
            {
                // id: 1,
                description: 'LUZ',
                amount: -500,
                date: '23/11/2021'
            },
            {
                // id: 2,
                description: 'WEBSITE',
                amount: 5000,
                date: '23/11/2021'
            },
            {
                // id: 3,
                description: 'INTERNET',
                amount: -2000,
                date: '23/11/2021'
            },
        ],
}
let valores = []
let datas = []
let values = Transaction.all.forEach(function(values) {
    valores.push(values.amount)
    datas.push(values.date)
})

let ctx = document.getElementsByClassName('line-chart')

// type, data e options
let chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [datas[0], datas[1], datas[2]],
        // labels: Transaction.all.description,
        datasets: [{
            label: 'Amount',
            // data: [12, 19, 3, 5, 2, 3],
            data: [valores[0], valores[1], valores[2]],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// all: [
    //     {
    //         // id: 1,
    //         description: 'LUZ',
    //         amount: -50000,
    //         date: '23/11/2021'
    //     },
    //     {
    //         // id: 2,
    //         description: 'WEBSITE',
    //         amount: 500000,
    //         date: '23/11/2021'
    //     },
    //     {
    //         // id: 3,
    //         description: 'INTERNET',
    //         amount: -2000000,
    //         date: '23/11/2021'
    //     },
    // ],