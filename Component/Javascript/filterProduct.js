const data=['HTML','CSS','JavaScript','JQuery','JSON','React','Redux','HTML','CSS','JavaScript','JQuery','JSON','React','Redux','HTML','CSS','JavaScript','JQuery','JSON','React','Redux']

//jquery code

// function getFilterData(){
//       $('#filterContainer').text('')  
//        var serarchText= $('#searchText').val() ?? "" 
//        const filterItems=data.filter((item)=>item.includes(serarchText))   
       
//             filterItems.length ? filterItems.map((item)=>{
//                 $('#filterContainer').append(`<div class="filterdata">${item}</div>`)
//                }):$('#filterContainer').html(`<h3>No Product</h3>`)
  
// }



const getFilterData=()=>{
    var serarchText=document.getElementById('searchText').value || "";
    var filterContainer=document.getElementById('filterContainer')
    filterContainer.innerHTML=''
    const filterItems=data.filter((item)=>item.includes(serarchText))
    
    filterItems.map((item)=>{
        var filterItem = document.createElement("div")
        filterItem.setAttribute("class","filterdata")
       filterItem.innerHTML=item
       filterContainer.appendChild(filterItem);

    })

};

window.onload=function(){
    getFilterData();
}