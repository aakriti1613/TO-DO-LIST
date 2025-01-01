

        let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu() {
            if (menuList.style.maxHeight == "0px") {
                menuList.style.maxHeight = "320px";
            }
            else {
                menuList.style.maxHeight = "0px";
            }
        }

        createHtmlfromstorage();

        function showAddTaskModal() {
            $("#addTaskModal").modal('show');
        }

        function showTaskDone() {
            $("#TaskDone").modal('show');
        }

        function showCompletedTask() {
            document.getElementById("home").style.display = "none";
            document.getElementById("comptask").style.display = "block";
            document.getElementById("delaytask").style.display = "none";
            document.getElementById("projects").style.display = "none";
        }

        function showdelayedTask() {
            document.getElementById("home").style.display = "none";
            document.getElementById("delaytask").style.display = "block";
            document.getElementById("comptask").style.display = "none";
            document.getElementById("projects").style.display = "none";
        }

        function showprojects() {
            document.getElementById("home").style.display = "none";
            document.getElementById("projects").style.display = "block";
            document.getElementById("delaytask").style.display = "none";
            document.getElementById("comptask").style.display = "none";
        }

        function showhome() {
            document.getElementById("home").style.display = "block";
            document.getElementById("comptask").style.display = "none";
            document.getElementById("delaytask").style.display = "none";
            document.getElementById("projects").style.display = "none";
        }

        function isPastDate(taskDateStr) {
            var taskDate = new Date(taskDateStr);
            var currentDate = new Date();
            if (taskDate < currentDate) {
                return true;
            } else {
                return false;
            }
        }

        function addTask() {
            var taskDescription = $('#addTaskTextArea').val().trim();
            var taskResponsiblePerson = $('#addResponsiblePerson').val().trim();
            var taskETA = $('#addETA').val();

            if (!taskDescription) {
                alert("Task description cannot be empty!");
                $("#addTaskModal").modal("show");
                return;
            }
            if (!taskResponsiblePerson) {
                alert("Responsible person cannot be empty!");
                $("#addTaskModal").modal("show");
                return;
            }
            if (!taskETA) {
                alert("Due date cannot be empty!");
                $("#addTaskModal").modal("show");
                return;
            }
            $("#addTaskModal").modal("hide");
            var dataArr = $("#taskInputForm").serializeArray();
            var taskObject = { taskId: Date.now() };
            var storageObjectArr = [];
            var storageObject = localStorage.getItem('taskstorage');

            dataArr.forEach(function (item) {
                taskObject[item.name] = item.value;
            });

            if (storageObject) {
                storageObjectArr = JSON.parse(storageObject);
            }
            storageObjectArr.push(taskObject);

            localStorage.setItem('taskstorage', JSON.stringify(storageObjectArr));

            createHtmlfromstorage();
            $("#taskInputForm").trigger('reset');
        }


        function createHtmlfromstorage() {
            var storageObject = localStorage.getItem('taskstorage');
            var storageObjectArr = storageObject ? JSON.parse(storageObject) : [];
            var taskHtml = '';
            var delayedHtml = '';

            if (storageObject != null && storageObject != undefined && storageObject != '') {
                if (storageObjectArr && storageObjectArr.length > 0) {
                    for (let i in storageObjectArr) {
                        var date = new Date(storageObjectArr[i]['taskETA']);
                        if (isPastDate(date)) {
                            var rowHtml = '<tr>'
                                + '<td><i class="fa-sharp fa-regular fa-square-check" style="color:palevioletred;" onclick="showTaskDone(), markAsDone(' + i + ')"></i></td>'
                                + '<td onclick="editTask(' + i + ')">' + storageObjectArr[i]['taskDescription'] + "</td>"
                                + '<td onclick="editTask(' + i + ')">' + storageObjectArr[i]['taskResponsiblePerson'] + "</td>"
                                + '<td style="color:red;" onclick="editTask(' + i + ')">' + date.toUTCString() + '</td>'
                                + '<td><i class="fa-solid fa-trash" style="color:palevioletred;" onclick="removetask(' + i + ')"></i></td></tr>'
                            delayedHtml += rowHtml;
                            taskHtml += rowHtml;
                        } else {
                            var rowHtml = '<tr>'
                                + '<td><i class="fa-sharp fa-regular fa-square-check" style="color:palevioletred;" onclick="showTaskDone(), markAsDone(' + i + ')"></i></td>'
                                + '<td onclick="editTask(' + i + ')">' + storageObjectArr[i]['taskDescription'] + "</td>"
                                + '<td onclick="editTask(' + i + ')">' + storageObjectArr[i]['taskResponsiblePerson'] + "</td>"
                                + '<td onclick="editTask(' + i + ')">' + date.toUTCString() + '</td>'
                                + '<td><i class=" fa-solid fa-trash" style="color:palevioletred;" onclick="removetask(' + i + ')"></i></td></tr>';
                            taskHtml += rowHtml;
                        }
                    }
                }
            }
            else {
                taskHtml = '<tr><td colspan="5">No Tasks Added yet</td></tr>';
                delayedHtml = '<tr><td colspan="5">No Delayed Tasks</td></tr>';
            }

            $("#taskTableBody").html(taskHtml);
            $("#delaytaskTableBody").html(delayedHtml);
        }

        function completedtask(index, storageObjectArr) {
            var html = '';
            if (storageObjectArr && storageObjectArr.length > 0) {
                var date = new Date(storageObjectArr[index]['taskETA'])
                html = html + '<tr>'
                    + '<td >' + storageObjectArr[index]['taskDescription'] + "</td>"
                    + '<td>' + storageObjectArr[index]['taskResponsiblePerson'] + "</td>"
                    + '<td>' + date.toUTCString() + '</td>'
                    + '<td style="color: green;">Completed</td></tr>'
            }
            else { html = '<tr><td colspan="5">No Tasks completed yet</td></tr>' }
            $("#comptaskTableBody").html(html)
        }

        function markAsDone(index) {
            var storageObjectArr = [];
            var storageObject = localStorage.getItem('taskstorage');
            if (storageObject != null && storageObject != undefined && storageObject != '') {
                storageObjectArr = JSON.parse(storageObject);
                completedtask(index, storageObjectArr)
                storageObjectArr.pop(index)
            }
            localStorage.setItem("taskstorage", JSON.stringify(storageObjectArr))
            createHtmlfromstorage()
        }

        function removetask(index) {
            var storageObjectArr = [];
            var storageObject = localStorage.getItem('taskstorage');
            if (storageObject != null && storageObject != undefined && storageObject != '') {
                storageObjectArr = JSON.parse(storageObject);
                storageObjectArr.pop(index)
            }
            localStorage.setItem("taskstorage", JSON.stringify(storageObjectArr))
            createHtmlfromstorage()
        }

        function editTask(index) {
            var storageObject = localStorage.getItem('taskstorage');
            var storageObjectArr = [];
            if (storageObject != null && storageObject != undefined && storageObject != '') {
                storageObjectArr = JSON.parse(storageObject);
                $("#editTaskTextArea").val(storageObjectArr[index]['taskDescription'])
                $("#editResponsiblePerson").val(storageObjectArr[index]['taskResponsiblePerson'])
                $("#editETA").val(storageObjectArr[index]['taskETA'])
                $("#editIndex").val(index)
                $("#updateTaskModal").modal("show")
            }
        }

        function updateTask() {
            $("#updateTaskModal").modal("hide")
            var dataArr = $("#taskupdateForm").serializeArray();
            var taskobject = new Object();
            var storageObjectArr = [];
            var storageObject = localStorage.getItem('taskstorage');
            for (var i in dataArr) {
                var name = dataArr[i]['name']
                var value = dataArr[i]['value']
                taskobject[name] = value
            }
            if (storageObject != null && storageObject != undefined && storageObject != '') {
                storageObjectArr = JSON.parse(storageObject)
                storageObjectArr[taskobject['taskIndex']] = taskobject
            }
            localStorage.setItem('taskstorage', JSON.stringify(storageObjectArr))
            createHtmlfromstorage()
        }
