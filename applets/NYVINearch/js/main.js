const makes = ["CHEVR","BUICK","OLDS","VOLKS"]
const counties = ['ALBANY ',
'ALLEGANY ',
'BRONX ',
'BROOME ',
'CATTARAUGUS ',
'CAYUGA ',
'CHAUTAUQUA ',
'CHEMUNG ',
'CHENANGO ',
'CLINTON ',
'COLUMBIA ',
'CORTLAND ',
'DEFUNCT COUNTIES',
'DELAWARE ',
'DUTCHESS ',
'ERIE ',
'ESSEX ',
'FRANKLIN ',
'FULTON ',
'GENESEE ',
'GREENE ',
'HAMILTON ',
'HERKIMER ',
'JEFFERSON ',
'KINGS ',
'LEWIS ',
'LIVINGSTON ',
'MADISON ',
'MONROE ',
'MONTGOMERY ',
'NASSAU ',
'NEW YORK ',
'NIAGARA ',
'ONEIDA ',
'ONONDAGA ',
'ONTARIO ',
'ORANGE ',
'ORLEANS ',
'OSWEGO ',
'OTSEGO ',
'PUTNAM ',
'QUEENS ',
'RENSSELAER ',
'RICHMOND ',
'ROCKLAND ',
'SARATOGA ',
'SCHENECTADY ',
'SCHOHARIE ',
'SCHUYLER ',
'SENECA ',
'ST. LAWRENCE ',
'STEUBEN ',
'SUFFOLK ',
'SULLIVAN ',
'TIOGA ',
'TOMPKINS ',
'ULSTER ',
'WARREN ',
'WASHINGTON ',
'WAYNE ',
'WESTCHESTER ',
'WYOMING ',
'YATES ',
]


function search(){

}
function populateLists(){

    listOption(makes,"make");  
    listOption(counties,"county");

}
function listOption(selectOption,selectId){
    selectOption.forEach(make => {
    document.getElementById(selectId).innerHTML= document.getElementById(selectId).innerHTML + "<option>"+make+"</option>";
    });
    

}

populateLists();