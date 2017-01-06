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

    var correctAnswers = [1, 0, 2, 1, 0, 2, 3, 3, 2, 3, 3, 3, 0];

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
            text: "Which of these pitchers has NOT started a playoff game for both the Mets and Yankees?",
            possibilities: [
                {   answer: "Kenny Rogers"   },
                {   answer: "David Cone"     },
                {  answer: "Dwight Gooden"   },
                {  answer: "Al Leiter"       }
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
            text: "Before Jacob deGrom won it in 2014, who was the last Met pitcher to win the NL Rookie of the Year?",
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
                {   answer: "https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/1734987/0677623001471873442_filepicker.jpg"     },
                {   answer: "http://milwaukee.locals.baseballprospectus.com/wp-content/uploads/sites/6/2015/08/USATSI_6240442_168381517_lowres-e1439170503232.jpg"      },
                {   answer: "http://www.desivalley.com/wp-content/uploads/2011/08/Johan-Santana-Wallpaper.jpg"    },
                {   answer: "http://mlb.mlb.com/images/2009/09/10/ihPUMcZm.jpg"                }
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
            type: "1973 World Series",
            image_url: "http://www.vintagecardtraders.org/virtual/78fleer/73f.jpg",
            locations: "Shea Stadium and Oakland, CA",
            size: "Up to 1.5m and up to 300kg",
            lifespan: "Reggie Jackson (Oakland)",
            diet: "World Champions",
            description: "The 1973 World Series matched the defending champions Oakland Athletics against the New York Mets with the A's winning in seven games to repeat as World Champions. The New York Mets won the National League East division by  1 1⁄2 games over the St. Louis Cardinals then defeated the Cincinnati Reds, three games to two, in the National League Championship Series. The Oakland Athletics won the American League West division by six games over the Kansas City Royals then defeated the Baltimore Orioles, three games to two, in the American League Championship Series. This was the first World Series in which all weekday games started at night. The three weekday games the previous year were scheduled to be played at night, but a postponement of Game 3 eliminated the scheduled off day between Games 5 and 6, and Major League Baseball moved Game 5 to an afternoon start to allow the teams enough time for traveling. The tide seemed to turn in the Mets' favor beginning in Game 4. A's starter Ken Holtzman couldn't make it out of the first inning after Rusty Staub smashed a three-run homer to left-center. Blue Moon Odom relieved and gave up a two-run single to Staub in a three-run Mets fourth. Jon Matlack got the win by pitching eight innings of five-hit ball. Mike Andrews entered the game as a pinch-hitter in the eighth, prompting a standing ovation from the Mets' home crowd, in a display of defiance toward A's owner Charlie Finley. Andrews grounded out in what would be his last ever major league at-bat."
        },
        {
            type: "George Foster",
            image_url: "http://metsmerizedonline.com/wp-content/uploads/2012/01/george-foster.jpg",
            locations: "Shea Stadium",
            size: "Over 1m, 45-68kg",
            lifespan: "NL MVP in 1977, Silver Slugger Award in 1981",
            diet: "",
            description: "Baseball outfielder, who played in Major League Baseball from 1969 to 1986. One of the most feared right-handed sluggers of his era, he was a key piece of the Cincinnati Reds' 'Big Red Machine' that won consecutive World Series in 1975 and 1976. Foster led the National League in home runs in 1977 and 1978, and in RBIs in 1976, 1977, and 1978. He won the NL's Most Valuable Player Award in 1977 and a Silver Slugger Award in 1981. He famously began using a black bat during his prime because he wanted to 'integrate the bat rack' in Cincinnati. Foster turned in one of the all-time great seasons in 1977 on his way to winning the National League's Most Valuable Player Award. With one year remaining on his contract, Foster was seeking a new five-year deal with the Reds. Unwilling to meet his contract demands,[26] the Reds traded him to the New York Mets for Greg Harris, Jim Kern and Alex Treviño on February 10, 1982. After which, Foster agreed with the club on a five-year, $10 million contract."
        },
        {
            type: "David Wright",
            image_url: "http://assets.nydailynews.com/polopoly_fs/1.1243661!/img/httpImage/image.jpg_gen/derivatives/landscape_635/wright21n-4-web.jpg",
            locations: "Shea Stadium/Citi Field",
            size: "Over 1m, 45-68kg",
            lifespan: "7-time All-Star, 2-time Gold Glove Award winner, 2-time Silver Slugger Award winner, and a member of the 30–30 club.",
            diet: "",
            description: "Third baseman who serves as captain for the New York Mets of Major League Baseball (MLB). He was drafted by the Mets in 2001 and made his major league debut in 2004. Wright is a seven-time All-Star, two-time Gold Glove Award winner, two-time Silver Slugger Award winner, and a member of the 30–30 club. He holds Mets franchise records for most career runs batted in (RBIs), doubles, total bases, runs scored, walks, sacrifice flies, times on base, extra base hits, strikeouts, and hits. He was named captain of the Mets in 2013, the fourth in team history, and was given the nickname 'Captain America', who is also his favorite super hero, after his performance for Team USA, which included a grand slam in the World Baseball Classic. Wright was awarded the 2007 Gold Glove and the Silver Slugger Award at third base. He also was fourth in the NL MVP voting receiving 182 votes. Wright finished seventh in the voting for the 2008 NL MVP award after finishing the season with a .302 batting average with 33 home runs and 124 RBI. Wright hit the first Mets home run in Citi Field history on Monday, April 13, 2009, Citi Field's Opening Day. The three-run home run was hit off San Diego Padres pitcher Walter Silva in the 5th inning. Wright was named the National League's Home Run Derby team captain for the 2013 MLB All-Star Game. Wright also became the fourth Mets player to appear in at least 7 All-Star games."
        },
        {
            type: "Ron Darling",
            image_url: "http://www.thehistoryreader.com/wp-content/uploads/2016/03/Ron-Darling.jpg",
            locations: "Shea Stadium",
            size: "Over 1m, 45-68kg",
            lifespan: "Gold Glove Award in 1989",
            diet: "",
            description: "During his 13-year career, Darling amassed a 136–116 won-loss record, with 13 shutouts. He threw 1,590 strikeouts and had a 3.87 ERA. In 1985, he was picked for the All-Star team. Darling had five pitches in his repertoire: the slider, a curveball, a circle changeup, a splitter, and a four seam fastball. In the beginning of his career, Darling's weak point was control, as he finished seasons in the top four in base on balls three times; as his career progressed his control improved considerably. He was considered one of the better fielding pitchers of the time, and won a Gold Glove Award in 1989. Darling had one of the best pickoff moves among right-handers. An above-average athlete, he was sometimes used as a pinch runner. In 1989, he hit home runs in two consecutive starts."
        },
                {
            type: "Mike Piazza",
            image_url: "http://assets.nydailynews.com/polopoly_fs/1.2488577.1452181218!/img/httpImage/image.jpg_gen/derivatives/article_635/cap8s-1-web.jpg",
            locations: "Shea Stadium",
            size: "Over 1m, 45-68kg",
            lifespan: "A 12-time All-Star and 10-time Silver Slugger Award winner, Baseball Hall of Fame",
            diet: "",
            description: "He played most notably for the New York Mets and Los Angeles Dodgers, while also having brief stints with the Florida Marlins, San Diego Padres, and Oakland Athletics. A 12-time All-Star and 10-time Silver Slugger Award winner at catcher, Piazza produced strong offensive numbers at his position; in his career, he recorded 427 home runs—a record 396 of which were hit as catcher—along with a .308 batting average and 1,335 runs batted in (RBIs). Piazza is regarded as one of the best offensive catchers in baseball history. He had at least one RBI in 15 consecutive games for the Mets in 2000, the second-longest RBI streak ever. In 2013, the Mets inducted Piazza into the New York Mets Hall of Fame. In 2016, Piazza was elected to the Baseball Hall of Fame as a Met, receiving 83% of the vote."
        },
        {
            type: "Dwight 'Doc' Gooden",
            image_url: "https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/1734987/0677623001471873442_filepicker.jpg",
            locations: "Shea Stadium",
            size: "Over 1m, 45-68kg",
            lifespan: "Cy Young, Rookie of the Year, 4 Time All-Star, Triple Crown",
            diet: "",
            description: "Gooden made his MLB debut in 1984 for the Mets and quickly established himself as one of the league's most talented pitchers; as a 19-year-old rookie, he earned the first of four All-Star selections, won the National League (NL) Rookie of the Year Award, and led the league in strikeouts. In 1985, he won the NL Cy Young Award and achieved the pitching Triple Crown, compiling a 24–4 record and a league-leading 1.53 ERA, 268 strikeouts, and 16 complete games. The following season, he helped the Mets win the 1986 World Series. Gooden remained an effective pitcher in subsequent years, but his career was ultimately derailed by cocaine and alcohol addiction. After posting a losing record in each season from 1992–1994, Gooden was suspended for the 1995 season after a positive drug test while serving a prior suspension. As a member of the Yankees in 1996, Gooden pitched a no-hitter and helped the team on its path to a World Series championship. He pitched four additional years for as many teams, but never approached the success of his peak years with his Mets. In 2010, Gooden was inducted into the New York Mets Hall of Fame."
        }
        
    ];

})();
