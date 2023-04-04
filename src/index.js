import './style.css';


let div = document.querySelector('#content');

let bodyContainer = document.createElement('div');
bodyContainer.id = "body_container";
div.append(bodyContainer);

function sidebar(scheduled, today, week, newProject) {
    this.scheduled = scheduled;
    this.today = today;
    this.week = week;
    this.newProject = newProject;

}

function header() {
    let headerContainer = document.createElement("div");
    headerContainer.id = "header_container";
    div.append(headerContainer);

    let headerContent = document.createElement("div");
    headerContent.className = "header_item";
    headerContainer.innerText = "todo list";
    headerContainer.append(headerContent);
}

function pageSidebar () {
    let sidebarContainer = document.createElement("div")
    sidebarContainer.id = "sidebar_container";
    bodyContainer.append(sidebarContainer);

    const scheduled = document.createElement("div");
    scheduled.id = "scheduled";
    scheduled.className = "sidebar_item";
    scheduled.innerText = "scheduled";
    sidebar.scheduled = scheduled.innerText;
    console.log("sidebar item:", sidebar.scheduled);
    sidebarContainer.append(scheduled);

    const today = document.createElement("div");
    today.id = "today";
    today.className = "sidebar_item";
    today.innerText = "today";
    sidebar.today = today.innerText;
    console.log("sidebar item:", sidebar.today);
    sidebarContainer.append(today);

    const week = document.createElement("div");
    week.id = "week";
    week.className = "sidebar_item";
    week.innerText = "This week";
    sidebar.week = week.innerText;
    console.log("sidebar item:", sidebar.week);
    sidebarContainer.append(week);   
    
    let sidebarNewProject = document.createElement("div");
    sidebarNewProject.id = "week";
    sidebarNewProject.className = "sidebar_item";
    sidebarNewProject.innerText = "New project";
    sidebar.sidebarNewProject = sidebarNewProject.innerText;
    console.log("sidebar item:", sidebar.newProject);
    sidebarContainer.append(sidebarNewProject);    
    
    sidebarNewProject.addEventListener('click', function(e){
        let projectInput = document.createElement("input");
        sidebarContainer.append(projectInput);

        let projectButton = document.createElement("button");
        projectButton.innerHTML = "confirm";
        sidebarContainer.append(projectButton);    


        projectButton.addEventListener('click', function(e){
            let customProject = document.createElement('div');
            sidebarContainer.append(customProject);
            customProject.innerText = projectInput.value;
            sidebar.newProject = customProject.innerText;
            console.log("new project:",sidebar.newProject);
            console.log("hey");

            if (projectButton.parentNode)
            projectButton.parentNode.removeChild(projectButton);

            if (projectInput.parentNode)
            projectInput.parentNode.removeChild(projectInput);                
        })
    })
}


header();
pageSidebar();
