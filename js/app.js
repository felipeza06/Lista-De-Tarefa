const form = document.getElementById("taskForm")
const input = document.getElementById("input")
const list = document.getElementById("list")
const taskInfo_area = document.getElementById("taskArea_info")
const task_count = document.getElementById("taskTitle_decoration1")
const task_done_count = document.getElementById("taskTitle_decoration2")


form.onsubmit = (event) => {
    event.preventDefault()
    if (input.value.trim() === "") return
    taskInfo_area.remove()
    taskAdd()
}

function taskAdd() {
    const taskIcon = document.createElement("img")
    taskIcon.setAttribute("src", `img/CircleRegular.svg`)

    const taskName = document.createElement("h3")
    taskName.textContent = input.value

    const trashIcon = document.createElement("img")
    trashIcon.setAttribute("src", `img/Delete.svg`)

    const taskList = document.createElement("li")
    taskList.classList.add("taskList")

    taskList.append(taskIcon, taskName, trashIcon)
    list.append(taskList)

    taskTotals()
    input.value = ""
}

function taskTotals(){
    const listCount = list.children
    task_count.textContent = listCount.length

    const completedTasks = document.querySelectorAll(".taskList_done").length
    task_done_count.textContent = completedTasks
}

list.addEventListener("click", function (event) {
    
    if (event.target.tagName === 'IMG' && event.target.src.includes('CircleRegular')) {
        const item = event.target.closest("li")
        
        if (item) {
            item.classList.remove("taskList")
            item.classList.add("taskList_done")

            event.target.setAttribute("src", `img/CheckCircleFill.svg`)

            taskTotals()
        }
    }

    if (event.target.tagName === 'IMG' && event.target.src.includes('Delete')) {
        const item = event.target.closest("li")
        if (item) {
            item.remove()
            taskTotals()
        }
    }
})



