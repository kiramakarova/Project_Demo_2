var data = {
    playerParty: {
        characters: [
            {
                name: "My Shit 1",
                hp: 30,
                maxHP: 100,
                battleOptions: [
                    "Die, bich",
                    "Heal",
                    "Neutral"
                ]
            },
            {
                name: "My Shit 2",
                hp: 100,
                maxHP: 100,
                battleOptions: [
                    "Die, bich",
                    "Heal",
                    "Neutral"
                ]
            },
            {
                name: "My Shit 3",
                hp: 0,
                maxHP: 100,
                battleOptions: [
                    "Die, bich",
                    "Heal",
                    "Neutral"

                ]
            },
            {
                name: "My Shit 4",
                hp: 15,
                maxHP: 100,
                battleOptions: [
                    "Die, bich",
                    "Heal",
                    "Neutral"

                ]
            }
        ]
    },
    enemyParty: {
        characters: [
            {
                name: "Enemy 1",
                hp: 20,
                maxHP: 100,
                battleOptions: [
                    "physicalAttack"
                ]
            },
            {
                name: "Enemy 2",
                hp: 5,
                maxHP: 100,
                battleOptions: [
                    "physicalAttack"
                ]
            },
            {
                name: "Enemy 3",
                hp: 8,
                maxHP: 100,
                battleOptions: [
                    "physicalAttack"
                ]
            },
            {
                name: "Enemy 4",
                hp: 0,
                maxHP: 100,
                battleOptions: [
                    "physicalAttack"
                ]
            }
        ]
    }
};

function twoParties() {

    var i = 1;
    var buttonList = [];

    for (member in data["playerParty"]["characters"]) {
        
        if (data["playerParty"]["characters"][member]["hp"] <= 0) {
            var img = new Image();
            img.src = "images/DeadShit.png";
        }
        else {
            var img = new Image();
            img.src = "images/MyCharacter.jpg";
            img.setAttribute("id", "charImg" + data["playerParty"]["characters"][member]["name"]);
        }
        document.getElementById("MyParty").appendChild(img);

        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div"); 

        if (data["playerParty"]["characters"][member]["hp"] > 0) {
            var button = document.createElement("button"); 
            button.innerHTML = data["playerParty"]["characters"][member]["name"];  
            button.setAttribute("id",i);  
            buttonList.push(i);
            button.onclick = function() {
                nameC = data["playerParty"]["characters"][parseInt(this.id)-1]["name"];
                takeTurn(parseInt(this.id)-1, nameC);
                for (button in buttonList) {
                    document.getElementById(buttonList[button]).remove();
                }
                console.log(nameC);
            }
            div4.appendChild(button);  
        }
        var name = document.createTextNode(data["playerParty"]["characters"][member]["name"]);
        var hp = document.createTextNode(data["playerParty"]["characters"][member]["hp"]+"/"+data["playerParty"]["characters"][member]["maxHP"]);
        div.appendChild(img);
        document.getElementById("MyParty").appendChild(div);
        div2.appendChild(name);
        document.getElementById("MyParty").appendChild(div2);
        div3.appendChild(hp);
        document.getElementById("MyParty").appendChild(div3);
        document.getElementById("MyParty").appendChild(div4); 
        i++;
    };

    for (member in data["enemyParty"]["characters"]) {

        if (data["enemyParty"]["characters"][member]["hp"] <= 0) {
            var img = new Image();
            img.src = "images/DeadBug.jpg";
        }
        else {
            var img = new Image();
            img.src = "images/Enemy.jpg";
            img.setAttribute("id", "enemyImg" + data["enemyParty"]["characters"][member]["name"]);
        }
        document.getElementById("EnemyParty").appendChild(img);

        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        // div4.setAttribute("id", "enemyButton" + data["enemyParty"]["characters"][member]["name"]);
        var name = document.createTextNode(data["enemyParty"]["characters"][member]["name"]);
        var hpE = document.createTextNode(data["enemyParty"]["characters"][member]["hp"]);
        // hpE.setAttribute("id", "enemyHp" + data["enemyParty"]["characters"][member]["hp"]);
        var maxhp = document.createTextNode("/"+data["enemyParty"]["characters"][member]["maxHP"]);
        div.appendChild(img);
        document.getElementById("EnemyParty").appendChild(div);
        div2.appendChild(name);
        document.getElementById("EnemyParty").appendChild(div2);
        div3.appendChild(hpE);
        div3.appendChild(maxhp);
        document.getElementById("EnemyParty").appendChild(div3);
        document.getElementById("EnemyParty").appendChild(div4);
    }
    
};

function takeTurn(member, nameC) {
    
    var i = 1;
    var buttonListD = [];

        for (option in data["playerParty"]["characters"][member]["battleOptions"]) {
            var div = document.createElement("div");
            var buttonD = document.createElement("button"); 
            buttonD.innerHTML = data["playerParty"]["characters"][member]["battleOptions"][option]; 
            buttonD.setAttribute("id", i);
            buttonListD.push(i);
            buttonD.onclick = function() {
                var amount = 0;
                bOption = data["playerParty"]["characters"][member]["battleOptions"][parseInt(this.id)-1];
                if (data["playerParty"]["characters"][member]["battleOptions"][parseInt(this.id)-1] == "Die, bich") {
                    amount = -15;
                }
                else if (data["playerParty"]["characters"][member]["battleOptions"][parseInt(this.id)-1] == "Heal") {
                    amount = 10;
                }
                else if (data["playerParty"]["characters"][member]["battleOptions"][parseInt(this.id)-1] == "Neutral") {
                    amount = 0;
                }
                attackEnemy(nameC, amount);
                console.log(bOption);
                console.log(amount);
                for (buttonD in buttonListD) {
                document.getElementById(buttonListD[buttonD]).remove();
                }
            }
            div.appendChild(buttonD);
            document.getElementById("MyParty").appendChild(div);
            i++;
        }
};

function attackEnemy(nameC, amount) {

    var i = 1;
    var buttonListE = [];

    for (member in data["enemyParty"]["characters"]) {
        if (data["enemyParty"]["characters"][member]["hp"] > 0) {
            var div = document.createElement("div");
            var buttonE = document.createElement("button"); 
            buttonE.innerHTML = data["enemyParty"]["characters"][member]["name"];  
            buttonE.setAttribute("id",i);  
            buttonListE.push(i);
            buttonE.onclick = function() {
                var hpE = data["enemyParty"]["characters"][parseInt(this.id)-1]["hp"];
                nameE = data["enemyParty"]["characters"][parseInt(this.id)-1]["name"];
                if (data["enemyParty"]["characters"][parseInt(this.id)-1]["battleOptions"] = "Enemy 1") {
                    hpE = hpE + amount;
                }
                else if (data["enemyParty"]["characters"][parseInt(this.id)-1]["battleOptions"] = "Enemy 2") {
                    hpE = hpE + amount;
                }
                else if (data["enemyParty"]["characters"][parseInt(this.id)-1]["battleOptions"] = "Enemy 3") {
                    hpE = hpE + amount;
                }
                else if (data["enemyParty"]["characters"][parseInt(this.id)-1]["battleOptions"] = "Enemy 4") {
                    hpE = hpE + amount;
                }
                for (buttonE in buttonListE) {
                    document.getElementById(buttonListE[buttonE]).remove();
                }
                animate(nameC, nameE, amount);
                console.log(nameE);
                console.log(hpE);
            }
            div.appendChild(buttonE);
            document.getElementById("EnemyParty").appendChild(div);
            i++;

        }
    }
};

function animate(nameC, nameE, amount) {

    if (amount < 0) {
        var imgC = document.getElementById("charImg" + nameC).src = "images/ShitDamage.jpg";
        // hpE = document.getElementById("enemyHp" + nameE).innerHTML = "hpE" + amount;
        var imgE = document.getElementById("enemyImg" + nameE).src = "images/EnemyDanage.jpg";
        // if (hpE <= 0) {
        //     var imgE = document.getElementById("enemyImg" + nameE).src = "images/DeadBug.jpg";
        // }
    }
    else if (amount > 0) {
        var imgC = document.getElementById("charImg" + nameC).src = "images/ShitHeal.jpg";
        var imgE = document.getElementById("enemyImg" + nameE).src = "images/EnemyHeal.jpg";
    }
    else if (amount == 0) {
        var imgC = document.getElementById("charImg" + nameC).src = "images/ShitNeutral.jpg";
        var imgE = document.getElementById("enemyImg" + nameE).src = "images/EnemyNeutral.jpg";
    }
};

