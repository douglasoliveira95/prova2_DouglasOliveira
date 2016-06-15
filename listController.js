var listController = {
    
    init: function(params) {
        listController.setForm();
        listController.displayNames();
    },
    
    setForm: function() {
        var form = document.getElementById('list-itens'); //if error
        form.addEventListener('submit', listController.eventSubmitHandler);
    },
    
    eventSubmitHandler: function(event) {
        event.preventDefault();
        console.log("Trigged");
        var inputName = document.getElementById('name');
        listController.addName(inputName.value); //error
        inputName.value = "";
    },
    
    addName: function(name) {
        listService.addName(name);
        htmlService.displayAddedName(name);
    },
    
    displayNames: function() {
        var names = listService.getList();
        names.forEach(htmlService.displayAddedName);
    }
};
//inicialização
listController.init();