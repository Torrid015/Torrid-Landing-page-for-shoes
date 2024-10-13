import { shieldTick, star, support, truckFast } from "../assets/icons"
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7 } from "../assets/images"


export const Nav = [{
    'href': '#home',
    'name': 'Home'
},{
    'href': '#shop',
    'name': 'Shop'
},{
    'href': 'contact',
    'name': 'Contact Us'
},{
    'href': '#about',
    'name': 'About'
},{
    'href': '#testimonals',
    'name': 'Testimonials'
}]


export const Statistics = [{
    value: '3k+',
    label: 'Brands',
},{
    value: '900+',
    label: 'Shops'
},{
    value: '500k+',
    label: 'Customers'
}]

export const popularProducts = [{
    name: 'Torrid Air Jordan 001',
    image: shoe4,
    rating: '4.5',
    price: '$2100',
},{
    name: 'Torrid Air Jordan 001',
    image: shoe5,
    rating: '4.5',
    price: '$2200'
}, {
    name: 'Torrid Air Jordan 001',
    image: shoe6,
    rating: '5.0',
    price: '$2000'
},{
    name: 'Torrid Air Jordan 001',
    image: shoe7,
    rating: '4.8',
    price: '$2500'
}]

export const services = [{
    image: truckFast,
    name: 'fast shipping and delivery',
    para: 'Speed matters! Enjoy fast delivery is so last season'
},{
    image: shieldTick,
    name: 'Damage protection',
    para: 'Accidents happens, but our losses dont have to. Our damage protection ensures your belongings are protected.'
},{
    image: support,
    name: 'Support',
    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, alias. Placeat eaque neque consequatur, in pariatur architecto dignissimos aspernatur ducimus?'
}]

export const reviews = [{
    image: customer1,
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic accusamus, exercitationem accusantium quam ea incidunt quisquam enim vero dolores.',
    rating: {
        star: star,
        num: '4.5'
    },
    name: 'Doug Sin'
},{
    image: customer2,
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum, veniam id nostrum soluta omnis. Veritatis itaque sequi dolores deleniti!',
    rating: {
        star: star,
        num: '5.0'
    },
    name: 'George Wills'
}]

export const shoes = [bigShoe1,bigShoe2,bigShoe3]