$(document).on("click", "#BtnStart", function(e) {
  $("#Submain").empty();
  $("#Submain").append("<h2>Time Remaining:<span id=timer>30</span>Seconds</h2>");


  //timer
  var count = 30;
  var counter=setInterval(timer,1000);
  function timer (){
	document.getElementById('timer').innerHTML=count ;
	count=count-1;
	if (count <0){
	clearInterval(counter);
	answerScore ("q1");
    answerScore ("q2");
    answerScore ("q3");
    $("#Submain").empty();
    $("#Submain").append("<h2>All Done</h2><br>");
    $("#Submain").append("<h3>Correct Answer:"+winCount+"</h3>");
    $("#Submain").append("<h3>InCorrect Answer:"+lossCount+"</h3>");
    $("#Submain").append("<h3>No Answer:"+NoAnswer+"</h3>");
	return;
    }
  }
  LoadQuestion();
});

//LoadQuestion
function LoadQuestion(){
$("#Submain").append("<form>"+
////First Question
  "When is Thanksgiving celebrated in the United States?<br>"+
  "<input type=radio name=q1 value=1>On The Fourth Thursday of November<br>"+
  "<input type=radio name=q1 value=0>On January 12<br>"+
  "<input type=radio name=q1 value=0>On December 5<hr>"+
 /////Secend Question
 "How do people usually celebrate Thanksgiving?<br>"+
  "<input type=radio name=q2 value=0>By Lighting Firework<br>"+
  "<input type=radio name=q2 value=0>By Doing Special Dance<br>"+
  "<input type=radio name=q2 value=1>By Eating A Big Meal With Friends And family<hr>"+
  ///Third Question
  "Which of these foods is usually eaten on Thanksgiving??<br>"+
  "<input type=radio name=q3 value=1>Turky<br>"+
  "<input type=radio name=q3 value=0>Pancakes<br>"+
  "<input type=radio name=q3 value=0>Pizza"+
"</form>");}


// get each answer score
    var winCount=0;
    var lossCount=0;
    var NoAnswer=0;		
function answerScore (qName) {
	var radiosNo = document.getElementsByName(qName);

	 for (var i = 0, length = radiosNo.length; i < length; i++) {
	 	//console.log(length);
   			if (radiosNo[i].checked) {
	 		// do something with radiosNo
	 		 var answerValue = Number(radiosNo[i].value);
	 			if(answerValue === 1)
	 	 		{
                        winCount++;
                        //console.log("the time of winning =" + winCount);
	 	 		}
	 		 	else if(answerValue === 0)
	 		 		{
	 		 			lossCount++;
	 		 			//console.log("the time of lossing " +lossCount);
	 		 		}
	 		 	}
	 		 }
	 		//if there isnt any answer
	 		 if (answerValue == null) {
	 		 	NoAnswer++;
	 		 	//console.log("the time of lNoAnswer " +NoAnswer);
	 		 }
		}
			
		

	

	

 
