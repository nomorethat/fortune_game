$(document).ready(function(){
	$("#select_banknote").bind("change", select_banknote);
	
	function select_banknote(){
		var banknote = $("#select_banknote").val();
		$("#select_banknote").css("border", "2px dotted #f00");
		$("#select_banknote").attr("disabled", "true");
		$("#message_to_user").text("Вы внесли " + banknote + "$");
		$("#cash").text(banknote + "$");
		$("#button_go").get(0).className = "controls_in_game";
		$("#new_game").get(0).className = "controls_in_game";
		$("#get_money").get(0).className = "controls_in_game";
		$("#button_go").bind("click", button_go);
		$("#get_money").bind("click", get_money);
	}
	
	
	function button_go(){
		var first_number = Math.random()*8;
		first_number = Number(first_number.toFixed(0));
		var second_number = Math.random()*8;
		second_number = Number(second_number.toFixed(0));
		var third_number = Math.random()*8;
		third_number = Number(third_number.toFixed(0));
		
		$("#first_point").text(first_number);
		$("#second_point").text(second_number);
		$("#third_point").text(third_number);
		
		if((first_number == second_number) && (second_number == third_number) && (first_number == third_number)){
			if((first_number == 7) && (second_number == 7) && (third_number == 7)){
				$("#message_to_user").text("Jack Pot!!! +" + 1000 + "$");
				var cash = $("#cash").text();
				cash = Number(cash.slice(0, length - 1));
				cash = cash + 1000;
				$("#cash").text(cash + "$");
			}
			if((first_number == 3) && (second_number == 3) && (third_number == 3)){
				$("#message_to_user").text("Cherry Boom!!! +" + 500 + "$");
				var cash = $("#cash").text();
				cash = Number(cash.slice(0, length - 1));
				cash = cash + 500;
				$("#cash").text(cash + "$");
			}
			if(!((first_number == 7) && (second_number == 7) && (third_number == 7)) && !((first_number == 3) && (second_number == 3) && (third_number == 3))){
				$("#message_to_user").text("You win!!! +" + 100 + "$");
				var cash = $("#cash").text();
				cash = Number(cash.slice(0, length - 1));
				cash = cash + 100;
				$("#cash").text(cash + "$");
			}
		}
		else{
			$("#message_to_user").text("You lose!!! -" + 5 + "$");
			var cash = $("#cash").text();
			cash = Number(cash.slice(0, length - 1));
			cash = cash - 5;
			$("#cash").text(cash + "$");
			if(cash == 0){
				$("#message_to_user").text("Game over!!!");
				$("#button_go").get(0).className = "controls_out_game";
				$("#button_go").unbind();
			}
		}
	}
	
	$("#new_game").bind("click", new_game);
	
	function new_game(){
		$("#select_banknote").css("border", "2px dotted #0f0");
		$("#select_banknote").get(0).disabled = false;
		$("#first_point").text("-");
		$("#second_point").text("-");
		$("#third_point").text("-");
		$("#cash").text("---");
		$("#message_to_user").text("---");
		$("#button_go").unbind();
		$("#button_go").get(0).className = "controls_out_game";
		$("#new_game").get(0).className = "controls_out_game";
		$("#get_money").unbind();
		$("#get_money").get(0).className = "controls_out_game";
	}
	
	function get_money(){
		$("#button_go").get(0).className = "controls_out_game";
		$("#button_go").unbind();
		$("#message_to_user").text("ОБНАЛИЧЕНО!!!");
		$("#get_money").bind("click", get_money);
		$("#get_money").get(0).className = "controls_out_game";
	}
	
});