var w = 500,
	h = 500;



function get_player_id(player_name){
    let player_names = players.player_name
    let player_idx = Object.keys(player_names).find(key => player_names[key] === player_name)
    let player_api_id = players.player_api_id[player_idx]
    return player_api_id
}

function get_player_name(player_id){
    player_api_id = parseInt(player_id)
    let player_ids = players.player_api_id
    let player_idx = Object.keys(player_ids).find(key => player_ids[key] === player_api_id)

    let player_name= players.player_name[player_idx]
    return player_name
}
function add_to_radar(player_api_id){
    //update radar
    player_api_id = parseInt(player_api_id)
    let player_attr = []
    let player_attr_idx = Object.keys(attributes.player_api_id).find(key => attributes.player_api_id[key] === player_api_id)
    
    for(let i =0;i< labels.length;i++){
        let label = labels_printed[i]
        attr_value = attributes[labels[i]][player_attr_idx]/100
        player_attr.push({axis:label,value:attr_value})
    }
    data[player_api_id] = player_attr;
    return player_attr
}

function add_to_legend(player_api_id){
    //update legend
    player_api_id = parseInt(player_api_id)
    name = get_player_name(player_api_id)
    names.push(name)
    return name
}

function remove_from_radar(player_api_id){
    //remove element from radar
    player_api_id = parseInt(player_api_id)
    delete data[player_api_id]
    return
}

function remove_from_legend(player_api_id){
    //remove element from legend
    player_api_id = parseInt(player_api_id)
    player_name = get_player_name(player_api_id)
    names = names.filter(name => name !== player_name);
    return
}

function toggleCheck(id){
    //input.checked = !input.checked
    let checkbox = document.getElementById(id);
    checkbox.click()
    if(checkbox.checked == false){
        remove_from_radar(id)
        remove_from_legend(id)
    }
    else if(checkbox.checked == true){
        add_to_radar(id)
        add_to_legend(id)
    }
    return
}
//Legend titles
//var LegendOptions = ['Smartphone','Tablet'];

labels = ['crossing', 'finishing', 'heading_accuracy',
       'short_passing', 'volleys', 'dribbling', 'curve', 
       'long_passing', 'ball_control', 'acceleration', 'sprint_speed',
       'agility', 'reactions', 'balance', 'shot_power', 'jumping', 'stamina',
       'strength', 'long_shots', 'aggression', 'interceptions', 'positioning',
       'vision', 'penalties', 'marking','free_kick_accuracy', 'standing_tackle', 'sliding_tackle']

labels_printed = ['Crossing', 'Finishing', 'Heading Accuracy',
       'Short Passing', 'Volleys', 'Dribbling', 'Curve',    
       'Long Passing', 'Ball Control', 'Acceleration', 'Sprint Speed',
       'Agility', 'Reactions', 'Balance', 'Shot Power', 'Jumping', 'Stamina',
       'Strength', 'Long Shots', 'Aggression', 'Interceptions', 'Positioning',
       'Vision','Penalties', 'Marking','Free Kick Accuracy', 'Standing Tackle', 'Sliding Tackle']

names = ['Lionel Messi', 'Aaron Cresswell']

//create list of names 
let playerNames = Object.values(players.player_name);
let playerList = document.getElementById('playerList');
for(let i=0;i<playerNames.length;i++){
    //add player names to list
    let entry = document.createElement('li');
    let container = document.createElement('label');
    container.setAttribute("class", "container")
    container.appendChild(document.createTextNode(playerNames[i]));
    //create checkboxes for each player
    let player_api_id = get_player_id(playerNames[i])
    let player_name = get_player_name(player_api_id)
    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    if(names.includes(player_name)){
        input.checked = true
    }else{
        input.checked = false;
    }
    //add interactiveness
    input.id = player_api_id;
    input.onclick= function() {
        toggleCheck(input.id);
    }
    container.appendChild(input);
    let checkmark = document.createElement('span');
    checkmark.setAttribute("class", "checkmark");
    container.appendChild(checkmark);
    entry.appendChild(container)
    playerList.appendChild(entry);
}
var data = {}

for(let i =0;i< names.length;i++){
    let id = get_player_id(names[i])
    add_to_radar(id)   
}
//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1.0,
  levels: 5,
  ExtraWidthX: 300
}
//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", data, mycfg);
RadarChart.legend(names);
////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

//does the update by removing svg with remove() and redrawing svg with enter() in draw() and legend()
function update(){
    d3.select("#chart svg").remove();
    d3.select("#body svg").remove();
    RadarChart.draw("#chart", data, mycfg);
    RadarChart.legend(names);
}
d3.selectAll("input").on("click",update);