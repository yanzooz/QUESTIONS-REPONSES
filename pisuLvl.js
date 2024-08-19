const questions = [
    {
        question : "Je suis saisonnier depuis début juillet et je pars fin août",
        answer :"I am seasonal worker since the beginning of July and I am leaving at the end of August",
        QR:"Je suis saisonnier depuis début juillet et je pars fin août."
    },
    {
        question : "mes amis et moi avons une marque de vetement ensemble",
        answer :"my friends and i have a clothing brand together",
        QR:"mes amis et moi avons une marque de vetement ensemble"
    },
    {
        question : "je travail en tant que nettoyeur de chiotte ",
        answer :"I work as a toilet cleaner",
        QR:"je travail en tant que nettoyeur de chiotte"
    },
    {
        question : "Parfois, j'aide au service du déjeuner, je fais la vaisselle et je sers les clients.",
        answer :"Sometimes I help with lunch service, washing dishes and serving customers.",
        QR:"Parfois, j'aide au service du déjeuner, je fais la vaisselle et je sers les clients."
    },
    {
        question : "mon travail est plutot facile parce que j'ai pas beaucoup de tache à faire",
        answer : "My job is pretty easy because I don't have a lot of tasks to do.",
        QR:"mon travail est plutot facile parce que j'ai pas beaucoup de tache à faire"
    },
    {
        question : "les gens sont tres gentils tres souriant avec une bonne vibe ",
        answer : "the people are very nice, very smiling with a good vibe",
        QR:"les gens sont tres gentils tres souriant avec une bonne vibe"
    },
    {
        question : "Je ne fais pas de skateboard mais je fais de la trotinette",
        answer : "I don't skateboard but I ride a scooter",
        QR:"Je ne fais pas de skateboard mais je fais de la trotinette"
    },
    {
        question : "Je ne suis jamais allé à cet endroit",
        answer : "I have never been to this place",
        QR:"Je ne suis jamais allé à cet endroit"
    },
    {
        question : "désolé, je n'ai pas compris ce que tu voulais dire",
        answer : "sorry, i didn't understand what you meant",
        QR:"désolé, je n'ai pas compris ce que tu voulais dire"
    },
    {
        question : "J'ai travaillé comme livreur chez Amazon",
        answer : "I worked as a delivery man at Amazon",
        QR:"J'ai travaillé comme livreur chez Amazon"
    },
    {
        question : "j'ai travaillé aussi dans un restaurant  rodizio ",
        answer : "I also worked in a Rodizio restaurant",
        QR:"j'ai travaillé aussi dans un restaurant  rodizio "
    },
    {
        question : "Le concept est que le serveur porte la viande dans une broche et sert directement le client à table",
        answer : "The concept is that the waiter carries the meat on a brooch and serves the customer directly at the table",
        QR:""
    },
    {
        question : "Avez-vous des frères et sœurs ?",
        answer : "Do you have any siblings?",
        QR:""
    },
    {
        question : "Depuis combien de temps apprends-tu le français ?",
        answer : "how long have u been learning French ?",
        QR:""
    },
    {
        question : "Avez-vous déjà visité d'autres pays européens?",
        answer : "Have you visited any other European countries?",
        QR:""
    },
    {
        question : "Quel est votre plat préféré?",
        answer : "What is your favorite dish?",
        QR:""
    },
    {
        question : "Avez-vous déjà mangé des escargots?",
        answer : "Have you ever eaten snails?",
        QR:""
    },
    {
        question : "Avez-vous des animaux de compagnie?",
        answer : "Do you have any pets?",
        QR:""
    },
    {
        question : "Combien de temps restez-vous en France?",
        answer : "How long are you staying in France?",
        QR:""
    },
    {
        question : "Avez-vous déjà goûté au vin français?",
        answer : "Have you ever tasted French wine?",
        QR:""
    },
    {
        question : "Qu'avez-vous visité jusqu'à présent?",
        answer : "What have you visited so far?",
        QR:""
    },
    {
        question : "Quel est votre souvenir préféré de vos voyages?",
        answer : "What is your favorite memory from your travels?",
        QR:""
    },
    {
        question : "Est-ce que vous avez déjà pris le métro parisien?",
        answer : "Have you ever taken the Paris metro?",
        QR:""
    },
    {
        question : "Quelle est votre destination de rêve?",
        answer : "What is your dream destination?",
        QR:""
    },
    {
        question : "Quel est le meilleur conseil de voyage que vous ayez reçu?",
        answer : "What is the best travel advice you've ever received?",
        QR:""
    },
    {
        question : "Que faites-vous ce week-end?",
        answer : "What are you doing this weekend?",
        QR:""
    },
    {
        question : "J'aime découvrir de nouvelles cultures",
        answer : "I love discovering new cultures",
        QR:""
    },
    {
        question : "à l'avenir j'aimerais travailler dans le domaine de l'informatique en tant que développeur web",
        answer : "In the future I would like to work in the IT field as a web developer ",
        QR:""
    },
    {
        question : "J'aimerais être indépendant financièrement pour pouvoir voyager à travers le monde",
        answer : "I would like to be financially independent to be able to travel around the world",
        QR:""
    },
    {
        question : "Le climat ici est très agréable",
        answer : "The climate here is very pleasant",
        QR:""
    },
    {
        question : "Les Français sont très accueillants",
        answer : "The French are very welcoming",
        QR:""
    },
    {
        question : "Je prends des cours de anglais depuis six mois",
        answer : "I have been taking english classes for six months",
        QR:""
    },
    {
        question : "Je veux améliorer mon niveau de français",
        answer : "I want to improve my French",
        QR:""
    },
    {
        question : "Je vais passer quelques jour en Italie pour rejoindre ma copine",
        answer : "I'm going to spend a few days in Italy to join my girlfriend.",
        QR:""
    },
    {
        question : "Je suis célibateire mais j'ai une amoureuse",
        answer : "I am single but I have a lover",
        QR:""
    },
    {
        question : "La gastronomie française est réputée dans le monde entier",
        answer : "French cuisine is renowned worldwide",
        QR:""
    },
    {
        question : "J'aimerais apprendre à cuisiner des plats français",
        answer : "I would like to learn how to cook French dishes",
        QR:""
    },
    {
        question : "Les paysages en France sont magnifiques",
        answer : "The landscapes in France are stunning.",
        QR:""
    },
    {
        question : "Je voudrais visiter la Côte d'ivoire un jour.",
        answer : "I would like to visit the ivory coast one day",
        QR:""
    },
    {
        question : "Je préfère les villes calmes aux grandes métropoles",
        answer : "I prefer quiet towns to big cities",
        QR:""
    },
    {
        question : "Je suis passionné(e) par la Formula 1 et le football",
        answer : "I am passionate about Formula 1 and football",
        QR:""
    },
    {
        question : "J'aime passer du temps avec ma famille.",
        answer : "I enjoy spending time with my family",
        QR:""
    },
    {
        question : "Je joue de la guitare depuis plusieurs années",
        answer : "I have been playing the guitar for several years",
        QR:""
    }
]


export default questions