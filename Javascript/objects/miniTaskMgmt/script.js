
        let tasks = []

        function setToLocal(data = tasks){
            localStorage.setItem('b69',JSON.stringify(data))
        }
        function getFromLocal(){
            return JSON.parse(localStorage.getItem('b69'))
        }

        function renderData(data = tasks) {
            tbodyElmt = document.querySelector('#data')
            tbodyElmt.innerHTML = data.map((task, i) => `
                                        <tr>
      <th scope="row">${i+1}</th>
      <td>${task.name}</td>
      <td>${task.status}</td>
      <td>
        <button onclick='updateTask(${i})'>edit</button>
        <button id='deleteBTN' onclick='deleteTask(${i})'>delete</button>
        </td>
    </tr>
        `).join('')
        }

        function addNewTask() {
            inputElmt = document.querySelector('#inputTask')
            inputTask = inputElmt.value
            const newTask = {
                name: inputTask,
                status: 'pending',
                id: Date.now()
            }
            console.log(newTask)

            const dataFromLocal = getFromLocal()

            dataFromLocal.push(newTask)
            console.log(dataFromLocal)
            setToLocal(dataFromLocal)
            renderData(dataFromLocal)
        }

        function deleteTask(i){
            console.log('delete click')

             const dataFromLocal = getFromLocal()
             dataFromLocal.splice(i,1)
            setToLocal(dataFromLocal)
            renderData(dataFromLocal)

        }

        function updateTask(i){
            const dataFromLocal = getFromLocal()
            dataFromLocal[i].status = "Complete"
            setToLocal(dataFromLocal)
            renderData(dataFromLocal)
        }



window.addEventListener('DOMContentLoaded',()=>{
    const dataFromLocalOnLoad = getFromLocal()
    if(!dataFromLocalOnLoad){
            setToLocal()
    }
    renderData(dataFromLocalOnLoad)
        // document.querySelector('#deleteBTN').addEventListener('click', deleteTask())

})


