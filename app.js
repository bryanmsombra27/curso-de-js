const boton  = document.querySelector('#boton');
const contenedorTabla  = document.querySelector('#contenedor-tareas');
const input = document.querySelector('#todo');
let todos =JSON.parse(localStorage.getItem('todos')) || [];

const h1 = document.createElement('h1')

// segundo parametro una bandera para saber si el arreglo viene de localstorage 
const crearTodoEnTabla = ( tareas,storage = false) =>{
 
        console.log(tareas,"tareas");
         if(tareas.length == 0){
     h1.textContent = 'No hay tareas pendientes';
     h1.classList.add('text-center',"my-5")

     contenedorTabla.append(h1)
     return;
     }
     //renderizacion cuando hay valores en localStorage
     if(tareas.length >0 && storage) {
    tareas.forEach( todo =>{
      const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td = document.createElement("td");
        const tdActions = document.createElement("td");
        const edit = document.createElement("i");
        const progress = document.createElement("i");
        const check = document.createElement("i");
        const trash = document.createElement("i");
        
        edit.classList.add("fas","fa-edit","size","mx-3","text-info");
        progress.classList.add("fas","fa-spinner","size","text-warning");
        check.classList.add("fas","fa-check","size","text-success","mx-3");
        trash.classList.add("fas","fa-trash-alt","size","text-danger");
        
        
        tdActions.append(edit,progress,check,trash);
        

        td.textContent = todo.tarea;
        th.setAttribute("data-id",todo.id)
        th.textContent = todo.id;
        tr.append(th,td,tdActions);
        tr.classList.add("registros")
        tr.setAttribute("data-id",todo.id)
        contenedorTabla.appendChild(tr)
    })
     }else{
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td = document.createElement("td");
        const tdActions = document.createElement("td");
        const edit = document.createElement("i");
        const progress = document.createElement("i");
        const check = document.createElement("i");
        const trash = document.createElement("i");
        
        edit.classList.add("fas","fa-edit","size","mx-3","text-info");
        progress.classList.add("fas","fa-spinner","size","text-warning");
        check.classList.add("fas","fa-check","size","text-success","mx-3");
        trash.classList.add("fas","fa-trash-alt","size","text-danger");
        
        
        tdActions.append(edit,progress,check,trash);

    tareas.forEach( todo =>{

        

        td.textContent = todo.tarea;
        th.setAttribute("data-id",todo.id)
        th.textContent = todo.id;
        tr.append(th,td,tdActions);
        tr.classList.add("registros")
        tr.setAttribute("data-id",todo.id)
        contenedorTabla.appendChild(tr)
    })
    
     }
      
   
        checkEvent()
        progressEvent()
        deleteEvent()
        editEvent()


 
       
    }


const checkEvent = () =>{
    const completados = document.querySelectorAll(".fa-check");

    completados.forEach(check =>{
        check.addEventListener("click",(e)=>{
             console.log(e.target.parentElement.parentElement)
             const elementoPadre =e.target.parentElement.parentElement;
            const id =e.target.parentElement.parentElement.children[0].dataset.id;
            if(elementoPadre.classList.contains("text-warning")){
                elementoPadre.classList.remove("text-warning")
                e.target.parentElement.parentElement.children[2].children[1].classList.remove("fa-spin")

            }
            elementoPadre.classList.add("text-success")

        })
    })

}

const progressEvent = () =>{
    const completados = document.querySelectorAll(".fa-spinner");

    completados.forEach(progress =>{
        progress.addEventListener("click",(e)=>{
             console.log()
             const elementoPadre =e.target.parentElement.parentElement;
             const spinner = e.target.parentElement.parentElement.children[2].children[1];
            const id =e.target.parentElement.parentElement.children[0].dataset.id;
            elementoPadre.classList.add("text-warning")
            spinner.classList.add("fa-spin")

        })
    })

}

const editEvent = () =>{
    const editados = document.querySelectorAll(".fa-edit");

    editados.forEach(edit =>{
        edit.addEventListener("click",async(e)=>{
             const elementoPadre =e.target.parentElement.parentElement;
             console.log(elementoPadre);
             const id =e.target.parentElement.parentElement.children[0].dataset.id;

             const todo = todos.find((todo)=> todo.id == id );

            
             const {value}= await Swal.fire({
                title: 'Editar Todo',
                input: 'text',
                inputLabel: 'Modifica la  Tarea',
                    inputValue:todo.tarea,
                showCancelButton: true,
                inputValidator: (value) => {
                  if (!value) {
                    return 'No puede haber campos vacios'
                  }
                }
              })
              if(value.trim() !== '') {
                  todo.tarea = value;
              }
             elementoPadre.children[1].textContent = value
              localStorage.setItem('todos',JSON.stringify(todos))
        })
    })

}
const deleteEvent = (e) => {
    const eliminados= document.querySelectorAll(".fa-trash-alt");
    const registros = document.querySelectorAll('.registros')
    
    eliminados.forEach((eliminar,i) =>{
        eliminar.addEventListener("click",(e)=>{
            const elementoPadre =e.target.parentElement.parentElement;
            const id =e.target.parentElement.parentElement.children[0].dataset.id;
            console.log("eliminado",id)
            
            todos = todos.filter(todo => {
                console.log(todo.id)
                return +todo.id !==+id
            })
       
            
            localStorage.setItem("todos",JSON.stringify(todos));
            
            
            registros[i].remove()
            if(todos.length == 0){
                h1.textContent = 'No hay tareas pendientes';
                h1.classList.add('text-center',"my-5")
                contenedorTabla.append(h1)
            }
            console.log(todos)
            console.log(registros)

        })
    })


}
const agregarTodo = ()=>{
        
    if(input.value.trim() ==""){
            return;
        }


        const todo  = {
            tarea: input.value,
            id:Math.round(Math.random() * 10  * new Date().getMilliseconds() )
        }
        h1.remove()
       
        todos.push(todo);
        // console.log(todos.length);
        localStorage.setItem("todos",JSON.stringify(todos));
        crearTodoEnTabla(todos)
         input.value =""

}

crearTodoEnTabla(todos,true)
boton.addEventListener("click",agregarTodo)

input.addEventListener("keyup",(e) => {
    // console.log(e.key)
    if(e.key == "Enter"){
      agregarTodo()
    }
})