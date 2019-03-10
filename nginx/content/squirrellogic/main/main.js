class Clickers {
  //* shared functions
  updateScore(moarPoints) {
    Clicker.score += moarPoints;
  }
}

class SelfClicker extends Clickers {
  constructor() {
    currentPoints;
    totalPoints;
    totalClicks;
  }
}

class AutoClicker extends Clickers {
  constructor(mod, resume) {
    if (!resume) resume = {};
    super();
    this.price = resume.price || Math.ceil(20 * mod.price);
    this.payout = resume.payout || Math.floor(1 * mod.payout);
    this.time = resume.time || Math.ceil(1 * mod.time) * 1000;
    this.count = resume.count || 0;
    this.running = resume.running || false;
    this.points = document.getElementById("points").firstChild;
  }

  static setRates(startMods) {
    if (!startMods) {
      AutoClicker.modifiers = {};
      AutoClicker.modifiers.price = 1;
      AutoClicker.modifiers.payout = 1;
      AutoClicker.modifiers.time = 1;
    } else {
      AutoClicker.modifiers = startMods;
    }
  }

  static updateRates() {
    AutoClicker.modifiers.price *= 1.6;
    AutoClicker.modifiers.payout *= 2.2;
    AutoClicker.modifiers.time *= 1.5;
  }

  startClicker() {
    let self = this;
    self.running = true;
    setInterval(function() {
      self.points.nodeValue =
        parseInt(self.points.nodeValue) + self.payout * self.count;
    }, self.time);
  }

  buyClicker() {
    let workingPoints = parseInt(this.points.nodeValue);
    console.log("avail:", workingPoints);
    console.log("cost:", this.price);
    console.log("pays:", this.payout);
    if (workingPoints >= this.price) {
      this.points.nodeValue = workingPoints - this.price;
      this.count++;
      this.price = Math.ceil(this.price * 1.25);
      if (!this.running) {
        this.startClicker();
      }
    }
  }

  buyClickers() {
    let workingPoints = parseInt(this.points.nodeValue);
    let workingCost = Math.ceil(this.price * (1 + 0.25) ** 10);
    console.log("avail:", workingPoints);
    console.log("cost:", workingCost);
    console.log("pays:", this.payout);
    if (workingPoints >= workingCost) {
      this.points.nodeValue = workingPoints - workingCost;
      this.count += 10;
      this.price = Math.ceil(this.price * (1 + 0.25) ** 11);
      if (!this.running) {
        this.startClicker();
      }
    }
  }

  //TODO finish this, find some math >_<

  buyMaxClickers() {
    let workingPoints = parseInt(this.points.nodeValue);
    let workingCost = Math.ceil(this.price * (1 + 0.25) ** 10);
    console.log("avail:", workingPoints);
    console.log("cost:", workingCost);
    console.log("pays:", this.payout);
    if (workingPoints >= workingCost) {
      this.points.nodeValue = workingPoints - workingCost;
      this.count += 10;
      this.price = Math.ceil(this.price * (1 + 0.25) ** 11);
      if (!this.running) {
        this.startClicker();
      }
    }
  }
}

//* load page

onload = () => {
  // console.log("width",window.innerWidth)
  // console.log("height",window.innerHeight)
  const master = {};
  const rebuild = JSON.parse(localStorage.getItem("clickers")) || {};
  AutoClicker.setRates();
  //document.getElementById('temp').innerHTML = localStorage.getItem("clickers");
  //* build playing field
  populateField(rebuild, master);

  //* autosave
  // setInterval(function() {
  // 	localStorage.setItem("clickers", master)
  // }, 5000);

  document.getElementById("gamespace").addEventListener("click", function(e) {
    //* set up working vars
    let workingid = e.target.parentElement.id;
    let clickedclass = e.target.className;

    if (clickedclass == "addauto") {
      let id = Date.now();
      document.getElementById("gamespace").appendChild(buildClicker(id));
      console.log(id);
      master[id] = new AutoClicker(AutoClicker.modifiers);
      AutoClicker.updateRates();
			// console.log(master);
			document.getElementById(id).children[0].innerHTML = "&\uF609";
    }

    if (clickedclass == "clicker") {
      let pointnode = document.getElementById("points").firstChild;
      pointnode.nodeValue = parseInt(pointnode.nodeValue) + 1;
    }

    if (clickedclass.indexOf("buyClicker") >= 0) {
      console.log(workingid);
      master[workingid].buyClicker();
    }
    if (clickedclass.indexOf("buy10Clickers") >= 0) {
      master[workingid].buyClickers();
    }
    if (clickedclass.indexOf("test") >= 0) {
      saveData(master);
    }
  });
};

//* functions

const saveData = data => {
  localStorage.setItem("clickers", JSON.stringify(data));
};

const buildChild = (bit1, bit2) => {
  let working = document
    .createElement("div")
    .appendChild(document.createTextNode(bit2))
    .getRootNode();
  working.className = bit1;
  return working;
};

const buildClicker = elId => {
  let newEl = document
    .createElement("div")
    .appendChild(buildChild("title", ""))
    .getRootNode()
    .appendChild(buildChild("buy buyClicker", "buy 1 clicker"))
    .getRootNode()
    .appendChild(buildChild("buy buy10Clickers", "buy 10 clickers"))
    .getRootNode()
    .appendChild(buildChild("buy buyMaxClickers", "disabled"))
    .getRootNode();
  newEl.id = elId;
  newEl.className = "autoClicker";
  return newEl;
};

const populateField = (allClickers, masterRef) => {
  Object.keys(allClickers).forEach(key => {
    console.log(allClickers);
    console.log(allClickers[key]);
    document.getElementById("gamespace").appendChild(buildClicker(key));
    masterRef[key] = new AutoClicker(AutoClicker.modifiers, allClickers[key]);
  });
};
