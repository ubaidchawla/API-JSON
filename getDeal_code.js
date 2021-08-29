
let arr_field_errors = {};
let arr_bad_input_fields = [];
let lookup_loan_code;
let lookup_date;
let dealStatus;
let currentDate;
if(bundle.inputData.loanCode){
  lookup_loan_code = bundle.inputData.loanCode;
}
if(bundle.inputData.dateSearch && !bundle.inputData.date_range){
  lookup_date = new Date(bundle.inputData.dateSearch);
  lookup_date = lookup_date.toISOString().slice(0, 10);
}

let api_url = 'https://api-velocity.newton.ca/api/forms/v1/deals';
if (bundle.authData.is_sandbox_api_key == 'No') {
} else {
  api_url = 'https://sit-api-velocity.newton.ca/api/forms/v1/deals';
}
if (bundle.inputData.dealStatus)
{
  dealStatus = bundle.inputData.dealStatus
} else {
  dealStatus = 11;
}
options = {
  url: api_url,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-API-KEY': bundle.authData.apiKey,
  },
  params: {
    'apiKey': bundle.authData.apiKey,
    'dealStatus': dealStatus,
    'dateType': bundle.inputData.dateType,
    'page':1,
  },
  body: {
    
  }
}
if(dealStatus == 11)
{
  delete options.params.dealStatus;
}

if (bundle.inputData.dateSearch)
{
  currentDate = new Date(bundle.inputData.dateSearch);
}
else {
  currentDate = new Date();
}

var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth()).padStart(2, '0'); //January is 0!
var yyyy = currentDate.getFullYear();

if(bundle.inputData.date_range)
{
  if (bundle.inputData.date_range == 1)
  {
    startDate = new Date(yyyy - 1, mm, dd+1);
    options.params.startDate =  startDate.toLocaleString();
    options.params.endDate = currentDate.toLocaleString();
  }
  else if (bundle.inputData.date_range == 2)
  {
    startDate = new Date(yyyy, mm + 6, dd);
    endDate = new Date(yyyy, mm + 6, dd);
    options.params.startDate =  startDate.toLocaleString();
    options.params.endDate = endDate.toLocaleString();
  }
  else if (bundle.inputData.date_range == 3)
  {
    endDate = new Date(yyyy + 1, mm, dd+1);
    options.params.startDate = currentDate.toLocaleString();
    options.params.endDate =  endDate.toLocaleString();
  }
  
}
else {
    startDate = new Date(yyyy - 1, mm, dd+1);
    options.params.startDate =  startDate.toLocaleString();
    options.params.endDate = currentDate.toLocaleString();
  }

// var data = new Array({'startDate':startDate,'endDate':currentDate});

return z.request(options)
  .then((response) => {
    // response.throwForStatus();
    const results = response.json;
      // final_response = new Array({'response':results});
      // return final_response;
    var result;
    var correct_record;
    var final_response;
    // if (lookup_date){
    //   for(i=0;i<['deals'].length;i++){
    //     dealDate = new Date(results['deals'][i]['dateCreated']);
    //     dealDate = dealDate.toISOString().slice(0, 10);
    //     if (dealDate == lookup_date) {
    //         correct_record  = results['deals'][i]
    //     }
    //   }
    //   if (correct_record){
    //     result = correct_record;
    //   }
    //   else{
    //     result = "Deal not found with Date : "+lookup_date;
    //   }
    //   final_response = new Array({'response':result});
    //   return final_response;
    // }
    if (lookup_loan_code){
      for(i=0;i<['deals'].length;i++){
        loan_code = results['deals'][i]['loanCode'];
        if (loan_code == lookup_loan_code) {
            correct_record  = results['deals'][i]
        }
      }
      if (correct_record){
        result = correct_record;
      }
      else{
        result = "Deal not found with loan code : "+lookup_loan_code;
      }
    final_response = new Array({'response':result});
      return final_response;
    }
    // else if (lookup_date && lookup_loan_code){
    //   for(i=0;i<['deals'].length;i++){
    //     dealDate = results['deals'][i]['dateCreated'];
    //     dealDate = dealDate.toISOString().slice(0, 10);
    //     loan_code = results['deals'][i]['loanCode'];
    //     if (dealDate == lookup_date && loan_code == lookup_loan_code) {
    //         correct_record  = results['deals'][i]
    //     }
    //   }
    //   if (correct_record){
    //     result = correct_record;
    //   }
    //   else{
    //     result = "Deal not found with Date : "+lookup_date+" and with loan code : "+lookup_loan_code;
    //   }
    //   final_response = new Array({'response':result});
    //   return final_response;
    // }
    else{
      final_response = new Array({'deal':response.deals[0]});
      return final_response;
    }
    
    
  
    
    // // You can do any parsing you need for results here before returning them
    
  });