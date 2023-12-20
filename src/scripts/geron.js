"use strict";
let products = [
    {
        category: "smartphone",
        price: 40,
        count: 50,
    },
    {
        category: "laptop",
        price: 220000,
        count: 13,
    },
    {
        category: "smartphone",
        price: 55000,
        count: 16,
    },
    {
        category: "smartphone",
        price: 80000,
        count: 5,
    },
    {
        category: "laptop",
        price: 380000,
        count: 5,
    },
];
let categorySmartphone = products.filter((e) => e.category === "smartphone");
let categoryLaptop = products.filter((e) => e.category === "laptop");
console.log(categoryLaptop);
console.log(categorySmartphone);
