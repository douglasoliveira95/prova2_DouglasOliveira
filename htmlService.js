var htmlService = {
    
    displayAddedName: function(name) {
        var listItem = htmlService.createListItem(name);
        htmlService.addToList(listItem);
    },
    
    createListItem: function(text) {
        var listItem = document.createElement('li');
        listItem.innerHTML = text;
        return listItem;  
    },
    
    addToList: function(listItem) {
        var unOrderedList = document.getElementById('list-itens');
        unOrderedList.appendChild(listItem);
    }
};