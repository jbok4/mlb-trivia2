(function(){

    angular
        .module("app")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            playersData: playersData,
            triviaQuestions: triviaQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */

    var correctAnswers = [3, 1, 2, 0, 2, 0, 3, 2, 0, 3];

    var triviaQuestions  = [
         {
            type: "text",
            text: "The Mets won their first World Series in 1969. Who did they beat?",
            possibilities: [
                {  answer: "Detroit Tigers" },
                {  answer: "Baltimore Orioles" },
                {  answer: "Oakland Athletics"  },
                {  answer: "Boston Red Sox"  }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Only one pitcher in Mets history has won a Gold Glove Award. Who was it?",
            possibilities: [
                {   answer: "Ron Darling" },
                {   answer: "Tom Seaver"  },
                {   answer: "Dwight Gooden"  },
                {   answer: "Matt Harvey"  }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who made the final out of the 1969 World Series?",
            possibilities: [
                {  answer: "Brooks Robinson" },
                {  answer: "Boog Powell"     },
                {  answer: "Davey Johnson"   },
                {  answer: "Frank Robinson"  }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is the only Mets rookie pitcher to win a World Series game?",
            possibilities: [
                {  answer: "Gary Gentry" },
                {  answer: "Jon Matlack" },
                {  answer: "Roger McDowell" },
                {  answer: "Dwight Gooden" }
            ],
            selected: null, 
            correct: null
        },
        {
            type: "text",
            text: "Who is the only Met to hit 3 home runs in a single World Series?",
            possibilities: [
                {  answer: "Gary Carter"  },
                {  answer: "Don Clendenon" },
                {  answer: "Mike Piazza" },
                {  answer: "Rusty Staub"  }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Green Turtle?",
            possibilities: [
                {   answer: "http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg"                },
                {    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"                },
                {  answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"                },
                {   answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"   }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "With a salary of $2.8 million, this guy was the highest paid player on the 1986 Mets",
            possibilities: [
                { answer: "Gary Carter"  },
                { answer: "Keith Hernandez" },
                { answer: "George Foster" },
                {  answer: "Darryl Strawberry" }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "This Met is one of just 4 pitchers in history to start a World Series opener after posting a losing regular-season record:",
            possibilities: [
                {   answer: "Al Leiter" },
                {   answer: "Jon Matlack"   },
                {   answer: "Ron Darling"  },
                {   answer: "Rick Reed"   }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these pitchers has NOT started a playoff game for both the Mets and Yankees?",
            possibilities: [
                {   answer: "Kenny Rogers"                },
                {   answer: "David Cone"                 },
                {  answer: "Dwight Gooden"                 },
                {  answer: "Al Leiter"                }
            ],
            selected: null,
            correct: null
        },
                {
            type: "text",
            text: "How many numbers (excluding Jackie Robinson's) have the Mets retired?",
            possibilities: [
                {   answer: "1"    },
                {   answer: "2"    },
                {   answer: "3"    },
                {   answer: "4"    }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "In the 1973 A's-Mets World Series, who became the only player to pitch in all 7 games of the history of the Fall Classic?",
            possibilities: [
                {    answer: "Rollie Fingers"   },
                {    answer: "Tug McGraw"        },
                {    answer: "Ray Sadecki"       },
                {    answer: "Darold Knowles"    }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Besides both being lefthanders, what do Jerry Koosman and Jesse Orosco, the two pitchers who were on the Shea Stadium mound when the Mets won their two titles, have in common?",
            possibilities: [
                {   answer: "They both hail from Minnesota"            },
                {   answer: "They both won Rookie of the Year"          },
                {   answer: "They were both traded for each other in 1979"       },
                {   answer: "They are both in the Mets Hall of Fame"      }
            ],
            selected: null,
            correct: null
        },
         {
            type: "text",
            text: "Before Jacob deGrom won it in 2014, who was the last Met to win the NL Rookie of the Year?",
            possibilities: [
                {    answer: "Tom Seaver"          },
                {    answer: "Jon Matlack"          },
                {    answer: "Darryl Strawberry"      },
                {    answer: "Dwight Gooden"         }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these pitchers never pitched a no-hitter?",
            possibilities: [
                {   answer: "https://shlabotnikreport.files.wordpress.com/2013/12/1986-topps-box-cards-dwight-gooden.jpg"                },
                {   answer: "http://my.execpc.com/~pjsports/CONE/89AS9.jpg"                },
                {   answer: "http://ep.yimg.com/ay/tbcs/2013-topps-factory-set-orange-johan-santana-baseball-card-2.gif"                },
                {   answer: "http://www.tradingcarddb.com/Images/Cards/Baseball/107/107-77Fr.jpg"                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which 1969 Miracle Met earned another World Series ring as a coach on the 1986 Mets?",
            possibilities: [
                {      answer: "Don Cardwell"         },
                {      answer: "Ed Kranepool"         },
                {      answer: "Ron Swoboda"          },
                {      answer: "Bud Harrelson"        }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who won the World Series MVP for the Mets in 1986?",
            possibilities: [
                {       answer: "Ray Knight"    },
                {       answer: "Gary Carter"   },
                {       answer: "Lenny Dykstra" },
                {       answer: "Keith Hernandez" }
            ],
            selected: null,
            correct: null
        }
    ];

    var playersData = [
        {
            type: "1969 World Series",
            image_url: "https://images-na.ssl-images-amazon.com/images/I/71F-hwl5-oL._SY355_.jpg",
            locations: "Shea Stadium and Camden Yards",
            size: "Up to 1.5m and up to 300kg",
            lifespan: "Donn Clendenon",
            diet: "World Champions",
            description: "The laughingstocks of baseball for much of the 1960s, the New York Mets perform a rapid and dramatic turnaround, capturing the hearts of fans everywhere with an eye-popping World Series performance against the Baltimore Orioles. Pitching was the undeniable strength of the 1969 Mets. Tom Seaver, appropriately earning his nickname 'Terrific Tom,' won his last ten decisions to finish at 25-7 with a 2.21 earned run average. Koosman won his last five to end the year at 17-9 and a 2.28 ERA. A sharp bullpen was anchored by Tug McGraw and Ron Taylor. Nolan Ryan, limited by groin problems, won six of nine decisions and struck out 92 batters in 89 innings."
        },
        {
            type: "1986 World Series",
            image_url: "https://upload.wikimedia.org/wikipedia/en/c/c7/1986_World_Series.gif",
            locations: "Shea Stadium and Fenway Park",
            size: "90cm, 115kg",
            lifespan: "Ray Knight",
            diet: "World Champions",
            description: "The 1986 World Series pitted the National League champions New York Mets against the American League champions Boston Red Sox. The Mets, coached by Bud Harrelson won the Series in the seventh game, after overcoming a nearly hopeless deficit in Game 6 — a game in which the Red Sox were twice one strike away from victory and that ended on a famous error by Boston's first baseman Bill Buckner after their lead had already been blown. Game 6 has been cited in the legend of the Curse of the Bambino to explain the major comeback. The Mets entered the World Series as big favorites, having won 108 games during the regular season."
        },
        {
            type: "NL Rookies of the Year",
            image_url: "http://mediadownloads.mlb.com/mlbam/2014/11/13/images/mlbf_36910429_th_45.jpg",
            locations: "National League",
            size: "Up to 2m, up to 900kg",
            lifespan: "Jacob Degrom 2014",
            diet: "Rookie of the Year, NL",
            description: "The Baseball Writers Association of America honors the outstanding rookie player in each league with the Rookie of the Year Award. The four previous Mets rookies who have won the award are Tom Seaver in 1967, Jon Matlack in 1972, Darryl Strawberry in 1983, and Dwight Gooden in 1984."
        },
        {
            type: "Hawksbill Sea Turtle",
            image_url: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532",
            locations: "Tropical Coastal areas around the world",
            size: "Over 1m, 45-68kg",
            lifespan: "30-50 Years",
            diet: "Carnivore",
            description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
        {
            type: "Alligator Snapping Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg",
            locations: "Along the Atlantic Coast of USA",
            size: "around 60cm, up to 100kg",
            lifespan: "20-70 years",
            diet: "Carnivore",
            description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
        },
        {
            type: "Kemp's Ridley Sea Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG",
            locations: "Coastal areas of the North Atlantic",
            size: "65cm, up to 45kg",
            lifespan: "Around 50 years",
            diet: "Omnivore",
            description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
        },
        {
            type: "Olive Ridley Turtle",
            image_url: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg",
            locations: "Tropical coastal areas around the world",
            size: "70cm, 45kg",
            lifespan: "50 years",
            diet: "Omnivore",
            description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
        },
        {
            type: "Eastern Snake Necked Turtle",
            image_url: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1",
            locations: "Eastern Australia",
            size: "Up to 30cm",
            lifespan: "25 years",
            diet: "Carnivore",
            description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
        }
    ];

})();
