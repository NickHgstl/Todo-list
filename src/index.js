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

    sidebar.week = document.createElement("div");
    sidebar.week.id = "week";
    sidebar.week.className = "sidebar_item";
    sidebar.week.innerText = "This week";
    sidebarContainer.append(sidebar.week);   
    
    let sidebarNewProject = document.createElement("div");
    sidebarNewProject.id = "week";
    sidebarNewProject.className = "sidebar_item";
    sidebarNewProject.innerText = "New project";
    sidebarContainer.append(sidebarNewProject);
    
    
    sidebarNewProject.addEventListener('click', function(e){
            addCustonProject();


        }
    )
    function addCustonProject() {
            let projectInput = document.createElement("input");
            sidebarContainer.append(projectInput);

            let projectButton = document.createElement("button");
            projectButton.innerHTML = "confirm";
            sidebarContainer.append(projectButton);


            projectButton.addEventListener('click', function(e){
                let customProject = document.createElement('div');
                sidebarContainer.append(customProject);
                customProject.innerText = projectInput.value;
                console.log("hey");

                if (projectButton.parentNode)
                projectButton.parentNode.removeChild(projectButton);

                if (projectInput.parentNode)
                projectInput.parentNode.removeChild(projectInput);


                
            })

        }
    
}

header();
pageSidebar();
