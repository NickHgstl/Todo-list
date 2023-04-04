import './style.css';


let div = document.querySelector('#content');




function header() {
    let headerContainer = document.createElement("div");
    headerContainer.id = "header_container";
    div.append(headerContainer);

    let headerContent = document.createElement("div");
    headerContent.className = "header_item";
    headerContainer.innerText = "todo list";
    headerContainer.append(headerContent);
}

header();

let bodyContainer = document.createElement('div');
bodyContainer.id = "body_container";
div.append(bodyContainer);



function sidebar(scheduled, today, week, newProject) {
    this.scheduled = scheduled;
    this.today = today;
    this.week = week;
    this.newProject = newProject;
}

function userTask(task) {
    this.task = task;
}



function pageSidebar () {

    const sidebarBackground = document.createElement("div");
    sidebarBackground.id = "sidebar_background";
    bodyContainer.append(sidebarBackground);

    let sidebarContainer = document.createElement("div")
    sidebarContainer.id = "sidebar_container";
    bodyContainer.append(sidebarContainer);

    const scheduled = document.createElement("div");
    scheduled.id = "sidebar_scheduled";
    scheduled.className = "sidebar_item";
    scheduled.innerText = "scheduled";
    sidebar.scheduled = scheduled.innerText;
    console.log("sidebar item:", sidebar.scheduled);
    sidebarContainer.append(scheduled);

    const today = document.createElement("div");
    today.id = "sidebar_today";
    today.className = "sidebar_item";
    today.innerText = "today";
    sidebar.today = today.innerText;
    console.log("sidebar item:", sidebar.today);
    sidebarContainer.append(today);

    const week = document.createElement("div");
    week.id = "sidebar_week";
    week.className = "sidebar_item";
    week.innerText = "This week";
    sidebar.week = week.innerText;
    console.log("sidebar item:", sidebar.week);
    sidebarContainer.append(week);   
    
    let sidebarNewProject = document.createElement("div");
    sidebarNewProject.id = "sidebar_new_project";
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
            customProject.className = "sidebar_item";
            customProject.id = "custom_project";
            customProject.innerText = projectInput.value;
            sidebarContainer.append(customProject);
            sidebar.newProject = customProject.innerText;
            console.log("new project:",sidebar.newProject);

            customProject.addEventListener('click', function(e){
                const currentTabHeader = document.createElement("h1");
                currentTabHeader.id = "current_tab_header";
                currentTabHeader.innerText = this.innerText;
                maintodoContainer.append(currentTabHeader);
            })


            if (projectButton.parentNode)
            projectButton.parentNode.removeChild(projectButton);

            if (projectInput.parentNode)
            projectInput.parentNode.removeChild(projectInput);
            
              
        })
    })

    
}

const maintodoContainer = document.createElement("div");
maintodoContainer.id = "maintodo_container";
bodyContainer.append(maintodoContainer);
function mainContent(){
    const sidebarItems = document.getElementsByClassName("sidebar_item");
    var i = 0;
    for(i = 0; i < sidebarItems.length; i++) {
        sidebarItems[i].addEventListener('click', function(e){
            const currentTabHeader = document.createElement("h1");
            currentTabHeader.id = "current_tab_header";
            currentTabHeader.className = "maintodo_item";
            currentTabHeader.innerText = this.innerText;
            maintodoContainer.append(currentTabHeader);

            const currentTabTask = document.createElement("div");
            currentTabTask.id = "user_task";
            currentTabTask.className = "maintodo_item"
            currentTabTask.innerText = "Add new task";
            maintodoContainer.append(currentTabTask);
            

        currentTabTask.addEventListener('click', (function (e){
            const modal = document.createElement("div");
            modal.className = "task_modal";
            modal.id = "myModel"
            div.append(modal);
            
            const modalContent = document.createElement("div");
            modalContent.className = "modal_content";
            modal.append(modalContent);

            const exitButton = document.createElement("span");
            exitButton.className = "close";
            modalContent.append(exitButton);
            exitButton.innerHTML = "&times;";

            const modalText = document.createElement("div")
            modalText.innerText = "some text";
            modalContent.append(modalText);

            modal.style.display = "block"

            exitButton.addEventListener('click', function(e){
                modal.style.display = "none";cf
            })

        }))
        })

    }
}




function todayTab() {
    const tabHeader = document.createElement("h1");
    tabHeader.id = "tab_header"
    console.log(document.getElementById("sidebar_item"))
    bodyContainer.append(tabHeader);
}

pageSidebar();
mainContent();
