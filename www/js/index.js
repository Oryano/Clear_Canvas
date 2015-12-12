/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};




///////////////////////////////////////////////////////////////
//////      from here JS that belongs to new_object       /////
///////////////////////////////////////////////////////////////

//a list to hold all objects (global)
var items = [];


    //when readAll btn clicked - alt tag populate with json
    var readBtn = document.getElementById('readBtn');
    if(readBtn == 0){
        console.log('do nothing'); 
    } else if (readBtn) {
        readBtn.addEventListener('click', function() {
            var currentOBJ = {};
            currentOBJ.name = document.getElementById('name').value;
            currentOBJ.size = document.getElementById('size').value;
            currentOBJ.shape = document.getElementById('shape').value;
            currentOBJ.color = document.getElementById('color').value;
            currentOBJ.position = document.getElementById('position').value;
            currentOBJ.notes = document.getElementById('notes').value;
            currentJSON = JSON.stringify(currentOBJ).replace(/{|}|,/g,' '); //convert js-obj string
            openReadInfo(currentJSON);
            console.log(currentJSON);        
        }, false);

    };

//create the grid
function  doGrid(row, col){
  //$('#setform').hide();
  console.log("doing grid");
  tbl = ""
  // $(".grid").html(tbl); *** if the grid is made dynamically**
  var rows = row,
  cols = col;

  for(var i = 0; i < rows; i++) {
    $('#gridd').append('<tr></tr>');
    for(var j = 0; j < cols; j++) {
        $('#gridd').find('tr').eq(i).append('<td class=""><a class="tcell ui-link" role="button" onclick="gridMenu();" id='+j+","+i+'>'+j+','+i+'</a></td>');
        $('table').find('tr').eq(i).find('td').eq(j).attr('data-row', i).attr('data-col', j);
    }
}

}
//fuction below:
//shows summery of choices
//gives it focus to voiceOver will read it
function openReadInfo(currentJSON){ //func to show info on button for 3 sec then disapper
    
    var readRow = document.getElementById("readRow");
    var td = document.createElement("td"); //create <td>
    var info = document.createTextNode(currentJSON);
    $(readRow).hide().html(td).fadeIn(500);//insert html tontd
    $(td).html(info); //insert info (JSon) as html
    readRow.setAttribute('tabindex', '0');
    td.setAttribute("colspan", "2"); //occupy 2 <tr>

    document.getElementById('readRow').focus();

}

//below function:
//make an OBJ by choices selected,
//add the OBJ to "items" list,
//go to grid page (where u can see the OBJ)
var addNewObj = function(){ 
    
    var currentOBJ = {};
    currentOBJ.name = document.getElementById('name').value;
    currentOBJ.size = document.getElementById('size').value;
    currentOBJ.shape = document.getElementById('shape').value;
    currentOBJ.color = document.getElementById('color').value;
    currentOBJ.position = document.getElementById('position').value;
    currentOBJ.notes = document.getElementById('notes').value;
    
    currentJSON = JSON.stringify(currentOBJ); //convert js-obj to json
    console.log(currentJSON);

    items.push(currentJSON);
    console.log(items);
    backToGrid();//go to grid page

}


///////////////////////////////////////////////////////////////
//////      until here JS that belongs to new_object      /////
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
//////      from here JS that belongs to menu             /////
///////////////////////////////////////////////////////////////

//startuing with hiding the grid main page (and others)
$(document).ready(function(){
    doGrid(17,14);
     $("#main_page").hide();

     $("#new_page").hide();
});


//a function that replaces menu >> main_page
var backToGrid = function(){
    $("#menuPage").hide(); //hide menu
    $("#main_page").show(); //show main page

    $("#new_page").hide(); //hide menu
}

var goToMenu = function(){
    $("#new_age").hide(); //hide menu
    $("#main_page").hide(); //show main page
    $("#menuPage").show(); //hide menu

}

// to reveal new_object page when clicked (hide others)
    var btnToNewPage = document.getElementById('btnToNewPage');
    var new_page = document.getElementById('new_page');

    btnToNewPage.addEventListener('click', function() {
        console.log("user clicked the new proj button");
        $('#new_page').show();
        $("#menuPage").hide();
    }, false);

// to reveal open project page when clicked (hide others)
    btnToOpen.addEventListener('click', function() {
        console.log("user clicked the OPEN new button");
     $("#main_page").hide();
     $("#new_page").hide();
     $("#menuPage").hide();
     //$('#open_page').show(); doesnt exsist yet...
    }, false);

// to reveal open project page when clicked (hide others)
    btnToSave.addEventListener('click', function() {
        console.log("user clicked the SAVE new button");
     $("#main_page").hide();
     $("#new_page").hide();
     $("#menuPage").hide();
     //$('#open_page').show(); doesnt exsist yet...
     //$('#save_page').show(); doesnt exsist yet...
    }, false);


///////////////////////////////////////////////////////////////
//////      until here JS that belongs to menu            /////
///////////////////////////////////////////////////////////////


function Shape(elem){
    make a new div
    style the div to be the size of the settings in json

 $(this.elem).bind("touchstart", this.start.bind(this));
    //$(this.elem).bind("touchstart", this.Tone.startMobile.bind(this));
    $(this.elem).bind("touchmove", this.moveMe.bind(this));
    $(this.elem).bind("touchend", this.endCheck.bind(this));
}






/////////////////THE WOOOOOODS/////////////////////////////////
function save() {
    alert("saved!");
    hide();
    var elem = document.getElementById(globalFocus);
    var x = document.getElementById("tableName").value;
    var y = document.getElementById("guestName").value;
    
    nameLabel= x;
    guestLabel= y;
    
    var table = new Table();
    
    
    elem.setAttribute("title", x);
    elem.setAttribute("alt", y);
    
}


function Table() {
    console.log("in table constructor");
  
  if ( elem == null ) {
    
    //console.log(currentClass);
    var elem = document.getElementById("overlay");
    // var labe = document.getElementById("overlay");
    elem.style.display = "inline";
    
    globalFocus = this.id;
    console.log("GFE" + this.elem);
    // CLASS SPECIFIC INITIALIZATION
    //this.class = currentClass;
    this.id = "table" + tableCounter++;
    // this.labe =$("");
    this.elem = $("<div  alt='Table Object' id='" + this.id + "' class='" + this.class + "'><text style='font-size:10px;margin-top:15px'>drag me!</text><p id='" + this.id + "' class='" + this.class + " shapeText'> <b>Table: </b>"+ nameLabel +"<br><b>Guests:</b> </br>"+guestLabel+"</p></div>");
    // this.labe =$("<p id='" + this.id + "' class='" + this.class + " shapeText'><b>Table: </b>"+ nameLabel +"<br><b>Guests:</b> </br>"+guestLabel+"</p>");
    // this.elem = $("<div  alt='Table Object' id='" + this.id + "' class='" + this.class + "'><p id='dragText'>Drag me!</p></div>");
    $(this.elem).bind("touchstart", this.start.bind(this));
    //$(this.elem).bind("touchstart", this.Tone.startMobile.bind(this));
    $(this.elem).bind("touchmove", this.moveMe.bind(this));
    $(this.elem).bind("touchend", this.endCheck.bind(this));

    // mouseDown, ousemove and mouseup to make work in browser****with bindings for tonejs above

    // $(this.labe).bind("touchstart", this.start.bind(this));
    // $(this.labe).bind("touchmove", this.moveMe.bind(this));
    // $(this.labe).bind("touchend", this.endCheck.bind(this));


    
    // ADDED TO CHECK COLLISIONS
    idArray.push(this.id);

    // IF NOTHING EXISTS YET
    

    $("#mainDiagram").append(this.elem);
    // $("#mainDiagram").append(this.labe);
  }
  else {
    console.log("creating from elements", $(elem));
    this.class = $(elem).attr("class");
    this.id = $(elem).attr("id");
    this.elem = $(elem);
    // this.labe = $(labe);
    this.name = name;
    idArray.push(this.id);
    tableCounter++;
    //$(this.elem).bind("touchstart", this.Tone.startMobile.bind(this));
    $(this.elem).bind("touchstart", this.start.bind(this));
    $(this.elem).bind("touchmove", this.moveMe.bind(this));
    $(this.elem).bind("touchend", this.endCheck.bind(this));
    // $(this.labe).bind("touchstart", this.start.bind(this));
    // $(this.labe).bind("touchmove", this.moveMe.bind(this));
    // $(this.labe).bind("touchend", this.endCheck.bind(this));
    this.endCheck();
  }
}



//drag start
Shape.prototype.start = function(e) {
    // Tone.startMobile();
    // Tone.Transport.start();

    //synth.triggerAttack('F4');
    console.log("I'm in start");

    var orig = e.originalEvent;
    var pos = $(this.elem).position();
    // var pos2 = $(this.labe).position();
    
    this.elem.offset = {
        x: orig.changedTouches[0].pageX - pos.left,
        y: orig.changedTouches[0].pageY - pos.top
    };


    // this.labe.offset = {
    //     x: orig.changedTouches[0].pageX - pos2.left,
    //     y: orig.changedTouches[0].pageY - pos2.top
    // };

};

//update css

Shape.prototype.moveMe = function(e) {
    
    e.preventDefault();
    var orig = e.originalEvent;
    $(this.elem).css({
        top: orig.changedTouches[0].pageY - this.elem.offset.y,
        left: orig.changedTouches[0].pageX - this.elem.offset.x

    });
      var incolumn = Math.floor((orig.changedTouches[0].pageX)/55);
      var inrow = Math.floor((orig.changedTouches[0].pageY)/58)-2;
      console.log(incolumn+ ","+inrow);
     console.log(incolumn+ ","+inrow);

      
    // $(this.labe).css({
    //     top: orig.changedTouches[0].pageY - this.labe.offset.y,
    //     left: orig.changedTouches[0].pageX - this.labe.offset.x
    // });


};



