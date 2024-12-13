
function resolvePromiseWithValue() {
    return new Promise((resolve, reject) => {
      const value = "Hello, World!";
      resolve(value);  
    });
  }
  
  
  resolvePromiseWithValue().then(result => {
    console.log(result);  
  }).catch(error => {
    console.log(error);
  });
  



function rejectPromiseWithError() {
    return new Promise((resolve, reject) => {
      const error = new Error("Something went wrong!");
      reject(error); 
    });
  }
  
 
  rejectPromiseWithError().then(result => {
    console.log(result);
  }).catch(error => {
    console.error(error.message);  
  });
  



function firstStep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 1 completed");
      }, 1000);
    });
  }
  
  function secondStep(previousResult) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${previousResult} -> Step 2 completed`);
      }, 1000);
    });
  }
  
  function thirdStep(previousResult) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${previousResult} -> Step 3 completed`);
      }, 1000);
    });
  }
  

  firstStep()
    .then(result => {
      console.log(result);  
      return secondStep(result);  
    })
    .then(result => {
      console.log(result);  
      return thirdStep(result);  
    })
    .then(result => {
      console.log(result); 
    }).catch(error => {
      console.error(error);
    });
  

    // Task 4: Handle Promise Rejection

function processData() {
    return new Promise((resolve, reject) => {
      const isSuccess = false;  
      if (isSuccess) {
        resolve("Data processed successfully");
      } else {
        reject(new Error("Data processing failed"));
      }
    });
  }
  
  processData()
    .then(result => {
      console.log(result);  
    })
    .catch(error => {
      console.error(error.message);  
    });
  
  // You can also handle rejection within async/await:
  async function asyncProcess() {
    try {
      const result = await processData();
      console.log(result);
    } catch (error) {
      console.error(error.message);  
    }
  }
  
  asyncProcess();
  