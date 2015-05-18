
var text = '{ "thrillerBook" : [' +
'{ "name":"EYESHOT" , "author":"Taylor Adams" , "reviews":"412" , "Id":"1" },' +
'{ "name":"Rushed" , "author":"Brian Harmon" , "reviews":"3112" , "Id":"2" },' +
'{ "name":"The Stranger Beside You" , "author":"William Casey Moreton" , "reviews":"360", "Id":"3" } ]}';

var obj = JSON.parse(text);     							//parsing json object

exports.getAllBooks = function()  {    						//get all books
    return obj;
};

exports.getBookById = function(Id)  {  						// get book by id
    for (i in obj.thrillerBook){
      if(obj.thrillerBook[i].Id == Id){
          return obj.thrillerBook[i];
      }
    }
};

exports.getMostReviews = function()  {  					// get the most reviewed book
	var max = 0; 
	var objLength = obj.thrillerBook.length;
	var i;
  var hit;                                        //hit keeps the index of max reviewed book
    for (i = 0; i < objLength; ++i){
      if(parseInt(obj.thrillerBook[i].reviews) > max){ 		 //parseInt - changes string to int
      	  max = obj.thrillerBook[i].reviews;     			 //max always gets the maxValue
          hit = i;
      }
    }
    return obj.thrillerBook[hit];
};
