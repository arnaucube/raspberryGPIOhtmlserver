var socket=io.connect();
function NewConnection(){
  socket.emit('newconnection',"newcon",function(data){
    //
  });
}
function pinON(){
  var pin=document.getElementById("pinselected").value;
  //toastr.info("pin: " + pin);
  socket.emit('pinON',pin,function(data){
    //
  });
}
function pinOFF(){
  var pin=document.getElementById("pinselected").value;
  //toastr.info("pin: " + pin);
  socket.emit('pinOFF',pin,function(data){
    //
  });
}


socket.on('numconnections',function(data){
    document.getElementById("idNumConnections").innerHTML=data.numconnections;
});
socket.on('listPinsON',function(data){
    //mRotationR(window[data.data]);
    toastr.info("listPinsOn: " + data.listPinsON);
    document.getElementById("divlistPinsON").innerHTML=data.listPinsON;
});
socket.on('alreadyON',function(data){
    //mRotationR(window[data.data]);
    toastr.warning("pin " + data + " ja estava encès");
});
