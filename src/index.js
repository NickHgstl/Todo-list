import './style.css';


let div = document.querySelector('#content');

let bodyContainer = document.createElement('div');
bodyContainer.id = "body_container";
div.append(bodyContainer);

function sidebar(scheduled, today, week) {
    this.scheduled = scheduled;
    this.today = today;
    this.week = week;
}

function pageSidebar () {
    let sidebarContainer = document.createElement("div")
    sidebarContainer.id = "sidebar_container";
    bodyContainer.append(sidebarContainer);

    sidebar.scheduled = document.createElement("div");
    sidebar.scheduled.id = "scheduled";
    sidebar.scheduled.className = "sidebar_item";
    sidebar.scheduled.innerText = "scheduled";
    sidebarContainer.append(sidebar.scheduled);

    sidebar.today = document.createElement("div");
    sidebar.today.id = "today";
    sidebar.today.className = "sidebar_item";
    sidebar.today.innerText = "today";
    sidebarContainer.append(sidebar.today);
    

    
}
pageSidebar();