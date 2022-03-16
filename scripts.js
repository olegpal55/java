$(document).ready(function() {
   //$("div").draggable();
   $("#el1, #el2, #el3").draggable();
   $("#el1").resizable();
   $("#sort1").sortable();
 
 $("#drop1").droppable({
        over:function(event, ui){
            ui.draggable.css("background-color","#d7fa99");
        },
        out:function(event, ui){
            ui.draggable.css("background-color","#ecbfda");
        },
        drop:function(event, ui){
            ui.draggable.css("display","none");
            $(this).css("background-color","#c4f66f");
            $(this).html("Перемещение завершено успешно.");
        }
    });
    $("#drop2").droppable({
        accept: "#el3",
        over:function(event, ui){
            ui.draggable.css("background-color","#d7fa99");
        },
        out:function(event, ui){
            ui.draggable.css("background-color","#ecbfda");
        },
        drop:function(event, ui){
            ui.draggable.css("display","none");
            $(this).css("background-color","#c4f66f");
            $(this).html("Перемещение завершено успешно.");
        }
    });
   
});