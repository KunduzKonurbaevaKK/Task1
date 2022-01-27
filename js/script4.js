// Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

// сувинер весит - 75г, а безделушка - 112г;
let souvenirWeight = 75;
let trinkWeight = 112;


// 
let amountSouvenirs = Number(prompt('How many souvenirs do you want?'));
let amountTrinks = Number(prompt('How many trinks do you want?'));


let totalWeightSouveniers = souvenirWeight * amountSouvenirs;
let totalWeightTrinks = trinkWeight * amountTrinks;

let totalWeight = totalWeightSouveniers + totalWeightTrinks;

// console.log('общий вес сувинеров' + totalWeightSouveniers + 'общий вес безделущек' + totalWeightTrinks);

alert('Общий вес посылки ' + totalWeight + 'г');
