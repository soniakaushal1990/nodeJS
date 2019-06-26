var object ={
    "_id" : "5c1a268be880f7b51b7d86bd",
    "user_id" :4283825,
    "project_id" : 350448,
    "timestamp" : 1545217675,
    "access_level" :102,
    "role_id" : 102,
    "company" : "Performance Systems Integration",
    "user_type" : "External",
    "permissions" : [ 
        {
            "feature" : "RFI",
            "access_value" : 20

        }, 
        {
            "feature" : "OBSERVATIONS",
            "access_value" : 20
        }, 
        {
            "feature" : "SUBMITTALS",
            "access_value" : 50
        }, 
        {
            "feature" : "SAFETY",
            "access_value" : 0
        }, 
        {
            "feature" : "WORKFLOW",
            "access_value" : 0
        }, 
        {
            "feature" : "INSPECTIONS",
            "access_value" : 20
        }, 
        {
            "feature" : "DOCUMENTS",
            "access_value" : 20
        }, 
        {
            "feature" : "DRAWINGS",
            "access_value" : 20
        }, 
        {
            "feature" : "PHOTOS",
            "access_value" : 10
        }, 
        {
            "feature" : "SPECIFICATIONS",
            "access_value" : 10
        }, 
        {
            "feature" : "DAILYLOG",
            "access_value" : 0
        }, 
        {
            "feature" : "SCOPE_MASTER",
            "access_value" : 0
        }, 
        {
            "feature" : "BUDGET",
            "access_value" : 0
        }, 
        {
            "feature" : "PRIME_CONTRACT_GENERAL",
            "access_value" : 0
        }, 
        {
            "feature" : "PRIME_CONTRACT_SOV",
            "access_value" : 0
        }, 
        {
            "feature" : "SUB_CONTRACT_GENERAL",
            "access_value" : 10
        }, 
        {
            "feature" : "SUBCONTRACT_SOV",
            "access_value" : 10
        }, 
        {
            "feature" : "PCCO",
            "access_value" : 0
        }, 
        {
            "feature" : "CCO",
            "access_value" : 20
        }, 
        {
            "feature" : "PAY_APP_IN",
            "access_value" : 0
        }, 
        {
            "feature" : "PAY_APP_OUT",
            "access_value" : 50
        }, 
        {
            "feature" : "GANTT",
            "access_value" : 0
        }, 
        {
            "feature" : "CALENDAR",
            "access_value" : 0
        }, 
        {
            "feature" : "TASKBOARD",
            "access_value" : 0
        }, 
        {
            "feature" : "SCHEDULE_UPDATE_REQUEST",
            "access_value" : 0
        }, 
        {
            "feature" : "MATERIAL_MASTER",
            "access_value" : 0
        }, 
        {
            "feature" : "PROJECT_BOM",
            "access_value" : 0
        }, 
        {
            "feature" : "DASHBOARD",
            "access_value" : 0
        }
    ]
}

//console.log(permissions("1",'OBSERVATIONS'));


    var permissions =  object.permissions;
   for(let i=0;i<permissions.length;i++){
       if(permissions[i]['feature'] == 'OBSERVATIONS'){
           console.log("Found");
       }
   }

   function permissions(project_id,feature){
       
   }
 
