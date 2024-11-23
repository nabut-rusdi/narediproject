//const fs = require("fs");
//// Save network state to JSON file.
//const networkState = model_network.toJSON();
//fs.writeFileSync("model_network_state.json",  JSON.stringify(networkState), "utf-8");
//// Load the trained network data from JSON file.
//const networkState = JSON.parse(fs.readFileSync("network_state.json", "utf-8"));
//model_network.fromJSON(networkState);

// function to create a dictionary
export function build_dictionary(json_data){
	// combine string 
	var str_data = json_data.map(dataSet => { return dataSet.phrase; }).join(' ');
	// lowercase
	str_data = str_data.toLowerCase();
	// remove punctuation
	str_data = str_data.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
	// remove dupliate items
	var arr_duplicate = str_data.split(' ');    
	var str_fix = arr_duplicate.filter(function(value, index, self) { 
		return self.indexOf(value) === index;
	}).join(' ');

	return str_fix.split(' ');
}

// clean text input
export function clean_input(txt_input){
	// lowercase
	txt_input = txt_input.toLowerCase();
	// remove punctuation
	txt_input = txt_input.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
	
	return txt_input;
}

// user chat replay
export function response_user(chat, date){
	var html = "<div class='containerbot darker'> <img src='./user.jpg' alt='Avatar' class='right' style='width:100%;'> <div class='row pt-4'> <div class='col-sm-2'><span class='time-left'>"+date+"</span></div> <div class='col-sm-10 text-end'>"+chat+"</div></div></div>";
	return html;
}

// bot chat replay
export function response_bot(chat, prob, date){
	var html = "<div class='containerbot'> <img src='./bot.jpg' alt='Avatar' style='width:100%;'> <div class='row'> <div class='col-sm-8 pt-4'>"+chat+"</div> <div class='col-sm-4 pt-2'><span class='time-right'>"+prob+"%</br>"+date+"</span></div> </div> </div>";
	return html;
}

// get time date today
export function get_time() {
    const currentDateTime = new Date();
    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;

    // appending zero in the start if hours less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const month = currentDateTime.getMonth() + 1; // months are zero-based
    const day = currentDateTime.getDate();
    const year = currentDateTime.getFullYear();

    const currentDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    return `${currentDate} ${hours}:${minutes} ${ampm}`;
}