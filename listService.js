var listService = {
    names: [],
    
    getList: function() {
        listService.loadNames();
        return listService.names;
    },
    
    addName: function(name) {
        listService.names.push(name);
        listService.saveNames();
    },
    
    saveNames: function() {
        var namesJsonText = window.localStorage.getItem('list-itens');
        if(namesJsonText) {
            listService.names = JSON.parse(namesJsonText);
        }
    },
    
    loadNames: function() {
        var namesJsonText = JSON.stringify(listService.names);
        window.localStorage.setItem('list-itens', namesJsonText);
    }
};