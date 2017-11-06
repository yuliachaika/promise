function requestUser() {
  const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
          const user = {
            name: 'Michael',
            id: 222
          };
          if (!user) {
            return reject(new Error('Somthing wrong'))
          }
          console.log('request user', user);
          resolve(user); 

      }, 1000);
  });
  return promise;
}

function requestPayment(user) {
  const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
          const payment = {
            user: user.name,
            name: 'Privat24',
            quantity: 2000
          };
          if (!payment) {
            return reject(new Error('No payment'));
          }
          console.log('Request payment', payment);

          resolve(payment);
      }, 200);
  });

  return promise;
}

function requestCalculation(data) {
  const promise = new Promise(function(resolve, reject) {
    setTimeout( function() {
    const math = Math.round(Math.sqrt(Math.random() * data.quantity)) + 0.99;
    if (!math) {
            return reject(new Error('No payment'));
          }
            console.log('Type of payment:', data.name, ', Total', math); 
          resolve(data);
    }, 2000)
  });
  return promise;
}

requestUser()
  .then(requestPayment)
  .then(requestCalculation)
  .catch();


