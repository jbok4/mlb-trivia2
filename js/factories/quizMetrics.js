(function(){

    angular
        .module("app")
        .factory("quizMetrics", QuizMetrics);

        /*
         * dependency injection as seen in all the controllers. See comments 
         * there for a deeper explaination of dependency injection
         */
        QuizMetrics.$inject = ['DataService'];

        /*
         * function definition for the factory
         */
        function QuizMetrics(DataService){

            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState, // changeState is a named function below
                correctAnswers: [],
                markQuiz: markQuiz, // markQuiz is a named function below
                numCorrect: 0
            };

            /*
             * Return the quizObj. This is done near the top of the function to
             * allow a quick glance above the fold in the code to see 
             * functionality. Implementation of that functionality can then be
             * seen by scrolling down.
             */
            return quizObj;

            /*
             * Function to change the state of either the quiz or the results.
             *
             * It accepts two arguments, one is which metric to change (quiz or
             * results) and the other is what to change the state too.
             */
            function changeState(metric, state){
                if(metric === "quiz"){
                    quizObj.quizActive = state;
                }else if(metric === "results"){
                    quizObj.resultsActive = state;
                }else{
                    return false;
                }
            }

            /*
             * When called, the markQuiz method will loop through all the users
             * answers and compare them to the know correct answers to each
             * question. The total number of correct answers by the user is 
             * calculated and saved in the numCorrect property of the quizObj 
             * object
             */
            function markQuiz(){
                quizObj.correctAnswers = DataService.correctAnswers;
                for(var i = 0; i < DataService.triviaQuestions.length; i++){
                    if(DataService.triviaQuestions[i].selected === DataService.correctAnswers[i]){
                        DataService.triviaQuestions[i].correct = true;
                        quizObj.numCorrect++;
                    }else{
                        DataService.triviaQuestions[i].correct = false;
                    }
                }
            }

        }

})();
