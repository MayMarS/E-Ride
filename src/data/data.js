import explorer from '../assets/img/explorer.png';
import commuter from '../assets/img/commuter.png';
import cruiser from '../assets/img/cruiser.png';
import environment from '../assets/img/environment.svg';
import effective from '../assets/img/effective.svg';
import convenient from '../assets/img/convenient.svg';
import health from '../assets/img/health.svg';
import flexibility from '../assets/img/flexibility.svg';
import fun from '../assets/img/fun.svg';
import insta from '../assets/img/instagram.svg';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import linkedin from '../assets/img/linkedin.svg';

let state = {

    header: {
        links: [{name: "Explorer", adress: "/explorer"}, {name: "Commuter", adress: "/commuter"}, {name: "Cruiser", adress: "/cruiser"}, 
                {name: "For Business", adress: "/business"}, {name: "About", adress: "/about"}, {name: "Home", adress: "/"}]
    },
    explorer: {
        id: 1, price: '59', model: 'Explorer', kind: 'Ebike', image: `${explorer}`, 
        batteryTitle: 'battery', batteryVoltage: '48V', motorTitle: 'motor', motorPower: '750W', milesTitle: 'miles', milesDistance: '60',
        description: 'If you\'re looking to venture off the beaten path and explore some of the city\'s hidden gems, "Explorer" is the perfect electric bike for you. With its rugged tires and sturdy frame, this bike can handle rough terrain and steep hills with ease. It also comes equipped with a GPS navigation system and a built-in lock, so you can safely explore the city at your own pace.',
        text: 'This electric bike is perfect for those who want to explore the city\'s hidden corners and off-road trails. With its rugged 750W motor and 48V battery, it can travel up to 60 miles on a single charge. The bike features large 26-inch tires with deep treads and front suspension to handle any terrain. It also comes equipped with a GPS navigation system and a powerful headlight for nighttime exploration.',
        advantages: ['Powerful motor and long-lasting battery for extended off-road rides', 'Large, rugged tires with deep treads for excellent traction', 'Front suspension to handle any terrain', 'GPS navigation system for easy exploration', 'Powerful headlight for nighttime rides']
    },
    commuter: {
        id: 2, price: '49', model: 'Commuter', kind: 'Ebike', image: `${commuter}`, 
        batteryTitle: 'battery', batteryVoltage: '44V', motorTitle: 'motor', motorPower: '700W', milesTitle: 'miles', milesDistance: '50',
        description: 'For those looking to make their daily commute a little more eco-friendly, "Commuter" is the ideal electric bike. Its lightweight frame and foldable design make it easy to carry onto public transportation or store in a small space. Top speed is of 20 mph and a range of up to 25 miles. And with its built-in lights and reflectors, you can stay visible and safe during your ride.',
        text: 'This electric bike is perfect for those who want to reduce their carbon footprint and avoid traffic congestion. With its lightweight aluminum frame and foldable design, it\'s easy to carry on public transportation or store in a small space. The bike features a 250W motor and 36V battery that can travel up to 25 miles on a single charge. It also comes equipped with a rear rack and fenders for carrying cargo and staying clean and dry in wet conditions.',
        advantages: ['Lightweight and foldable for easy transportation and storage', 'Eco-friendly option for reducing carbon footprint', 'Rear rack and fenders for carrying cargo and staying dry in wet conditions', 'Long battery life for daily commutes', 'Comfortable saddle and adjustable handlebars for personalized comfort']
    },
    cruiser: {
        id: 3, price: '69', model: 'Urban Cruiser', kind: 'Emoped', image: `${cruiser}`, 
        batteryTitle: 'battery', batteryVoltage: '52V', motorTitle: 'motor', motorPower: '850W', milesTitle: 'miles', milesDistance: '80',
        description: 'This sleek and stylish electric bike is perfect for navigating the city streets with ease. With its powerful motor and long-lasting battery, you can travel up to 40 miles on a single charge. The bike also features comfortable, adjustable seating and shock-absorbing tires to ensure a smooth ride. Plus, its compact design makes it easy to park and store when not in use.',
        text: 'This electric bike is perfect for exploring the city in style and comfort. With its powerful 500W motor and 48V battery, it can travel up to 50 miles on a single charge. The bike also features a comfortable saddle with adjustable height and angle, as well as front and rear suspension for a smooth ride. Its compact design makes it easy to maneuver in traffic and find parking, while the LED lights and bell ensure safety on the road.',
        advantages: ['Powerful motor and long-lasting battery for extended rides', 'Comfortable saddle and suspension for a smooth ride', 'Compact design for easy navigation and parking', 'LED lights and bell for safety on the road', 'Adjustable height and angle for personalized comfort']
    },
    business: {
        title: 'Patent business for E-Bikes', question: 'How we do it?', 
        articles: [ {num: '01', title: 'Patent Application', text: 'Patent Application (PPA) can be used by a patent applicant to secure a filing date.', to: '/business/application', path: '/application', moreText: 'Patent Application has a pendency that lasts for one year from the date filing. Hence, you must file a corresponding application during the 12-month pendency period of the PPA to benefit from the filing that was done earlier.'},
                    {num: '02', title: 'Trademarks', text: 'A servicemark is the same as a trademark except that it identifies and distinguishes the source of a service.', to: '/business/trademarks', path: '/trademarks', moreText: 'Trademark rights may be used to prevent others from using a confusingly similar mark. Trademarks which are used in interstate or foreign commerce may be registered with the US Patent and Trademark Office (USPTO).'},  
                    {num: '03', title: 'Fees', text: 'A patent for an invention is the grant of an exclusive right to prevent others from doing the claims of the patent.', to: '/business/fees', path: '/fees', moreText: 'Patent Application has a pendency that lasts for one year from the date filing. Hence, you must file a corresponding application during the 12-month pendency period of the PPA to benefit from the filing that was done earlier.'},
                    {num: '04', title: 'Secure', text: 'Utility patents may be granted to anyone who invents or discovers any new and useful process, machine, article of manufacture.', to: '/business/secure', path: '/secure', moreText: 'Trademark rights may be used to prevent others from using a confusingly similar mark. Trademarks which are used in interstate or foreign commerce may be registered with the US Patent and Trademark Office (USPTO).'} ]
    },
    about: {
        title: 'Choosing E-Ride electric bikes you receive only advantages', question: 'Why E-Ride?', 
        blocks: [{image: `${environment}`, title: 'Environmentally Friendly', text: 'Electric bikes are a great way to reduce your carbon footprint, as they produce zero emissions. By renting an electric bike instead of using a gas-powered vehicle, you can help protect the environment.'},
                {image: `${effective}`, title: 'Cost-Effective', text: 'Renting an electric bike can be more cost-effective than owning one. You don\'t have to worry about maintenance, repairs, or storage. You can simply rent the bike when you need it and return it when you\'re done.'},
                {image: `${convenient}`, title: 'Convenient', text: 'Renting an electric bike is convenient, as you don\'t have to worry about transporting the bike to and from your destination. You can simply pick up the bike from the rental company and drop it off when you\'re done.'},
                {image: `${health}`, title: 'Health Benefits', text: 'Riding an electric bike can provide health benefits such as increased cardiovascular fitness, improved balance and coordination, and reduced stress levels. Renting an electric bike allows you to enjoy these benefits without the commitment of owning one.'},
                {image: `${flexibility}`, title: 'Flexibility', text: 'Renting an electric bike gives you the flexibility to explore new areas and try out different routes without the commitment of owning a bike. You can rent the bike for a day, a week, or longer, depending on your needs.'},
                {image: `${fun}`, title: 'Fun', text: 'Electric bikes are fun to ride, and renting one can be a great way to enjoy the outdoors and explore new areas. Whether you\'re taking a leisurely ride through the countryside or exploring the city, an electric bike can provide a fun and exciting experience.'},
        ]
    },
    main: {
        catalog: [
            {id: 1, toggle: 1, price: '59', model: 'Explorer', kind: 'Ebike', image: `${explorer}`, description: ' If you\'re looking to venture off the beaten path and explore some of the city\'s hidden gems, "Explorer" is the perfect electric bike for you.', text: 'With its rugged tires and sturdy frame, this bike can handle rough terrain and steep hills with ease. It also comes equipped with a GPS navigation system and a built-in lock, so you can safely explore the city at your own pace.'},
            {id: 2, toggle: 2, price: '49', model: 'Commuter', kind: 'Ebike', image: `${commuter}`, description: 'For those looking to make their daily commute a little more eco-friendly, "Commuter" is the ideal electric bike.', text: 'Its lightweight frame and foldable design make it easy to carry onto public transportation or store in a small space. With a top speed of 20 mph and a range of up to 25 miles, you can get to work or run errands without breaking a sweat.'},
            {id: 3, toggle: 3, price: '69', model: 'Urban Cruiser', kind: 'Emoped', image: `${cruiser}`, description: 'This sleek and stylish electric bike is perfect for navigating the city streets with ease.', text: 'With its powerful motor and long-lasting battery, you can travel up to 40 miles on a single charge. The bike also features comfortable, adjustable seating and shock-absorbing tires to ensure a smooth ride.'}
        ],
        rides: [
            {id: 1, price: '59', model: 'Explorer', kind: 'Ebike', image: `${explorer}`, text: 'With its rugged tires and sturdy frame, this bike can handle rough terrain and steep hills with ease. It also comes equipped with a GPS navigation system and a built-in lock, so you can safely explore the city at your own pace.'},
            {id: 2, price: '49', model: 'Commuter', kind: 'Ebike', image: `${commuter}`, text: 'Its lightweight frame and foldable design make it easy to carry onto public transportation or store in a small space. With a top speed of 20 mph and a range of up to 25 miles, you can get to work or run errands without breaking a sweat.'},
            {id: 3, price: '69', model: 'Urban Cruiser', kind: 'Emoped', image: `${cruiser}`, text: 'With its powerful motor and long-lasting battery, you can travel up to 40 miles on a single charge. The bike also features comfortable, adjustable seating and shock-absorbing tires to ensure a smooth ride.'}
        ],
        learn: [
            {
            question: 'How does E-Ride work?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, reprehenderit molestiae consequatur, sequi saepe, laborum ratione sunt velit eligendi eveniet laboriosam possimus fugit nam quasi cupiditate eum eos mollitia! Blanditiis!'
            },
            {
            question: 'How do I charge my E-Ride bike?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, reprehenderit molestiae consequatur, sequi saepe, laborum ratione sunt velit eligendi eveniet laboriosam possimus fugit nam quasi cupiditate eum eos mollitia! Blanditiis!'
            },
            {
            question: 'What accessories can I use with my Ebike and Emoped?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, reprehenderit molestiae consequatur, sequi saepe, laborum ratione sunt velit eligendi eveniet laboriosam possimus fugit nam quasi cupiditate eum eos mollitia! Blanditiis!'
            },
            {
            question: 'How do repairs work?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, reprehenderit molestiae consequatur, sequi saepe, laborum ratione sunt velit eligendi eveniet laboriosam possimus fugit nam quasi cupiditate eum eos mollitia! Blanditiis!'
            },
            {
            question: 'Can I test the ride before buying?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, reprehenderit molestiae consequatur, sequi saepe, laborum ratione sunt velit eligendi eveniet laboriosam possimus fugit nam quasi cupiditate eum eos mollitia! Blanditiis!'
            },
            {
            question: 'How do I cancel my membership?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, reprehenderit molestiae consequatur, sequi saepe, laborum ratione sunt velit eligendi eveniet laboriosam possimus fugit nam quasi cupiditate eum eos mollitia! Blanditiis!'
            },
            {
            question: 'What happens if my vehicle gets stolen?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, reprehenderit molestiae consequatur, sequi saepe, laborum ratione sunt velit eligendi eveniet laboriosam possimus fugit nam quasi cupiditate eum eos mollitia! Blanditiis!'
            } 
        ]
    },
    footer: {
        links: {
        },
        links1: ["Menu", "Rides", "Concierge", "For Business", "Start now"],
        links2: ["Products", "Explorer", "Commuter", "Urban Cruiser"],
        links3: ["Company", "Blog", "Press", "FAQ", "Jobs"],
        links4: ["Legal", "Privacy", "Imprint", "Cancel subscription"],

        social: [
        {
            link: "https://www.instagram.com/",
            icon: `${insta}`
        },
        {
            link: "https://www.facebook.com/",
            icon: `${facebook}`
        },
        {
            link: "https://www.twitter.com/",
            icon: `${twitter}`
        },
        {
            link: "https://www.linkedin.com/",
            icon: `${linkedin}`
        }
        ]
    }
}

export default state;